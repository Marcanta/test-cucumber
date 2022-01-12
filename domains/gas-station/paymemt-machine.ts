import { CreditCard } from './payment-card';

export class ATM {
  private _card?: CreditCard | null;
  private _response?: ATMResponse;

  public insertCard(card: CreditCard): void {
    this._card = card;
  }
  public enterCode(code: string): void {
    if (!this._card?.isCodeCorrect(code)) {
      this._response = { tells: 'Code incorrect', ask: 'Retirer votre carte bancaire' };
      return;
    }
  }
  public validate(): ATMResponse {
    if (this._response?.tells === 'Code incorrect') return this._response;
    if (this._card!.moneyAmount < 30) {
      this._response = { tells: 'Solde insuffisant', ask: 'Retirer votre carte bancaire' };
    } else {
      this._response = { tells: 'OK', ask: 'Voulez-vous une facture' };
    }
    this._card = null;
    return this._response!;
  }

  public get response(): ATMResponse {
    return this._response || { ask: 'Veuillez inserer votre carte', tells: 'Bonjour' };
  }
  public set response(value: ATMResponse) {
    this._response = value;
  }
}
type WelcomeResponse = {
  tells: 'Bonjour';
  ask: 'Veuillez inserer votre carte';
};
type NegativeResponse = {
  tells: 'Solde insuffisant' | 'Code incorrect';
  ask: 'Retirer votre carte bancaire';
};

type PositiveResponse = {
  tells: 'OK';
  ask: 'Voulez-vous une facture';
};

export type ATMResponse = WelcomeResponse | NegativeResponse | PositiveResponse;
