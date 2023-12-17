import React, {Component} from "react";
import {UncontrolledCollapse, Button, CardBody, Card} from 'reactstrap'; // 사용할 기능 임포트

export default class R042_ReactstrapCollapse extends Component {
    render() {
        return (<div>
            <Button color="warning" id="toggle">
                펼치기/접기
            </Button>
            <UncontrolledCollapse toggler="#toggle">
                <Card>
                    <CardBody>REACT 200</CardBody>
                </Card>
            </UncontrolledCollapse>
        </div>)
    }

}
