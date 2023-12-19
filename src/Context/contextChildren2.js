import React from "react";
import {Consumer} from "./R076_ContextApi";

const contextChildren2 = () => {
    console.log(Consumer)
    return (
            /*Provider 값을 가져옴*/
        <Consumer>
            {contextValue => <h3>{`contextValue : ${contextValue}`}</h3>}
        </Consumer>
    )
}

export default contextChildren2;