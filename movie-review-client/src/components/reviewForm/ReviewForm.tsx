import React from 'react';
import {Form, Button} from "react-bootstrap";

function ReviewForm(props: {handleSubmit: any, revText: any, labelText: string, defaultValue: any}) {
    return (
        <Form>
            <Form.Group className={"mb-3"} controlId={"exampleForm.ControlTextarea1"}>
                <Form.Label>{props.labelText}</Form.Label>
                <Form.Control ref={props.revText} as={"textarea"} rows={3} defaultValue={props.defaultValue}/>
            </Form.Group>
            <Button variant={"outline-info"} onClick={props.handleSubmit}>Submit</Button>
        </Form>
    );
}

export default ReviewForm;