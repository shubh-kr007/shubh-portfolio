'use client'

import React, { useState, useEffect } from 'react'
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Stack from '@mui/joy/Stack'
import { scroller } from 'react-scroll';

const Nav = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 100);

            // Detect active section
            const sections = ['about', 'projects', 'education', 'skills', 'contact'];
            for (const section of sections) {
                const element = document.querySelector(`[name="${section}"]`);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Stack sx={(theme) => ({
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            pointerEvents: 'none',
            [theme.breakpoints.down(780)]: {
                display: 'none'
            }
        })}>
            <Box
                component="nav"
                sx={{
                    pointerEvents: 'auto',
                    p: scrolled ? 1.5 : 1,
                    backgroundColor: scrolled ? '#FAF7F2' : 'rgba(250, 247, 242, 0.95)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: scrolled ? '0 0 12px 12px' : '0 0 6px 6px',
                    boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.15)' : 'none',
                    borderBottom: scrolled ? '1px solid #D4C4B0' : 'none',
                    transition: 'all 0.4s ease',
                    animation: 'fadeInDown',
                    animationDuration: '1s',
                    animationFillMode: 'both',
                }}
            >
                <List role="menubar" orientation="horizontal">
                    {['about', 'projects', 'education', 'skills', 'contact'].map((section, i) => (
                        <React.Fragment key={section}>
                            {i !== 0 && <ListDivider sx={{ backgroundColor: '#D4C4B0' }} />}
                            <ListItem role="none">
                                <ListItemButton
                                    role="menuitem"
                                    component="a"
                                    onClick={() => scroller.scrollTo(section, {
                                        duration: 800,
                                        smooth: 'easeInOutQuart',
                                        offset: -80,
                                    })}
                                    sx={{
                                        width: 'max-content',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.3s ease',
                                        color: activeSection === section ? '#8B7355' : '#1a1a1a',
                                        fontWeight: activeSection === section ? 600 : 400,
                                        '&:not(.Mui-selected, [aria-selected="true"]):hover': {
                                            backgroundColor: 'transparent',
                                        },
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            display: 'block',
                                            width: activeSection === section ? '80%' : '0%',
                                            height: '2px',
                                            mt: 3,
                                            backgroundColor: '#1a1a1a',
                                            transition: 'all 0.3s ease'
                                        },
                                        '&:hover::after': {
                                            width: '80%',
                                        },
                                        '&:hover': {
                                            color: '#8B7355'
                                        }
                                    }}
                                >
                                    {section.replace(/^./, n => n.toUpperCase())}
                                </ListItemButton>
                            </ListItem>
                        </React.Fragment>
                    ))}
                </List>
            </Box>
        </Stack>
    )
}

export default Nav