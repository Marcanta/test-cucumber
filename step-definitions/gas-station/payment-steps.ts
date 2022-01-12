import { CustomWorld } from '../../world';
import { CreditCard } from '../../domains/gas-station/payment-card';
import { Given, Then, When } from '@cucumber/cucumber';
import expect from 'expect';

Given("j'ai une carte bancaire", async function (this: CustomWorld) {
  this.card = new CreditCard(2, 'ABCD');
});

Given("j'ai inséré ma carte bancaire", async function (this: CustomWorld) {
  this.atm.insertCard(this.card!);
});

Given('ma carte bancaire a un solde suffisant', async function (this: CustomWorld) {
  this.card!.moneyAmount = 140;
});

Given("j'ai saisi le code", async function (this: CustomWorld) {
  this.atm.enterCode('ABCD');
});

Given("j'ai saisi un mauvais code", async function (this: CustomWorld) {
  this.atm.enterCode('ENDO');
});

When("j'appuie sur valider", async function (this: CustomWorld) {
  this.atm.validate();
});

Then("la machine m'annonce {string}", async function (this: CustomWorld, value: string) {
  expect(this.atm.response.tells).toBe(value);
});

Then('la machine me demande {string}', async function (this: CustomWorld, value: string) {
  expect(this.atm.response.ask).toBe(value);
});
