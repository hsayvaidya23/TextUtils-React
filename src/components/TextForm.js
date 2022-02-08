import React , {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was Clicked :"+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");
    }
    const handleReverseClick = () => {
        let newText = text.split("").reverse().join("");
        // reverseString(newText);//"olleH"
        setText(newText);
        props.showAlert("Reversed the text!","success");
    }
    
    const handleTitleClick = () => {
        let newText = text.split(' ').map(function(word, index){
            // First Character uppercase or lower case
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(" ");
        setText(newText);
        props.showAlert("Converted to Title!","success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!","success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!","success");
    }


    const handleClearClick = () => {
        let newText =" ";
        setText(newText);
        props.showAlert("Text Cleared!","success");
    }

    const handleOnChange =(event)=>{
        // console.log("On change");
        setText(event.target.value)
    }


    const [text, setText] = useState("");
    // text = "new text"; // wrong way to change the state;
    // setText('new text'); // Correct way to change the state;
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1 className="mb-4">{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" placeholder="      Enter your text here" value={text} 
                    style={{backgroundColor: props.mode==='dark'?'rgb(6 76 133)':'white', 
                    color:props.mode==='dark'?'white':'#042743'}} 
                    onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}> Uppercase</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}> Lowercase</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear </button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleReverseClick}>Reverse </button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleTitleClick}>Title </button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleCopy}>Copy Text </button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces </button>
                    {/* <button className="btn btn-primary mx-1 my-2" onClick={handleSentenceClick}>Sentence </button> */}
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{ 0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } minutes read </p>
            <h2>Preview</h2>
            {/* <p>{text.length>0?text:"Enter something in the textbox above to preview it here" } </p> */}
            <p>{text===""?"Nothing to preview !":text} </p>
        </div>
        </>
    )
}
