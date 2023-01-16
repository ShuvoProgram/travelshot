import { Button, Grid, Spacer, Text } from '@nextui-org/react';
import styles from '../../styles/HotelDetails.module.css'
import React from 'react';
import Review from './Review';

const HotelDetails = () => {
    return (
        <section className={styles.details}>
            <div>
                <Text h1 size={30}>Southwest States</Text>
                <div className={styles.review}>
                    <Button size="xs"><span>5</span>/5</Button>
                    <div>
                        <Text>Excellent</Text>
                    </div>
                    <div>
                        (<span>3</span> Reviews)
                    </div>
                    <div>
                        <Text>Los Angeles</Text>
                    </div>
                </div>
            </div>
            <Spacer y={2}/>
            <hr />
            <Spacer y={2}/>
            <div>
                <Text h1 size={25}>About This Hotel</Text>
                <p>This boutique hotel in the Manhattan neighborhood of Nolita features a private rooftop and rooms with free WiFi. The Bowery subway station is 1 block from this New York hotel.

Guest rooms at the Nolitan Hotel provide a 37-inch flat-screen cable TV and an iPod dock. The bathrooms provide bathrobes and slippers.

The hotel provides free bike rentals and a local gym membership for guests. There is also on-site dining at the French bistro Cantine Parisienne. A complimentary wine and cheese hour is served every Monday through Saturday.

Times Square, Rockefeller Center and Madison Square Garden are 4.8 km from The Nolitan Hotel. The hotel is bordered by SoHo, Little Italy and Chinatown.

NoLita is a great choice for travelers interested in nightlife, food and culture.
In this area you can shop ’til you drop for popular brands like Apple, H&M, Zara, Prada, Ralph Lauren.

We speak your language!</p>
            </div>
            <Spacer y={1}/>
            <hr />
            <Spacer y={1}/>
            <div>
                 <Text h1 size={25}>Hotel Facility</Text>
                 <Grid.Container>
                    <Grid xs={4}>Air Conditioning</Grid>
                    <Grid xs={4}>Airport Transport</Grid>
                    <Grid xs={4}>Flat Tv</Grid>
                    <Grid xs={4}>Internet – Wifi</Grid>
                    <Grid xs={4}>Parking</Grid>
                    <Grid xs={4}>Restaurant</Grid>
                    <Grid xs={4}>Spa & Sauna</Grid>
                    <Grid xs={4}>Washer & Dryer</Grid>
                 </Grid.Container>
            </div>
            <Spacer y={2}/>
            <hr />
            <Spacer y={2}/>
            <Review/>
        </section>
    );
};

export default HotelDetails;