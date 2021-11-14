import {GetStaticProps} from 'next';
import {createUseStyles, useTheme} from 'react-jss';
import {Theme} from '@/theme';

interface CatAAS {
    id: string;
    created_at: string;
    tags: string[];
    url: string;
}

interface ExampleProps {
    post: CatAAS;
}


export type ClassNames = 'header';

const useStyles = createUseStyles<ClassNames, ExampleProps, Theme>((theme) => ({
    header: {
        // backgroundColor: theme.colors.brand,
    }
}));


// Gets called at build time.
export const getStaticProps = async () => {
    // Calls out to external API
    const res = await fetch('https://cataas.com/cat?json=true');
    const post: CatAAS = await res.json();

    // Returning `posts` inside a `props` object will allow the
    // Page to receive the prop at build time
    return {
        props: {
            post,
        },
    };
};


const ExamplePage: React.FC<ExampleProps> = (props) => {
    const theme = useTheme<Theme>();
    console.log('themeee', theme);

    const classes = useStyles({...props, theme})

    return (
        <main>
            <title>Example Page</title>
            <header className={classes.header}>TSA hates cats</header>
            <img src={`https://cataas.com${props.post.url}`}></img>
        </main>
    )
};

export default ExamplePage;
