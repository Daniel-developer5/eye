const encodeImage = (canvas: HTMLCanvasElement | null, image: HTMLImageElement | null): string | undefined => {
  if (!canvas || !image) {
    return
  }

  const ratio = image.naturalWidth / image.naturalHeight
  const optimalWidth = 150

  canvas.width = optimalWidth
  canvas.height = optimalWidth / ratio

  const ctx = canvas.getContext('2d')

  if (!ctx) {
    return
  }

  ctx.drawImage(image, 0, 0, canvas.width, canvas.height)

  console.log(canvas.toDataURL())

  return canvas.toDataURL()
}

export default encodeImage
