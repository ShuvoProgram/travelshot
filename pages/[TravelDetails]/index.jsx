import { Container, Grid, Spacer, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import React from 'react';
import BookingCard from '../../components/card/BookingCard';
import HotelCard from '../../components/card/HotelCard';
import HotelDetails from '../../components/TravelSection/HotelDetails';
import HotelShow from '../../components/TravelSection/HotelShow';
import InformationContact from '../../components/TravelSection/InformationContact';

const TravelDetails = () => {
    const router = useRouter();
    const travelId = router.query.travelId;
    return (
        <>
            <HotelShow/>
            <Grid.Container>
                <Grid xs={8}>
                    <HotelDetails/>
                </Grid>
                <Grid xs={4} css={{justifyContent: "center", flexDirection: "column", alignItems: "flex-start"}}>
                    <BookingCard/>
                    <Spacer y={3}/>
                    <InformationContact/>
                </Grid>
            </Grid.Container>
            <Spacer y={2}/>
            <Container>
            <hr />
            <Spacer y={1}/>
            <Text h1 size={30}>Explore Other Options</Text>
            <Spacer y={2}/>
             <Grid.Container gap={2}>
                <Grid xs={12} sm={3} css={{flexDirection: "column"}}>
            <HotelCard/>
                </Grid>
                <Grid xs={12} sm={3} css={{flexDirection: "column"}}>
            <HotelCard/>
                </Grid>
                <Grid xs={12} sm={3} css={{flexDirection: "column"}}>
            <HotelCard/>
                </Grid>
                <Grid xs={12} sm={3} css={{flexDirection: "column"}}>
            <HotelCard/>
                </Grid>
            </Grid.Container>
            </Container>
            <Spacer y={2}/>
        </>
    );
};

export default TravelDetails;