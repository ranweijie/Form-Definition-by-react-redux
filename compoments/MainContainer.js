/**
 * Created by ranweijie on 16-6-29.
 */
import React,{Component} from "react"
import ReactDOM from "react-dom"
import FormEditor from "./FormEditor"
import FormPreview from "./FormPreview"
import * as ContainerAPI from  "../handlers/container-api"


class MainContainer extends Component{
    constructor(props){
        super(props)
    }
    renderEditor(){
        ContainerAPI.showEditor()
    }

    renderPreview(){
        ContainerAPI.showPreview()
    }
    render(){
        var currentStatus = this.props.status.status;
        var self = this;
        // console.log("MainContainer.js当前状态：==》",currentStatus);
        return(<div>
             {(function () {
                if(currentStatus === "edit"){
                    return (<div>
                        <button onClick={ e => self.renderPreview()} title="change to preview page">预览</button>
                        <div>这是编辑页面哟111111</div>
                        <FormEditor itemsInfo = {self.props.items}/>
                    </div>)
                }
            })()}
            {(function () {
                if(currentStatus === "preview"){
                    return (<div>
                        <button onClick={ e => self.renderEditor()} title="change to edit page">编辑</button>
                        <div>这是预览页面哟22222</div>
                        <FormPreview itemsInfo = {self.props.items}/>
                    </div>)
                }
            })()}
        </div>)
    }

}

export default MainContainer