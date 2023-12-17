import React, {Component} from "react";
import {Button} from 'reactstrap'; // 사용할 기능 임포트

export default class R039_ReactstrapBottons extends Component {
    render() {
        return (
                <div style={{padding: "0px"}}>
                    <Button color="primary">blue</Button>
                    <Button color="info">teal</Button>
                    <Button color="success">green</Button>
                    <Button color="warning">yellow</Button>
                    <Button color="danger">red</Button>
                    <Button color="dark">dark gray</Button>
                    <Button color="secondary">gray</Button>
                    <Button color="light">white</Button>
                </div>
        )
    }

}
