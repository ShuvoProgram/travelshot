import { Button, Card, Container, Grid, Row, Text } from '@nextui-org/react';
import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import styles from '../../styles/Checkout.module.css';


const CheckoutCard = () => {
    return (
        <Container>
            <Text h1 size={30}>Your Booking</Text>

            <Card css={{ mw: "380px", px: "20px" }}>
                <Card.Header>
                    <img
                        alt="nextui logo"
                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                        width="80px"
                        height="80px"
                    />
                    <Grid.Container css={{ pl: "$6" }}>
                        <Grid xs={12}>
                            <Text h4 css={{ lineHeight: "$xs" }}>
                                Studio Allston Hotel
                            </Text>
                        </Grid>
                        <Grid xs={12} css={{alignItems: "center"}}>
                            <CiLocationOn/>
                            <Text css={{ color: "$accents8" }}>California</Text>
                        </Grid>
                    </Grid.Container>
                </Card.Header>
                <Card.Divider />
                <Card.Body css={{ py: "$10" }}>
                    <Text h4 size={20}>Your Trip</Text>
                    <div className={styles.checkoutBox}>
                        <Text>Date</Text>
                        <Text>01/15/2023 - 01/16/2023</Text>
                    </div>
                    <div className={styles.checkoutBox}>
                        <Text>Number Of Night</Text>
                        <Text>1</Text>
                    </div>
                </Card.Body>
                <Card.Divider />
                <Card.Footer css={{alignItems: "flex-start", flexDirection: "column", px: "20px"}}>
                    <Text h4 size={20}>Price Details</Text>
                    <div className={styles.priceBox}>
                        <Text><span>1</span> Night</Text>
                        <Text>$178</Text>
                    </div>
                    <Card.Divider/>
                    <div className={styles.priceBox}>
                        <Text h4 size={16}>Subtotal</Text>
                        <Text>$178</Text>
                    </div>
                    <Card.Divider/>
                    <div className={styles.priceBox}>
                        <Text h4 size={20}>Pay Amount</Text>
                        <Text h4 size={20}>$178</Text>
                    </div>
                </Card.Footer>
            </Card>
        </Container>
    );
};

export default CheckoutCard;