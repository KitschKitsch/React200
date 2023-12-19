import React from "react";
import Children from "./contextChildren";

const {Provider, Consumer} = React.createContext() // context 만들기
export {Consumer} // 하위에서 Consumer 를 누구나 쓸 수 있음

const R076_ContextApi = () => {
    return (
        <Provider value="React 200"> {/*값을 React 200으로 넘김*/}
            <Children/>
        </Provider>
    )
}

export default R076_ContextApi;