import { assets } from '@/assets/assets'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <a href='#top'><h4 className='mx-auto mb-2 cursor-pointer text-2xl'>YOUSEF .</h4></a>
        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image src={assets.mail_icon} alt='' className='w-6' />
          yousefbeats808@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
          <p>© 2025 Yousef mohammed. All rights reserved.</p>
          <ul className='flex items-center gap-10 mt-4 justify-center sm:mt-0'>
            <li><a target='_blank' href="https://github.com/Usif-200">GitHub</a></li>
          </ul>
      </div>

    </div>
  )
}

export default Footer