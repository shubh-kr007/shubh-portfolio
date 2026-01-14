'use client'
import SectionLayout from "../_components/sectionLayout"
import Typography from "@mui/joy/Typography"
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import EmailOutlined from '@mui/icons-material/EmailOutlined';
import Phone from '@mui/icons-material/Phone';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import ScrollAnimation from 'react-animate-on-scroll';
import Link from '@mui/joy/Link';

const Contact = () => {

    return (
        <SectionLayout odd name='contact'>
            <ScrollAnimation animateIn='fadeInLeft' animateOnce>
                <Typography level='h1' sx={{ color: '#1a1a1a' }}>Let's get in touch!</Typography>
            </ScrollAnimation>
            <List>
                <ListItem>
                    <ListItemDecorator>
                        <ScrollAnimation animateIn='fadeIn' animateOnce>
                            <EmailOutlined sx={{ color: '#8B7355' }} />
                        </ScrollAnimation>
                    </ListItemDecorator>
                    <ListItemContent>
                        <ScrollAnimation animateIn='fadeInRight' animateOnce>
                            <Link 
                                href="mailto:shubhkumar357@gmail.com"
                                sx={{ 
                                    color: '#4A3728',
                                    textDecoration: 'none',
                                    '&:hover': {
                                        color: '#1a1a1a',
                                        textDecoration: 'underline'
                                    }
                                }}
                            >
                                shubhkumar357@gmail.com
                            </Link>
                        </ScrollAnimation>
                    </ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemDecorator>
                        <ScrollAnimation animateIn='fadeIn' animateOnce>
                            <Phone sx={{ color: '#8B7355' }} />
                        </ScrollAnimation>
                    </ListItemDecorator>
                    <ListItemContent>
                        <ScrollAnimation animateIn='fadeInRight' animateOnce>
                            <Typography sx={{ color: '#4A3728' }}>+91 9431026510</Typography>
                        </ScrollAnimation>
                    </ListItemContent>
                </ListItem>
                {/* <ListItem>
                    <ListItemDecorator>
                        <ScrollAnimation animateIn='fadeIn' animateOnce>
                            <LinkedIn sx={{ color: '#8B7355' }} />
                        </ScrollAnimation>
                    </ListItemDecorator>
                    <ListItemContent>
                        <ScrollAnimation animateIn='fadeInRight' animateOnce>
                            <Link 
                                href="https://linkedin.com/in/shubhkumar357" 
                                target="_blank"
                                sx={{ 
                                    color: '#4A3728',
                                    textDecoration: 'none',
                                    '&:hover': {
                                        color: '#1a1a1a',
                                        textDecoration: 'underline'
                                    }
                                }}
                            >
                                linkedin.com/in/shubhkumar357
                            </Link>
                        </ScrollAnimation>
                    </ListItemContent>
                </ListItem> */}
                {/* <ListItem>
                    <ListItemDecorator>
                        <ScrollAnimation animateIn='fadeIn' animateOnce>
                            <GitHub sx={{ color: '#8B7355' }} />
                        </ScrollAnimation>
                    </ListItemDecorator>
                    <ListItemContent>
                        <ScrollAnimation animateIn='fadeInRight' animateOnce>
                            <Link 
                                href="https://github.com/shubhkumar357" 
                                target="_blank"
                                sx={{ 
                                    color: '#4A3728',
                                    textDecoration: 'none',
                                    '&:hover': {
                                        color: '#1a1a1a',
                                        textDecoration: 'underline'
                                    }
                                }}
                            >
                                github.com/shubhkumar357
                            </Link>
                        </ScrollAnimation>
                    </ListItemContent>
                </ListItem> */}
            </List>
        </SectionLayout>
    )

}

export default Contact