import { Person } from "./person.js";
export class Student extends Person {
    _name;
    constructor() {
        super();
        this._name = "";
    }
    get name() {
        return this._name;
    }
    // Setter for radius
    set name(value) {
        this._name = value;
    }
}
