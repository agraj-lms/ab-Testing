import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FlagProvider } from "@unleash/proxy-client-react";

const config = {
  url: "https:/unleash.agraj.in/api/frontend", // Your front-end API URL or the Unleash proxy's URL (https://<proxy-url>/proxy)
  clientKey:
    "*:development.1450f9f1ff4a8810ca8f1efe4837be2b36170743b0aa2486e3b2c966", // A client-side API token OR one of your proxy's designated client keys (previously known as proxy secrets)
  refreshInterval: 15, // How often (in seconds) the client should poll the proxy for updates
  appName: "ab.agraj.in", // The name of your application. It's only used for identifying your application,
  environment: "development", // The environment your application is running in
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FlagProvider config={config}>
      <App />
    </FlagProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
