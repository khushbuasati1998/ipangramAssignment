import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CurrencyRupeeSharpIcon from '@mui/icons-material/CurrencyRupeeSharp';

const MediaControlCard = (
    { bgColor, rotateDeg, marginLeft, moveCardLeftMArgin, cardWidth, detailsCardWidth }: any) => {
    return (
        <Grid className="container_row">
            <Grid className="layer1">
                <Card sx={{
                    background: bgColor,
                    display: 'flex',
                    color: '#fff',
                    width: cardWidth,
                    height: '27vh',
                    fontWeight: 'bold',
                    transform: `rotate(${rotateDeg}deg)`,
                    marginLeft: marginLeft,
                    paddingBottom: 1,
                    marginBottom: '4rem',
                    borderRadius: 4,
                    '&:hover': {
                        transform: `rotate(${rotateDeg - 3}deg)`,
                    }
                }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography sx={{ fontWeight: 'bold', fontSize: 24 }}>
                                Yofo
                            </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                            .......040345
                        </Box>
                    </Box>
                </Card>
            </Grid>
            <Grid className="layer2">
                <Card sx={{
                    background: '#dad9d9',
                    display: 'flex',
                    width: detailsCardWidth,
                    height: '40vh',
                    fontWeight: 'bold',
                    marginLeft: moveCardLeftMArgin,
                    transform: `rotate(${Number(rotateDeg) - 2}deg)`,
                    paddingBottom: 1,
                    marginBottom: '4rem',
                    borderRadius: 0,
                }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', padding: '1rem 0.5rem 0px 0.5rem' }}>
                        <CardContent sx={{
                            flex: '1 0 auto', borderTop: '1px solid #585656', textAlign: 'center'
                        }}>
                            <CurrencyRupeeSharpIcon
                                fontSize="large"
                                sx={{ padding: '1rem', color: bgColor }}
                            />
                            <Typography sx={{
                                color: '#585656', fontSize: 14,
                                borderBottom: '1px solid #585656', paddingBottom: '1rem',

                            }}>
                                Sunt in culpa qui officia deserunt molit aanim
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
            </Grid>
        </Grid>
    );
}
export default MediaControlCard;