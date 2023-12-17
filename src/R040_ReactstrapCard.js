import React, {Component} from "react";
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap'; // 사용할 기능 임포트

export default class R040_ReactstrapCard extends Component {
    render() {
        return (
                <div>
                    <Card>
                        <CardImg top height="200px" src="http://asq.kr/4KkfRxZfR" alt="Card image"/>
                        <CardBody>
                            <CardTitle>제목</CardTitle>
                            <CardSubtitle>부제목</CardSubtitle>
                            <CardText>내용</CardText>
                            <Button>버튼</Button>
                        </CardBody>
                    </Card>
                </div>
        )
    }

}
