'use client'

import React, { useState, useEffect } from 'react'
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import Button from '@mui/joy/Button';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import DensityMedium from '@mui/icons-material/DensityMedium';
import Close from '@mui/icons-material/Close';
import { scroller } from 'react-scroll';
import { useTheme } from '@mui/joy/styles';

const SideNav = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDrawer =
        (inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }
            setOpen(inOpen);
        }

    const handleNavClick = (section: string, i: number) => {
        setOpen(false);
        setTimeout(() => {
            scroller.scrollTo(section, {
                duration: 800,
                smooth: 'easeInOutQuart',
                offset: -20,
            });
        }, 300);
    }

    return (
        <Box sx={(theme) => ({
            display: 'flex',
            [theme.breakpoints.up(780)]: {
                display: 'none'
            }
        })}>
            <Button
                variant="plain"
                color="neutral"
                onClick={toggleDrawer(true)}
                sx={{
                    position: 'fixed',
                    top: 10,
                    left: 10,
                    zIndex: 1000,
                    backgroundColor: scrolled ? 'rgba(3, 7, 18, 0.85)' : 'rgba(3, 7, 18, 0.3)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '10px',
                    padding: '8px',
                    boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.3)' : 'none',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    }
                }}
            >
                <DensityMedium sx={{ color: '#F9FAFB' }} />
            </Button>
            
            <Drawer 
                open={open} 
                onClose={toggleDrawer(false)}
                sx={{
                    '& .MuiDrawer-content': {
                        backgroundColor: '#030712',
                        borderRight: '1px solid rgba(255, 255, 255, 0.08)',
                    }
                }}
            >
                <Box
                    role="presentation"
                    sx={{ 
                        width: 280,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'flex-end', 
                        p: 2 
                    }}>
                        <Button
                            variant="plain"
                            color="neutral"
                            onClick={toggleDrawer(false)}
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                }
                            }}
                        >
                            <Close sx={{ color: '#F9FAFB' }} />
                        </Button>
                    </Box>
                    
                    <List role="menubar" sx={{ px: 2 }}>
                        {['about', 'projects', 'education', 'skills', 'contact'].map((section, i) => (
                            <ListItem key={section} role="none" sx={{ mb: 1 }}>
                                <ListItemButton
                                    role="menuitem"
                                    component="a"
                                    onClick={() => handleNavClick(section, i)}
                                    sx={{
                                        borderRadius: '8px',
                                        py: 1.5,
                                        px: 2,
                                        color: '#F9FAFB',
                                        fontWeight: 500,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            backgroundColor: 'rgba(20, 184, 166, 0.1)',
                                            color: '#14B8A6',
                                            transform: 'translateX(8px)',
                                        }
                                    }}
                                >
                                    {section.replace(/^./, n => n.toUpperCase())}
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>
    )
}

export default SideNav