import React, { Component } from "react";

export default class R009_Es6 extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var jssString1 = '자바스크립트';
        var jssString2 = '입니다\n다음 줄입니다.';
        console.log(jssString1 + ' 문자열 ' + jssString2 + '~');

        var Es6String1 = 'ES6';
        var Es6String2 = '입니다'
        console.log(`${Es6String1} 문자열 ${Es6String2}!!
        ____다음 줄입니다`); /*백틱으로 쓰면 개행문자 안넣어주고 엔터키 누르면 줄바꿈 됨!!!*/

        var LongString = "ES6에 추가된 String 함수들입니다.";
        console.log('startsWith : ' + LongString.startsWith("ES6에 추가")); // 일치하는 문자열 찾기(각각 앞, 뒤, 전체)
        console.log('endsWith : ' + LongString.endsWith("함수들입니다."));
        console.log('includes : ' + LongString.includes("추가된 String"));
    }

    render() {
        return(
            <h2> [ THIS IS ES6 STRING ] </h2>
        )
    }
};