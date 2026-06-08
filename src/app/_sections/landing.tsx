'use client'
import React, { useState, useEffect } from 'react'
import Button from '@mui/joy/Button'
import Divider from '@mui/joy/Divider'
import Typography from '@mui/joy/Typography'
import Stack from '@mui/joy/Stack'
import { Parallax } from 'react-parallax'
import { scroller } from 'react-scroll'
import ExpandMoreOutlined from '@mui/icons-material/ExpandMoreOutlined'
import DownloadOutlined from '@mui/icons-material/DownloadOutlined'
import { useTheme } from '@mui/joy'
import Nav from '../_components/nav'
import SideNav from '../_components/sideNav'

const roles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "AI Integration Engineer",
];

const Landing = () => {
    const theme = useTheme();

    // Typewriter effect state
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        const fullText = roles[currentRoleIndex];
        
        const handleType = () => {
            if (!isDeleting) {
                setCurrentText(fullText.substring(0, currentText.length + 1));
                setTypingSpeed(100);
                
                if (currentText === fullText) {
                    timer = setTimeout(() => setIsDeleting(true), 2000);
                    return;
                }
            } else {
                setCurrentText(fullText.substring(0, currentText.length - 1));
                setTypingSpeed(50);
                
                if (currentText === '') {
                    setIsDeleting(false);
                    setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
                    return;
                }
            }
            
            timer = setTimeout(handleType, typingSpeed);
        };

        timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

    return (
        <Parallax
            bgImage='images/landing-bg.jpg'
            bgImageAlt='software developer landing page background'
            strength={-200}
        >
            <div style={{
                minHeight: '100vh',
                minWidth: '100vw',
                backgroundColor: 'rgba(3, 7, 18, 0.9)', // Dark background overlay
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                position: 'relative'
            }}>
                {/* Tech Grid Background Accent */}
                <div className="tech-grid" />
                
                <Nav />
                <SideNav />

                <svg viewBox="0 0 1320 120" style={{ zIndex: 10 }}>
                    <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                        SHUBH KUMAR
                    </text>
                </svg>

                <Divider sx={{
                    width: '30%',
                    backgroundColor: '#14B8A6',
                    margin: '20px auto',
                    blockSize: '2px !important',
                    zIndex: 10
                }} />

                <Typography level='h2' sx={{
                    color: '#9CA3AF',
                    fontWeight: 400,
                    letterSpacing: '0.1em',
                    minHeight: '40px',
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2px',
                    fontSize: { xs: '1.2rem', sm: '1.8rem' },
                    textAlign: 'center'
                }}>
                    <span>{currentText}</span>
                    <span style={{ 
                        display: 'inline-block',
                        width: '3px',
                        height: '24px',
                        backgroundColor: '#14B8A6',
                        animation: 'fadeIn 0.7s infinite alternate'
                    }}>|</span>
                </Typography>

                {/* Call To Actions */}
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ 
                    mt: 5, 
                    zIndex: 10,
                    animation: 'fadeInUp',
                    animationDuration: '1s',
                    animationDelay: '1.5s',
                    animationFillMode: 'both',
                    width: { xs: '80%', sm: 'auto' }
                }}>
                    <Button
                        component="a"
                        href="/resume/Shubh_Kr_Resume.pdf"
                        download="Shubh_Kr_Resume.pdf"
                        size='lg'
                        variant='solid'
                        startDecorator={<DownloadOutlined />}
                        sx={{
                            backgroundColor: '#14B8A6',
                            color: '#030712',
                            borderRadius: '8px',
                            px: 4,
                            py: 1.5,
                            fontWeight: 600,
                            letterSpacing: '0.05em',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                backgroundColor: '#0D9488',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 4px 20px rgba(20, 184, 166, 0.4)',
                            }
                        }}
                    >
                        Download Resume
                    </Button>
                    <Button
                        size='lg'
                        variant='outlined'
                        sx={{
                            borderColor: 'rgba(255, 255, 255, 0.15)',
                            color: '#F9FAFB',
                            borderRadius: '8px',
                            px: 4,
                            py: 1.5,
                            fontWeight: 600,
                            letterSpacing: '0.05em',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                borderColor: '#F9FAFB',
                                transform: 'translateY(-2px)',
                            }
                        }}
                        onClick={() => scroller.scrollTo('projects', {
                            duration: 1000,
                            smooth: 'easeInOutQuart',
                            offset: -80,
                        })}
                    >
                        View Work
                    </Button>
                </Stack>

                <Button
                    size='lg'
                    variant='outlined'
                    sx={{
                        bottom: 40,
                        position: 'absolute',
                        borderRadius: 20,
                        color: '#14B8A6',
                        borderColor: 'rgba(20, 184, 166, 0.3)',
                        animation: 'fadeInUp',
                        animationDuration: '1s',
                        animationDelay: '2s',
                        animationFillMode: 'both',
                        '&:hover': {
                            backgroundColor: 'rgba(20, 184, 166, 0.1)',
                            borderColor: '#14B8A6',
                            color: '#14B8A6',
                        }
                    }}
                    onClick={() => scroller.scrollTo('about', {
                        duration: 1000,
                        smooth: 'easeInOutQuart',
                    })}
                >
                    <ExpandMoreOutlined />
                </Button>
            </div>
        </Parallax>
    )
}

export default Landing