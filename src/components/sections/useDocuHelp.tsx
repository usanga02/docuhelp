import Card from '../cards/card'
import image from "/src/assets/laptop-person2.png"

type Props = {}

const UseDocuHelp = (props: Props) => {
  return (
    <Card className='m-20 flex pt-52 pb-64 border-tertiary border-opacity-5 '>
      <div className='flex flex-col w-1/2 gap-8'>
        <hr className='border-secondary border-[3px]' />
        <h5 className='text-secondary font-cerebri uppercase text-[38px] font-bold'>Use DocuHelp to write documents for your business, work report, and proposals for your next project!</h5>
        <div>
          <button className='bg-secondary text-primary px-8 py-3.5 font-bold rounded-lg'>Get started</button>
        </div>
      </div>
      <img src={image} className='absolute bottom-0 right-16 overflow-hidden' />
    </Card>

  )
}

export default UseDocuHelp
