/**
 * Created by ranweijie on 16-6-29.
 */
import React,{Component} from "react"
import ReactDOM from "react-dom"
// import $ from "jquery"
// import "jquery-ui"

class FormPreview extends Component{
    constructor(props){
        super(props);

    }
    submitForm(){
        alert("Sorry 暂时不支持提交！")
    }

    render(){
        var self = this;
        var items = self.props.itemsInfo;
        return (<div className="form-item-div">
            {items.map(function (item) {
                return(<div>
                    <label >{item.type}</label>
                    <span>{item.text}</span>
                </div>)
            })}
            <button type="button" onClick={ e => this.submitForm()} title="click to submit">提交</button><br/>
        </div>)
    }

}

export default FormPreview