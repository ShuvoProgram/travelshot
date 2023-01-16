import { Container, Grid, Link, Text } from '@nextui-org/react';
import styles from '../../styles/Home.module.css';
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import React from 'react';

const Footer = () => {
    return (
        <section className={styles.footer}>
            <Container>
                <Grid.Container css={{justifyContent: "space-between"}}>
                    <Grid className={styles.linkColor} css={{display: "flex", flexDirection: "column", width: "300px"}}>
                        <Text h4 size={20}>Support</Text>
                        <Link>Help Center</Link>
                        <Link>Our COVID-19 Response</Link>
                        <Link>Cancellation options</Link>
                        <Link>Safety Information</Link>
                    </Grid>
                    <Grid className={styles.linkColor} css={{display: "flex", flexDirection: "column", width: "300px"}}>
                        <Text h4 size={20}>Company</Text>
                        <Link>About Us</Link>
                        <Link>Community Blog</Link>
                        <Link>Careers</Link>
                        <Link>Privacy Policy</Link>
                        <Link>Term Of Service</Link>
                    </Grid>
                    <Grid className={styles.linkColor} css={{display: "flex", flexDirection: "column", width: "300px"}}>
                        <Text h4 size={20}>Contact</Text>
                        <Link>PartnerShips</Link>
                        <Link>FQA</Link>
                        <Link>Get In Touch</Link>
                    </Grid>
                    <Grid className={styles.linkColor} css={{display: "flex", flexDirection: "column", width: "300px"}}>
                        <Text h4 size={20}>Social</Text>
                       <div className={styles.socialIcon}>
                        <BsFacebook style={{color: "#5063AF"}}/>
                        <BsTwitter style={{color: "#68b8f7"}}/>
                        <BsInstagram style={{color: "#DC5B97"}}/>
                        <BsYoutube style={{color: "#F6424E"}}/>
                       </div>
                    </Grid>
                </Grid.Container>
            </Container>
            <hr className={styles.footerHr}/>
            <div className={styles.copyrightBox}>
                <div style={{marginLeft: "10px"}}>
                    © Copyright TravelShot 2023
                </div>
                <div>

                </div>
            </div>
        </section>
    );
};

export default Footer;