import MindElixir,{ E } from "mind-elixir"
import React, {useEffect, useState} from "react";




const MindMapPage = props => {
  const [map, setMap] = useState(null);
  const [textFieldVisible, setTextFieldVisible] = useState(false);
  const [root] = useState(MindElixir.new("Mind Map"));
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setMap(new MindElixir({
      el: "#map",
      direction: MindElixir.RIGHT,
      data: root,
      draggable: true, // default true
      contextMenu: true, // default true
      toolBar: true, // default true
      nodeMenu: true, // default true
      keypress: true, // default true
      editable: true
    }));
  }, [root]);

  function buildTree(data) {
    if (!data?.length) {
      return;
    }

    function compareObjects(obj1, obj2) {
      if (!obj1 || !obj2) {
        return false;
      }
      return JSON.stringify(obj1) === JSON.stringify(obj2);
    }

    function addChild(r, child, options = {nodeType: null, ignoreDuplicates: false, filter: false}) {
      if (!child || !r) {
        return r;
      }
      const existingNode = r.nodeData.children.find(x => (x.topic === child || (x.topic === '' && child === 'ISA')));
      if (existingNode && !options.ignoreDuplicates) {
        return {nodeData: existingNode, linkData: {}};
      }
      const newNode = MindElixir.new(child);
      newNode.nodeData = {
        topic: newNode.nodeData.topic === 'ISA' ? '' : newNode.nodeData.topic,
        id: newNode.nodeData.id,
        linkData: {},
        style: {
          background: options.filter ? '#90D7FF' : (options.nodeType === 'PRENOUN' ? '#fffbb3' : null),
          color: options.filter ? '#ffffff' : null,
          fontWeight: options.nodeType === 'PRENOUN' ? 'bold' : null
        },
        children: [],
        root: false,
        // tags: nodeType ? [nodeType] : null
      };
      map.addChild(E(r.nodeData.id), newNode.nodeData);
      return newNode;
    }

    let subjectNode = null;
    let predicateNode = null;
    let valueNode = null;
    let hadEnding = false;
    data.forEach((elem, i) => {
      const similarThanPrevious = i - 1 >= 0 && compareObjects(data[i - 1].subject, data[i].subject);
      const {subject, predicate, value} = elem;
      if (elem.ptype !== 'PRENOUN') {
        // We should add the value only if the following element is not a PRENOUN. This is because the PRENOUN
        // contains the same as the value, just split in subject / predicate / value

        if (!hadEnding && (subject || subjectNode === null)) {
          // If we didn't had an ending in the previous element (so we're not connected to this one from the
          // previous) and there is a subject or we don't have a subject yet, add the SPV
          subjectNode = addChild(root, subject?.value ?? ' ');
          predicateNode = addChild(subjectNode, predicate?.value);
          valueNode = addChild(predicateNode, value?.value);
        } else if (!subject) {
          // Otherwise we link this SPV using the previous element as the common subject
          predicateNode = addChild(subjectNode, predicate?.value);
          valueNode = addChild(predicateNode, value?.value);
        } else if (hadEnding) {
          // If we had an ending, we need to connect this element using the previous one, either to the root
          // if they're equal, the previous subject node otherwise
          if (subject) {
            subjectNode = addChild(subjectNode && subjectNode.nodeData.topic === elem.subject
              ? root : subjectNode, subject?.value);
          }
          predicateNode = addChild(subjectNode, predicate?.value);
          valueNode = addChild(predicateNode, value?.value);
        }
      } else {
        if (subject) {
          // If the previous value is not the same as the current subject
          // and if the previous subject is not the same as the current subject
          // and if the previous previous value + suffix + space + previous value are not the same as the
          // current subject, then we can safely add the subject without duplicating it
          if (!(
            (i - 1 >= 0 && compareObjects(data[i - 1].value, data[i].subject))
            ||
            (i - 1 >= 0 && compareObjects(data[i - 1].subject, data[i].subject))
            ||
            (i - 2 >= 0 && `${data[i - 2].value?.value}${data[i - 2].v_suffix} ${data[i - 1].value?.value}` === data[i].subject?.value)
          )) {
            predicateNode = addChild(valueNode, subject?.value);
          }
          // If the predicate and the subject of the last item were equal, then we create a branch
          if (i - 1 >= 0 && compareObjects(data[i - 1].predicate, data[i].predicate)
            && compareObjects(data[i - 1].subject, data[i].subject)) {
            valueNode = addChild(predicateNode, value?.value);
          } else {
            predicateNode = addChild(valueNode, predicate?.value);
            valueNode = addChild(predicateNode, value?.value);
          }
        } else {
          addChild(subjectNode, subject?.value);
          addChild(predicateNode, predicate?.value);
          addChild(valueNode, value?.value);
        }
      }
      hadEnding = elem.p_ending;
    });
  }

  useEffect(() => {
    function handleSelectNode(node) {
      if (!node.parent) {
        setTextFieldVisible(true);
      }
    }
     if (map) {
      map.init();
      map.bus.addListener('selectNode', handleSelectNode);
    }
    return () => {
      map?.bus.removeListener('selectNode', handleSelectNode);
    };
  }, [map]);



  return (
    <div >
      {/*<AutoSizer>*/}
      {/*  {*/}
      {/*    ({height, width}) => (*/}
      {/*      <div id="map" style={{height: height, width: width}}/>*/}
      {/*    )*/}
      {/*  }*/}
      {/*</AutoSizer>*/}
      <div id="map" style={{height: "500px", width: "100%"}}/>
    </div>
  );
}

export default MindMapPage;

