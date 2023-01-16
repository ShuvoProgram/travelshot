import { Grid } from '@nextui-org/react';
import React from 'react';
import CheckoutCard from '../../components/card/CheckoutCard';
import CheckOutForm from '../../components/form/CheckOutForm';

const index = () => {
    return (
        <Grid.Container css={{my: "$20"}}>
            <Grid xs={8}>
                <CheckOutForm/>
            </Grid>
            <Grid xs={4}>
                <CheckoutCard/>
            </Grid>
        </Grid.Container>
    );
};

export default index;