import { FaEnvelopeOpen } from 'react-icons/fa6'

import { socialMedia } from '@/data/client'
import MagicButton from './ui/BorderMagicBtn'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer
      className='w-full pt-20 pb-10 dark:bg-black-100 bg-white border-t bg-grid'
      id='contact'
    >
      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
          Ready to take <span className='text-purple'>your</span> digital
          presence to the next level?
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <Link href='mailto:davit.tavadzee@gmail.com'>
          <MagicButton
            title="Let's get in touch"
            icon={<FaEnvelopeOpen />}
            position='right'
          />
        </Link>
      </div>
      <div className='flex mt-16 md:flex-row flex-col justify-between items-center mx-4 space-y-4 font-extralight'>
        <p className='md:text-base text-xs md:font-extralight font-extralight'>
          Copyright © {new Date().getFullYear()} Davit Tavadze
        </p>

        <div className='flex items-center md:gap-3 gap-6'>
          {socialMedia.map(({ id, img }) => (
            <div
              key={id}
              className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'
            >
              <Image src={img} alt='icons' width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
