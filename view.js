import { FileUploadController } from "./components/fileUpload/fileUploadController";
import { FileUploadView } from "./components/fileUpload/fileUploadView";
import { FileUploadModel } from "./components/fileUpload/fileUploadModel";

export class View{
    constructor(){
        const app = document.getElementById("app");
        const inputFile = new FileUploadController(new FileUploadView(), new FileUploadModel());

        app.appendChild(inputFile.getFileInput());
    }
}