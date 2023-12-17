import React, {useState} from "react";

export default function R074_ReactCurrying () {

    const plusNumOrString = (c, d) => c + d;

    function PlusFunc1(a) {
        return function (b) {
            return plusNumOrString(a, b)
        }
    }

    const PlusFunc2 = a => b => plusNumOrString(a, b) // 위와 동일한 화살표 함수!

    const PlusFunc = a => PlusFunc1(a)(200) // 파라미터 한개일 때는 소괄호 생략 가능! // 파라미터 a와 200을 순차적으로 전달함!!!

    return (
            <>
                <input type="button" value="NumberPlus" onClick={e => alert(PlusFunc(100))}/>
                <input type="button" value="StringPlus" onClick={e => alert(PlusFunc("react"))}/>
            </>
    )


}
