import { MainController } from "./controller";
import { MainModel } from "./model";
import { MainView } from "./view";

const app = new MainController(new MainModel(), new MainView());