import { PropertiesEnum } from "../models/PropertiesEnum";
import { Enum } from "./enum";

export class ViewModeEnum extends Enum {
    static readonly LightMode = new PropertiesEnum(0, "Light mode");
    static readonly DarkMode = new PropertiesEnum(1, "Dark mode");
}
