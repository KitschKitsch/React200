import React, {Component} from "react";
import datatype from 'prop-types'; // 자체저긍로 데이터타입 설정하기

class R022_PropsDefault extends Component {
    render() {
       let {ReactString, ReactNumber} = this.props
        return (
                <div style={{padding:'0px'}}>
                    {ReactString}{ReactNumber}
                </div>
        )
    }
}

R022_PropsDefault.defaultProps = { // 기본값을 설정해주기~
    ReactString: 'defaultProps로 기본값 설정',
    ReactNumber: 400
}
export default R022_PropsDefault;