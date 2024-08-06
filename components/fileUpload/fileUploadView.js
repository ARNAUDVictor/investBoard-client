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

            handler(this.fileInput.files[0])
        })
    }

}


/*
ca marche :

addListener(handler) {
        console.log(this.fileInput);
        this.fileInput.addEventListener("change", event => {

            console.log(this.fileInput.files);
        })
    }

ca marche pas
addListener(handler) {
        console.log(this.fileInput);
        this.fileInput.addEventListener("change", function(event) {

            console.log(this.fileInput.files);
        })
    }

*/