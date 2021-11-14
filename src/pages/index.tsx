import {useTheme} from "react-jss";

const ExamplePage: React.FC = (props) => {
    const theme = useTheme();
    return (
        <main>
            <title>Example Page</title>
            <header>Current theme styles are as follow:</header>
            <code>{JSON.stringify(theme || '{}', null, 4)}</code>
        </main>
    )
};

export default ExamplePage;