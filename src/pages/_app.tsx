import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

import { store } from '../redux';

import GlobalStyles from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
      <Component {...pageProps} />
      <GlobalStyles />
    </Provider>
  )
}

export default MyApp;
