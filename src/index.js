import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { mainTheme } from "./assets/theme";
import { Provider } from "react-redux";
import posthog from "posthog-js"
import {PostHogProvider} from "posthog-js/react"
import store from "./store/index";

import App from "./App";

posthog.init(
  process.env.REACT_APP_POSTHOG_KEY,{api_host:process.env.REACT_APP_POSTHOG_HOST}
)
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <ThemeProvider theme={mainTheme}>
      <PostHogProvider client={posthog}> 
        <App />
      </PostHogProvider>
    </ThemeProvider>
  </Provider>
);
