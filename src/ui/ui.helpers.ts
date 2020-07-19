export const slugify = (input: string, slugChar = '-'): string => input.toLowerCase().replace(/\s/g, slugChar);

export const renderHtml = (selector: string, html: string): void => { document.querySelector(selector)!.innerHTML = html };
