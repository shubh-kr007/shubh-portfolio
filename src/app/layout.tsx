'use client'

import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import { Button, Stack, Typography } from "@mui/joy"
import SectionLayout from "./_components/sectionLayout"
import { animateScroll } from 'react-scroll';
import { SocialIcon } from 'react-social-icons'
import ExpandLessOutlined from '@mui/icons-material/ExpandLessOutlined';
import { useTheme } from '@mui/joy';
import '../index.css'
import 'animate.css/animate.compat.css';

// Custom Beige & Black Theme
const customTheme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    50: '#FAF7F2',
                    100: '#EDE8E0',
                    200: '#D4C4B0',
                    300: '#B8A088',
                    400: '#8B7355',
                    500: '#6B5344',
                    600: '#4A3728',
                    700: '#3D2E22',
                    800: '#2A1F17',
                    900: '#1a1a1a',
                    solidBg: '#1a1a1a',
                    solidHoverBg: '#333',
                    softBg: '#EDE8E0',
                    softColor: '#1a1a1a',
                    outlinedBorder: '#1a1a1a',
                    outlinedColor: '#1a1a1a',
                },
                neutral: {
                    50: '#FAF7F2',
                    100: '#EDE8E0',
                    200: '#D4C4B0',
                    300: '#B8A088',
                    400: '#8B7355',
                    500: '#6B5344',
                    600: '#4A3728',
                    700: '#3D2E22',
                    800: '#2A1F17',
                    900: '#1a1a1a',
                },
                background: {
                    body: '#FAF7F2',
                    surface: '#FAF7F2',
                },
                text: {
                    primary: '#1a1a1a',
                    secondary: '#4A3728',
                    tertiary: '#6B5344',
                },
            },
        },
    },
    fontFamily: {
        body: 'Poppins, sans-serif',
        display: 'Poppins, sans-serif',
    },
    components: {
        JoyButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                },
            },
        },
        JoyChip: {
            styleOverrides: {
                root: {
                    borderRadius: '6px',
                },
            },
        },
        JoyCard: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                },
            },
        },
    },
});

const Copyright = () => {
    const theme = useTheme()
    return <Typography sx={{
        [theme.breakpoints.down(800)]: {
            order: 2
        }
    }}>Copyright © 2026 Shubh Kumar</Typography>
}

const GoToTop = () => {
    const theme = useTheme()
    return (
        <Button
            size='lg'
            variant='outlined'
            sx={{
                borderRadius: 20,
                borderColor: '#1a1a1a',
                color: '#1a1a1a',
                '&:hover': {
                    backgroundColor: '#1a1a1a',
                    color: '#FAF7F2',
                },
                [theme.breakpoints.down(800)]: {
                    order: 0
                }
            }}
            onClick={() => animateScroll.scrollToTop({
                duration: 2000,
                smooth: 'easeInOutQuart',
            })}
        >
            <ExpandLessOutlined />
        </Button>
    )
}

const SocialMedia = () => {
    const theme = useTheme()
    
    const socialLinks = [
        'https://github.com/shubh-kr007',
        'www.linkedin.com/in/shubh-kumar-3815a3263/',
        'https://leetcode.com/u/shubh_sri07/',
    ]

    return (
        <Stack direction='row' spacing={1} sx={{
            [theme.breakpoints.down(800)]: {
                order: 1,
            },
            ['& > *']: {
                opacity: 0.7,
                transition: 'all 0.4s ease',
                ['&:hover']: {
                    opacity: 1,
                    transform: 'scale(1.1) translateY(-2px)'
                },
            }
        }}>
            {socialLinks.map((link, i) => (
                // @ts-ignore
                <SocialIcon 
                    key={i} 
                    target="_blank" 
                    url={link}
                    style={{ height: 40, width: 40 }}
                    bgColor="#1a1a1a"
                    fgColor="#FAF7F2"
                />
            ))}
        </Stack>
    )
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const description = 'Full Stack Developer specializing in MERN and Next.js based AI-enabled web applications, with hands-on experience in React.js, Next.js, Node.js, Java, Python and database systems. Skilled in building responsive front-end interfaces, developing scalable REST APIs, and integrating AI models such as OpenAI into real-world applications.'

    return (
        <html lang="en">
            <head>
                <title>Shubh Kumar | Full Stack Developer</title>
                <meta name='description' content={description} />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body>
                <CssVarsProvider theme={customTheme}>
                    {children}
                    <SectionLayout odd name='footer'>
                        <Stack sx={[(theme) => ({
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            [theme.breakpoints.down(800)]: {
                                flexDirection: 'column',
                                rowGap: 2
                            }
                        })]}>
                            <Copyright />
                            <GoToTop />
                            <SocialMedia />
                        </Stack>
                    </SectionLayout>
                </CssVarsProvider>
            </body>
        </html>
    )
}