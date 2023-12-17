import React, {Component} from "react";

export default function R067_onChange () {
    const change = (e) => {
        var val = e.target.value;
        console.log('param : ' + val);
    }

    return (
            <>
              <input type={"text"} onChange={change}/>
                <select onChange={change}>
                    <option value={"React"}>react</option>
                    <option value={"200"}>200</option>
                </select>
            </>
    );

}
