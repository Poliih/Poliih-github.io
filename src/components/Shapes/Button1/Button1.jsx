import React from "react";
import "./Button1.css"

export default function Button1({text, onClick}){
    return (
        <button className="button1" onClick={onClick}>
            {text}
        </button>
    );
}