import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleLoClick = (event) => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }
    const handleClearClick = (event) => {
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared!", "success");
    }
    const handleCopy = (event) => {
        //var txt = document.getElementById("myBox");
        // txt.select();
        //navigator.clipboard.writeText(txt.value);
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces!", "success");
    }
    const [text, setText] = useState("");
    return (
        
        <>
            <div className="container" style={{color: props.mode === "light"? "black": "white"}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === "light"? "white": "#042743", color: props.mode === "light"? "black": "white"}} rows="8"></textarea>
                    <button disabled={text.length === 0} className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to uppercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert to lowercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary my-2 mx-2" onClick={handleClearClick}>Clear text</button>
                    <button disabled={text.length === 0} className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy text</button>
                    <button disabled={text.length === 0} className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
                </div>
            </div>
            <div className="container my-3" style={{color: props.mode === "light"? "black": "white"}}>
                <h1>Your text Summary</h1>
                <p>{text.split(/\s+/).filter((element)=> { return element.length !== 0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=> { return element.length !== 0}).length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0? text:"Nothing to preview"}</p>
            </div>
        </>
    )
}
