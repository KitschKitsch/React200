import React, {Component} from "react";

class R015_Map extends Component {

    componentDidMount() {
        var Map_Arr = [3, 2, 8, 8]
        let Map_newArr = Map_Arr.map(x => x) // Map도 단순 반복이지만
        console.log("1. Map_newArr : [" + Map_newArr + "]")

        let Map_multiArr = Map_Arr.map(x => x * 2)
        console.log("2. Map_multiArr : [" + Map_multiArr + "]")

        var ObjArray = [{key: 'react', value: '200'}, {key: '리액트', value: 'TwoHundred'}];
        let Map_objArr = ObjArray.map((obj, index) => {
            console.log((index + 3) + ". obj : " + JSON.stringify(obj))
            var Obj = {};
            Obj[obj.key] = obj.value; // key에 value를 넣어줌 (Wow~)
            console.log(obj.key) // react , 리액트
            console.log(obj.value) // 200 , TwoHundred
            return Obj; // return 을 사용할 수 있음!!
        });
        console.log("5. Map_objArr : " + JSON.stringify(Map_objArr))
    }

    render() {
        return (<h2>
            [ THIS IS Map ]
        </h2>);
    }

}

export default R015_Map;