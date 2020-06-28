export const getCards = () => {
  const suits = ['C', 'D', 'H', 'S'];
  const ranks = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A',
  ];

  const deck = [];

  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      deck.push(`${ranks[j]}${suits[i]}`);
    }
  }

  return deck;
};
