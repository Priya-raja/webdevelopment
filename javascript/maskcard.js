function mask(card) {

  let parts = card.split('-');
  for (let i = 0; i < parts.length - 1; i++){

    parts[i] = '*'.repeat(parts[i].length);
  }
  
  return parts.join('-');
  }
  

console.log(mask("9998-7788-9087-4565"))