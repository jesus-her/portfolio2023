'use client'

import React from 'react'
import SectionHeading from './section-heading'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experiencesData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { useTheme } from '@/context/theme-context'

export default function Experience () {
  const { ref } = useSectionInView('Experience')
  const { theme } = useTheme()

  return (
    <section
      id='experience'
      ref={ref}
      className='text-center leading-8  scroll-mt-4 '
    >
      <SectionHeading>Experience</SectionHeading>

      <VerticalTimeline lineColor='' animate={false}>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: theme === 'light' ? '#f0f0f0' : '#0B0B0C',
                boxShadow: 'none',

                textAlign: 'left'
              }}
              contentArrowStyle={{
                borderRight:
                  theme === 'light'
                    ? '0.4rem solid #f0f0f0'
                    : '0.4rem solid #0B0B0C'
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === 'light' ? '#f0f0f0' : '#0B0B0C',
                fontSize: '1.5rem'
              }}
            >
              <h3 className='font-semibold capitalize'>{item.company}</h3>

              <p className='font-semibold capitalize'>{item.title}</p>
              <p className='font-normal !mt-0'>{item.location}</p>
              <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  )
}
