import { ChangeEvent, FC, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../main'
import { setObject } from '../../redux/appSlice'
import createBlob from '../../utils/createBlob'

import './ObjectInput.scss'

const ObjectInput: FC = () => {
  const dispatch = useDispatch<AppDispatch>()

  const onSetObject = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return
    }
   
    dispatch(setObject(
      createBlob(e.target?.files[0])
    ))
  }, [])

  return (
    <div className='ObjectInput'>
      <input type='file' onChange={onSetObject} />
    </div>
  )
}

export default ObjectInput
