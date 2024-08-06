export class FileUploadController{
    constructor(view){
        this.view = view;
        this.view.bindFileUpload(this.handleFileUpload)
    }

    getFileInput(){
        return this.view.fileInput;
    }

    handleFileUpload(file){
        console.log(file);
    }
}