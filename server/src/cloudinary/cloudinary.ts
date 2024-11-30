import { v2 } from 'cloudinary'

export const CloudinaryProvider = {
  provide: 'Cloudinary',
  useFactory: () => {
    return v2.config({
      cloud_name: 'dfqobd0uw', 
      api_key: '353614343736151', 
      api_secret: process.env.CLOUDINARY_API_SECRET, 
    })
  },
}
