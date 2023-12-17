import React, {Component} from "react";
import {Button, Fade} from 'reactstrap'; // 사용할 기능 임포트

export default class R043_ReactstrapFade extends Component {
    constructor(props) {
        super(props);
        this.state={fadeInOut : true}
    }

    toggle = (e) => {
        this.setState({fadeInOut : !this.state.fadeInOut})
    }
    render() {
        return (<div>
            <Button color="success" onClick={this.toggle}>Fade In/Out</Button>
            <Fade in={this.state.fadeInOut} tag={"h1"}> {/*true 이면 h1 태그에 내용 보여줌*/}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Fade>
        </div>)
    }

}
