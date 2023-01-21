import { Button, Image, Spacer, Text } from '@nextui-org/react';
import React from 'react';
import styles from '../../styles/Home.module.css';
import { AiFillStar } from "react-icons/ai";

const HotelCard = () => {
    return (
        <div className={styles.hotelCard}>
            <div>
                <Image src='https://i.ibb.co/vB6zKj0/cox-sImg.jpg' alt='#' objectFit='cover' width="100%" className={styles.hotelImg}/>
            </div>
            <div className={styles.hotelInfo}>
                <div className="flex text-orange-400">
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                </div>
                <Text h4 size={20}>Eastern Discovery</Text>
                <Text h4 size={15}>New York City</Text>
                <hr />
                {/* <Spacer y={1} /> */}
                <div className={styles.hotelReview}>
                    <Button size="xs"><span>5/5</span></Button>
                    <div>
                        <Text>Excellent</Text>
                    </div>
                    <div>
                        (<span>3</span> Reviews)
                    </div>
                </div>
                <div className={styles.hotelPriceBox}>
                    <span className={styles.hotelPrice}> From:
                    <Text h4 size={20} css={{marginLeft: "$5"}}>$120</Text> / Night 
                    </span>
                </div>
            </div>
        </div>
    );
};

export default HotelCard;