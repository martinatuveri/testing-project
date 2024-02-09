// File: getAmount.test.ts
import { Giftcard, newOrder } from './newOrder';
import { addGiftcard } from './addGiftcard';
import { getAmount } from './getAmount';

describe('getAmount', () => {
  // Happy Path
  it('should calculate the total amount, VAT, and total to pay for a valid order', () => {
    const intestatario = {
      codiceFiscale: 'TVRMTN02D205V52F',
      nome: 'Mario',
      cognome: 'Rossi',
      email: 'mario.rossi@example.com',
    };

    const ordine = newOrder(intestatario);

    const giftCard1: Giftcard = { tipologia: 'digitale', taglio: 10, quantita: 2 };
    const giftCard2: Giftcard = { tipologia: 'cartacea', taglio: 20, quantita: 1 };

    addGiftcard(ordine, giftCard1);
    addGiftcard(ordine, giftCard2);

    const amount = getAmount(ordine);

    expect(amount).toEqual({ imponibile: 40, iva: 8.8, totale: 48.8 });
  });

  // Eccezioni
  it('should throw an error for an empty order', () => {
    const intestatario = {
      codiceFiscale: 'TVRMTN02D205V52F',
      nome: 'Mario',
      cognome: 'Rossi',
      email: 'mario.rossi@example.com',
    };

    const ordine = newOrder(intestatario);

    expect(() => getAmount(ordine)).toThrow('Order is empty');
  });
});
