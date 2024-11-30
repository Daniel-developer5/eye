const createBlob = (file: Blob | MediaSource): string => (
  URL.createObjectURL(file)
)

export default createBlob
