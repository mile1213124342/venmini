import React from 'react'
import { ReactPhotoCollage } from "react-photo-collage";

export default function CollageComponent() {
    const setting = {
        width: '600px',
        height: ['250px', '170px'],
        layout: [1, 4],
        photos: [
          { source: './collage/01. Queso Llanero.jpeg' },
          { source: 'url/image-2.jpg' },
          { source: 'url/image-3.jpg' },
          { source: 'url/image-4.jpg' },
          { source: 'url/image-5.jpg' },
          { source: 'url/image-6.jpg' },
        ],
        showNumOfRemainingPhotos: true
      };
  return (
    <div>
         <ReactPhotoCollage {...setting} />
    </div>
  )
}
