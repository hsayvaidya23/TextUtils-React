import React , {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was Clicked :"+ text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleReverseClick = () => {
        let newText = text.split("").reverse().join("");
        // reverseString(newText);//"olleH"
        setText(newText);
    }
    
    const handleTitleClick = () => {
        let newText = text.split(' ').map(function(word, index){
            // First Character uppercase or lower case
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(" ");
        setText(newText);
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
        <div className="container">
            <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" placeholder="Enter your text here" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                    <button className="btn btn-primary mx-1" onClick={handleUpClick}> Uppercase</button>
                    <button className="btn btn-primary mx-1" onClick={handleLowClick}> Lowercase</button>
                    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear </button>
                    <button className="btn btn-primary mx-1" onClick={handleReverseClick}>Reverse </button>
                    <button className="btn btn-primary mx-1 my-2" onClick={handleTitleClick}>Title </button>
                    {/* <button className="btn btn-primary mx-1 my-2" onClick={handleSentenceClick}>Sentence </button> */}
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{ 0.008 * text.split(" ").length } minutes read </p>
            <h2>Preview</h2>
            <p>{text} </p>
        </div>
        </>
    )
}
