import React, {Component} from "react";
import {
    InputGroup,
    Input,
    //InputGroupAddon,
    InputGroupText,
    Button
} from 'reactstrap';
 // 사용할 기능 임포트

export default class R045_ReactstrapInputGroup extends Component {

    render() {
        return (
                <>
                    <InputGroup>
                        <Input placeholder="userid"/>
                        {/*<InputGroupAddon addonType="append">*/}
                            <InputGroupText>@reactmail.com</InputGroupText>
                        {/*</InputGroupAddon>*/}
                    </InputGroup>
                    <InputGroup>
                        {/*<InputGroupAddon addonType="prepend">*/}
                            <Button>버튼</Button>
                        {/*</InputGroupAddon>*/}
                        <Input/>
                    </InputGroup>
                </>
        )
    }

}
