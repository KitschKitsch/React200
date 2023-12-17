import React, { Component } from "react";
import axios from "axios";

export default class R061_AxiosGet extends Component {
    componentDidMount() {
        axios.get('http://date.jsontest.com/').then((response) => {
            console.log(response);
            alert(response.data.date)

        });
    }

    render() {
        return <h1>axios get</h1>;
    }
}
