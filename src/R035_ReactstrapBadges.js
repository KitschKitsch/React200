import React, {Component} from "react";
import {Badge, Button} from 'reactstrap'; // 사용할 기능 임포트

export default class R035_ReactstrapBadges extends Component {
    render() {
        return (
                <div>
                   <h1>PRODUCT NAME <Badge color='secondary'>hit</Badge></h1>
                    <Button color='light' outline>
                        Accessor <Badge color='dark'>4</Badge>
                    </Button>
                    <Badge color='danger' pi11>pi11</Badge> {/*테두리 둥글게 둥글게~*/}
                    <Badge href='http://example.com' color='light'>Go link</Badge>
                </div>
        )
    }

}
