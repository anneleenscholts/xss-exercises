const useHint = () => {
  const hints1 = [
    `<div><img src="x" onerror="alert('XSS Attack!')">`,
    `<div onmouseover="alert('XSS Attack!')">Hover over me</div>`,
    `<a href="javascript:alert('XSS Attack!')">Click Me</a></div>`,
  ];

  const hints2 = [`?q=<img src="x" onerror="alert('XSS')">`];
  return { hints1, hints2 };
};

export { useHint };
