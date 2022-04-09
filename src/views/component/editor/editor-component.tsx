import React, { Component, useMemo, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const EditorComponent =(props)=> {

  const QuillRef = useRef<ReactQuill>();
  const [ contents, setContents] = useState("");

  const modules = useMemo(
    ()=>({
      toolbar:{
        container:[
          [{ 'header': [1, 2, false] },{ 'color': [] }, { 'background': [] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          [{ 'align': ['center','right','justify'] } ],
          ['link'],
          ['clean']
        ]
      }
    }),[]
  )

  const sendEditorData = () => {
    console.log(contents);
  }


  return(
    <div style={{height: "300px"}}>
      <ReactQuill
        ref = {(elements)=>{
          if (elements !== null){
            QuillRef.current = elements;
          }
        }
        }
        style={{height: "600px"}}
        theme="snow"
        modules={modules}
        value={contents}
        onChange={(content, delta, source, editor) => setContents(editor.getHTML())}
      />

    </div>
)
}
export default EditorComponent
