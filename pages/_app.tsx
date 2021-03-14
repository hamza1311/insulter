import '../styles/globals.scss'
import {AppProps} from "next/app";
import Head from 'next/head';
import {useMemo} from "react";
import {createMuiTheme, CssBaseline, useMediaQuery} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/core/styles";

function MyApp({Component, pageProps}: AppProps) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );

    // noinspection HtmlUnknownTarget
    return (
        <>
            <Head>
                <title>Insulter</title>

                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" key="viewport"/>
                <meta name="description" content="Insults someone"/>
                <meta name="color-scheme" content="dark light"/>


                <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png"/>

                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#303030"/>
                <meta name="theme-color" content="#303030"/>


                <link rel="manifest" href="/manifest.json"/>

                <link rel="apple-touch-icon" href="/icons/apple-icon-180.png"/>

                <meta name="apple-mobile-web-app-capable" content="yes"/>
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Component {...pageProps} />
            </ThemeProvider>

        </>
    )
}

export default MyApp
