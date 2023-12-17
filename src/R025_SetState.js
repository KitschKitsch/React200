import React, {Component} from "react";

class R025_SetState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            StateString : 'react',
        }
    }

    StateChange = (flag) => {
        if (flag == 'direct') {
            this.state.StateString = '리액트';
        }
        if (flag == 'setstate') {
            this.setState({StateString : '리액트'});
        }
    }

    render() {
        return (<div style={{padding: "0px"}}>
            <button onClick={(e) => this.StateChange('direct', e)}>state 직접변경 {/*직접변경은 render 호출X*/}
            </button>
            <button onClick={(e) => this.StateChange('setstate', e)}>setState로 {/*setState 로 변경하면 render 재호출*/}
                변경
            </button>
            <br/>
            [state 변경하기] StateString : {this.state.StateString}
        </div>)
    }
}

export default R025_SetState;