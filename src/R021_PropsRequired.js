import React, {Component} from "react";
import datatype from 'prop-types'; // 자체저긍로 데이터타입 설정하기

class R021_PropsRequired extends Component {
    render() {
       let {ReactString, ReactNumber} = this.props
        return (
                <div style={{padding:'0px'}}>
                    {ReactString}{ReactNumber}
                </div>
        )
    }
}

R021_PropsRequired.propTypes = {
    ReactString: datatype.isRequired, // ReactString은 있어야만 하는데!!!
}
export default R021_PropsRequired;