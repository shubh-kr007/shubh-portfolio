'use client'

import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/joy/Box';
import Container from '@mui/joy/Container';
import { useTheme } from '@mui/joy';
import { Element } from 'react-scroll';

interface props {
    children: React.ReactNode
    name: string
    odd?: boolean
    fullHeight?: boolean
    col?: boolean
    sx?: object
}

const SectionLayout = ({ children, name, odd = false, fullHeight = false, col = false, sx }: props) => {
    const theme = useTheme()
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <Container
            ref={sectionRef}
            sx={{
                position: 'relative',
                minWidth: '100vw',
                minHeight: fullHeight ? '100vh' : 'auto',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: odd ? '#EDE8E0' : '#FAF7F2',
                transition: 'background-color 0.3s ease',
                '& > div': {
                    width: '100%'
                }
            }}
        >
            <Element name={name} style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>

                <Box sx={{
                    py: 10,
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: 800,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    ...sx
                }}>
                    {children}
                </Box>

            </Element>

        </Container>
    )
}

export default SectionLayout