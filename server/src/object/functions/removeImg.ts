import { v2 } from 'cloudinary'

const removeImg = async (id: string) => {
  try {
    v2.uploader.destroy(id)
  } catch (error) {
    console.log(error)
  }
}

export default removeImg
