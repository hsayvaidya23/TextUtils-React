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
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!","success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!","success");
    }

    // const handleSentenceClick = () => {
    //     let newText = text.toLowerCase().split(' ');
    //     for(var i=0; i<newText.length;i++){
    //         newText[i] = newText[i].charAt(0).toUpperCase()+ newText[i].substring(1);
    //     }
    //     return newText.join(' ');
    //     setText(newText);
    // }
    

    const handleClearClick = () => {
        let newText =" ";
        setText(newText);
        props.showAlert("Text Cleared!","success");
    }

    const handleOnChange =(event)=>{
        // console.log("On change");
        setText(event.target.value)
    }


    const [text, setText] = useState(" ");
    // text = "new text"; // wrong way to change the state;
    // setText('new text'); // Correct way to change the state;
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" placeholder="Enter your text here" value={text} 
                    style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} 
                    onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                    <button className="btn btn-primary mx-1" onClick={handleUpClick}> Uppercase</button>
                    <button className="btn btn-primary mx-1" onClick={handleLowClick}> Lowercase</button>
                    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear </button>
                    <button className="btn btn-primary mx-1" onClick={handleReverseClick}>Reverse </button>
                    <button className="btn btn-primary mx-1 my-2" onClick={handleTitleClick}>Title </button>
                    <button className="btn btn-primary mx-1 my-2" onClick={handleCopy}>Copy Text </button>
                    <button className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces </button>
                    {/* <button className="btn btn-primary mx-1 my-2" onClick={handleSentenceClick}>Sentence </button> */}
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{ 0.008 * text.split(" ").length } minutes read </p>
            <h2>Preview</h2>
            {/* <p>{text.length>0?text:"Enter something in the textbox above to preview it here" } </p> */}
            <p>{text===" "?"Enter something in the textbox above to preview it here":text} </p>
        </div>
        </>
    )
}
