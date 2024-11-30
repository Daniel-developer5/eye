import { createSlice } from '@reduxjs/toolkit'
import { sendObject } from './asynkReducers'

export interface AppState {
  object: string,
  response: string,
}

const initialState: AppState = {
  object: '',
  response: '',
}

interface ObjectPaylod {
  payload: string
}

interface ResponsePaylod {
  payload: string
}

export const appSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setObject: (state, { payload }: ObjectPaylod) => {
      state.object = payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(sendObject.fulfilled, (state, { payload }: ResponsePaylod) => {
        state.response = payload

        console.log(payload)
      })
  }
})

export const { setObject } = appSlice.actions

export default appSlice.reducer
