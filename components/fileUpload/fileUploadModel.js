export class FileUploadModel{
    constructor(){
        this.fileContent = [];
    }

    readFile(file){
        console.log(file);
        if(file){
            const reader = new FileReader();
            reader.addEventListener("loadend", function(){
                console.log(reader.result);
            });
            reader.readAsText(file);
            console.log(reader.result);
        }

    }
}