const charactersToBeHighlighted = (text, character) => {
  text = text.toLowerCase();
  character = character.toLowerCase();

  if (text.length == 0 || text.indexOf(character) == -1) {
    return [[text, false]];
  }
  const textPairs = [];
  let charText = text;
  while (charText.length > 0) {
    let i = charText.indexOf(character);
    if (i == -1) {
      textPairs.push([charText, false]);
      break;
    }
    if (i > 0) textPairs.push([charText.slice(0, i), false]);
    textPairs.push([character, true]);
    charText = charText.slice(i + character.length);
  }

  return textPairs;
};

export { charactersToBeHighlighted };
