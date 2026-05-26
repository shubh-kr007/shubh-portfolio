'use client'

import Typography from "@mui/joy/Typography"
import SectionLayout from "../_components/sectionLayout"
import ScrollAnimation from 'react-animate-on-scroll'
import LocationOn from '@mui/icons-material/LocationOn'
import Link from '@mui/joy/Link'
import { scroller } from 'react-scroll'

const About = () => {
    const aboutMe = `Hi! I'm a Full Stack Developer specializing in MERN and Next.js based AI-enabled web applications, with hands-on experience in React.js, Next.js, Node.js, Java, Python and database systems. I'm skilled in building responsive front-end interfaces, developing scalable REST APIs, and integrating AI models such as OpenAI into real-world applications. I have a proven ability to collaborate in teams and deliver cloud-deployed full-stack solutions.`

    return (
        <SectionLayout name='about'>
            <ScrollAnimation animateIn='fadeInLeft' animateOnce>
                <Typography level='h1' sx={{ color: '#F9FAFB' }}>About me</Typography>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn' animateOnce>
                <Typography level='body-sm'
                    startDecorator={
                        <LocationOn fontSize='small' sx={{ color: '#14B8A6' }} />
                    }
                    sx={{ ml: -1, mb: 2, color: '#9CA3AF' }}
                >
                    Noida, India
                </Typography>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn' animateOnce>
                <Typography sx={{ color: '#D1D5DB', lineHeight: 1.8 }}>{aboutMe}</Typography>
            </ScrollAnimation>
            <Link
                role="menuitem"
                component="a"
                onClick={() => scroller.scrollTo('skills', {
                    duration: 1000,
                    smooth: 'easeInOutQuart',
                })}
                sx={{ 
                    mt: 2, 
                    color: '#14B8A6',
                    fontWeight: 500,
                    textDecoration: 'none',
                    '&:hover': {
                        color: '#0D9488',
                        textDecoration: 'underline'
                    }
                }}
            >
                Check out my Skills →
            </Link>
        </SectionLayout>
    )
}

export default About