import type {AppProps} from 'next/app';
import {createUseStyles, ThemeProvider} from 'react-jss';
import Theme, {theme} from '../theme';

/**
 * Global Styles applied for the project.
 * Below we specify line breaks on newlines using `whiteSpace: "pre"` for all `code` blocks.
 * @summary Global CSS styles applied for the project
 */
const useStyles = createUseStyles((theme: Theme) => ({
    "@global": {
        code: {
            display: "inline-block",
            whiteSpace: "pre",
            border: `thin solid ${theme.colors.accents.light}`,
            padding: "1rem 2rem",
            backgroundColor: theme.colors.background.lightOnDark,
            color: theme.colors.text.lightOnDark,
            borderRadius: theme.spacing.main / 2
        }
    },
}));

const App = ({Component, pageProps}: AppProps) => {
    useStyles({theme});
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default App;
