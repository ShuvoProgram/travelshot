import { Grid, Text } from '@nextui-org/react';
import React from 'react';
import HotelCard from '../card/HotelCard';

const Hotel = () => {
    return (
        <div>
            <Text h1 size={50} css={{textAlign: "center"}}>Plan Your Next Staycation</Text>
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
        </div>
    );
};

export default Hotel;