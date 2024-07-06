export const genMultiple = <T>(count: number, gen: T | (() => T)) => {
  return Array(count)
    .fill(0)
    .map(() => (gen instanceof Function ? gen() : gen));
};

export const hashCode = (str: string): number => {
  let hash = 0;
  let chr = 0;
  let i = 0;

  if (str.length === 0) return hash;
  for (i; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};
