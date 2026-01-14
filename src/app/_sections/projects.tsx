'use client'

import React from 'react'
import SectionLayout from '../_components/sectionLayout'
import Stepper from '@mui/joy/Stepper';
import Step from '@mui/joy/Step';
import StepIndicator, { stepIndicatorClasses } from '@mui/joy/StepIndicator';
import Typography from '@mui/joy/Typography';
import Chip from '@mui/joy/Chip';
import Stack from '@mui/joy/Stack';
import Button from '@mui/joy/Button';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';
import ScrollAnimation from 'react-animate-on-scroll';
import { useTheme } from '@mui/joy';
import GitHub from '@mui/icons-material/GitHub';
import Launch from '@mui/icons-material/Launch';
import East from '@mui/icons-material/East';
import SmartToy from '@mui/icons-material/SmartToy';
import Work from '@mui/icons-material/Work';
import Build from '@mui/icons-material/Build';
import TrackChanges from '@mui/icons-material/TrackChanges';

interface IProject {
    title: string
    subtitle?: string
    description: string[]
    technologies: string[]
    github?: string
    live?: string
    icon: 'ai' | 'work' | 'build' | 'track'
    time: {
        start: string
        end: string
    }
}

const projects: IProject[] = [
    {
        title: 'PathWise',
        subtitle: 'AI Interview & Career Navigator (Team Project)',
        description: [
            'Architected and developed a responsive frontend using React (Vite) and Tailwind CSS, improving user interaction and accessibility.',
            'Implemented backend REST APIs with Node.js and Express.js, enhancing data flow and system scalability.',
            'Integrated OpenAI GPT models to deliver AI-driven mock interviews and personalized career roadmaps.',
            'Collaborated with team members to design secure authentication using JWT and Google OAuth with MongoDB storage.',
            'Streamlined interview preparation by providing instant AI feedback and structured learning guidance.'
        ],
        technologies: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'OpenAI API', 'JWT', 'MongoDB'],
        github: 'https://github.com/shubh-kr007/Pathwise-AI-Interview',
        live: 'https://pathwise-ai-interview-frontend.onrender.com',
        icon: 'ai',
        time: {
            start: '10/2025',
            end: 'Present'
        }
    },
    {
        title: 'Synapse.hr',
        subtitle: 'AI Mock Interview Platform',
        description: [
            'Designed and built a modern AI-powered mock interview platform simulating real interview environments.',
            'Developed responsive UI using Next.js and Tailwind CSS, enhancing user experience and engagement.',
            'Integrated Vapi AI for voice-based interviews, enabling real-time feedback and transcript generation.',
            'Deployed cloud-based backend using Firebase, improving application reliability and scalability.'
        ],
        technologies: ['Next.js', 'Tailwind CSS', 'Vapi AI', 'Firebase', 'TypeScript'],
        github: 'https://github.com/shubh-kr007/Synapse',
        live: 'https://synapse-omega-lake.vercel.app',
        icon: 'work',
        time: {
            start: '06/2025',
            end: '07/2025'
        }
    },
    {
        title: 'Hirify',
        subtitle: 'AI Job Tracking App',
        description: [
            'Developed AI-powered tracker to manage job applications efficiently.',
            'Implemented full-stack application using React, Node.js, MongoDB, and OpenAI API.',
            'Added resume parsing, reminders, and JWT authentication for secure user management.',
            'Improved candidate efficiency with AI-based insights and application tracking.'
        ],
        technologies: ['React', 'Node.js', 'MongoDB', 'OpenAI API', 'JWT'],
        github: 'https://github.com/shubh-kr007/Hirify',
        live: 'https://hirify-theta.vercel.app',
        icon: 'track',
        time: {
            start: '05/2025',
            end: '06/2025'
        }
    },
    {
        title: 'AI Tools Finder',
        subtitle: 'Discovery Platform',
        description: [
            'Engineered a database-driven web application using Java, JSP, Servlets, and SQL.',
            'Implemented authentication and admin dashboard to manage platform content efficiently.',
            'Optimized SQL queries, improving data retrieval performance.',
            'Delivered a responsive UI to enhance tool discovery experience.'
        ],
        technologies: ['Java', 'JSP', 'Servlets', 'SQL', 'MySQL'],
        github: 'https://github.com/shubh-kr007/AI_Tool_Finder',
        icon: 'build',
        time: {
            start: '10/2024',
            end: '11/2024'
        }
    }
]

const getIcon = (icon: string) => {
    switch (icon) {
        case 'ai':
            return <SmartToy sx={{ fontSize: '2rem' }} />
        case 'work':
            return <Work sx={{ fontSize: '2rem' }} />
        case 'build':
            return <Build sx={{ fontSize: '2rem' }} />
        case 'track':
            return <TrackChanges sx={{ fontSize: '2rem' }} />
        default:
            return <Work sx={{ fontSize: '2rem' }} />
    }
}

const ProjectHead = ({ title, subtitle, time }: IProject) => {
    const theme = useTheme()
    
    return (
        <ScrollAnimation animateIn='fadeIn' animateOnce>
            <Stack sx={{
                ml: 4,
                [theme.breakpoints.down(800)]: {
                    ml: 2
                }
            }}>
                <Typography level='h3' sx={{ color: '#1a1a1a' }}>{title}</Typography>
                {subtitle && (
                    <Typography level='h4' sx={{ mb: 1, color: '#6B5344' }}>
                        {subtitle}
                    </Typography>
                )}
                <Typography level='body-sm' sx={{ color: '#8B7355' }}>
                    {`${time.start} - ${time.end}`}
                </Typography>
            </Stack>
        </ScrollAnimation>
    )
}

const ProjectBody = ({ description, technologies, github, live }: IProject) => {
    const theme = useTheme()

    return (
        <Stack sx={{
            ml: 2,
            [theme.breakpoints.down(800)]: {
                ml: 0
            }
        }}>
            <List>
                {description.map((point, i) => (
                    <ListItem key={i} sx={{ alignItems: 'flex-start' }}>
                        <ListItemDecorator>
                            <ScrollAnimation animateIn='fadeIn' animateOnce>
                                <East fontSize='small' sx={{ color: '#8B7355' }} />
                            </ScrollAnimation>
                        </ListItemDecorator>
                        <ListItemContent>
                            <ScrollAnimation animateIn='fadeIn' animateOnce>
                                <Typography sx={{ color: '#4A3728' }}>{point}</Typography>
                            </ScrollAnimation>
                        </ListItemContent>
                    </ListItem>
                ))}
                <ListItem>
                    <ScrollAnimation animateIn='fadeIn' animateOnce>
                        <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', rowGap: 1, alignItems: 'center' }}>
                            <Typography sx={{ fontWeight: 600, color: '#1a1a1a' }}>Tech Stack: </Typography>
                            {technologies.map((tech, i) => (
                                <Chip 
                                    key={i} 
                                    variant="soft" 
                                    size="sm"
                                    sx={{
                                        backgroundColor: '#D4C4B0',
                                        color: '#1a1a1a',
                                        fontWeight: 500
                                    }}
                                >
                                    {tech}
                                </Chip>
                            ))}
                        </Stack>
                    </ScrollAnimation>
                </ListItem>
                <ListItem sx={{ mt: 1 }}>
                    <ScrollAnimation animateIn='fadeIn' animateOnce>
                        <Stack direction="row" spacing={2}>
                            {github && (
                                <Button
                                    component="a"
                                    href={github}
                                    target="_blank"
                                    variant="outlined"
                                    size="sm"
                                    startDecorator={<GitHub />}
                                    sx={{
                                        borderColor: '#1a1a1a',
                                        color: '#1a1a1a',
                                        '&:hover': {
                                            backgroundColor: '#1a1a1a',
                                            color: '#FAF7F2',
                                        }
                                    }}
                                >
                                    GitHub
                                </Button>
                            )}
                            {live && (
                                <Button
                                    component="a"
                                    href={live}
                                    target="_blank"
                                    variant="solid"
                                    size="sm"
                                    startDecorator={<Launch />}
                                    sx={{
                                        backgroundColor: '#1a1a1a',
                                        color: '#FAF7F2',
                                        '&:hover': {
                                            backgroundColor: '#333',
                                        }
                                    }}
                                >
                                    Live Demo
                                </Button>
                            )}
                        </Stack>
                    </ScrollAnimation>
                </ListItem>
            </List>
        </Stack>
    )
}

const Projects = () => {
    const theme = useTheme()

    return (
        <SectionLayout odd fullHeight col name='projects'>
            <ScrollAnimation animateIn='fadeInLeft' animateOnce={true}>
                <Typography level='h1' sx={{ color: '#1a1a1a' }}>Projects</Typography>
            </ScrollAnimation>
            <Stepper orientation="vertical" sx={{
                '--StepIndicator-size': '5rem',
                '--Step-connectorRadius': '1rem',
                '--Step-connectorThickness': '2px',
                '--Step-connectorColor': '#D4C4B0',
                mt: 3,
                [theme.breakpoints.down(800)]: {
                    '--StepIndicator-size': '3.5rem',
                },
                [`.${stepIndicatorClasses.root}`]: {
                    overflow: 'hidden',
                    position: 'relative',
                    borderColor: '#1a1a1a',
                    backgroundColor: '#FAF7F2',
                    color: '#1a1a1a',
                }
            }}>
                {projects.map((project, i) => (
                    <Step key={i} indicator={
                        <ScrollAnimation animateIn='fadeInLeft' animateOnce>
                            <StepIndicator>
                                {getIcon(project.icon)}
                            </StepIndicator>
                        </ScrollAnimation>
                    }>
                        <ProjectHead {...project} />
                        <ProjectBody {...project} />
                    </Step>
                ))}
                <Step sx={{ display: 'none !important' }} indicator={
                    <StepIndicator sx={{ display: 'hidden' }}>
                    </StepIndicator>
                }></Step>
            </Stepper>
        </SectionLayout>
    )
}

export default Projects