export class FileUploadController{
    constructor(view, model){
        this.view = view;
        this.model = model;
        this.view.bindFileUpload(this.handleFileUpload);
    }

    getFileInput(){
        return this.view.fileInput;
    }

    handleFileUpload = (file) =>{
        this.model.readFile2(file);
    }
}