import React, {useState} from "react";
import Children from "./contextChildren";

const {Provider, Consumer} = React.createContext() // context 만들기
export {Consumer} // 하위에서 Consumer 를 누구나 쓸 수 있음

const R077_ContextApi = () => {
    const [state, setState] = useState({name : ""});

    const setStateFunc = value => {setState({name : value})};

    const content = {
        state,
        setStateFunc
    }
    return (
            <Provider value={content}>
                {console.log("content : ", content)}
                <Children/>
            </Provider>
    )
}

export default R077_ContextApi;