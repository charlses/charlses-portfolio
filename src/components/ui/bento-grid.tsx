'use client'
import { useState } from 'react'
import { IoCopyOutline } from 'react-icons/io5'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { BackgroundGradientAnimation } from './background-gradient-animation'
import { GridGlobe } from './GridGlobe'

// import animationData from '@/data/client/confetti.json'
import BorderMagicBtn from './BorderMagicBtn'

export const BentoGrid = ({
  className,
  children
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        'grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto text-white',
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  //   remove unecessary things here
  img,
  imgClassName,
  titleClassName,
  spareImg
}: {
  className?: string
  id: number
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  img?: string
  imgClassName?: string
  titleClassName?: string
  spareImg?: string
}) => {
  const leftLists = ['Next Js', 'React', 'Typescript']
  const rightLists = ['MongoDB', 'Express', 'Node.js']

  const [copied, setCopied] = useState(false)

  // const defaultOptions = {
  //   loop: copied,
  //   autoplay: copied,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice'
  //   }
  // }

  const handleCopy = () => {
    const text = 'davit.tavadzee@gmail.com'
    navigator.clipboard.writeText(text)
    setCopied(true)
  }

  return (
    <div
      className={cn(
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        'row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4',
        className
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: 'rgb(4,7,29)',
        backgroundColor:
          'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)'
      }}
    >
      {/* add img divs */}
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className='w-full h-full absolute'>
          {img && (
            <Image
              src={img}
              alt={img}
              width={150}
              height={150}
              className={cn(imgClassName, 'object-cover object-center ')}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && 'w-full opacity-80'
          } `}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt={spareImg}
              width={220}
              height={220}
              className='object-cover object-center w-full h-full'
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className='absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl'></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
          )}
        >
          <div className='font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10'>
            {description}
          </div>

          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {id === 2 && <GridGlobe />}
          {id === 3 && (
            <div className='flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2'>
              <div className='flex flex-col gap-3'>
                {leftLists.map((item) => {
                  return (
                    <span
                      key={item}
                      className='py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]'
                    >
                      {item}
                    </span>
                  )
                })}
                <span className='lg:py-7 py-4 px-3 rounded-lg text-center bg-[#10132e]' />
              </div>
              <div className='flex flex-col gap-3'>
                <span className='lg:py-7 py-4 px-3 rounded-lg text-center bg-[#10132e]' />

                {rightLists.map((item) => {
                  return (
                    <span
                      key={item}
                      className='py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]'
                    >
                      {item}
                    </span>
                  )
                })}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className='mt-5 relative'>
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? 'block' : 'block'
                }`}
              >
                {/* <Lottie options={defaultOptions} height={200} width={400} /> */}
              </div>

              <BorderMagicBtn
                title={copied ? 'Email is Copied!' : 'Copy my email address'}
                icon={<IoCopyOutline />}
                position='left'
                handleClick={handleCopy}
                otherClasses='!bg-[#161A31]'
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
