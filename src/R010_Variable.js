import React, { Component } from "react";

export default class R010_Variable extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var varName = 'react'; // 재약 없음
        console.log('varName1 : ' + varName);
        var varName = '200';
        console.log('varName2 : ' + varName);

        let letName = 'react'; // 같은 이름으로 또 선언 X 값변경O
        console.log('letName1 : ' + letName);
        letName = 'react200';
        console.log('letName2 : ' + letName);

        const constName = 'react'; // 재선언X 불변
        console.log('constName : ' + constName);
    }

    render() {
        return(
            <h2> [ THIS IS Variable ] </h2>
        )
    }
};