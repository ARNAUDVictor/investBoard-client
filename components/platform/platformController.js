export class PlatformController{
    constructor(view, controller){
        this.view = view;
        this.controller = controller;

        this.listenForNewTransaction();
    }

    listenForNewTransaction(){
        window.addEventListener("dataParsed", (event) =>{
            console.log("new event : ", event.detail);
        });
    }
}