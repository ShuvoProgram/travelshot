import { Button, Grid, Input, Spacer, Text } from '@nextui-org/react';
import React from 'react';
import styles from '../../styles/HotelDetails.module.css';

const BookingCard = () => {
    return (
        <div className={styles.bookingBox}>
            <div>
                <Text h2 size={18} css={{textAlign: "center"}}>From $<span>324</span>/ night</Text>
            </div>
            <Grid.Container css={{justifyContent: "space-between"}}>
                <Grid xs={6}>
                    <Input
                        width="155px"
                        label="Check In"
                        type="date"
                    />
                </Grid>
                <Grid xs={6}>
                    <Input
                        width="155px"
                        label="Check Out"
                        type="date"
                    />
                </Grid>
                <Grid>
                </Grid>
            </Grid.Container>
            <Spacer y={1}/>
            <Button css={{margin: "auto"}}>Reserve</Button>
        </div>
    );
};

export default BookingCard;