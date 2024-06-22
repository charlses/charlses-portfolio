import Approach from '@/components/Approach'
import Experience from '@/components/Experience'
import Grid from '@/components/Grid'
import Hero from '@/components/Hero'
import RecentProjects from '@/components/RecentProjects'
import { TracingBeam } from '@/components/ui/tracing-beam'

export default function Home() {
  return (
    <main className='relative dark:bg-black-100  bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
      <Hero />
      <Grid />
      <TracingBeam>
        <RecentProjects />
        <Experience />
        <Approach />
      </TracingBeam>
    </main>
  )
}
