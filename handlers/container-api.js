/**
 * Created by ranweijie on 16-6-29.
 */
import store from "../store/store"
import {showEditorAction,showPreviewAction} from "../actions/container-actions";

console.log("container-api里的store：==》",store);
export function showEditor() {
    store.dispatch(showEditorAction());
}

export function showPreview() {
    store.dispatch(showPreviewAction());
}