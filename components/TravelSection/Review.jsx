import { Text } from '@nextui-org/react';
import React from 'react';
import ReviewCard from '../card/ReviewCard';
import ReviewChar from '../card/ReviewChar';

const Review = () => {
    return (
        <section>
            <Text h1 size={30}>Reviews</Text>
            <ReviewChar/>
            <ReviewCard/>
            <ReviewCard/>
        </section>
    );
};

export default Review;