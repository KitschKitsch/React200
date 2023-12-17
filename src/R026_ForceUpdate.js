import React, {Component} from "react";

class R026_ForceUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            StateString: 'react',
        }
    }

    StateChange = () => {
        this.state.StateString = '리액트';
        this.forceUpdate(); // forceUpdate 로 set 안쓰고 강제 업데이트 가능하 
    }

    render() {
        return (<div style={{padding: "0px"}}>
                    <button onClick={(e) => this.StateChange(e)}>
                        state직접변경 후 강제업데이트
                    </button>
                    <br/>
                    [state 변경하기] StateString : {this.state.StateString}
                </div>)
    }

}

export default R026_ForceUpdate;