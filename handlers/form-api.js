/**
 * Created by ranweijie on 16-6-30.
 */
import {addItemAction,removeItemAction} from "../actions/form-action"
import store from "../store/store"

export function addItem(item) {
    store.dispatch(addItemAction(item))

}

export function removeItem(index) {
    store.dispatch(removeItemAction(index))
}