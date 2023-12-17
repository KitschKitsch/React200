import React, {Component} from "react";
import {Breadcrumb, BreadcrumbItem} from 'reactstrap'; // 사용할 기능 임포트

export default class R036_ReactstrapBreadcrumbs extends Component {
    render() {
        return (<div id="top">
            <Breadcrumb tag="nav" listTag="div">
                <BreadcrumbItem tag="a" href="#top">상단</BreadcrumbItem>
                <BreadcrumbItem tag="a" href="#bottom">하단</BreadcrumbItem>
            </Breadcrumb>
            <div id="bottom" style={{marginTop: "1000px"}}>
                <span>bottom</span>
            </div>
        </div>)
    }

}
