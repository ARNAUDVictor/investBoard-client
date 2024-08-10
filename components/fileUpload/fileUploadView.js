export class FileUploadView{
   constructor() {
    this.fileInput = this.createElement();
   } 

    createElement(){
        const element = document.createElement("input");
        element.type="file";

        return element;
    }

    bindFileUpload(handler) {
        this.fileInput.addEventListener("change", event => {

            handler(this.fileInput.files[0]);
        })
    }
}