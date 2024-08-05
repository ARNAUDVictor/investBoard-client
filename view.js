import { FileInputController } from "./components/fileUpload/controller";
import { FileInputView } from "./components/fileUpload/view";

export class View{
    constructor(){
        const app = document.getElementById("app");
        const inputFile = new FileInputController(new FileInputView());

        console.log(FileInputController.getFileInput());
        app.appendChild(inputFile.getFileInput());
    }
}