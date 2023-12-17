import React, {Component} from "react";
import {Form, Label, Input, Row, Col, FormGroup} from 'reactstrap'; // 사용할 기능 임포트

export default class R044_ReactstrapForm extends Component {

    render() {
        return (<Form>
                    <Label for="exampleGender">Gender</Label>
                    <Input type="select" bsSize="lg"> {/* sm(소) || lg(대) */}
                        <option>no select</option>
                        <option>woman</option>
                        <option>man</option>
                    </Input>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleAddress">address</Label>
                                <Input type="text" name="address" id="address"/>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="exampleMobile">mobile</Label>
                                <Input type="text" name="mobile" id="mobile"/>
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="exampleAge">Age</Label>
                                <Input type="text" name="age" id="age"/>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>

        )
    }

}
