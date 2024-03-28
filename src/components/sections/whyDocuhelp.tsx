import Accordion from "../Accordion"

type Props = {}

const data = [
  {
    title: "Industry Focused",
    message: "Access to a backend system to see what prompts staff are sending and results generated"
  },
  {
    title: "Access to Backends",
    message: "Access to a backend system to see what prompts staff are sending and results generated"
  },
  {
    title: "Trained on your data",
    message: "Access to a backend system to see what prompts staff are sending and results generated"
  },
]

const WhyDocuhelp = (props: Props) => {
  return (
    <div className="my-32">
      <div className='font-cerebri w-full font-extrabold mt-5 text-6xl text-secondary my-12 text-center leading-snug'>Why Docuhelp?</div>
      <Accordion data={data} />
    </div>
  )
}

export default WhyDocuhelp
