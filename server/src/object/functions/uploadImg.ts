import { v2 } from 'cloudinary'

interface UploadedImg {
  id: string,
  url: string,
}

const uploadImg = async (url: string): Promise<UploadedImg | null> => {
  try {
    const asset = await v2.uploader.upload(url)

    return {
      id: asset.public_id,
      url: asset.url,
    }
  } catch (error) {
    console.log(error)

    return null
  }
}

export default uploadImg
