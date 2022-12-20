import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

const Banner = () => {
    const [isOpen, setIsOpen] = useState(true)

    if(!isOpen){
        return null
    }

    return (
        <div className='w-full bg-indigo-900 text-white text-sm flex justify-between px-10 lg:px-32 py-3 items-center'>
            <div className='lg:flex'>
                <p className='pr-3'>We are now hosting events with Zoom Webinars!</p>
                <span href='https://github.com/sarahdewitt/React-Onboarding' className='underline lg:pl-2'>Find out more</span>
            </div>
            <FaTimes
                style={{ color:'white', cursor:'pointer' }}
                onClick={() => setIsOpen(false)}
            />
        </div>
      )
  
}

export default Banner
