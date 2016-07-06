/**
 * Created by ranweijie on 16-6-29.
 */
import reducers from "../reducers/reducers"
import {createStore} from "redux"

var store = createStore(reducers);

// console.log("store.js中的store：==>",store);
export default store;