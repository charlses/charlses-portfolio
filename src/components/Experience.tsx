import { workExperience } from '@/data/client'
import { MovingBorderContainer } from './ui/moving-border'
import Image from 'next/image'

const Experience = () => {
  return (
    <div className='py-20' id='experience'>
      <h2 className='heading'>
        My <span className='text-purple'>work experience</span>
      </h2>
      <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
        {workExperience &&
          workExperience.map(({ desc, id, thumbnail, title }) => (
            <MovingBorderContainer
              key={id}
              duration={Math.floor(Math.random() * 10000 + 10000)}
              className='flex-1 text-white border-neutral-200 dark:border-slate-800'
            >
              <div className='flex lg:flex-row flex-col items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                <Image
                  src={thumbnail}
                  width={100}
                  height={100}
                  alt={thumbnail}
                  className='lg:w-32 md:w-20 w-16'
                />
                <div className='lg:ms-5'>
                  <h3 className='text-start text-xl md:text-2xl font-bold'>
                    {title}
                  </h3>
                  <p className='text-start text-white-100 mt-3 font-semibold'>
                    {desc}
                  </p>
                </div>
              </div>
            </MovingBorderContainer>
          ))}
      </div>
    </div>
  )
}

export default Experience
