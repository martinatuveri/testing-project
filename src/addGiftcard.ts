import { Ordine, Giftcard } from './newOrder';

export function addGiftcard(ordine: Ordine, giftCard: Giftcard): Ordine {
  if (!isValidGiftCard(giftCard)) {
    throw new Error('Invalid gift card data');
  }

  const existingGiftCardIndex = findGiftCardIndex(ordine.giftCards, giftCard);

  if (existingGiftCardIndex !== -1) {
    // Aggiorna la quantità se la gift card esiste già
    ordine.giftCards[existingGiftCardIndex].quantita += giftCard.quantita;
  } else {
    // Aggiungi una nuova gift card
    ordine.giftCards.push({ ...giftCard });
  }

  return ordine;
}

function isValidGiftCard(giftCard: Giftcard): boolean {
  return giftCard && giftCard.tipologia && giftCard.taglio && giftCard.quantita > 0;
}

function findGiftCardIndex(giftCards: Giftcard[], targetGiftCard: Giftcard): number {
  return giftCards.findIndex(
    (card) => card.tipologia === targetGiftCard.tipologia && card.taglio === targetGiftCard.taglio
  );
}
