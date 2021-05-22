import {GetStaticProps} from 'next';

interface CatAAS {
    id: string;
    created_at: string;
    tags: string[];
    url: string;
}

interface ExampleProps {
    post: CatAAS;
}

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


const ExamplePage = ({post}: ExampleProps) => {
    return (
        <main>
            <header>Welcome to your example page. Here's a kitty</header>
            <img src={`https://cataas.com${post.url}`}></img>
        </main>
    )
};

export default ExamplePage;
