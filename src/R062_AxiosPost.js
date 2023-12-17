import React, {Component} from "react";
import axios from "axios";

export default class R062_AxiosPost extends Component {
    componentDidMount() {
        axios.post('http://date.jsontest.com/',
                { // 두번째 파라미터에 body에 넣을 데이터 담기
                    a: "react",
                    b: 200

                }).then((response) => {
            console.log(response);
            alert(response.data.date)
        });
    }

    render() {
        return <h1>axios post</h1>;
    }
}
