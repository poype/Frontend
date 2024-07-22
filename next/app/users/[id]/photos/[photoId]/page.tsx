import React from 'react'

interface Props {
  params: {
    id: number;
    photoId: number;

  }
}

// http://localhost:3000/users/93/photos/11
const PhotoPage = ({ params: {id, photoId} }: Props) => {
  return (
    <div>PhotoPage, id: {id}, photoId: {photoId}</div>
  )
}

export default PhotoPage