const isDateInThePast = (date: string): boolean =>
  new Date(date).getTime() <= new Date().getTime();

export { isDateInThePast };
