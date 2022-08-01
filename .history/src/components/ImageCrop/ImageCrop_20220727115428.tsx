/** @format */

import React, { useState, useRef } from "react";

//Third Party
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
} from "react-image-crop";
import { canvasPreview } from "./canvasPreview";
import { useDebounceEffect } from "./useDebounceEffect";

import "react-image-crop/dist/ReactCrop.css";
import { nanoid } from "@reduxjs/toolkit";

//Types
type props = {
  imgSrc: string;
  aspect?: number;
  unit?: "px" | "%" | undefined;
  initialAspectWidth?: number;
  initialAspectHeight?: number;
  setCanvas?:React.Dispatch<React.SetStateAction<any>>
};

// This is to demonstate how to make and center a % aspect crop
// which is a bit trickier so we use some helper functions.

function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number,
  unit: props["unit"] = "%",
  width: number = 90
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: unit,
        width: width,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}

//Component
function ImageCrop({
  imgSrc,
  aspect,
  unit,
  initialAspectWidth,
  initialAspectHeight,

}: props) {
  //State - Ref
  // const [imgSrc, setImgSrc] = useState('')
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  // const [scale, setScale] = useState(1);
  // const [rotate, setRotate] = useState(0);
const scale= 1
const 

  //Hooks
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
          rotate
        );
      }
    },
    100,
    [completedCrop, scale, rotate]
  );

//Handlers
  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      const { width, height } = e.currentTarget;
      if (width >= 500) {
        console.log(`width is ${width}`);
        setCrop(
          centerAspectCrop(width, height, aspect, unit, initialAspectWidth)
        );
      } else {
      }
    }
  }

  function getCroppedImage(){
    console.log(previewCanvasRef?.current?.id)
    console.log(previewCanvasRef.current?.toDataURL())

  }

  return (
    <div className="">
      {Boolean(imgSrc) && (
        <ReactCrop
          crop={crop}
          onChange={(_, percentCrop) => setCrop(percentCrop)}
          onComplete={(c) => setCompletedCrop(c)}
          aspect={aspect}
        >
          <img ref={imgRef} alt="Crop me" src={imgSrc} onLoad={onImageLoad} />
        </ReactCrop>
      )}
      <div>
        {Boolean(completedCrop) && (
          <canvas
            ref={previewCanvasRef}
            id={nanoid()}
            style={{
              border: "1px solid black",
              objectFit: "contain",
              width: completedCrop?.width,
              height: completedCrop?.height,
            }}
            className='my-2'
          />
        )}
      </div>
      <button type="button" onClick={getCroppedImage} >getCroppedImage</button>
    </div>
  );
}

export default ImageCrop;
