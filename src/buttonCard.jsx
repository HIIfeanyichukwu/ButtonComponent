import React from 'react'
import { Button } from './button'


const ButtonCard = ({classAtr, title, imgSrc, disabled, btnText}) => {
  return (
    <div className='btn-card'>
      <p className='title'>{title}</p>
      <Button className={classAtr} disabled={disabled}>
        {(imgSrc) ? <img src={imgSrc} className="icon" alt=" " /> : null}
        {btnText || "Default"}
      </Button>
    </div>
  )
}

export default ButtonCard