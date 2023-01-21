import { Container, Dropdown, Grid, Pagination, Spacer } from '@nextui-org/react';
import React from 'react';
import facility from '../../../shared/data/facility';
import FilterInputCard from '../../card/FilterInputCard';
import FilterPriceCard from '../../card/FilterPriceCard';
import HotelCard from '../../card/HotelCard';
import HotelStar from '../../card/HotelStar';

const MainContainer = () => {
    const [selected, setSelected] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );
    return (
         <section className='mt-10'>
      <Grid.Container gap={4}>
        <Grid xs={12} md={3}>
            <div className='flex flex-col justify-around h-full'>
            <FilterPriceCard/>
            <Spacer y={1}/>
            <HotelStar/>
            <Spacer y={1}/>
            <FilterInputCard title={'Facility'} inputName={facility}/>
            {/* <FilterPriceCard/> */}
            </div>
        </Grid>
        <Grid xs={12} md={9}>
          <div className='w-full'>
            <div className='flex justify-between'>
            <div>23 Hotels found</div>
              <div className='mr-10'>
                <Dropdown>
      <Dropdown.Button flat>Sort</Dropdown.Button>
      <Dropdown.Menu aria-label="Static Actions"
       radioGroup='single'
       selectedKeys={selected}
       onSelectionChange={setSelected}
       >
        <Dropdown.Item key="new">New file</Dropdown.Item>
        <Dropdown.Item key="copy">Copy link</Dropdown.Item>
        <Dropdown.Item key="edit">Edit file</Dropdown.Item>
        <Dropdown.Item key="delete" color="error">
          Delete file
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
              </div>
            </div>
                <Spacer y={1}/>
            <Grid.Container>
            <Grid md={4}>
                <HotelCard/>
            </Grid>
            <Grid md={4}>
                <HotelCard/>
            </Grid>
            <Grid md={4}>
                <HotelCard/>
            </Grid>
          </Grid.Container>
          <Spacer y={2}/>
            <Pagination total={20} initialPage={1} css={{mx: "$72"}}/>
          </div>
        </Grid>
      </Grid.Container>
    </section>
    );
};

export default MainContainer;