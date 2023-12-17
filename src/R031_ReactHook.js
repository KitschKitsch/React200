import React, {useState, useEffect} from "react";

export default function R031_ReactHook(props) {
    const [contents, setContents] = useState("[ THIS IS REACT ]");

    useEffect(() => {
        console.log('useEffect');
    });

    return (
            <div style={{padding: "0px"}}>
                <h2>{contents}</h2>
                <button onClick={() => setContents(' [ THIS IS HOOK ] ')}>버튼
                </button>
            </div>
    )

}
