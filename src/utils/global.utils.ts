export const genMultiple = <T>(count: number, gen: T | (() => T)) => {
  return Array(count)
    .fill(0)
    .map(() => (gen instanceof Function ? gen() : gen));
};
