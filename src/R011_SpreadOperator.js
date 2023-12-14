import React, { Component } from "react";

export default class R011_SpreadOperator extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // js 배열
        var varArray1 = ['num1', 'num2'];
        var varArray2 = ['num3', 'num4'];
        var sumVarArr = [varArray1[0], varArray1[1], varArray2[0], varArray2[1]]; // 또는 var sumVarArr = [].concat(varArray1, varArray2);
        console.log('1. sumVarArr : ' + sumVarArr);

        // ES6 배열
        let sumLetArr = [...varArray1, ...varArray2]; // 전개연산자로 합쳐버림;;
        console.log('2. sumLetArr : ' + sumLetArr);
        const [sum1, sum2, ...remain] = sumLetArr; // 나머지도 표현 가능
        console.log('3. sum1 : ' +sum1+ ', sum2 : ' +sum2+ ', remain : ' +remain);

        var varObj1 = {key1 : 'val1', key2 : 'val2'};
        var varObj2 = {key2 : 'new2', key3 : 'val3'};

        // js Object
        var sumVarObj = Object.assign({}, varObj1, varObj2); // Object.assign 함수 이용해서 객체 합치기
        console.log('4. sumVarObj : ' + JSON.stringify(sumVarObj));

        // ES6 Object
        var sumLetObj = {...varObj1, ...varObj2}; // 전재연산자로 합쳐버림;;;
        console.log('5. sumLetObj : ' +JSON.stringify(sumLetObj));
        var {key1, key3, ...others} = sumLetObj; // 나머지도 표현 가능
        console.log('6. key1 : ' +key1+ ', key3 : ' +key3+ ', others : ' +JSON.stringify(others));
    }

    render() {
        return(
            <h2> [ THIS IS SpreadOperator ] </h2>
        )
    }
};