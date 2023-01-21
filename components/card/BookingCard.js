import { Button, Grid, Input, Spacer, Text } from '@nextui-org/react';
import Link from 'next/link';
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
            <Link href="/" className='px-10 py-2 bg-blue-500 text-white mx-12 rounded-xl'>Check Availability</Link>
        </div>
    );
};

export default BookingCard;