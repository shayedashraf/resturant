import React, { Component } from 'react';
import { Button, Form, FormGroup, Col, Input, Label } from 'reactstrap';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            telnum: "",
            email: "",
            agree: false,
            contactType: 'Tel.',
            message: ""

        }

    }
    render() {
        return (
            <div className="container">
                <div className="row" style={{ paddingLeft: "20px", textAlign: "left" }}>
                    <div className="Col-8">
                        <h3> Send us your Feedback {"\n"}</h3>

                    </div>
                    <div className="Col-12 Col-md-7">
                        <Form>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={4}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" name="firstname" placeholder="First name" value={this.state.firstname} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="lastname" md={4}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" name="lastname" placeholder="Last name" value={this.state.lastname} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="telnum" md={4}>Telephone Number</Label>
                                <Col md={10}>
                                    <Input type="text" name="telnum" value={this.state.telnum} placeholder="Tel. Number" />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="telnum" md={4}>Email</Label>
                                <Col md={10}>
                                    <Input type="text" name="email" value={this.state.email} placeholder="Email" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>

                                        <Label check>
                                            <Input type="checkbox" name="agree" checked={this.state.agree} /> <strong>May you contact you?</strong>
                                        </Label>

                                    </FormGroup>

                                </Col>
                                <Col md={{ size: 3, offset: 2 }}>
                                    <Input type="select" name="contactType" value={this.state.contactType}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>

                                </Col>

                            </FormGroup>
                            <FormGroup row>
                                <Label htmlfor="message" md={4}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" name="message" value={this.state.message} rows="12"> </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <button type="submit" color="primary">Send Feedback</button>
                                </Col>

                            </FormGroup>

                        </Form>

                    </div>
                </div>

            </div>
        );
    }
}

export default Contact;