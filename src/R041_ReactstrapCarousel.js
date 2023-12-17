import React, {Component} from "react";
import {UncontrolledCarousel} from 'reactstrap'; // 사용할 기능 임포트

const items = [
    {
        ser: 'http://https://han.gl/q6jDb',
        altText: ' 슬라이드1 이미지 대체 문구',
        cartion: ' 슬라이드1 설명',
        header: ' 슬라이드1 제목'
    },
    {
        ser: 'http://https://han.gl/d4jbj',
        altText: ' 슬라이드2 이미지 대체 문구',
        cartion: ' 슬라이드2 설명',
        header: ' 슬라이드2 제목'
    },
    {
        ser: 'http://https://han.gl/U7FFH',
        altText: ' 슬라이드3 이미지 대체 문구',
        cartion: ' 슬라이드3 설명',
        header: ' 슬라이드3 제목'
    },
];

export default class R041_ReactstrapCarousel extends Component {
    render() {
        return (
                <UncontrolledCarousel items={items}/>
        )
    }

}
