export class CreditCard {
  private _moneyAmount: number;
  private _code: string;

  constructor(money: number, code: string) {
    this._moneyAmount = money;
    this._code = code;
  }

  public isCodeCorrect(code: string): boolean {
    return this._code === code;
  }

  public get moneyAmount(): number {
    return this._moneyAmount;
  }
  public set moneyAmount(value: number) {
    this._moneyAmount = value;
  }
}
