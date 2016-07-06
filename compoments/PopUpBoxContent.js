/**
 * Created by ranweijie on 16-6-29.
 */
import React,{Component} from "react"
import ReactDOM from "react-dom"
import * as FormAPI from  "../handlers/form-api"
import $ from "jquery"
// import "jquery-ui"

class PopUpBoxContent extends Component{
    constructor(props){
        super(props);

    }
    closePopUpBox(){
        document.getElementById("pop-up").innerHTML = "";
    }
    addItem(){
        var addItemType = $('input[name="add-item"]:checked').val();
        // console.log("PopUpBoxContent.js==>添加item类型：",addItemType);
        if(!addItemType){
            alert("您还没有选择要添加的item类型");
            return false;
        }
        var addItemId = parseInt((new Date()).getTime());
        var addItemText = addItemType == "text" ? "我是文本"+addItemId :"我是日期"+addItemId;
        var addItem = {"type":addItemType,"index":addItemId,"text":addItemText};
        // console.log("PopUpBoxContent.js==>添加item：",addItem);
        FormAPI.addItem(addItem);
        // closePopUpBox();
    }
    render(){
        return <div id="pop-up-inner">
                <h4>选择要添加的Item</h4>
                    <label forHtml="text">
                            <input type="radio" name="add-item" id="text" value="text"/>文本
                     </label><br/>
                    <label forHtml="date">
                        <input type="radio" name="add-item" id="date" value="date"/>日期
                    </label><br/>
                    <button type="button" onClick={ e => this.closePopUpBox()} title="click to close">关闭</button>
                    <button type="button" onClick={ e => this.addItem()} title="click to submit">添加</button>
            </div>
    }
}

export default PopUpBoxContent


// return <div>
//     <div>
//         <label forHtml="text">
//             <input type="radio"  id="text"/>文本
//         </label>
//     </div>
//     <div>
//         <label forHtml="date">
//             <input type="radio" id="date"/>日期
//         </label>
//     </div>
//     <div>
//         <button type="button">关闭</button>
//         <button type="button">添加</button>
//     </div>
// </div>


