import type {AppProps} from 'next/app';
import {ThemeProvider} from 'react-jss';
import {theme} from '../theme';

const App = ({Component, pageProps}: AppProps) => {
    return (
        <ThemeProvider theme={theme}>
            {console.log('Page props', pageProps)}
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default App;
