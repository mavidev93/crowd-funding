
//Third Party
import { useState } from 'react'
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
} from 'react-image-crop'
import 'react-image-crop/src/ReactCrop.scss'

type Props = {src:string}

const ImageCrop = (src: Props) => {
const [crop,setCrop] = useState<>
  return (
    <div>ImageCrop</div>
  )
}

export default ImageCrop