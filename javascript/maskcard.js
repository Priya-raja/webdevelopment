function mask(card) {

  const separator = card.includes(' ') ? ' ' : '-';
  
  // Split by space OR hyphen
  let cardsplit = card.split(/[\s-]/);
  
  let masked = cardsplit.map((part, index) => {
    if (index === cardsplit.length - 1) {
      return part;
    }
    return '*'.repeat(part.length);
  }).join(separator);  // Use detected separator
  
  

console.log(mask("9998-7788-9087-4565"))