import { FileUploadController } from "./components/fileUpload/fileUploadController";
import { FileUploadView } from "./components/fileUpload/fileUploadView";
import { FileUploadModel } from "./components/fileUpload/fileUploadModel";

export class MainView{
    constructor(){
    }

    displayFileInput(fileInput){
        const app = document.getElementById("app");
        app.appendChild(fileInput);
    }
}