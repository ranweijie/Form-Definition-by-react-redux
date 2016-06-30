/**
 * Created by ranweijie on 16-6-29.
 */
import * as types from "./actions-types"

export function showEditorAction() {
    return {
        type:types.SHOW_EDITOR
    }
}

export function showPreviewAction() {
    return {
        type:types.SHOW_PREVIEW
    }
}