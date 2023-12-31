import React, {Component} from "react";
import {Alert, UncontrolledAlert} from 'reactstrap'; // 사용할 기능 임포트

export default class R034_ReactstrapAlerts extends Component {
    render() {
        return (
                <div>
                    <Alert color='light'>
                        Simple Alert [color : light]
                    </Alert>
                    <UncontrolledAlert color='warning'>
                        Uncontrolled Alert [color : warning]
                    </UncontrolledAlert>
                </div>
        )
    }

}
