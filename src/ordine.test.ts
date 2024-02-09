import { newOrder } from './ordine';

describe('newOrder', () => {
  // Happy Path
  it('should create a new order for a valid customer', () => {
    const intestatario = {
      codiceFiscale: 'ABC123',
      nome: 'Mario',
      cognome: 'Rossi',
      email: 'mario.rossi@example.com',
    };

    const ordine = newOrder(intestatario);

    expect(ordine).toBe({
      intestatario,
      giftCards: [],
    });
  });

  // Special Cases
  it('should create an order even if some optional customer details are missing', () => {
    const intestatario = {
      codiceFiscale: 'ABC123',
      nome: 'Mario',
      cognome: 'Rossi',
      email: 'mario.rossi@example.com'
    };

    const ordine = newOrder(intestatario);

    expect(ordine.intestatario).toBe(intestatario);
    expect(ordine.giftCards).toBe([]);
  });

  // Edge Cases
  it('should handle edge case with minimum input', () => {
    const intestatario = {
      codiceFiscale: 'ABC123',
      nome: 'Mario',
      cognome: 'Rossi',
      email: 'mario.rossi@example.com'
    };

    const ordine = newOrder(intestatario);

    expect(ordine.intestatario).toBe(intestatario);
    expect(ordine.giftCards).toBe([]);
  });

  // Eccezioni
  it('should throw an error for an invalid customer (missing required fields)', () => {
    const intestatario = {
      codiceFiscale: 'ABC123',
      nome: 'Mario',
      cognome: 'Rossi',
      email: 'mario.rossi@example.com'
    };

    expect(() => newOrder(intestatario)).toThrow('Invalid customer data');
  });
});
