import {ThemeProvider, useTheme} from "react-jss";

const ExamplePage: React.FC = (props) => {
    const theme = useTheme();
    console.log('My Theme', theme);
    return (
        <main>
            <title>Fuck TSA</title>
            <header >Hello fuckers</header>
        </main>
    )
};

export default ExamplePage;