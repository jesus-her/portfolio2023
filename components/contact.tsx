'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import Link from 'next/link'
import { Button } from '@nextui-org/react'
import { BsSend } from 'react-icons/bs'

export default function Contact () {
  const { ref } = useSectionInView('Contact')

  return (
    <motion.section
      id='contact'
      ref={ref}
      className='mb-20 sm:mb-28 text-center scroll-mt-4 relative leading-8 '
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1
      }}
      viewport={{
        once: true
      }}
    >
      <div className='sm:text-6xl text-4xl relative  font-bold gap-4 flex flex-col '>
        <p>Let's</p>
        <p>Work</p>
        <p>Together</p>
      </div>
      <div className='mt-8'>
        <Button
          radius='full'
          endContent={<BsSend />}
          as={Link}
          href='mailto:jesus10.hn@gmail.com'
          target='blank'
          variant='shadow'
          color='primary'
        >
          jesus10.hn@gmail.com
        </Button>
      </div>
    </motion.section>
  )
}
