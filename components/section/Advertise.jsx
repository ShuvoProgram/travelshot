import { Container, Grid } from '@nextui-org/react';
import React from 'react';
import AdvertiseCard from '../card/AdvertiseCard';
import styles from '../../styles/Home.module.css';

const Advertise = () => {
    return (
        <Container fluid className={styles.advertiseContainer}>
            <Grid.Container gap={2}>
                <Grid xs={12} sm={6}>
                    <AdvertiseCard/>
                </Grid>
                <Grid xs={12} sm={6}>
                    <AdvertiseCard/>
                </Grid>
            </Grid.Container>
        </Container>
    );
};

export default Advertise;