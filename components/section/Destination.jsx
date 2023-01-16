import { Grid, Text } from '@nextui-org/react';
import React from 'react';
import DestinationCard from '../card/DestinationCard';

const Destination = () => {
    return (
        <section>
            <Text h1 size={50} css={{textAlign: "center"}}>Destination</Text>
            <Grid.Container gap={2}>
                <Grid xs={6} sm={2} css={{flexDirection: "column"}}>
                    <DestinationCard/>
                </Grid>
            </Grid.Container>
        </section>
    );
};

export default Destination;