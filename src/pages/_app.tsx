import { AppProps } from 'next/app';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { customTheme } from '../styles/theme';
import { Global } from '@emotion/core';
import { globalStyle } from '../styles/global';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/welcome.css';
import '../styles/video-react.css';

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
