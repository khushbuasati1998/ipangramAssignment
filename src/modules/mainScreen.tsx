import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MediaControlCard from './card';

const MainScreen = (props: any) => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography
                variant="h3"
                component="div"
                sx={{ textAlign: 'center', margin: '8rem 0px 0.5rem 0px', fontWeight: 'bold', color: '#052440' }}
            >
                Compare Yofo cards and choose
            </Typography>
            <Typography
                variant="h3"
                component="div"
                sx={{ textAlign: 'center', marginBottom: '2.5rem', fontWeight: 'bold', color: '#052440' }}
            >
                the one that works for you.
            </Typography>
            <Grid sx={{ textAlign: 'center', marginBottom: '12rem' }}>
                <Button
                    variant="outlined"
                    sx={{
                        color: '#000', textTransform: 'capitalize',
                        fontWeight: 'bold',
                        border: '2px solid rgba(25, 118, 210, 0.5)',
                        borderRadius: 30,
                        padding: '10px 25px',
                    }}
                >
                    Get Download Link
                </Button>
            </Grid>
            <Grid
                container={true}
                direction="row"
                sx={{ padding: '1rem' }}
                justifyContent="space-between"
            >
                <Grid
                    item={true}
                    md={3}
                    xs={10}
                    sm={5}
                    sx={{ padding: '1rem', margin: '0px auto 0px 0px' }}
                >
                    <MediaControlCard
                        bgColor='#f3ab08'
                        rotateDeg='44'
                        marginLeft='-24px'
                        moveCardLeftMArgin='10rem'
                        detailsCardWidth="40%"
                    />
                </Grid>
                <Grid
                    item={true}
                    md={3}
                    xs={10}
                    sm={5}
                    sx={{ padding: '1rem', margin: '0px auto' }}
                >
                    <MediaControlCard
                        bgColor='#5aa3ce'
                        rotateDeg='14'
                        marginLeft='0px'
                        moveCardLeftMArgin='7rem'
                        detailsCardWidth="48%"
                    />
                </Grid>
                <Grid
                    item={true}
                    md={3}
                    xs={10}
                    sm={5}
                    sx={{ padding: '1rem', margin: '0px 0px 0px auto' }}
                    className="card3"
                >
                    <MediaControlCard
                        bgColor='#031e2b'
                        rotateDeg='-14'
                        marginLeft='0px'
                        moveCardLeftMArgin='13px'
                        detailsCardWidth="49%"
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
export default MainScreen;