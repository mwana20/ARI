export const prependLocalStorageItem = <T,>(key: string, item: T): boolean => {
  try {
    const rawValue = window.localStorage.getItem(key);
    const parsedValue: unknown = rawValue ? JSON.parse(rawValue) : [];
    const existingItems = Array.isArray(parsedValue) ? parsedValue : [];
    window.localStorage.setItem(key, JSON.stringify([item, ...existingItems]));
    return true;
  } catch {
    return false;
  }
};