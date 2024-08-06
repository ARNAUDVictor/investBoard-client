export class FileUploadModel{
    constructor(){
        this.fileContent = [];
    }

    readFile(file){
        if(file){
            const reader = new FileReader();
            reader.onload = function(e){
                const text = e.target.result;
                console.log(text);
                this.parseCSV(text);
            };
            reader.readAsText(file);  
        }
    }
    readFile2(file){
        if(file){
            const reader = new FileReader();
            let text = "";
            reader.addEventListener("load", function () {
                console.log(reader.result);
                text = reader.result;
                console.log(text);
                this.parseCSV(text);
            });
            reader.readAsText(file);
        }
    }

    parseCSV(text){
        const lines = text.split('\n');
        
        console.log(lines);
    }
}