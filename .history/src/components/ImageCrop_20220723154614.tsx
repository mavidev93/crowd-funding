
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
const [crop,setCrop] = useState<Crop>()
  return (
    <div>
      <ReactCrop crop={crop} onChange={c=>setCrop(c)}>
        <img src=''
      </ReactCrop>

    </div>
  )
}

export default ImageCrop