export class FileUploadModel{
    constructor(){
        this.CSVData = [];
        this.dataReadyCallback = null;
    }

    bindDataReady(callback){
        this.dataReadyCallback = callback;
    }

    readFile(file){
        if(file){
            const reader = new FileReader();
            reader.addEventListener("load", (event) => {
                this.CSVData = reader.result;
                this.dataReady()
            });
            reader.readAsText(file);
        }
    }

    parseCSV(text){
        const lines = text.split('\n');
        const header = lines[0];
        let processedData = [];
        lines.forEach(element => {
            processedData.push(element.split(";"));
        });
    }

    dataReady() {
        if(this.dataReadyCallback){
            this.dataReadyCallback("dataParsed", this.CSVData);
        }
    }
    
}