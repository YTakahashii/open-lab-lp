import { AppProps } from 'next/app';
import Router from 'next/router';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { customTheme } from '../styles/theme';
import { Global } from '@emotion/core';
import { globalStyle } from '../styles/global';
import * as gtag from '../lib/gtag';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/welcome.css';
import '../styles/video-react.css';

Router.events.on('routeChangeComplete', url => gtag.pageview(url));

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default App;
