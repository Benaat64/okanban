/**
 * Retourne une chaîne de caractères dont la première lettre de 
 * chaque mot est en majuscule et les autres lettres en minuscules.
 * @param {string} str 
 * @returns string
 */
export function toTitleCase(str) {
  if (typeof str !== 'string') {
    return '';
  }

  return str.toLowerCase().split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');

}