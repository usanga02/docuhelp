import React from 'react'
import image from "/src/assets/Switch.svg"

type Props = {
  title: string
  onClick: () => void
  className?: string
}

const ServiceButtons = ({ onClick, title, className }: Props) => {
  return (
    <li
      onClick={onClick}
      className={'cursor-pointer py-4 px-10 w-fit flex text-lg font-bold bg-tertiary rounded-full items-center ' + className}>
      <img className='mr-10 ' src={image} />
      {title}
    </li>
  )
}

export default ServiceButtons
