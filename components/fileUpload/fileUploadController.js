export class FileUploadController{
    constructor(view){
        this.view = view;
    }

    getFileInput(){
        return this.view.fileInput;
    }
}