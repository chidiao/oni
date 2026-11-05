export function setupImageFlip() {
  if (typeof document === 'undefined') return

  document.addEventListener('dblclick', (e) => {
    const target = e.target as HTMLElement
    if (!target.closest('.vp-doc')) return
    const img = target.closest('img')
    if (!img) return
    img.classList.toggle('img-flipped')
  })
}
