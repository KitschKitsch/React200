import React, {Component} from "react";
import {connect} from 'react-redux';
import {add} from './actions';

class StrAddButton extends Component {
    render() {
        return (<input value='Add200' type='button' onClick={this.props.addString}/>);
    }

   /* const addString = () => { // const, let은 TDZ에 따라 순서대로 작성하기!!!!
        props.store.dispatch(add()); // 디스패치 함수: '리듀서(reducers\index.js)'에 add() 라는 액션을 전달
    }*/
}

let mapDispatchToProps = (dispatch, props) => { // 액션 디스패치하는 함수를 컴포넌트의 props로 매핑하는 역할
    console.log('Props from App.js : ' + props.AppProp)
    return {
        addString: () => dispatch(add())
    };
};

StrAddButton = connect(null, mapDispatchToProps)(StrAddButton); // (App)컴포넌트 > (actions\index)액션 단계에서의 connect 함수

export default StrAddButton;