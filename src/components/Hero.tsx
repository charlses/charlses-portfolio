import { Spotlight } from '@/components/ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import BorderMagicBtn from './ui/BorderMagicBtn'
import { FaLocationArrow } from 'react-icons/fa'
import { ModeToggle } from './theme/mode-toggle'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='pb-36 pt-40'>
      <div>
        <Spotlight
          className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen'
          fill='white'
        />
        <Spotlight
          className='top-10 left-full h-[80vh] w-[50vw]'
          fill='purple'
        />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
      </div>
      <div>
        <div className='h-screen w-full dark:bg-black-100 bg-white  dark:bg-dot-white/[0.3] bg-dot-black/[0.2] flex items-center justify-center absolute top-0 left-0'>
          <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
        </div>
      </div>
      <div className='flex justify-center relative margin-y-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest text-xs text-center dark:text-blue-100 text-indigo-500 max-w-80 flex gap-4 justify-center items-center'>
            Welcome to my portfolio
            <ModeToggle />
          </h2>
          <TextGenerateEffect
            className='text-center text-[40px] md:text-5xl lg:text-6xl'
            words='Transforming Concepts into Seamless User Experiences'
          />
          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
            Hi! I&apos;m Davit, a Next.js Developer based in Georgia
          </p>
          <Link href='#about'>
            <BorderMagicBtn
              title='See my work'
              icon={<FaLocationArrow />}
              position='left'
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
