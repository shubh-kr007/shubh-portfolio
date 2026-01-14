'use client'

import React from 'react'
import SectionLayout from '../_components/sectionLayout'
import Stepper from '@mui/joy/Stepper';
import Step from '@mui/joy/Step';
import StepIndicator from '@mui/joy/StepIndicator';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack'
import ScrollAnimation from 'react-animate-on-scroll';
import School from '@mui/icons-material/School';

interface IEducation {
    institute: string,
    location: string,
    degree?: string,
    time: {
        start: string
        end: string
    },
}

const educations: IEducation[] = [
    {
        institute: 'KCC Institute of Technology and Management (AKTU)',
        location: 'Greater Noida',
        degree: 'B.Tech in Computer Science and Engineering',
        time: {
            start: '09/2022',
            end: 'Present'
        }
    },
    {
        institute: 'Don Bosco Academy',
        location: 'India',
        degree: 'Senior Secondary (XII)',
        time: {
            start: '2020',
            end: '2022'
        }
    },
    {
        institute: 'Red Carpet High School',
        location: 'India',
        degree: 'High School (X)',
        time: {
            start: '2018',
            end: '2020'
        }
    }
]

const Education = () => {
    return (
        <SectionLayout name='education'>
            <ScrollAnimation animateIn='fadeInLeft' animateOnce>
                <Typography level='h1' sx={{ color: '#1a1a1a' }}>Education</Typography>
            </ScrollAnimation>

            <Stack sx={{
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                mt: 3
            }}>
                <Stepper orientation="vertical" sx={{
                    '--StepIndicator-size': '2.5rem',
                    '--Step-connectorRadius': '1rem',
                    '--Step-connectorThickness': '2px',
                    '--Step-connectorColor': '#D4C4B0',
                }}>
                    {educations.map(({ institute, location, degree, grade, time: { start, end } }, i: number) =>
                        <Step key={i} indicator={
                            <StepIndicator 
                                variant="soft"
                                sx={{
                                    backgroundColor: '#EDE8E0',
                                    borderColor: '#1a1a1a',
                                    color: '#1a1a1a'
                                }}
                            >
                                <School />
                            </StepIndicator>
                        }>
                            <Stack>
                                <ScrollAnimation animateIn='fadeIn' animateOnce>
                                    <Typography level='h3' sx={{ color: '#1a1a1a' }}>{institute}</Typography>
                                    <Typography level='body-sm' sx={{ color: '#6B5344' }}>{location}</Typography>
                                </ScrollAnimation>
                            </Stack>
                            <Stack>
                                <ScrollAnimation animateIn='fadeIn' animateOnce>
                                    {degree && <Typography level='title-md' sx={{ color: '#4A3728' }}>{degree}</Typography>}
                                    <Typography level='body-sm' sx={{ color: '#8B7355' }}>{`${start} - ${end}`}</Typography>
                                    <Typography level='body-sm' sx={{ fontWeight: 'bold', color: '#1a1a1a' }}>{grade}</Typography>
                                </ScrollAnimation>
                            </Stack>
                        </Step>
                    )}
                    <Step sx={{ display: 'none !important' }} indicator={
                        <StepIndicator sx={{ display: 'hidden' }}>
                        </StepIndicator>
                    }></Step>
                </Stepper>
            </Stack>
        </SectionLayout >
    )
}

export default Education