import { Avatar, Card, Container, Grid, Image, Link, Text } from '@nextui-org/react';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const ReviewCard = () => {
    return (
        <Card css={{ p: "$6", mw: "600px", marginTop: "$10" }}>
            <Card.Header>
                <Avatar
                    squared
                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                <Grid.Container css={{ pl: "$6" }}>
                    <Grid xs={12}>
                        <Text h4 css={{ lineHeight: "$xs" }}>
                            Linda
                        </Text>
                    </Grid>
                    <Grid xs={12}>
                        <Text css={{ color: "$accents8" }}>15/01/2023</Text>
                    </Grid>
                    <Grid xs={12} css={{ color: "orange"}}>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </Grid>
                </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: "$2" }}>
                <Text>
                    Make beautiful websites regardless of your design experience.
                </Text>
            </Card.Body>
        </Card>
    );
};

export default ReviewCard;