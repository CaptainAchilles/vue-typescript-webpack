import * as Vue from "vue";
import App from "./App";

import "./styles/main.css";

let appContainer = document.createElement("div");
appContainer.id = "app";

document.body.appendChild(appContainer);
/* eslint-disable no-new */
new Vue({
    el: "#app",
    render: (h) => h(App)
});
