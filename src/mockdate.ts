type RealDateT = Date;
const RealDate = Date;
let now: null | number = null;

const MockDate = class Date {
  private date: RealDateT;

  constructor();
  constructor(value: number | string);
  constructor(
    year: number,
    month: number,
    date?: number,
    hours?: number,
    minutes?: number,
    seconds?: number,
    ms?: number
  );

  constructor(
    y?: number,
    m?: number,
    d?: number,
    h?: number,
    M?: number,
    s?: number,
    ms?: number
  ) {
    let date: null | RealDateT = null;
    switch (arguments.length) {
      case 0:
        if (now !== null) {
          date = new RealDate(now.valueOf());
          break;
        } else {
          date = new RealDate();
        }
        break;

      case 1:
        date = new RealDate(y);
        break;

      default:
        d = typeof d === "undefined" ? 1 : d;
        h = h || 0;
        M = M || 0;
        s = s || 0;
        ms = ms || 0;
        date = new RealDate(y, m, d, h, M, s, ms);
        break;
    }

    this.date = date;

    return this;
  }

  toString(): string {
    return this.date.toString();
  }

  toDateString(): string {
    return this.date.toDateString();
  }

  toTimeString(): string {
    return this.date.toTimeString();
  }

  toLocaleString(): string {
    return this.date.toLocaleString();
  }

  toLocaleDateString(): string {
    return this.date.toLocaleDateString();
  }

  toLocaleTimeString(): string {
    return this.date.toLocaleTimeString();
  }

  valueOf(): number {
    return this.date.valueOf();
  }

  getTime(): number {
    return this.date.getTime();
  }

  getFullYear(): number {
    return this.date.getFullYear();
  }

  getUTCFullYear(): number {
    return this.date.getUTCFullYear();
  }

  getMonth(): number {
    return this.date.getMonth();
  }

  getUTCMonth(): number {
    return this.date.getUTCMonth();
  }

  getDate(): number {
    return this.date.getDate();
  }

  getUTCDate(): number {
    return this.date.getUTCDate();
  }

  getDay(): number {
    return this.date.getDay();
  }

  getUTCDay(): number {
    return this.date.getUTCDay();
  }

  getHours(): number {
    return this.date.getHours();
  }

  getUTCHours(): number {
    return this.date.getUTCHours();
  }

  getMinutes(): number {
    return this.date.getMinutes();
  }

  getUTCMinutes(): number {
    return this.date.getUTCMinutes();
  }

  getSeconds(): number {
    return this.date.getSeconds();
  }

  getUTCSeconds(): number {
    return this.date.getUTCSeconds();
  }

  getMilliseconds(): number {
    return this.date.getMilliseconds();
  }

  getUTCMilliseconds(): number {
    return this.date.getUTCMilliseconds();
  }

  getTimezoneOffset(): number {
    return this.date.getTimezoneOffset();
  }

  setTime(time: number): number {
    return this.date.setTime(time);
  }

  setMilliseconds(ms: number): number {
    return this.date.setMilliseconds(ms);
  }

  setUTCMilliseconds(ms: number): number {
    return this.date.setUTCMilliseconds(ms);
  }

  setSeconds(sec: number, ms?: number): number {
    return this.date.setSeconds(sec, ms);
  }

  setUTCSeconds(sec: number, ms?: number): number {
    return this.date.setUTCSeconds(sec, ms);
  }

  setMinutes(min: number, sec?: number, ms?: number): number {
    return this.date.setMinutes(min, sec, ms);
  }

  setUTCMinutes(min: number, sec?: number, ms?: number): number {
    return this.date.setUTCMinutes(min, sec, ms);
  }

  setHours(hours: number, min?: number, sec?: number, ms?: number): number {
    return this.date.setHours(hours, min, sec, ms);
  }

  setUTCHours(hours: number, min?: number, sec?: number, ms?: number): number {
    return this.date.setUTCHours(hours, min, sec, ms);
  }

  setDate(date: number): number {
    return this.date.setDate(date);
  }

  setUTCDate(date: number): number {
    return this.date.setUTCDate(date);
  }

  setMonth(month: number, date?: number): number {
    return this.date.setMonth(month, date);
  }

  setUTCMonth(month: number, date?: number): number {
    return this.date.setUTCMonth(month, date);
  }

  setFullYear(year: number, month?: number, date?: number): number {
    return this.date.setFullYear(year, month, date);
  }

  setUTCFullYear(year: number, month?: number, date?: number): number {
    return this.date.setUTCFullYear(year, month, date);
  }

  toUTCString(): string {
    return this.date.toUTCString();
  }

  toISOString(): string {
    return this.date.toISOString();
  }

  toJSON(key?: any): string {
    return this.date.toJSON();
  }

  static UTC = RealDate.UTC;

  static now = function () {
    return new MockDate().valueOf();
  };

  static parse = function (dateString: string) {
    return RealDate.parse(dateString);
  };

  static toString = function () {
    return RealDate.toString();
  };
};

export function set(date: string | number | Date): void {
  var dateObj = new Date(date.valueOf());
  if (isNaN(dateObj.getTime())) {
    throw new TypeError("mockdate: The time set is an invalid date: " + date);
  }

  // @ts-ignore
  Date = MockDate;

  now = dateObj.valueOf();
}

export function reset(): void {
  Date = RealDate;
}

export default {
  set,
  reset,
};
