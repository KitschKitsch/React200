import React, {Component} from "react";
import datatype from 'prop-types';

class R018_PropsDatatype extends Component {

    render() {
        let {
            String, Number, Boolean, Array, ObjectJson, Function
        } = this.props
        return (<div style={{padding: "0px"}}>
            <p>StringProps: {String}</p>
            <p>NumberProps: {Number}</p>
            <span>BoolanProps: {Boolean.toString()}</span>
            <p>ArrayProps: {Array.toString()}</p>
            <p>ObjectJsonProps: {JSON.stringify(ObjectJson)}</p>
            <p>FunctionProps: {Function}</p>
        </div>)
    }
}

R018_PropsDatatype.propTypes = {
    String: datatype.number, // 자료형이 일치하지 않을 때 경고메시지 보내줌
    Number: datatype.number,
    Boolean: datatype.bool,
    Array: datatype.array,
    ObjectJson: datatype.object,
    Function: datatype.func,
}

export default R018_PropsDatatype;