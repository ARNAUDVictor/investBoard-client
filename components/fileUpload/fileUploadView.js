export class FileUploadView{
   constructor() {
    this.fileInput = this.createElement();
   } 

    createElement(){
        const element = document.createElement("input");
        element.type="file";

        return element;
    }
}