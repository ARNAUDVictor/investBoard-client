export class FileUploadModel{
    constructor(){
        this.CSVData = [];
    }

    readFile2(file){
        if(file){
            const reader = new FileReader();
            reader.addEventListener("load", (event) => {
                const text = reader.result;
                this.parseCSV(text);
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
        console.log(processedData);
    }
}