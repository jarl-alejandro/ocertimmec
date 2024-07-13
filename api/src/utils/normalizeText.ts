export function normalizeText(text) {
  return text
    .normalize('NFD') // Descompone caracteres compuestos en caracteres base y diacríticos
    .replace(/[\u0300-\u036f]/g, '') // Elimina los caracteres diacríticos
    .toLowerCase(); // Convierte a minúsculas
}