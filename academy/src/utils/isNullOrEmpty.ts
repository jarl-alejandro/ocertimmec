import { isNullOrUndefined } from "./isNullOrUndefined";

export function isNullOrEmpty(value: string | null | undefined): boolean {
  if (isNullOrUndefined(value)) {
    return true;
  }
  if (!value?.trim().length) {
    return true;
  }
  return false;
}