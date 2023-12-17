import React, {Component} from "react";

export default function R066_onClick() {

    const buttonClick = (param) => {
        if (typeof param != 'string') {
            param = "Click a"
        }
        console.log('param : ' + param);
    }

    return (
            <>
                <button onClick={e => buttonClick("Click button")}>
                    Click button
                </button>
                <div onClick={e => buttonClick("Click div")}>Click div
                </div>
                <a href="javascript:" onClick={buttonClick}>Click a</a>
            </>
    );

}
