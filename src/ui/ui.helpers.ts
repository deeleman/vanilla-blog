export const slugify = (input: string, slugChar = '-'): string => input.toLowerCase().replace(/\s/g, slugChar);
