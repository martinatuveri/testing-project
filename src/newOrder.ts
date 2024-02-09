export interface Intestatario {
    codiceFiscale: string;
    nome: string;
    cognome?: string;
    email?: string;
  }
  
export interface Giftcard {
    tipologia: 'digitale' | 'cartacea';
    taglio: 10 | 20 | 50 | 100;
    quantita: number;
  }
  
export interface Ordine {
    intestatario: Intestatario;
    giftCards: Giftcard[];
  }
  
  export function newOrder(intestatario: Intestatario): Ordine {
    if (!intestatario.codiceFiscale || !intestatario.nome) {
      throw new Error('Invalid customer data');
    }
  
    return {
      intestatario,
      giftCards: [],
    };
  }
  