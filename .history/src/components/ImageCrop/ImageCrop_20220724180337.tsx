import React, { useState, useRef } from 'react'

//Third Party
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
} from 'react-image-crop'
import { canvasPreview } from './canvasPreview'
import { useDebounceEffect } from './useDebounceEffect'

import 'react-image-crop/dist/ReactCrop.css'

//Types
type props = {
  image:HTMLImageElement,
  aspect?:number
}

// This is to demonstate how to make and center a % aspect crop
// which is a bit trickier so we use some helper functions.

function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number,
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight,
    ),
    mediaWidth,
    mediaHeight,
  )
}

function ImageCrop({image,aspect}:props) {
  // const [imgSrc, setImgSrc] = useState('')
  const previewCanvasRef = useRef<HTMLCanvasElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const [crop, setCrop] = useState<Crop>()
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>()
  const [scale, setScale] = useState(1)
  const [rotate, setRotate] = useState(0)
  const [approveImageSize,setApproveImageSize] = useState(false)


  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    console.log("from on image load")
    if (aspect) {
      const { width, height } = e.currentTarget
      if(width >=500){
        console.log(`width is ${width}`)
        setApproveImageSize(true)
        setCrop(centerAspectCrop(width, height, aspect))

      }
      else{
        //TODO: Set notfication error
        setApproveImageSize(false)
          alert('width is low')
      }
    }
  }

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        // We use canvasPreview as it's much faster than imgPreview.
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          scale,
          rotate,
        )
      }
    },
    100,
    [completedCrop, scale, rotate],
  )


  return (
    <div className="">

      {Boolean(imgSrc) && (
        <ReactCrop
          crop={crop}
          onChange={(_, percentCrop) => setCrop(percentCrop)}
          onComplete={(c) => setCompletedCrop(c)}
          aspect={3/1}
        >
         {/* <img
            ref={imgRef}
            alt="Crop me"
            src={imgSrc}
          className={approveImageSize?"block":"hidden"}
            onLoad={onImageLoad}
          /> */}
        </ReactCrop>
      )}
      <div>
        {Boolean(completedCrop) && (
          <canvas
            ref={previewCanvasRef}
            style={{
              border: '1px solid black',
              objectFit: 'contain',
              width: completedCrop?.width,
              height: completedCrop?.height,
            }}
          />
        )}
      </div>
    </div>
  )
}

export default  ImageCrop