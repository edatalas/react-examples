import React from 'react'
//styled
import { Area, Background } from './index.styled'
import { PopupButton } from './index.button'

type Button = {
  title: string
  action: () => void
}

type Props = {
  show: boolean
  close: () => void
  title?: string
  desc?: string
  buttons: Button[]
}

const Popup: React.FC<Props> = (props) => {
  if (!props.show) return null
  return (
    <Area>
      <Background onClick={() => props.close()} />
      <div className='content'>
        {props.title && <h3 className='title'>{props.title}</h3>}
        {props.desc && <p className='desc'>{props.desc}</p>}
        <>
          {props.buttons.map((button, index) => {
            return (
              <PopupButton primary key={index} onClick={button.action}>
                {button.title}
              </PopupButton>
            )
          })}
        </>
      </div>
    </Area>
  )
}

export default Popup
