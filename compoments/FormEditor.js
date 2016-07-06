/**
 * Created by ranweijie on 16-6-29.
 */
import React,{Component} from "react"
import ReactDOM from "react-dom"
import $ from "jquery"
import "jquery-ui"
import * as FormAPI from  "../handlers/form-api"
import PopUpBoxContent from "./PopUpBoxContent"

class FormEditor extends Component{
    constructor(props){
        super(props);

    }
    openPopUpBox(){
        var popUpBox = document.getElementById("pop-up");
        // var closePopUp = function () {
        //     document.getElementById("pop-up").innerHTML = "";
        // };
        ReactDOM.render(
            // <PopUpBoxContent handlerClosePopUp={this.closePopUpBox()}/>,popUpBox
            // <PopUpBoxContent closePopUp={closePopUp}/>,popUpBox
            <PopUpBoxContent />,popUpBox
        )
    }
    removeItem(index){
        // console.log("FormEditor.js ==> remove item index:",index);
        FormAPI.removeItem(index)
    }
    render(){
        var self = this;
        var items = self.props.itemsInfo;
        return (<div>
            <button onClick={ e => self.openPopUpBox()} title="click to add item"> + </button>
            <div className="form-item-div">
            {items.map(function (item) {
                return(<div>
                    <label >{item.type}</label>
                    <span>{item.text}</span>
                    <button type="button" onClick={ e => self.removeItem(item.index)}> - </button>
                </div>)
            })}
            </div>
        </div>)
    }

}

export default FormEditor
