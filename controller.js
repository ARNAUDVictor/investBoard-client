import { PlatformController } from "./components/platform/platformController";
import { PlatformModel } from "./components/platform/platformModel";
import { PlatformView } from "./components/platform/platformView";

export class MainController{
    constructor(model, view){
        this.model = model;
        this.view = view;
        this.platform = new PlatformController(new PlatformView(), new PlatformModel());
    }
}