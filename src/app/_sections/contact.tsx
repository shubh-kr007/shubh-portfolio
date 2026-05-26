'use client'

import React, { useState } from 'react'
import SectionLayout from "../_components/sectionLayout"
import Typography from "@mui/joy/Typography"
import Stack from '@mui/joy/Stack';
import Grid from '@mui/joy/Grid';
import Card from '@mui/joy/Card';
import Input from '@mui/joy/Input';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/joy/Button';
import Alert from '@mui/joy/Alert';
import Link from '@mui/joy/Link';
import Box from '@mui/joy/Box';
import ScrollAnimation from 'react-animate-on-scroll';
import EmailOutlined from '@mui/icons-material/EmailOutlined';
import Phone from '@mui/icons-material/Phone';
import LocationOn from '@mui/icons-material/LocationOn';
import Send from '@mui/icons-material/Send';
import CheckCircle from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { SocialIcon } from 'react-social-icons';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null; text: string }>({ type: null, text: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !message) {
            setStatus({ type: 'error', text: 'Please fill in all required fields.' });
            return;
        }

        setLoading(true);
        setStatus({ type: null, text: '' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, subject, message }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ 
                    type: 'success', 
                    text: data.message || 'Your message has been sent successfully!' 
                });
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            } else {
                setStatus({ 
                    type: 'error', 
                    text: data.error || 'Failed to send message. Please try again.' 
                });
            }
        } catch (err) {
            console.error('Contact form error:', err);
            setStatus({ 
                type: 'error', 
                text: 'An error occurred. Please try again later.' 
            });
        } finally {
            setLoading(false);
        }
    };

    const socialLinks = [
        'https://github.com/shubh-kr007',
        'https://linkedin.com/in/shubh-kumar-3815a3263/',
        'https://leetcode.com/u/shubh_sri07/',
    ];

    return (
        <SectionLayout odd name='contact' sx={{ py: 12 }}>
            <ScrollAnimation animateIn='fadeInLeft' animateOnce>
                <Typography level='h1' sx={{ color: '#F9FAFB', mb: 6 }}>
                    Let's Connect
                </Typography>
            </ScrollAnimation>

            <Grid container spacing={5}>
                {/* Contact Details Column */}
                <Grid xs={12} md={5}>
                    <ScrollAnimation animateIn='fadeInUp' animateOnce>
                        <Stack spacing={4}>
                            <Typography level="body-md" sx={{ color: '#9CA3AF', lineHeight: 1.7 }}>
                                I am always open to discussing new opportunities, collaboration on interesting projects, or just chatting about technology. Feel free to reach out via the form, email, or social media!
                            </Typography>

                            <Stack spacing={3}>
                                <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                                    <Box sx={{
                                        p: 1.5,
                                        borderRadius: '12px',
                                        background: 'rgba(20, 184, 166, 0.1)',
                                        color: '#14B8A6',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}>
                                        <EmailOutlined />
                                    </Box>
                                    <Stack>
                                        <Typography level="body-xs" sx={{ color: '#6B7280', fontWeight: 600, textTransform: 'uppercase' }}>Email</Typography>
                                        <Link 
                                            href="mailto:shubhkumar357@gmail.com"
                                            sx={{ 
                                                color: '#F9FAFB',
                                                textDecoration: 'none',
                                                fontSize: { xs: '0.85rem', sm: '0.95rem' },
                                                wordBreak: 'break-all',
                                                '&:hover': {
                                                    color: '#14B8A6',
                                                    textDecoration: 'underline'
                                                }
                                            }}
                                        >
                                            shubhkumar357@gmail.com
                                        </Link>
                                    </Stack>
                                </Stack>

                                <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                                    <Box sx={{
                                        p: 1.5,
                                        borderRadius: '12px',
                                        background: 'rgba(20, 184, 166, 0.1)',
                                        color: '#14B8A6',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}>
                                        <Phone />
                                    </Box>
                                    <Stack>
                                        <Typography level="body-xs" sx={{ color: '#6B7280', fontWeight: 600, textTransform: 'uppercase' }}>Phone</Typography>
                                        <Typography sx={{ color: '#F9FAFB', fontSize: '0.95rem' }}>+91 9431026510</Typography>
                                    </Stack>
                                </Stack>

                                <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                                    <Box sx={{
                                        p: 1.5,
                                        borderRadius: '12px',
                                        background: 'rgba(20, 184, 166, 0.1)',
                                        color: '#14B8A6',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}>
                                        <LocationOn />
                                    </Box>
                                    <Stack>
                                        <Typography level="body-xs" sx={{ color: '#6B7280', fontWeight: 600, textTransform: 'uppercase' }}>Location</Typography>
                                        <Typography sx={{ color: '#F9FAFB', fontSize: '0.95rem' }}>Noida, India</Typography>
                                    </Stack>
                                </Stack>
                            </Stack>

                            <Stack spacing={1.5}>
                                <Typography level="body-xs" sx={{ color: '#6B7280', fontWeight: 600, textTransform: 'uppercase' }}>Follow Me</Typography>
                                <Stack direction='row' spacing={1.5}>
                                    {socialLinks.map((link, i) => (
                                        // @ts-ignore
                                        <SocialIcon 
                                            key={i} 
                                            target="_blank" 
                                            url={link}
                                            style={{ height: 40, width: 40 }}
                                            bgColor="rgba(255, 255, 255, 0.08)"
                                            fgColor="#F9FAFB"
                                            className="social-icon-hover"
                                        />
                                    ))}
                                </Stack>
                            </Stack>
                        </Stack>
                    </ScrollAnimation>
                </Grid>

                {/* Message Form Column */}
                <Grid xs={12} md={7}>
                    <ScrollAnimation animateIn='fadeInUp' animateOnce>
                        <Card 
                            variant="outlined"
                            sx={{
                                p: 4,
                                background: 'rgba(17, 24, 39, 0.45)',
                                borderColor: 'rgba(255, 255, 255, 0.06)',
                                backdropFilter: 'blur(12px)',
                                borderRadius: '16px',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                                width: '100%'
                            }}
                        >
                            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                                <Stack spacing={2.5} sx={{ width: '100%' }}>
                                    <Typography level="title-md" sx={{ color: '#F9FAFB', fontWeight: 600, mb: 1 }}>
                                        Send me a message
                                    </Typography>

                                    {status.type && (
                                        <Alert
                                            color={status.type === 'success' ? 'success' : 'danger'}
                                            variant="soft"
                                            startDecorator={status.type === 'success' ? <CheckCircle /> : <ErrorIcon />}
                                            sx={{ borderRadius: '8px', width: '100%' }}
                                        >
                                            {status.text}
                                        </Alert>
                                    )}

                                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ width: '100%' }}>
                                        <Stack spacing={1} sx={{ flex: 1, minWidth: 0 }}>
                                            <Typography level="body-xs" sx={{ color: '#9CA3AF', fontWeight: 500 }}>Name *</Typography>
                                            <Input
                                                required
                                                placeholder="Your Name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                sx={{
                                                    width: '100%',
                                                    backgroundColor: 'rgba(3, 7, 18, 0.4)',
                                                    borderColor: 'rgba(255, 255, 255, 0.1)',
                                                    color: '#F9FAFB',
                                                    borderRadius: '8px',
                                                    '&:hover': { borderColor: '#14B8A6' },
                                                    '&:focus-within': { borderColor: '#14B8A6' }
                                                }}
                                            />
                                        </Stack>
                                        <Stack spacing={1} sx={{ flex: 1, minWidth: 0 }}>
                                            <Typography level="body-xs" sx={{ color: '#9CA3AF', fontWeight: 500 }}>Email *</Typography>
                                            <Input
                                                required
                                                type="email"
                                                placeholder="your@email.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                sx={{
                                                    width: '100%',
                                                    backgroundColor: 'rgba(3, 7, 18, 0.4)',
                                                    borderColor: 'rgba(255, 255, 255, 0.1)',
                                                    color: '#F9FAFB',
                                                    borderRadius: '8px',
                                                    '&:hover': { borderColor: '#14B8A6' },
                                                    '&:focus-within': { borderColor: '#14B8A6' }
                                                }}
                                            />
                                        </Stack>
                                    </Stack>

                                    <Stack spacing={1} sx={{ width: '100%' }}>
                                        <Typography level="body-xs" sx={{ color: '#9CA3AF', fontWeight: 500 }}>Subject</Typography>
                                        <Input
                                            placeholder="What's this about?"
                                            value={subject}
                                            onChange={(e) => setSubject(e.target.value)}
                                            sx={{
                                                width: '100%',
                                                backgroundColor: 'rgba(3, 7, 18, 0.4)',
                                                borderColor: 'rgba(255, 255, 255, 0.1)',
                                                color: '#F9FAFB',
                                                borderRadius: '8px',
                                                '&:hover': { borderColor: '#14B8A6' },
                                                '&:focus-within': { borderColor: '#14B8A6' }
                                            }}
                                        />
                                    </Stack>

                                    <Stack spacing={1} sx={{ width: '100%' }}>
                                        <Typography level="body-xs" sx={{ color: '#9CA3AF', fontWeight: 500 }}>Message *</Typography>
                                        <Textarea
                                            required
                                            minRows={4}
                                            placeholder="Write your message here..."
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            sx={{
                                                width: '100%',
                                                backgroundColor: 'rgba(3, 7, 18, 0.4)',
                                                borderColor: 'rgba(255, 255, 255, 0.1)',
                                                color: '#F9FAFB',
                                                borderRadius: '8px',
                                                '&:hover': { borderColor: '#14B8A6' },
                                                '&:focus-within': { borderColor: '#14B8A6' }
                                            }}
                                        />
                                    </Stack>

                                    <Button
                                        type="submit"
                                        loading={loading}
                                        endDecorator={<Send />}
                                        sx={{
                                            mt: 1,
                                            backgroundColor: '#14B8A6',
                                            color: '#030712',
                                            fontWeight: 600,
                                            borderRadius: '8px',
                                            py: 1.5,
                                            '&:hover': {
                                                backgroundColor: '#0D9488'
                                            }
                                        }}
                                    >
                                        Send Message
                                    </Button>
                                </Stack>
                            </form>
                        </Card>
                    </ScrollAnimation>
                </Grid>
            </Grid>
        </SectionLayout>
    );
};

export default Contact;