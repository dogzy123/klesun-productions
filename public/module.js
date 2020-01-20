import App from "../src/App";

export default function init() {
    ReactDOM.render(
        <App/>,
        document.getElementById('klesun-productions-root')
    );
}

window.klesun_productions = {
    init: init,
};