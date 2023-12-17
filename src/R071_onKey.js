import React, {Component} from "react";

export default function R071_onKey () {

    const OnKey = (event, e) => {
        var val = e.target.value;
        console.log("event : " + event+ ", value : " + val);
    }

    return (
            <>
                onKeyDown : <input type="text" onKeyDown={e => OnKey("onKeyDown", e)}/><br/> {/*눌릴때 처음은 공백*/}
                onKeyPress : <input type="text" onKeyPress={e => OnKey("onKeyDown", e)}/><br/>{/*눌릴때 처음은 공백*/}
                onKeyUp : <input type="text" onKeyUp={e => OnKey("onKeyUp", e)}/><br/>{/*뗐을때*/}
            </>
    );

}
