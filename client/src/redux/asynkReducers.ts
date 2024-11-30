import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_BASE = 'http://localhost:3000'

const sendObject = createAsyncThunk(
  'sendObject',
  async (object: string) => {
    const res = await axios.post(`${API_BASE}/object`, { url: object, })

    return res.data
  }
)

export {
  sendObject
}
