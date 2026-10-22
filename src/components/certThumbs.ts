/** Pre-rendered first-page preview for each certificate (public/assets/certificates/thumbs). */
export function thumbFor(link: string) {
  const file = link.split('/').pop()!.replace(/\.(pdf|png)$/, '.webp');
  return `/assets/certificates/thumbs/${file}`;
}

/** High-resolution image of the certificate, used by the viewer. */
export function fullFor(link: string) {
  const file = link.split('/').pop()!.replace(/\.(pdf|png)$/, '.webp');
  return `/assets/certificates/full/${file}`;
}
