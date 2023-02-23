import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const PageNotFound = () => {
    const bochhi = 'src/components/pageNotFound/bochhi.png'
    return (
        <div>
            <Container>
                <Row>
                    <Col><h1>Error: 404 | Page not found ╮(╯▽╰)╭</h1></Col>
                    <Col><div style={{ "background-image": "var(--backdropImg)", "background-size": "auto",
                        "display": "flex", "background-repeat": "no-repeat", "padding-top": "500px",
                        "background-position": "center", } as React.CSSProperties}>

                    </div></Col>
                </Row>
            </Container>


        </div>
    );
};

export default PageNotFound