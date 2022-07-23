import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';

const subscribeBtn = 'Subscribe Now';
const navItems = ['Home', 'Cards', 'Features', 'About', 'Contact', subscribeBtn];

const Navbar = (props: any) => {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        useState<null | HTMLElement>(null);

    const [activeIndex, setActiveIndex] = useState<number>(1);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            {navItems.map((item: string, index: number) => (
                <MenuItem>
                    <Button key={item} sx={{ color: '#000' }}>
                        {item}
                    </Button>
                </MenuItem>
            ))}
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ background: '#fff', padding: '1rem' }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ fontSize: 60, fontWeight: 'bold' }}
                        className="heading"
                    >
                        Yofo
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {navItems.map((item: string, index: number) => (
                            <>
                                {
                                    item === subscribeBtn ?
                                        <Button
                                            key={item}
                                            variant="outlined"
                                            sx={{
                                                color: '#000', textTransform: 'capitalize',
                                                fontWeight: 'bold',
                                                border: '3px solid rgba(25, 118, 210, 0.5)',
                                                borderRadius: 30,
                                                padding: '10px 15px',
                                                marginLeft: 5
                                            }}
                                        >
                                            {item}
                                        </Button>
                                        : <Button
                                            key={item}
                                            sx={{
                                                color: activeIndex === index ? '#1976d2' : '#8e8484',
                                                textTransform: 'capitalize', margin: '0px 8px'
                                            }}
                                        >
                                            {item}
                                        </Button>
                                }
                            </>
                        ))}
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </Box>
    );
}
export default Navbar;