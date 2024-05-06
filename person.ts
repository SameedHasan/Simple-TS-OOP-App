export class Person {
  personality: string;

  constructor() {
    this.personality = "Mystery";
  }

  //   private generateId(): string {
  //     const randomNumber = Math.floor(10000 + Math.random() * 90000);
  //     return randomNumber.toString();
  //   }

  askQuestion(answer: number): void {
    if (answer === 1) {
      this.personality = "Extrovert";
    } else if (answer === 2) {
      this.personality = "Introvert";
    } else {
      this.personality = "still a Mystery";
    }
  }
  getPersonality(): string {
    return this.personality;
  }
}
