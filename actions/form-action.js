/**
 * Created by ranweijie on 16-6-30.
 */
import * as types from  "./actions-types"

export function addItemAction(item) {
    return {
        type:types.ADD_ITEM,
        item:item
    }
}

export function removeItemAction(index) {
    return {
        type:types.REMOVE_ITEM,
        index:index
    }
}