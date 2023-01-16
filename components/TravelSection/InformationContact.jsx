import { Text } from '@nextui-org/react';
import React from 'react';
import styles from '../../styles/HotelDetails.module.css'

const InformationContact = () => {
    return (
        <div className={styles.contactBox}>
            <Text h1 size={25}>Information Contact</Text>
            <Text h4 size={20}>Email</Text>
            <Text>Khan.shuvo.2017@gmail.com</Text>
            <Text h4 size={20}>Phone</Text>
            <Text>+88016xxxxxxx</Text>
        </div>
    );
};

export default InformationContact;