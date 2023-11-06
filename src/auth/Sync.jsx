import React from "react";
import { DocumentEditorContainerComponent, Toolbar, Inject } from "@syncfusion/ej2-react-documenteditor";
import "../App.css"
import {NavigationBar} from "../auth/NavigationBar"

function Sync(){
    let editorObj = null;
    const onSave=()=>{
        editorObj?.documentEditor.save("sample", "Docx");
    }
    return(
        <div className="App">
            
            <button  onClick={onSave} style={{marginBottom:10}}>Save</button>
            <DocumentEditorContainerComponent ref={(ins=>editorObj=ins)} height="100vh" width="200vh"  enableToolbar={true} serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/">
            <Inject services={[Toolbar]}></Inject>
            </DocumentEditorContainerComponent>
           
        </div>

    );
}

export {Sync};