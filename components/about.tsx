'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { Button, Image, Link } from '@nextui-org/react'
import { BsGithub } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa'

export default function About () {
  const { ref } = useSectionInView('About')

  return (
    <motion.section
      ref={ref}
      className='text-center leading-8  scroll-mt-4 mb-8 '
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>{'About Me'}</SectionHeading>
      <div className=' flex flex-col items-center lg:flex-row  object-contain relative gap-8 '>
        <div className='flex flex-col text-left text-base md:text-xl w-full gap-4 [&>p>strong]:text-primary [&>p>strong]:font-semibold'>
          <p className='max-w-xl'>
            Hi, I'm Jesús, a Software Developer passionate about{' '}
            <strong>UI/UX design</strong> and developing{' '}
            <strong>scalable applications</strong> for web and mobile. I started
            programming at 18, driven by a desire to utilize technology to
            address real challenges. Currently, I lead teams in crafting
            innovative solutions across various sectors.
          </p>
          <p className='max-w-xl'>
            My experience in <strong>Full-Stack Development</strong> has led to
            significant achievements, including advancing{' '}
            <strong>
              real-time web communication technologies and enhancing user
              interactions on digital platforms.
            </strong>
          </p>
          <p className='max-w-xl'>
            My contributions to the field have involved{' '}
            <strong>
              developing solutions that streamline processes and improve user
              experiences across various applications, utilizing leading-edge
              technologies
            </strong>{' '}
            like React, Next.js, React Native, and Firebase.
          </p>
          <p className='max-w-xl'>
            These projects not only demonstrate my technical skills but also my
            commitment to{' '}
            <strong>
              pushing the boundaries of web and mobile application development.
            </strong>
          </p>

          <motion.div
            className='flex  items-center justify-start gap-2'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1
            }}
          >
            <Button
              aria-label='LinkenIn Button'
              as={Link}
              radius='full'
              variant='bordered'
              href='https://www.linkedin.com/in/jos%C3%A9-de-jes%C3%BAs-hern%C3%A1ndez-nava-457b35235/'
              target='blank'
              startContent={<FaLinkedin size={22} />}
            >
              LinkedIn
            </Button>
            <Button
              radius='full'
              as={Link}
              variant='bordered'
              href='https://github.com/jesus-her'
              target='blank'
              startContent={<BsGithub size={22} />}
            >
              Github
            </Button>
          </motion.div>
        </div>
        <Image
          // isBlurred
          src={'https://i.imgur.com/ekDnwjM.jpg'}
          alt='Jesus H. - About me Image'
          width={500}
          height={500}
          className='aspect-square object-cover self-center rounded-full overflow-hidden max-w-xs'
        />
      </div>
    </motion.section>
  )
}
