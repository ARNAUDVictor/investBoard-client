import { FileUploadController } from "./components/fileUpload/fileUploadController";
import { FileUploadView } from "./components/fileUpload/fileUploadView";

export class View{
    constructor(){
        const app = document.getElementById("app");
        const inputFile = new FileUploadController(new FileUploadView());

        app.appendChild(inputFile.getFileInput());
    }
}