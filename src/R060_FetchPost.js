import React, {Component} from "react";

export default class R060_FetchPost extends Component {
    componentDidMount = async () => { // 비동기적으로 실행
        const response = await fetch('http://date.jsontest.com/',
                {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json',},
                    body: {a: "react", b: 200},
                }
        );
        const body = await response.json();
        console.log(body)
        alert(body.date)
    }

    render() {
        return (<h1>fetch get</h1>)
    }

}
