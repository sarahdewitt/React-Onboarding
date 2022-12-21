import { FaTimes } from 'react-icons/fa'
import { useState } from 'react'

const Banner = () => {
    const [isOpen, setIsOpen] = useState(true)

    if(!isOpen){
        return null
    }

    return (
        <div className='w-full bg-indigo-900 text-white text-sm flex justify-between px-10 lg:px-32 py-3 items-center'>
            <div className='lg:flex'>
                <p className='pr-3'>We are now hosting events with Zoom Webinars!</p>
                <a href='https://github.com/sarahdewitt/React-Onboarding' className='cursor-pointer underline lg:pl-2'>Find out more</a>
            </div>
            <FaTimes
                className='text-white cursor-pointer'
                onClick={() => setIsOpen(false)}
            />
        </div>
    )
}

export default Banner
