import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

const Card = ({ children, className }: Props) => {
  return (
    <div className={'bg-white relative border-8 rounded-[35px] p-20 ' + className}>{children}</div>
  )
}

export default Card
