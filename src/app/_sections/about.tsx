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
                <Typography level='h1' sx={{ color: '#1a1a1a' }}>About me</Typography>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn' animateOnce>
                <Typography level='body-sm'
                    startDecorator={
                        <LocationOn fontSize='small' sx={{ color: '#8B7355' }} />
                    }
                    sx={{ ml: -1, mb: 2, color: '#6B5344' }}
                >
                    Noida, India
                </Typography>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn' animateOnce>
                <Typography sx={{ color: '#4A3728', lineHeight: 1.8 }}>{aboutMe}</Typography>
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
                    color: '#8B7355',
                    fontWeight: 500,
                    textDecoration: 'none',
                    '&:hover': {
                        color: '#1a1a1a',
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