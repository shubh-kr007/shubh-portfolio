'use client'

import { FunctionComponent, useState, useRef, Fragment } from 'react';
import SectionLayout from '../_components/sectionLayout'
import Typography from '@mui/joy/Typography'
import Input, { InputProps } from '@mui/joy/Input'
import Divider from '@mui/joy/Divider'
import List from '@mui/joy/List'
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator, {
    listItemDecoratorClasses,
} from '@mui/joy/ListItemDecorator';
import Chip from '@mui/joy/Chip';
import ChipDelete from '@mui/joy/ChipDelete';
import Stack from '@mui/joy/Stack';
import Select from '@mui/joy/Select';
import Option, { optionClasses } from '@mui/joy/Option';
import ScrollAnimation from 'react-animate-on-scroll';
import Check from '@mui/icons-material/Check'
import {
    JavascriptOriginal,
    TypescriptOriginal,
    ReactOriginal,
    NextjsOriginal,
    Html5Original,
    Css3Original,
    TailwindcssOriginal,
    NodejsOriginal,
    ExpressOriginal,
    PythonOriginal,
    JavaOriginal,
    MongodbOriginal,
    MysqlOriginal,
    GitOriginal,
    GithubOriginal,
    FirebaseOriginal,
    PostmanOriginal,
    VercelOriginal,
    NetlifyOriginal,
} from "devicons-react";

const TechnologyEntity = (name: string, url: string, Icon: FunctionComponent<any> | null, keywords: string[]) => {
    return {
        name,
        url,
        Icon,
        keywords
    }
}

const technologiesArray = [
    // Frontend Development
    TechnologyEntity('React.js', 'https://reactjs.org/', ReactOriginal, ['frontend', 'framework']),
    TechnologyEntity('Next.js', 'https://nextjs.org/', NextjsOriginal, ['frontend', 'framework', 'SSR']),
    TechnologyEntity('HTML5', 'https://developer.mozilla.org/en-US/docs/Web/HTML', Html5Original, ['frontend', 'language']),
    TechnologyEntity('CSS3', 'https://developer.mozilla.org/en-US/docs/Web/CSS', Css3Original, ['frontend', 'style']),
    TechnologyEntity('JavaScript', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', JavascriptOriginal, ['frontend', 'language']),
    TechnologyEntity('TypeScript', 'https://www.typescriptlang.org/', TypescriptOriginal, ['frontend', 'language']),
    TechnologyEntity('Tailwind CSS', 'https://tailwindcss.com/', TailwindcssOriginal, ['frontend', 'style', 'utility']),

    // Backend Development
    TechnologyEntity('Node.js', 'https://nodejs.org/', NodejsOriginal, ['backend', 'runtime']),
    TechnologyEntity('Express.js', 'https://expressjs.com/', ExpressOriginal, ['backend', 'framework']),
    TechnologyEntity('Java', 'https://www.java.com/', JavaOriginal, ['backend', 'language']),
    TechnologyEntity('Python', 'https://www.python.org/', PythonOriginal, ['backend', 'language']),
    TechnologyEntity('REST APIs', 'https://restfulapi.net/', null, ['backend', 'api']),

    // Database
    TechnologyEntity('MongoDB', 'https://www.mongodb.com/', MongodbOriginal, ['database', 'NoSQL']),
    TechnologyEntity('MySQL', 'https://www.mysql.com/', MysqlOriginal, ['database', 'SQL']),

    // AI & ML
    TechnologyEntity('OpenAI API', 'https://openai.com/api/', null, ['ai', 'api']),
    TechnologyEntity('Vapi AI', 'https://vapi.ai/', null, ['ai', 'voice']),

    // Tools & Version Control
    TechnologyEntity('Git', 'https://git-scm.com/', GitOriginal, ['tools', 'version control']),
    TechnologyEntity('GitHub', 'https://github.com/', GithubOriginal, ['tools', 'version control', 'repository']),
    TechnologyEntity('Postman', 'https://www.postman.com/', PostmanOriginal, ['tools', 'api testing']),
    TechnologyEntity('JWT Authentication', 'https://jwt.io/', null, ['tools', 'security']),

    // Cloud & Deployment
    TechnologyEntity('Firebase', 'https://firebase.google.com/', FirebaseOriginal, ['cloud', 'platform', 'deployment']),
    TechnologyEntity('Vercel', 'https://vercel.com/', VercelOriginal, ['cloud', 'deployment', 'platform']),
    TechnologyEntity('Netlify', 'https://www.netlify.com/', NetlifyOriginal, ['cloud', 'deployment', 'platform']),
    TechnologyEntity('Render', 'https://render.com/', null, ['cloud', 'deployment', 'platform']),

    // Core CS
    TechnologyEntity('DSA', '#', null, ['core', 'fundamentals']),
    TechnologyEntity('OOPs', '#', null, ['core', 'fundamentals']),
    TechnologyEntity('DBMS', '#', null, ['core', 'fundamentals']),
];

const keywords: { [key: string]: string[] } = {
    domain: ['frontend', 'backend', 'database', 'ai', 'tools', 'cloud', 'core'],
    type: ['language', 'runtime', 'framework', 'style', 'api', 'fundamentals', 'deployment', 'platform'],
}

type DebounceProps = {
    handleDebounce: (value: string) => void;
    debounceTimeout: number;
};

function DebounceInput(props: InputProps & DebounceProps) {
    const { handleDebounce, debounceTimeout, ...other } = props;

    const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(
        undefined,
    );

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            handleDebounce(event.target.value);
        }, debounceTimeout);
    };

    return <Input {...other} onChange={handleChange} />;
}

const intersection = (as: string[], bs: string[]) => {
    return as.filter((a) => bs.includes(a))
}

interface Props {
    query: string
    filter: string[]
    name: string
    Icon: FunctionComponent<any> | null
    keywords: string[]
}

const SkillChip = ({ query, filter, name, Icon, keywords }: Props) => {

    const isQueried = query !== ''
    const isQueryMatched = name.toLowerCase().startsWith(query.toLowerCase())
    const isFiltered = filter.length > 0
    const isFilterMatched = intersection(filter, keywords).length > 0

    const isMatched = (!isQueried && !isFiltered)
        || (!isFiltered && isQueried && isQueryMatched)
        || (!isQueried && isFiltered && isFilterMatched)
        || (isQueryMatched && isFilterMatched)

    return <Chip
        key={name}
        variant='outlined'
        size='lg'
        startDecorator={Icon && <Icon />}
        sx={{
            opacity: isMatched ? 1 : 0.4,
            order: isMatched ? 1 : 2,
            mx: 1,
            borderColor: '#D4C4B0',
            color: '#1a1a1a',
            transition: 'all 0.3s ease',
            '&:hover': {
                opacity: 1,
                borderColor: '#1a1a1a',
                backgroundColor: '#EDE8E0',
                transform: 'translateY(-2px)',
            }
        }}
    >
        {name}
    </Chip>

}


const Skills = () => {
    const [query, setQuery] = useState('')
    const [filter, setFilter] = useState<string[]>([])

    const handleDebounce = (value: string) => {
        setQuery(value);
    };

    const handleChange = (newValue: string[] | null) => {
        if (newValue !== null) {
            setFilter(newValue)
        }
    };

    const clickHandler = (value: string) => {
        setFilter(prev => prev.filter((val) => val !== value))
    }

    return (
        <SectionLayout odd name='skills'>
            <ScrollAnimation animateIn='fadeInLeft' animateOnce>
                <Typography level='h1' sx={{ color: '#1a1a1a' }}>Skills</Typography>
            </ScrollAnimation>

            <Stack direction='row' spacing={2} sx={{ mt: 2 }}>
                <DebounceInput
                    variant='outlined'
                    size='sm'
                    placeholder='search a skill...'
                    sx={{ 
                        flex: 1,
                        borderColor: '#D4C4B0',
                        '&:hover': {
                            borderColor: '#1a1a1a',
                        },
                        '&:focus-within': {
                            borderColor: '#1a1a1a',
                        }
                    }}
                    debounceTimeout={1000}
                    handleDebounce={handleDebounce}
                />
                <Select
                    variant='outlined'
                    size='sm'
                    placeholder='filter by ...'
                    multiple
                    renderValue={(o) => <Fragment>{'filter by ...'}</Fragment>}
                    onChange={(_, newValue: string[] | null) => handleChange(newValue)}
                    value={filter}
                    sx={{
                        borderColor: '#D4C4B0',
                        '&:hover': {
                            borderColor: '#1a1a1a',
                        }
                    }}
                >
                    {Object.keys(keywords).map((title: string, i: number) => (
                        <Fragment key={title}>
                            {i !== 0 && <ListDivider role="none" />}
                            <List sx={{ '--ListItemDecorator-size': '28px' }}>
                                <ListItem sticky>
                                    <Typography level="body-xs" sx={{ textTransform: 'uppercase', color: '#8B7355', fontWeight: 600 }}>
                                        {title}
                                    </Typography>
                                </ListItem>
                                {keywords[title].map((value) => (
                                    <Option
                                        key={value}
                                        value={value}
                                        sx={{
                                            [`&.${optionClasses.selected} .${listItemDecoratorClasses.root}`]:
                                            {
                                                opacity: 1,
                                            },
                                            '&:hover': {
                                                backgroundColor: '#EDE8E0',
                                            }
                                        }}
                                    >
                                        <ListItemDecorator sx={{ opacity: 0 }}>
                                            <Check />
                                        </ListItemDecorator>
                                        {value}
                                    </Option>
                                ))}
                            </List>
                        </Fragment>
                    ))}
                </Select>

            </Stack>

            {filter.length > 0 && <Stack spacing={1} sx={{ mt: 2, flexWrap: 'wrap', rowGap: 1 }} direction='row'>
                {filter.map((value: string) => (
                    <Chip size='sm'
                        endDecorator={
                            <ChipDelete onClick={() => clickHandler(value)} />
                        }
                        key={value}
                        variant='outlined'
                        sx={{
                            borderColor: '#D4C4B0',
                            color: '#1a1a1a',
                            '&:hover': {
                                borderColor: '#1a1a1a',
                            }
                        }}
                    >
                        {value}
                    </Chip>
                ))}
            </Stack>}

            <Divider sx={{ my: 2, backgroundColor: '#D4C4B0' }} />

            <Stack direction='row' sx={{ flex: 1, flexWrap: 'wrap', rowGap: 2, justifyContent: 'center' }}>
                {technologiesArray.map((techEntity, i) => (
                    <SkillChip {...techEntity} query={query} filter={filter} key={i} />
                ))}
            </Stack>
        </SectionLayout >
    )
}

export default Skills