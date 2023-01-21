import { FilledInput, FormControl, InputAdornment, InputLabel, Slider } from '@mui/material';
import { Button, Link, Text } from '@nextui-org/react';
import React from 'react';

function valuetext(value) {
    return `${value}°C`;
}

const FilterPriceCard = () => {
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='bg-gray-100 max-w-md rounded-lg  p-4'>
            <Text h4 size={18}>Filter Price</Text>
             
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}

            />
            <div className='flex'>
            <FormControl disabled size='small' sx={{ m: 1 }} variant="filled">
                <InputLabel htmlFor="filled-adornment-amount">Min Price</InputLabel>
                <FilledInput
                    id="filled-adornment-amount"
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
            </FormControl>
            <FormControl disabled size='small' sx={{ m: 1 }} variant="filled">
                <InputLabel htmlFor="filled-adornment-amount">Max Price</InputLabel>
                <FilledInput
                    id="filled-adornment-amount"
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
            </FormControl>
            </div>
            <hr />
            <div className='flex justify-between mt-4'>
                <Link>Clear</Link>
                <Button size='sm'>Apply</Button>
            </div>
        </div>
    );
};

export default FilterPriceCard;