import { Ordine } from './newOrder';

interface AmountResult { imponibile: number; iva: number; totale: number; }

export function getAmount(ordine: Ordine): AmountResult {
  if (!ordine || !ordine.giftCards || ordine.giftCards.length === 0) {
    throw new Error('Order is empty');}

  const imponibile = calculateImponibile(ordine.giftCards);
  const iva = calculateIVA(imponibile);
  const totale = imponibile + iva;

  return { imponibile, iva, totale };
}

function calculateImponibile(giftCards): number {
  return giftCards.reduce((total, card) => total + card.taglio * card.quantita, 0);
}

function calculateIVA(imponibile: number): number {
  const IVA_RATE = 0.22; // 22%

  return imponibile * IVA_RATE;
}