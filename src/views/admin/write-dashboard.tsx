import React, {  useRef, useState } from 'react';
import EditorComponent from '../component/editor/editor-component';


const WriteDashboard = () => {

  const [desc, setDesc] = useState('<H1>KKK</H1>');
  const editorData = useRef({});


  return (
    <>
      <EditorComponent editorData={editorData}
      />
    </>
  );

}

export default WriteDashboard;

