export const getHashCode = str => {
  return str.split('').reduce((hash, char) => {
    hash = char.charCodeAt(0) + ((hash << 5) - hash);
    hash = hash & hash;
    return hash;
  }, 0);
};

export const getColorFromString = (str, saturation = 40, lightness = 40) => {
  const hue = getHashCode(str) % 359;

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};
