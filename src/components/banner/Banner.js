import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Banner2 from "../../assets/banner.jpg";
import Carousel from './Carousel';

const useStyles = makeStyles(() => ({
    banner: {        
        backgroundImage: `url(${Banner2})`,
    },
    bannerContent: {
        height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",
    },
    tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    },
}))

const Banner = () => {

    const classes = useStyles();

  return (
    <div className={classes.banner}>
        <Container className={classes.bannerContent}>
            <div className={classes.tagline}>
                <Typography 
                variant='h2'
                style={{
                    fontWeight: "bold",
                    marginBottom: 15,
                    fontFamily: "Montserrat",
                }}
                >
                    Crypto Tracker
                </Typography>
                <Typography 
                variant='subtitle2'
                style={{
                    color: "darkgrey",
                    textTransform: "capitalize",
                    fontFamily: "Montserrat",
                }}
                >
                    Get all the Info regarding your favorite Crypto Currency
                </Typography>
            </div>
                <Carousel/>
        </Container>
    </div>
  )
}

export default Banner