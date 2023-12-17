import React, {Component} from "react";

export default function R070_onMouseOut () {

    const MouseOut = (tag) => {
        console.log('TAG : ' + tag);
    }

    return (
            <>
              <div onMouseOut={e => MouseOut("div")}>
                  <h3>DIV onMouseMove</h3>
              </div>
                <input type={"text"} onMouseOut={e => MouseOut("input")}/>
                <select onMouseOut={e => MouseOut("select")}>
                    <option value={"react"}>react</option>
                    <option value={"200"}>200</option>
                </select>
            </>
    );

}
