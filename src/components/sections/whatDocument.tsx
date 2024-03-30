import ServiceButtons from '../serviceButtons'
import businessLetter from '/src/assets/business-letter.svg'
import codeSnippet from '/src/assets/Icon2.png'
import blogPost from '/src/assets/Icon3.png'
import productDescription from '/src/assets/Icon4.png'
import Carousel from './Carousel'

type Props = {}

const slides = [
  {
    image: businessLetter,
    title: "Write Quick Accurate  Business Letter",
    subtitle: "With docuhelp.ai users can write detailed formal letters with 100% accurecy",
  },
  {
    image: codeSnippet,
    title: "Generate code snippet for your project",
    subtitle: "With docuhelp.ai users can write detailed formal letters with 100% accurecy",
  },
  {
    image: blogPost,
    title: "Write captivating blog posts with DocuHelp.ai",
    subtitle: "With docuhelp.ai users can write detailed formal letters with 100% accurecy",
  },
  {
    image: productDescription,
    title: "Generate accurate product description",
    subtitle: "With docuhelp.ai users can write detailed formal letters with 100% accurecy",
  },
]

const WhatDocument = (props: Props) => {
  return (
    <div className='flex h-[750px]'>
      <div className='flex flex-col p-20 gap-3 bg-secondary text-white w-3/5'>
        <div className='flex flex-col gap-3 text-2xl'>
          <h4 className='text-gray-font'>Help the team get better</h4>
          <h2 className='font-cerebri font-extrabold mt-5 text-6xl w-[600px] leading-snug'>What document would you like to write?</h2>
          <h4 className='text-gray-font'>Just enter your text in the prompt and start in seconds...</h4>
        </div>
        <ul className='flex flex-col gap-10 h-52 mt-12 overflow-y-hidden'>
          <ServiceButtons title='Write letter' />
          <ServiceButtons title='Code snippets' />
          <ServiceButtons title='Blog posts' />
          <ServiceButtons title='Product descriptions' />
        </ul>
      </div>
      <div className='p-20 bg-primary w-full h-full overflow-y-hidden'>
        <Carousel slides={slides} />
      </div>
    </div>
  )
}

export default WhatDocument
