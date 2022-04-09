import React, { useEffect, useRef, useState } from 'react';
import EditorComponent from '../component/editor/editor-component';


const WriteDashboard = () => {

  const [desc, setDesc] = useState('<H1>KB CARD</H1>');
  const editorData = useRef({});

  function onEditorChange(value:string){
      setDesc(value);
      console.log(value);
  }

  return (
    <>
      <EditorComponent editorData={editorData}
      />
    </>
  );

}

export default WriteDashboard;

