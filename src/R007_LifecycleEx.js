import React, { Component } from "react";

export default class R007_LifecycleEx extends Component {
    static getDerivedStateFromProps(props, state) { // 그 다음 두번째로 get어쩌구 함수
        console.log('2. getDerivedStateFromProps Call : ' + props.prop_value);
        return {tmp_state:props.prop_value};
    }
    constructor(props) { // constructor 함수 제일 처음!
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }

    componentDidMount() { // 초기 렌더링(마운트) 된 직후
        console.log('4. componentDidMount Call');
        console.log('5. tmp_state : ' + this.state.tmp_state);
    }

    render() {
        console.log('3. render Call');
        return (
            <h2> [ THIS IS CONPONENTDIDMOUNT FUNCTION ] </h2>
        )
    }
}