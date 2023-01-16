import { Avatar, Image, Link, Text } from '@nextui-org/react';
import styles from '../../styles/Home.module.css';
import React from 'react';

const DestinationCard = () => {
    return (
        <div className={styles.wrapper}>
            <Link className={styles.card}>
                <Image src='https://i.ibb.co/vB6zKj0/cox-sImg.jpg' alt='destination' className={styles.img}/>
            </Link>
        </div>
    );
};

export default DestinationCard;