import clx, { ClassValue } from 'clsx';

const getValidClasses = (...args: ClassValue[]): string => clx(...args);

export { getValidClasses };
