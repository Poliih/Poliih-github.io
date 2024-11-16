import React from "react";
import "./Button2.css"

export default function Button1({text, onClick}){
    return (
        <button className="button2" onClick={onClick}>
            {text}
        </button>
    );
}