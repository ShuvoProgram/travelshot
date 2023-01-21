import { Divider, Image, Text, Tooltip } from '@nextui-org/react';
import { GiVikingLonghouse } from "react-icons/gi";
import { BiBed } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdChildCare } from "react-icons/md";
import styles from '../../styles/HotelDetails.module.css';
import React from 'react';
import Link from 'next/link';

const AvailabilityCard = () => {
    return (
        <div className={styles.availabilityBox}>
            <div>
                <Image src='https://i.ibb.co/vB6zKj0/cox-sImg.jpg' alt='' objectFit='cover' width='100%' height='100%' className='rounded-t-lg lg:rounded-l-xl'/>
            </div>
            <div className='w-80 flex flex-col justify-around p-4'>
                <Text h2 size={20}>Standard Double Room</Text>
                <div className='flex space-x-2'>
                    <div>
                        <Tooltip content={"Room Footage"} className="p-2 border border-1 border-gray-300 rounded-lg shadow-md">
                        <GiVikingLonghouse className='h-7 w-7 text-gray-600'/>
                        </Tooltip>
                        <p>170m</p>
                    </div>
                    <div>
                        <Tooltip content={"No. Beds"} className="p-2 border border-1 border-gray-300 rounded-lg shadow-md">
                            <BiBed className='h-7 w-7 text-gray-600' />
                        </Tooltip>
                        <p>x2</p>
                    </div>
                    <div>
                        <Tooltip content={"No. Adults"} className="p-2 border border-1 border-gray-300 rounded-lg shadow-md">
                            <BsFillPeopleFill className='h-7 w-7 text-gray-600' />
                        </Tooltip>
                        <p>x3</p>
                    </div>
                    <div>
                        <Tooltip content={"No. Children"} className="p-2 border border-1 border-gray-300 rounded-lg shadow-md">
                            <MdChildCare className='h-7 w-7 text-gray-600' />
                        </Tooltip>
                        <p>x1</p>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-48 flex lg:flex-col justify-around lg:justify-center items-center'>
                <Text h4 size={17}>$<span className='font-semibold'>160</span>/night</Text>
                <Link href='#' className='px-6 py-3 bg-blue-600 text-white rounded-2xl'>Room Details</Link>
            </div>
        </div>
    );
};

export default AvailabilityCard;