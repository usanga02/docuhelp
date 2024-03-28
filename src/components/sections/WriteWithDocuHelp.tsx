import Card from '../cards/card'
import image from "/src/assets/laptop-person.png"

type Props = {}

const WriteWithDocuHelp = (props: Props) => {
  return (
    <Card className='m-20 flex pt-32 pb-80 border-gray '>
      <div className='flex flex-col w-1/2 gap-5'>
        <h3 className='font-cerebri w-2/3 uppercase text-6xl'>Write with DocuHelp</h3>
        <h5 className='text-dark text-lg w-[465px]'>Generate professional graded documents, reports, proposal, sales pitch in a matter of minutes and empower your team to work together in real time, ensuring accuracy and efficiency. No more email chains or confusion—just smooth, simultaneous collaboration.</h5>
        <div className='mt-6'>
          <button className='bg-secondary text-primary px-8 py-3.5 font-bold rounded-lg'>Get started</button>
        </div>
      </div>
      <img src={image} width={1000} height={660} className='absolute rounded-br-[30px] bottom-0 right-0 overflow-hidden' />
    </Card>

  )
}

export default WriteWithDocuHelp
