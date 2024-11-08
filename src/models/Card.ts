export class Card {
  public id: string;
  public value: number;
  public isOpen: boolean;

  constructor(value: number) {
    this.id = crypto.randomUUID();
    this.value = value;
    this.isOpen = true;
  }

  flip(): boolean {
    return (this.isOpen = !this.isOpen);
  }
}
