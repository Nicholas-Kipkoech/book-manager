/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 *
 * @param func function waiting to be executed
 * @param delay time taken for the function to be executed
 * @returns
 */

export function debounce<T>(func: (...args: T[]) => void, delay: number) {
  let timeout: number | null = null;
  return (...args: T[]) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func(...args);
      timeout = null;
    }, delay);
  };
}
