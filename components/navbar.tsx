'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { links } from '@/lib/data'
import { useActiveSectionContext } from '@/context/active-section-context'
import ThemeSwitch from './theme-switch'

import clsx from 'clsx'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  DropdownSection,
  Chip
} from '@nextui-org/react'
import { BsArrowRight } from 'react-icons/bs'
import { CgMoreVerticalAlt } from 'react-icons/cg'
import { HiDownload } from 'react-icons/hi'

export default function NavBar () {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext()

  return (
    <header className='flex justify-center items-center fixed bottom-2 w-screen z-[11]'>
      <motion.nav className='dark:bg-[#18181b] bg-white shadow-2xl rounded-full px-4 py-2 w-fit'>
        <ul className='flex items-center justify-center font-medium text-gray-400 gap-2'>
          {links.map(link => (
            <motion.li
              className='relative'
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  'flex flex-col text-[10px] items-center justify-center w-fit  transition px-1',
                  {
                    'text-black dark:text-white': activeSection === link.name
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name)
                  setTimeOfLastClick(Date.now())
                }}
              >
                <div className=' text-base'>{link.icon}</div>

                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className={`bg-[#000] rounded-full w-1 h-1 absolute -bottom-1  dark:bg-[#f0f0f0]`}
                    layoutId='activeSection'
                    transition={{
                      type: 'spring',
                      stiffness: 100,
                      damping: 20
                    }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
          <Dropdown showArrow>
            <DropdownTrigger>
              <Button
                isIconOnly
                variant='flat'
                size='sm'
                radius='full'
                className=' text-black dark:text-white '
              >
                <CgMoreVerticalAlt className='text-lg' />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label='Dynamic Actions'>
              <DropdownSection showDivider>
                <DropdownItem color={'default'}>
                  <Chip
                    as={Link}
                    href={'#home'}
                    onClick={() => {
                      setActiveSection('Home')
                      setTimeOfLastClick(Date.now())
                    }}
                    variant='flat'
                    color='primary'
                    className=' py-2 px-4 min-w-full text-center h-auto text-lg'
                  >
                    ¯\_(ツ)_/¯
                  </Chip>
                </DropdownItem>
              </DropdownSection>
              <DropdownSection showDivider>
                <DropdownItem isReadOnly>
                  <div className='flex items-center justify-between text-base font-medium'>
                    <p>Theme</p>
                    <ThemeSwitch />
                  </div>
                </DropdownItem>
              </DropdownSection>

              <DropdownSection>
                <DropdownItem>
                  <Button
                    radius='full'
                    onClick={() => {
                      setActiveSection('Contact')
                      setTimeOfLastClick(Date.now())
                    }}
                    endContent={<BsArrowRight size={22} />}
                    href='#contact'
                    as={Link}
                    size='sm'
                    className=' w-full'
                  >
                    Contact me here
                  </Button>
                </DropdownItem>
                <DropdownItem>
                  <Button
                    radius='full'
                    className=' w-full'
                    startContent={<HiDownload size={22} />}
                    href='/Jesus_HN_cv.pdf'
                    variant='bordered'
                    size='sm'
                  >
                    <a href='/Jesus_HN_cv.pdf' download>
                      Download CV
                    </a>
                  </Button>
                </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
        </ul>
      </motion.nav>
    </header>
  )
}
