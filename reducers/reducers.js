/**
 * Created by ranweijie on 16-6-28.
 */
import { combineReducers } from 'redux'
import * as types from "../actions/actions-types"
import _ from 'lodash';
import $ from "jquery"

var initStatus = {
    status:"edit"
};

var initItems = {
    items:[]
};

var initFrontItems = {
    items:[33,44]
};

console.log("old initFrontItems:==>",initFrontItems.items);

function getServerFormData(callback) {
    $.get("/getFormItems",function(data,status){
        console.log("serverDate11:==>",data);
        callback(data)
    });
}

function changeArr(data) {
    // initFrontItems.items.concat(data.items);
    initFrontItems.items = data.items;
    console.log("new initFrontItems:==>",initFrontItems.items);
}

getServerFormData(changeArr);

function containerReducer(state = initStatus,action) {

    if(action.type ===types.SHOW_EDITOR){
        return _.assign({},state,{status:"edit"})
    }
    if (action.type ===types.SHOW_PREVIEW){
        return _.assign({},state,{status:"preview"})
    }
    return state;
}

function formReducer(state = initItems,action) {

    if(action.type ===types.ADD_ITEM){
        let newItem = _.concat(state.items,action.item);

        return _.assign({},state,{items:newItem})
    }
    if (action.type ===types.REMOVE_ITEM){

        let newItem = _.filter(state.items,function (item) {
            return item.index != action.index
        });

        return _.assign({},state,{items:newItem})
    }
    return state;
}

var reducers = combineReducers({
    containerStatus:containerReducer,
    formItems:formReducer
    }
);

console.log("reducers.js中的reducers：==>",reducers);

export default reducers;