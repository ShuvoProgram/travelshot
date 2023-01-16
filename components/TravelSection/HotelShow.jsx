import { Grid, Image } from '@nextui-org/react';
import React from 'react';

const HotelShow = () => {
    return (
        <Grid.Container gap={1}>
            <Grid xs={6}>
                <Image src='https://modtel.travelerwp.com/wp-content/uploads/2022/06/Rectangle-7-min.png' alt=''/>
            </Grid>
            <Grid xs={3} css={{flexDirection: "column"}}>
                 <Grid>
                    <Image src='https://modtel.travelerwp.com/wp-content/uploads/2022/06/Rectangle-7-min.png' alt=''/>
                 </Grid>
                 <Grid>
                    <Image src='https://modtel.travelerwp.com/wp-content/uploads/2022/06/Rectangle-7-min.png' alt=''/>
                 </Grid>
            </Grid>
            <Grid xs={3} css={{flexDirection: "column"}}>
                 <Grid>
                    <Image src='https://modtel.travelerwp.com/wp-content/uploads/2022/06/Rectangle-7-min.png' alt=''/>
                 </Grid>
                 <Grid>
                    <Image src='https://modtel.travelerwp.com/wp-content/uploads/2022/06/Rectangle-7-min.png' alt=''/>
                 </Grid>
            </Grid>
        </Grid.Container>
    );
};

export default HotelShow;