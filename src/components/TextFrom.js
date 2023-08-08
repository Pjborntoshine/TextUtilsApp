import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    setText('');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState('');

  // Calculate reading time in minutes (approximation)
  const readingTime = Math.ceil(text.split(/\s+/).filter(Boolean).length * 0.008);

  return (
    <>
    <div className="container1">
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="text-box"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>&nbsp;&nbsp;
        <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>&nbsp;&nbsp;
        <button className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>
      </div>
      <div className="container my-2">
        <h2 style={{ color: "skyblue" }}>Your Text Summary</h2>
        <p>
          <b>
            {text.split(/\s+/).filter(Boolean).length} words and&nbsp;
            {text.replace(/\s+/g, "").length} characters
          </b>
        </p>
        <p>
          {readingTime} minutes to read
        </p>
        <h3>Preview</h3>
        <p>
          {text}
        </p>
      </div>
      </div>
    </>
  );
}
