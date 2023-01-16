import { Button, Card, Col, Row, Text } from '@nextui-org/react';
import React from 'react';

const AdvertiseCard = () => {
    return (
        <div>
            <Card css={{ w: "100%", h: "300px" }}>
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                    <Col>
                        <Text h3 color="white">
                            Special Offer 50% Off
                        </Text>
                    </Col>
                </Card.Header>
                <Card.Body css={{ p: 0 }}>
                    <Card.Image
                        src="https://nextui.org/images/card-example-5.jpeg"
                        objectFit="cover"
                        width="100%"
                        height="100%"
                        alt="Relaxing app background"
                    />
                </Card.Body>
                <Card.Footer
                    isBlurred
                    css={{
                        position: "absolute",
                        bgBlur: "#0f111466",
                        borderTop: "$borderWeights$light solid $gray800",
                        bottom: 0,
                        zIndex: 1,
                    }}
                >
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    <Text color="#d1d1d1" size={20}>
                                        Select Hotel Deals
                                    </Text>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row justify="flex-end">
                                <Button
                                    flat
                                    auto
                                    rounded
                                    css={{ color: "#94f9f0", bg: "#94f9f026" }}
                                >
                                    <Text
                                        css={{ color: "inherit" }}
                                        size={12}
                                        weight="bold"
                                        transform="uppercase"
                                    >
                                        Book Now
                                    </Text>
                                </Button>
                            </Row>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default AdvertiseCard;