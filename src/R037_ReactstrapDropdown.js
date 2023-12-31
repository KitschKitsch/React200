import React, {Component} from "react";
import {ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'; // 사용할 기능 임포트

export default class R037_ReactstrapDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {dropdownOpen : false}
    }

    toggle = (e) => {
        this.setState({dropdownOpen : !this.state.dropdownOpen });
    }

    render() {
        return (
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>버튼 Dropdown</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>헤더</DropdownItem>
                        <DropdownItem disabled>비활성화</DropdownItem>
                        <a href="http://example.com/">
                            <DropdownItem>웹으로 이동</DropdownItem>
                        </a>
                        <DropdownItem onClick={e => alert("Alert 버튼")}>Alert 버튼</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
        )
    }

}
