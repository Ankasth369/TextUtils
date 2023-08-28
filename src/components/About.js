import React, { useState } from 'react'

export default function About(props) {

/*
    const [myStyle, setMyStyle] = useState({
        color: "black",
        backgroundColor: "white"
    })
    const [btnText, setBtnText] = useState("Enable Dark Mode");

    const toggleStyle = () => {
        if (myStyle.color === 'white') {
            setMyStyle({
                color: "black",
                backgroundColor: "white"

            })
            setBtnText("Enable Dark Mode");
        } else {
            setMyStyle({
                color: "white",
                backgroundColor: "black",
                margin: "2px solid white"
            })
            setBtnText("Enable Light Mode");

        }
    }
*/
    let myStyle = {
        color: props.mode === "dark"? "white": "#042743",
        backgroundColor: props.mode === "dark"? "rgb(36 74 104)": "white"
    }
    return (
        <>
            <h1 style={{color: props.mode === "dark"? "white": "#042743"}} className='mx-3'> About Us</h1>
            <div className="container" style={{color: props.mode === "dark"? "white": "#042743"}}>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                               <strong>Analyze your text</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, 
                                character count or time required to read the text.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>Free to use</strong> 
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                TextUtils is a free character counter tool that provides instant character count & word count statistics
                                for a given text. TextUtils reports the number of characters and words. Thus, it is suitable for writng text
                                with word and character limit.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                               <strong>Browser Compatible</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                This word counter software works in any web browser such as Chrome, Firefox, Opera, and Safari. It can be
                                used to count words in facebook, blogs, books, excel document, pdf document, etc.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
