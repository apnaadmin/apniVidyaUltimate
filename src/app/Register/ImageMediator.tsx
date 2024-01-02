import React from 'react'
import { changeImage } from '@/src/actions/changeImageFormat.action'
type Props = {
    image:File
}

const ImageMediator = async({image}: Props) => {
   const result = await changeImage(image)
  return result
}

export default ImageMediator