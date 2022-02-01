export function monetary(value) {
  return /^\d+(?:\.\d{0,2})$/.test(value) ? true : false;
}
