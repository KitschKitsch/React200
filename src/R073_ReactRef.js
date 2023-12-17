import React, {useState} from "react";

export default function R073_ReactRef () {
    const [inputRef, setInputRef] = useState(React.createRef());

    const RefFocus = () => {
        inputRef.current.focus();
    }

    const JavascriptFocus = () => {
        document.getElementById('id').focus();
    }

    return (
            <>
                <input id="id" type="text" ref={inputRef}/> {/* 여기가 createRef() 임!!! */}
                <input type="button" value="Ref Focus" onClick={RefFocus}/>
                <input type="button" value="Javascript Focus" onClick={JavascriptFocus}/>
            </>
    )


}
