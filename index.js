import React from "react"
import ReactDOM from "react-dom"
import store from "./store/store"
import MainContainer from "./compoments/MainContainer"

// console.log("index.js中store的状态：==》",store.getState().containerStatus);

var rootElement = document.getElementById("root");
function render() {
    ReactDOM.render(
        <MainContainer
            status = {store.getState().containerStatus}
            items = {store.getState().formItems.items}
        />,
        rootElement
    )
}

render();
store.subscribe(render);