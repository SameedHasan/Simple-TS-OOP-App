import { Person } from "./person.js";

export class Student extends Person {
  _name: string;

  constructor() {
    super();
    this._name = "";
  }
  get name(): string {
    return this._name;
  }

  // Setter for radius
  set name(value: string) {
    this._name = value;
  }
  //   private generateId(): string {
  //     const randomNumber = Math.floor(10000 + Math.random() * 90000);
  //     return randomNumber.toString();
  //   }
}
