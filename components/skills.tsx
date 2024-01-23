'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { Snippet } from '@nextui-org/react'

export default function Skills () {
  const { ref } = useSectionInView('Skills')

  return (
    <section
      id='skills'
      ref={ref}
      className='text-center leading-8  scroll-mt-4 relative'
    >
      <SectionHeading small>My Skills</SectionHeading>

      <ul className='flex flex-wrap justify-center md:gap-6  text-lg gap-4  mt-8 '>
        {skillsData.map((item, index) => (
          <li key={index}>
            <Snippet
              hideCopyButton
              variant='flat'
              radius='lg'
              className=' rounded-full'
              color={item.color}
              size='md'
            >
              {item.title}
            </Snippet>
          </li>
        ))}
      </ul>
    </section>
  )
}
