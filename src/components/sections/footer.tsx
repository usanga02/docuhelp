import { ChangeEvent, FormEvent, useState } from 'react'
import footerLogo from "/src/assets/footer-logo.svg"
import footerIcon from "/src/assets/footer-icon.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

type Props = {}

const Footer = (props: Props) => {
  const [email, setEmail] = useState("");

  const updateEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email)
  }

  return (
    <div className='bg-dark-night divide-dark divide-y-[1px] pt-10 text-white'>
      <div className='p-20 flex justify-between'>
        <div className='flex flex-col gap-6'>
          <h2 className='text-4xl font-bold w-60'>Stay In Touch With Us</h2>
          <h4 className='w-[370px]'>The latest Docuhelp news, articles, and resources, sent straight to your inbox every month.</h4>
          <form onSubmit={handleSubmit} className='flex py-2.5 px-4 bg-white rounded-md w-fit'>
            <input type='text' name='email' className='border-none w-52 focus:ring-0 focus:outline-none placeholder:text-tertiary text-black' placeholder='Email Address' value={email} onChange={updateEmail} />
            <button className='px-5 py-2.5 pt-2 bg-secondary rounded-md text-white'>Subscribe</button>
          </form>
        </div>
        <div className='flex flex-col gap-8'>
          <h3 className='font-semibold'>Company</h3>
          <ul className='flex flex-col gap-4 text-gray-font'>
            <li>3d7 Technologies</li>
            <li>Products</li>
            <li>Legal</li>
          </ul>
        </div>
        <div className='flex flex-col gap-8'>
          <h3 className='font-semibold'>Contact Us</h3>
          <ul className='flex flex-col gap-4 text-gray-font'>
            <li><FontAwesomeIcon icon={faEnvelope} className='mr-3'/>help@docuhelp.ai</li>
            <li><FontAwesomeIcon icon={faLocationDot} className='mr-3'/>Manchester, United Kingdom</li>
            <li><FontAwesomeIcon icon={faPhone} className='mr-3'/>+1 544312378</li>
          </ul>
        </div>
        <div className='w-96 flex flex-col gap-3'>
          <img src={footerLogo} width={203} height={62} />
          <h5 className='font-semibold'>Write business documents</h5>
          <h6 className='text-gray-font font-light'>DocuHelp may produce inaccurate information about people, places, or facts and may also display inaccurate or offensive information that doesn’t represent 3d7 Technologies views.</h6>
        </div>
      </div>
      <div className='flex px-20 justify-between items-center text-sm font-light py-10'>
        <div className='flex items-center'>
          <img src={footerIcon}/>
          <ul className='flex items-center ml-3 divide-x-2'>
          <li className='px-2'>
            <span> &copy; 2023 docuhelp.ai </span>
            </li>
            <li className='px-2 cursor-pointer'>
          <span>Security</span>
            </li>
            <li className='px-2 cursor-pointer'>
          <span>Your privacy</span>
            </li>
            <li className='px-2 cursor-pointer'>
          <span>Terms</span>
            </li>
          </ul>
        </div>
        <ul className='flex'>
          <li><FontAwesomeIcon icon={faLinkedin} className='w-6 h-6 mr-4'/></li>
          <li><FontAwesomeIcon icon={faFacebook} className='w-6 h-6 mr-4'/></li>
          <li><FontAwesomeIcon icon={faInstagram} className='w-6 h-6 mr-4'/></li>
          <li><FontAwesomeIcon icon={faTwitter}  className='w-6 h-6 mr-4'/></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
