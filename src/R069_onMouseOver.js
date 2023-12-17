import React, {Component} from "react";

export default function R069_onMouseOver () {

    const MouseOver = (tag) => {
        console.log('TAG : ' + tag);
    }

    return (
            <>
              <div onMouseOver={e => MouseOver("div")}>
                  <h3>DIV onMouseMove</h3>
              </div>
                <input type={"text"} onMouseOver={e => MouseOver("input")}/>
                <select onMouseOver={e => MouseOver("select")}>
                    <option value={"react"}>react</option>
                    <option value={"200"}>200</option>
                </select>
            </>
    );

}
