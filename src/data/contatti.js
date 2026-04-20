export const contattiInfo = {
  titolo: 'Parliamo di',
  titoloEm: 'business',
  intro: 'Che tu sia un buyer della GDO, un importatore europeo o un operatore del settore ortofrutticolo, siamo pronti ad ascoltarti. Compila il form o contattaci direttamente.',
  email: 'info@rheaura.it',
  telefono: '+39 0984 000000',
  indirizzo: 'Via Agricoltura 12, 87100 Cosenza (CS)',
  piva: 'P.IVA 01234567890',
};

export const formFields = [
  { id: 'nome', label: 'Nome e Cognome', type: 'text', required: true, col: 'half' },
  { id: 'azienda', label: 'Azienda', type: 'text', required: true, col: 'half' },
  { id: 'email', label: 'Email', type: 'email', required: true, col: 'half' },
  { id: 'telefono', label: 'Telefono', type: 'tel', required: false, col: 'half' },
  { id: 'interesse', label: 'Sono interessato a', type: 'select', required: true, col: 'full',
    options: ['Peperoncino Calabrese', 'Cipolla Rossa IGP', 'Fragole & Frutta', 'Agrumi Bio', 'Portfolio completo'],
  },
  { id: 'messaggio', label: 'Messaggio', type: 'textarea', required: true, col: 'full' },
];
