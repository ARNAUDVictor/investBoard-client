export class FileUploadController{
    constructor(view, model){
        this.view = view;
        this.model = model;
        this.view.bindFileUpload(this.handleFileUpload);
        this.model.bindDataReady(this.handleDataReady.bind(this));
    }

    getFileInput(){
        return this.view.fileInput;
    }

    handleFileUpload = (file) =>{
        this.model.readFile(file);
    }

    handleDataReady = (name, data) => {
        this.emitEvent(name, data);
    }

    emitEvent(name, data){
        const event = new CustomEvent(name, {detail: data});
        window.dispatchEvent(event);
        console.log("Event emitted :", event);
    }
}