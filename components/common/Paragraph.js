import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Paragraph = ({title, inner, line ,hrClass}) => {
    return (
        <>
            <div className={title}>
                <h4>special offer</h4>
                <h2 className={inner}>top collection</h2>
                {
                    line ?
                        <div className="line"></div> : 
                    hrClass ?
                        <hr role="tournament6"></hr>
                    : ''
                }
            </div>
            <Container>
                <Row>
                    <Col lg="6" className="m-auto">
                        <div className="product-para">
                            <p className="text-center">"Discover our exclusive Top Collection at unbeatable prices! Elevate your wardrobe with our special offers on the latest trends and timeless classics."</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Paragraph;