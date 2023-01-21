import { Checkbox, Text } from '@nextui-org/react';
import { AiFillStar } from "react-icons/ai";
import React from 'react';

const HotelStar = () => {
    return (
        <div className='bg-gray-100 max-w-md rounded-lg p-4'>
            <Text h4 size={18}>Hotel Star</Text>
            <div>
                <div>
                    <Checkbox >
                    <div className="flex text-orange-400">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    </Checkbox>
                </div>
                <div>
                    <Checkbox>
                    <div className="flex text-orange-400">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    </Checkbox>
                </div>
                <div>
                    <Checkbox>
                    <div className="flex text-orange-400">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    </Checkbox>
                </div>
                <div>
                    <Checkbox>
                    <div className="flex text-orange-400">
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    </Checkbox>
                </div>
                <div>
                    <Checkbox >
                    <div className="flex text-orange-400">
                        <AiFillStar />
                    </div>
                    </Checkbox>
                </div>
            </div>
        </div>
    );
};

export default HotelStar;