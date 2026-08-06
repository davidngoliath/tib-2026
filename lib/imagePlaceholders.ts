function toBase64(value: string) {
  if (typeof window === "undefined") {
    return Buffer.from(value).toString("base64");
  }

  return window.btoa(value);
}

export function placeholderDataUrl(color = "#F4F0E6") {
  const svg = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" fill="${color}" />
      <path d="M0 18L6 12L11 16L16 10L24 18V24H0V18Z" fill="rgba(255,255,255,0.24)" />
    </svg>
  `;

  return `data:image/svg+xml;base64,${toBase64(svg)}`;
}