export const isActive = (step: number, comparator: number): boolean => {
  if (step === comparator) {
    return true;
  } else {
    return false;
  }
};
