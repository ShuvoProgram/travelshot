import { Container, Image, Input, Text } from "@nextui-org/react";
import styles from '../../styles/Home.module.css'
import React from "react";

const EmailSubscribe = () => {
  return (
    <section className={styles.emailSubscribeBox}>
      <div className={styles.emailSubscribe}>
        <div className={styles.imgBox}>
            <img src="https://modtel.travelerwp.com/wp-content/uploads/2022/06/Rectangle-7-min.png" alt="email" />
        </div>
        <div className={styles.formContainer}>
          <div>
            <Text h1 size={40} css={{textAlign: "center"}}>Get special offers, and more from Traveler</Text>
            <Text h4 size={16} css={{textAlign: "center"}}>
              Subscribe to see secret deals prices drop the moment you sign up!
            </Text>
          </div>
          <form className={styles.emailInput}>
            <Input
              rounded
              bordered
              animated={false}
              placeholder="Email"
              color="primary"
              fullWidth
            />
            <Input
            type="submit"
            width="100px"
            css={{
                position: "absolute",
                right: "$8"
            }}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailSubscribe;
