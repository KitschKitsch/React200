import React, {Component} from "react";

export default class R063_CallbackFunc extends Component {
    componentDidMount() {
       this.logPrint(1, function (return1) {
           console.log("return1 : " + return1);
           this.logPrint(return1, function (return2) {
               console.log("return2 : " + return2);
           })
       }.bind(this)) // 지저분하고 복잡해~ 콜백지옥,.,.
    }

    logPrint(param, callback) {
        console.log("logPrint param : " + param);
        param += param
        callback(param);
    }

    render() {
        return <h1>Callback Function</h1>;
    }
}
