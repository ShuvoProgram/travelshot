import { Grid, Input } from "@nextui-org/react";
import styles from '../../styles/Home.module.css';
import React from "react";

const Search = () => {
  return (
    <section className={styles.search}>
      <Grid.Container gap={4} css={{ alignItems: "flex-end", justifyContent: "center"}}>
        <Grid>
          <Input
            rounded
            bordered
            label="Location"
            placeholder="Where are you going?"
            color="default"
            type="search"
          />
        </Grid>
        <Grid>
          <Input width="186px" label="Check In" type="date" />
        </Grid>
        <Grid>
          <Input width="186px" label="Check Out" type="date" />
        </Grid>
        <Grid className={styles.searchBtn}>
            <Input type="submit" />
        </Grid>
      </Grid.Container>
    </section>
  );
};

export default Search;
