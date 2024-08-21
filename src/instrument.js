import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://c9ea0cf500d1d29dac43212775f3b48e@o4507740505571328.ingest.us.sentry.io/4507740508782592",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  environment: "production",
  initialScope: {
    tags: { "my-tag": "my value" },
    user: { id: 42, email: "rampunit9555@gmail.com" },
  },
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});