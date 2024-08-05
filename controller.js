import { Model } from "./Model";
import { View } from "./view";

class MainController{
    constructor(model, view){
        this.model = model;
        this.view = view;
    }
}

const app = new MainController(new Model(), new View());