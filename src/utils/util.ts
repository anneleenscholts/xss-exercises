import DOMPurify from "dompurify";

// DOMPurify sanitizes HTML and prevents XSS attacks.
// You can feed DOMPurify with string full of dirty HTML and it will return a string (unless configured otherwise) with clean HTML.
// DOMPurify will strip out everything that contains dangerous HTML and thereby prevent XSS attacks and other nastiness.
// https://www.npmjs.com/package/dompurify
export const sanitizeHTML = (html: string) => {
  return DOMPurify.sanitize(html);
};
