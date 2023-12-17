import React, {Component} from "react";
import datatype from 'prop-types';

class R020_PropsObjVal extends Component {
    render() {
       let {ObjectJson} = this.props
        return (
                <div style={{padding:'0px'}}>
                    {JSON.stringify(ObjectJson)}
                </div>
        )
    }
}

R020_PropsObjVal.propTypes = {
    ObjectJson : datatype.shape({ // shape로 객체 자료형 선언하기
    react : datatype.string,
    twohundred: datatype.number // 경고
})
}
export default R020_PropsObjVal;