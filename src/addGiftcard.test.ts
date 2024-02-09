import { Giftcard, newOrder } from './newOrder';
import { addGiftcard } from './addGiftcard';

describe('addGiftCard', () => {
  // Happy Path
  it('add a new gift card to the order', () => {
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

    expect(ordine.giftCards).toHaveLength(2);
    expect(ordine.giftCards).toContainEqual(giftCard1);
    expect(ordine.giftCards).toContainEqual(giftCard2);
  });

  // Special Cases
  it('should update the quantity if adding the same gift card type again', () => {
    const intestatario = {
      codiceFiscale: 'TVRMTN02D205V52F',
      nome: 'Mario',
      cognome: 'Rossi',
      email: 'mario.rossi@example.com',
    };

    const ordine = newOrder(intestatario);

    const giftCard1:Giftcard = { tipologia: 'digitale', taglio: 10, quantita: 2 };

    addGiftcard(ordine, giftCard1);
    addGiftcard(ordine, giftCard1);

    expect(ordine.giftCards).toHaveLength(1);
    expect(ordine.giftCards[0].quantita).toEqual(4); // Quantità aggiornata
  });

  // Eccezioni
  it('invalid gift card (missing required fields)', () => {
    const intestatario = {
      codiceFiscale: 'TVRMTN02D205V52F',
      nome: 'Mario',
      cognome: 'Rossi',
      email: 'mario.rossi@example.com',
    };

    const ordine = newOrder(intestatario);

    const giftCard: Giftcard = {
        tipologia: 'digitale', taglio: 10, quantita: 0
    };
    
    expect(() => addGiftcard(ordine, giftCard)).toThrow('Invalid gift card data');
  });
});
