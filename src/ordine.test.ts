import { Intestatario, newOrder } from './ordine';

describe('newOrder', () => {
  // Happy Path
  it('should create a new order for a valid customer', () => {
    const intestatario = {
      codiceFiscale: 'TVRMTN02D205V52F',
      nome: 'Mario',
      cognome: 'Rossi',
      email: 'mario.rossi@example.com',
    };

    const ordine = newOrder(intestatario);

    expect(ordine).toEqual({
      intestatario,
      giftCards: [],
    });
  });

  // Special Cases
  it('should create an order even if some optional customer details are missing', () => {
    const intestatario = {
      codiceFiscale: 'TVRMTN02D205V52F',
      nome: 'Mario',
      cognome: 'Rossi',
      email: 'mario.rossi@example.com'
    };

    const ordine = newOrder(intestatario);

    expect(ordine.intestatario).toEqual(intestatario);
    expect(ordine.giftCards).toEqual([]);
  });

  // Edge Cases
  it('should handle edge case with minimum input', () => {
    const intestatario = {
      codiceFiscale: 'TVRMTN02D205V52F',
      nome: 'Mario',
      cognome: 'Rossi',
      email: 'mario.rossi@example.com'
    };

    const ordine = newOrder(intestatario);

    expect(ordine.intestatario).toEqual(intestatario);
    expect(ordine.giftCards).toEqual([]);
  });

  // Eccezioni
  it('should throw an error for an invalid customer (missing required fields)', () => {
    const intestatario = {
      codiceFiscale: '',
      nome: 'Mario',
      cognome: 'Rossi',
      email: 'mario.rossi@example.com'
    } as unknown as Intestatario;

    expect(() => newOrder(intestatario)).toThrow('Invalid customer data');
  });
});
