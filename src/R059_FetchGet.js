import React, {Component} from "react";

export default class R059_FetchGet extends Component {
    componentDidMount = async () => { // 비동기적으로 실행
        const response = await fetch('http://date.jsontest.com/'); // JSON 형태의 데이터 가져옴. 그런데 fetch 비동기적 특징으로 다음줄로 넘어갈수도?! 기다려!!!
        const body = await response.json(); // await 을 붙임으로써 동기적(순차적)으로 실행됨
        console.log(body)
        alert(body.date)
    }

    render() {
        return (<h1>fetch get</h1>)
    }

}
