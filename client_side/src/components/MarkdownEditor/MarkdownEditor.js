import React, {useEffect, useRef, useState} from 'react';
import './MarkdownEditor.css';
import MarkdownPreview from "@uiw/react-markdown-preview"

function MarkdownEditorS(props) {
  const [input, setInput] = useState('');
  const previewContainer = useRef();


  useEffect(() => {
    setInput(props.value);
  }, [props.value]);


  if (!input) return null;

  return (
    <div
      className={"w-100 h-100"}
    >
      <MarkdownPreview
        className={"markdown-body"}
        source={input}
        components={{
          img: (props1, context) => {
            return (
              <img
                className="w-100"
                src={"http://localhost:1337" + props1.src}
              />
            );
          }
        }}
      />

    </div>
  );
}

export default MarkdownEditorS;
