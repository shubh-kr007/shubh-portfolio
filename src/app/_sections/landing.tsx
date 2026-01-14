'use client'

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

const Landing = () => {
    const theme = useTheme();

    return (
        <Parallax
            bgImage='images/landing-bg.jpg'
            bgImageAlt='software developer landing page background'
            strength={-200}
        >
            <div style={{
                minHeight: '100vh',
                minWidth: '100vw',
                backgroundColor: 'rgba(250, 247, 242, 0.85)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}>
                <Nav />
                <SideNav />

                <svg viewBox="0 0 1320 120">
                    <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                        SHUBH KUMAR
                    </text>
                </svg>

                <Divider sx={{
                    width: '30%',
                    backgroundColor: '#1a1a1a',
                    margin: '20px auto',
                    blockSize: '2px !important'
                }} />

                <Typography level='h2' sx={{
                    color: '#4A3728',
                    animation: 'fadeIn',
                    animationDuration: '2s',
                    animationDelay: '2s',
                    animationFillMode: 'both',
                    fontWeight: 400,
                    letterSpacing: '0.1em'
                }}>
                    Full Stack Developer
                </Typography>

                {/* Download Resume Button */}
                <Button
                    component="a"
                    href="/resume/Shubh_Kumar_Fullstack_AI_Resume.pdf"
                    download="Shubh_Kumar_Fullstack_AI_Resume.pdf"
                    size='lg'
                    variant='solid'
                    startDecorator={<DownloadOutlined />}
                    sx={{
                        mt: 4,
                        backgroundColor: '#1a1a1a',
                        color: '#FAF7F2',
                        borderRadius: '8px',
                        px: 4,
                        py: 1.5,
                        fontWeight: 500,
                        letterSpacing: '0.05em',
                        animation: 'fadeInUp',
                        animationDuration: '1s',
                        animationDelay: '2.5s',
                        animationFillMode: 'both',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            backgroundColor: '#333',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                        }
                    }}
                >
                    Download Resume
                </Button>

                <Button
                    size='lg'
                    variant='outlined'
                    sx={{
                        bottom: 40,
                        position: 'absolute',
                        borderRadius: 20,
                        color: '#1a1a1a',
                        borderColor: '#1a1a1a',
                        animation: 'fadeInUp',
                        animationDuration: '1s',
                        animationDelay: '3s',
                        animationFillMode: 'both',
                        '&:hover': {
                            backgroundColor: '#1a1a1a',
                            color: '#FAF7F2',
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