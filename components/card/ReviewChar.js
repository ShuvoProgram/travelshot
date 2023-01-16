import { Text } from '@nextui-org/react';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import styles from '../../styles/HotelDetails.module.css';

const ReviewChar = () => {
    return (
        <div className={styles.reviewChart}>
            <div className={styles.reviewBox}>
            <AiFillStar size={30}/>
            <Text h1 size={20} css={{marginLeft: "$5"}}><span>5</span>/5</Text>
            <Text h1 size={20} css={{ marginLeft: "$5" }}>Excellent</Text>
            <Text css={{ marginLeft: "$5" }}>(<span>2</span> Reviews)</Text>
            </div>
        </div>
    );
};

export default ReviewChar;