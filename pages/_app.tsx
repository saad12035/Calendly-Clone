import type { AppProps } from 'next/app'
import '../styles/globals.scss';
import { ThemeProvider } from '@mui/system';
import { theme } from '../utils/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
