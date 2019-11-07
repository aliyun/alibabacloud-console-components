import * as React from "react";
import { render } from "react-dom";
import "@alicloud/console-components/dist/wind.css";
import App from "./demo/{{DEMO_ENTRY_NAME}}";
import "./styles.less";

const rootElement = document.getElementById("app");
render(<App />, rootElement);
