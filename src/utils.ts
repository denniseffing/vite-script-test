export function render(html: string): HTMLElement {
  document.body.innerHTML = html;
  return document.body;
}
