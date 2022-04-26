export class MyDate {
  constructor(
    public year: number = 1986,
    public month: number = 11,
    private _day: number = 12
  ) {}

  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    } else {
      return `${value}`;
    }
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  get day() {
    //Code
    return this._day;
  }

  isLeapYear(): Boolean {
    //Code
    return true;
  }
}

const myDate = new MyDate(1993, 7, 10);
console.log(myDate.printFormat());

console.error(myDate.day);
