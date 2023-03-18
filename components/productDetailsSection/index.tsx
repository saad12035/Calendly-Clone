import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Props {
    text1: string;
    text2: string;
    text3: string;
    buttonText: string;
    imageSrc: string;
    reverse?: boolean;
}

const ProductDetailsCards: React.FC<Props> = ({ text1, text2, text3, buttonText, imageSrc, reverse = false }) => {
    const firstItemLg = reverse ? 4 : 4;
    const secondItemLg = reverse ? 6 : 6;

    const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.5 });
    const controls1 = useAnimation();
    const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.5 });
    const controls2 = useAnimation();

    React.useEffect(() => {
        if (inView1) {
            controls1.start({
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 }
            });
        }
        if (inView2) {
            controls2.start({
                opacity: 1,
                y: 0,
                transition: { duration: 0.4 }
            });
        }
    }, [controls1, controls2, inView1, inView2]);


    return (
        <Grid container justifyContent="center" flexDirection={reverse ? 'row-reverse' : 'row'}>
            <Grid
                item
                md={10}
                lg={firstItemLg}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'left',
                    lineHeight: 1.5,
                    padding: "1em"

                }}
            >

                <motion.div
                    ref={ref1}
                    animate={controls1}
                    initial={{ opacity: 0, y: 50 }}
                >
                    <Typography
                        variant="body2"
                        color="primary"
                        marginBottom={4}

                    >
                        {text1}
                    </Typography>
                    <Typography
                        variant="h4"
                        fontWeight="500"
                        marginBottom={4}

                    >
                        {text2}
                    </Typography>
                    <Typography
                        variant="body1"
                        fontWeight="200"
                        marginBottom={4}
                    >
                        {text3}
                    </Typography>
                    <Box alignContent="center">
                        <a href="https://example.com" style={{ textDecoration: "none" }}>
                            <Typography
                                variant="body2"
                                color="primary"
                                fontWeight="500"
                                marginBottom={4}
                                display="flex"
                                alignItems="center"
                            >
                                {buttonText}
                                <ArrowForwardIcon fontSize="small" style={{ marginLeft: "1vw" }} />
                            </Typography>
                        </a>
                    </Box>
                </motion.div>
            </Grid>
            <Grid
                item
                sm={12}
                md={12}
                lg={secondItemLg}
                textAlign="center"
                justifyContent="center"
                marginTop="2vh"
                padding="1em"
            >
                <motion.div
                    ref={ref2}
                    animate={controls2}
                    initial={{ opacity: 0, y: 50 }}
                >
                    <img src={imageSrc} width="75%" style={{ backgroundColor: "#F7FAFE" }} />
                </motion.div>
            </Grid>
        </Grid>
    );
}

export default ProductDetailsCards;

