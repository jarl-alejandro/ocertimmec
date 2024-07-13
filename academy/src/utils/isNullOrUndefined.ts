export function isNullOrUndefined(value: any): boolean {
  if (value === undefined) {
    return true;
  }

  if (value === null) {
    return true;
  }

  return false;
}