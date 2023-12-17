import React, {Component} from "react";

export default function R072_onSubmit () {

   const Submit = (e) => {
       var inputValue = document.getElementById("inputId").value;
       console.log("inputValue : " + inputValue);
       e.preventDefault();
    }

    return (
            <form onSubmit={Submit}>
                <input type="text" name="inputName" id="inputId" />
                <input type="submit" value="Submit" />
            </form>
    )


}
