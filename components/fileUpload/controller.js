export class FileInputController{
    constructor(view){
        this.view = view;
    }

    getFileInput(){
        return this.view.fileInput;
    }
}