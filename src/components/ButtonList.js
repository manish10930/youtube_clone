import React from 'react'
import Button from './Button'

function ButtonList() {
  const buttoname=["All","Music","Trending","News","Sales","Live","Lectures","Lo-Fi","Dramedy","Bhajan","Comedy","Sad Songs"]
  return (
    <div className='flex justify-around'>

      <Button data={buttoname} />
     
    </div>
  )
}

export default ButtonList