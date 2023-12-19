import React from "react";
import {Consumer} from "./R077_ContextApi";


const contextChildren = () => {
    return (
            <Consumer>
                {contextValue => <button onClick={e => contextValue.setStateFunc("react200")}>
                    {console.log("contextValue : ", contextValue)}
                    {contextValue.state.name}_button
                </button>}
            </Consumer>
    )
}
export default contextChildren;