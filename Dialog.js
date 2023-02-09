import React, { useState } from "react";
import "./Dialog.css";
function  Dialog(){

    const [Dialog,setDialog]=useState(false);
    const toggleDialog=()=>{
        setDialog(!Dialog)
    }


return(
    <>
        <button onClick={toggleDialog} className="btn-Dialog">
        Hii
        </button>
        { Dialog&&(
            <div className="Dialog">
            <div className="overlay"></div>
            <div className="Dialog-content">
                <h2>Hello</h2>
                <p>Thank you for your interest in the role. 
                Please answer the question below. Kindly provide 3 or more sentences. 
              </p>
                <h3> Thank you</h3>
                <h4>Question:
                <p>Why do you want to work for Photojaanic?</p></h4>
                <button className="Close-Dialog"
                onClick={toggleDialog}>Close</button>
                <button className="Add-Dialog"
                onClick={toggleDialog}>Answer</button>
            </div>
        </div> 
        )}
       
    </>
)

}


export default Dialog;