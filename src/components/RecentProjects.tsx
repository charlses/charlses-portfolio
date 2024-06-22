import { FaLocationArrow } from 'react-icons/fa6'

import { projects } from '@/data/client'
import { PinContainer } from './ui/3d-pin'
import Image from 'next/image'

const RecentProjects = () => {
  return (
    <div className='py-20'>
      <h2 className='lg:text-3xl md:text-2xl text-xl text-center uppercase font-bold'>
        A small selection of my{' '}
        <span className='text-purple'>recent projects</span>
      </h2>
      <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
        {projects &&
          projects.map(({ id, des, iconLists, img, link, title }) => (
            <div
              className='sm:h-[41rem] h-[32rem] sm:w-[570px]  flex items-center justify-center  w-[80vw] '
              key={id}
            >
              <PinContainer title={title} href={link}>
                <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh]  h-[30vh]  mb-10'>
                  <div
                    className='relative w-full h-full overflow-hidden rounded-lg'
                    style={{ backgroundColor: '#13162D' }}
                  >
                    <Image src='/bg.png' alt='bgimg' height={100} width={100} />
                  </div>
                  <img
                    src={img}
                    alt='cover'
                    className='z-10 absolute rounded-lg'
                    height={570}
                    width={570}
                  />
                </div>

                <h3 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                  {title}
                </h3>

                <p
                  className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'
                  style={{
                    color: '#BEC1DD',
                    margin: '1vh 0'
                  }}
                >
                  {des}
                </p>

                <div className='flex items-center justify-between mt-7 mb-3'>
                  <div className='flex items-center'>
                    {iconLists &&
                      iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className='border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`
                          }}
                        >
                          <Image
                            src={icon}
                            alt='icon5'
                            className='p-2'
                            height={100}
                            width={100}
                          />
                        </div>
                      ))}
                  </div>

                  <div className='flex justify-center items-center'>
                    <p className='flex lg:text-md md:text-sm text-xs text-purple'>
                      Check Live Site
                    </p>
                    <FaLocationArrow className='ms-3' color='#CBACF9' />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
      </div>
    </div>
  )
}

export default RecentProjects
