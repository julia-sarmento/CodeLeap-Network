import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';

import { store } from '../redux';
import GlobalStyles from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <GlobalStyles />
    </Provider>
  )
}

export default MyApp;
