import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga4';
import { worker } from '@/mocks/browser';
import App from '@/App';
import * as Sentry from '@sentry/react';

async function deferRender() {
  if (process.env.REACT_APP_MSW_ENABLE !== 'true') {
    return;
  }
  return worker.start({
    onUnhandledRequest: 'bypass',
  });
}

//GA 추적 태그 설정
if (process.env.REACT_APP_GTAG_ID) {
  ReactGA.initialize(process.env.REACT_APP_GTAG_ID);
}

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: [process.env.REACT_APP_SENTRY_BASE_URL!],
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

Sentry.configureScope((scope) => {
  scope.setTag('environment', process.env.NODE_ENV || 'development');
});

deferRender()
  .then(() => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
      const root = ReactDOM.createRoot(rootElement);
      root.render(<App />);
    } else {
      console.error('Root element not found');
    }
    console.log(`     ヽ      |   |      /    /  `);
    console.log(`   ー       곰터뷰 최고!!!       ー`);
    console.log(`     /    /    |   |   ＼   ヽ  `);
    console.log(`　　　　　　　　　　　　　　;' ':;,　　 　　　 ,;'':;,`);
    console.log(`　　　　　　　　　　　　　;'　　 ':;,.,..,,,;'　　　';,`);
    console.log(`                ,:'　　　　　　　　 　　　　::::::::､`);
    console.log(
      `　    　　　　　　　,:' ／ 　 　　　　＼ 　　　　　::::::::',`
    );
    console.log(
      `　　　　　  　　　　:'　 ●　　　　　 ●　 　　　　　　::::::::i.`
    );
    console.log(`　　  　　　　　　　i　'''　(_人__)　　''''　　 ::::::::::i`);
    console.log(
      `　　　　  　　　　　 :　 　　　　　　　　　 　　　　　::::::::i`
    );
    console.log(`　　　　　　　　　　　:,､ 　　　　　 　 　　　 :::::::::: /`);
    console.log(`　　　　 　　　　　　 ,:'　　　　　　　 : ::::::::::::｀:､`);
    console.log(`　　　　　　　 　　 ,:'　　　　 　　　　 : : ::::::::::｀:､`);
  })
  .catch((err) => {
    console.error('Failed to start mock service worker', err);
  });
