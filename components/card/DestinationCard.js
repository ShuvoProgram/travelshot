import { Avatar, Container, Image, Link, Text } from '@nextui-org/react';
import styles from '../../styles/Home.module.css';
import React from 'react';

const DestinationCard = () => {
    return (
        <div className={styles.wrapper}>
            <div>
            <Link className={styles.card}>
                <Image src='https://i.ibb.co/vB6zKj0/cox-sImg.jpg' alt='destination' className={styles.img}/>
            </Link>
                <div className={styles.destination_text}>
                    <Link className='text-2xl font-semibold hover:text-sky-500' css={{ color: "#0f172a"}}>New York</Link>
                    <Link className='hover:text-sky-500' css={{ color: "#0f172a"}}>7 Hotel</Link>
                </div>
            </div>
        </div>
    );
};

export default DestinationCard;