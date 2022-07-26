
//Third Party
import { useState } from 'react'
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
} from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
type Props = {src:string}

const ImageCrop = ({src}: Props) => {
const [crop,setCrop] = useState<Crop>()
  return (
    <div>
      <ReactCrop crop={crop} onChange={c=>setCrop(c)}>
     {src &&   <img src={src}/>}
      </ReactCrop>

    </div>
  )
}

export default ImageCrop