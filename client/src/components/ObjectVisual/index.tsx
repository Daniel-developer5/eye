import { FC, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../../main'
import { sendObject } from '../../redux/asynkReducers'
import encodeImage from '../../utils/encodeImage'
import { LoadEvent } from '../../types'

const ObjectVisual: FC = () => {
  const { object } = useSelector((state: AppState) => state.app)
  const dispatch = useDispatch<AppDispatch>()

  const canvasRef = useRef<HTMLCanvasElement>(null)

  const onLoadObject = useCallback(({ target }: LoadEvent<HTMLImageElement>) => {
    if (!object) {
      return
    }
    
    const dataUrl = encodeImage(canvasRef.current, target)
  
    if (dataUrl) {
      dispatch(sendObject(dataUrl))
    }
  }, [object])

  return <>
    <img src={object} alt='' onLoad={onLoadObject} />
    <canvas ref={canvasRef}></canvas>
    <button onClick={() => dispatch(sendObject(''))}>click</button>
  </>
}

export default ObjectVisual
