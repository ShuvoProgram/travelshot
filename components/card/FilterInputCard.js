import { Checkbox, Text } from '@nextui-org/react';
import React from 'react';

const FilterInputCard = ({title, inputName}) => {
    console.log(inputName);
    return (
        <div className='bg-gray-100 max-w-md rounded-lg p-4'>
            <Text h4 size={18}>{title}</Text>
            <div className='flex flex-col'>
                {
                    inputName.map((name, idx) => (
                        <Checkbox key={idx + 1}>
                            {name.name}
                        </Checkbox>
                    ))
                }
            </div>
        </div>
    );
};

export default FilterInputCard;