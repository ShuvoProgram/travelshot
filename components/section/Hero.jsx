import { Text } from '@nextui-org/react';
import React from 'react';
import styles from '../../styles/Home.module.css';
import Search from './Search';

const Hero = () => {
    return (
        <section >
            <div className={styles.heroContainer}>
                <div>
                    <div className={styles.textBox}>
                         <Text h1 size={60} css={{
                        textAlign: 'center',
                        color: "White"
                    }}>
                        Find Your Next Journey
                    </Text>
                    <Text h5 size={20} css={{
                        textAlign: 'center',
                        color: "White"
                    }}>
                        Get the best prices on 2,000,000+ properties, worldwide
                    </Text>
                    </div>
                </div>
            </div>
                <Search/>
        </section>
    );
};

export default Hero;