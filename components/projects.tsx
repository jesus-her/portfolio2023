'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { projectsData, projectsCategories } from '@/lib/data'
import Project from './project'
import { useSectionInView } from '@/lib/hooks'
import { Button, Card, CardBody, Tab, Tabs } from '@nextui-org/react'
import { useActiveSectionContext } from '@/context/active-section-context'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Projects () {
  const { ref } = useSectionInView('Projects', 0.5)
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext()
  const [selected, setSelected] = React.useState('Mobile')
  const pathname = usePathname()

  return (
    <section
      ref={ref}
      id='projects'
      className='text-center leading-8  scroll-mt-4'
    >
      <SectionHeading>My projects</SectionHeading>
      {/* <div className=' masonry md:masonry-md lg:masonry-lg  '>
        <Tabs
          radius='full'
          color='secondary'
          className=' sticky top-4 z-50 '
          aria-label='Dynamic tabs'
          selectedKey={selected}
          // @ts-ignore
          onSelectionChange={setSelected}
          // @ts-ignore
          items={projectsCategories}
        >
          {category => (
            <Tab
              // href='#projects'
              key={category.id}
              title={category.name}
            >
              {projectsData
                .filter(project => project.category === category.name)
                .map((project, index) => (
                  <React.Fragment key={index}>
                    <Project {...project} />
                  </React.Fragment>
                ))}
            </Tab>
          )}
        </Tabs>
      </div> */}
      <div className='relative  flex'>
        <div className=' masonry md:masonry-md lg:masonry-lg  '>
          {projectsData
            // .filter(project => project.category === category.name)
            .map((project, index) => (
              <React.Fragment key={index}>
                <Project {...project} />
              </React.Fragment>
            ))}
        </div>
      </div>
    </section>
  )
}
