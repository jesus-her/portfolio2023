import { projectsData } from '@/lib/data'

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Image,
  Link
} from '@nextui-org/react'
import { useState } from 'react'

type ProjectProps = typeof projectsData[number]

export default function Project ({
  title,
  description,
  tags,
  imageUrl,
  category,
  link,
  id
}: ProjectProps) {
  const [expandedDescription, setExpandedDescription] = useState<number | null>(
    null
  )

  const toggleDescription = (bannerId: number) => {
    setExpandedDescription(prev => (prev === bannerId ? null : bannerId))
  }
  return (
    <div className='relative rounded-xl break-inside  mb-4 flex-1 flex flex-col border shadow-sm dark:border-[#2c2c2c] border-gray-200'>
      <div className=' opacity-90'>
        <Image
          width='100%'
          src={imageUrl}
          alt='Project Image'
          removeWrapper
          className='skills-blur opacity-50'
        />
      </div>
      <div className='grid-hero'>
        <svg
          className='grid-svg'
          xmlns='http://www.w3.org/2000/svg'
          width='982'
          height='786'
          viewBox='0 0 982 786'
          fill='none'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M490 401V537H348.5V401H490ZM490 785.5V676H348.5V785.5H347.5V676H206V785.5H205V676H63.5V785.5H62.5V676H0V675H62.5V538H0V537H62.5V401H0V400H62.5V258H0V257H62.5V116H0V115H62.5V0H63.5V115L205 115V0H206V115L347.5 115V0H348.5V115H490V0H491V115L627.5 115V0H628.5V115H765V0H766V115L902.5 115V0H903.5V115H982V116H903.5V257H982V258H903.5V400H982V401H903.5V537H982V538H903.5V675H982V676H903.5V785.5H902.5V676H766V785.5H765V676H628.5V785.5H627.5V676H491V785.5H490ZM902.5 675V538H766V675H902.5ZM902.5 537V401H766V537H902.5ZM902.5 400V258H766V400H902.5ZM902.5 257V116L766 116V257H902.5ZM627.5 675H491V538H627.5V675ZM765 675H628.5V538H765V675ZM348.5 675H490V538H348.5V675ZM347.5 538V675H206V538H347.5ZM205 538V675H63.5V538H205ZM765 537V401H628.5V537H765ZM765 400V258H628.5V400H765ZM765 257V116H628.5V257H765ZM347.5 401V537H206V401H347.5ZM205 401V537H63.5V401H205ZM627.5 401V537H491V401H627.5ZM627.5 116L491 116V257H627.5V116ZM627.5 258H491V400H627.5V258ZM63.5 257V116L205 116V257H63.5ZM63.5 400V258H205V400H63.5ZM206 116V257H347.5V116L206 116ZM348.5 116V257H490V116H348.5ZM206 400V258H347.5V400H206ZM348.5 258V400H490V258H348.5Z'
            fill='url(#paint0_radial_1_8)'
          />
          <defs>
            <radialGradient
              id='paint0_radial_1_8'
              cx='0'
              cy='0'
              r='1'
              gradientUnits='userSpaceOnUse'
              gradientTransform='translate(491 392.75) rotate(90) scale(513.25 679.989)'
            >
              <stop stopColor='white' stopOpacity='0.9' />
              <stop offset='1' stopColor='#2c2c2c' stopOpacity='0' />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <Card className=' bg-trasparent relative'>
        <CardBody className='overflow-visible'>
          <Card
            className='py-4'
            // isPressable
          >
            <CardHeader className='pb-0 pt-2 px-4 flex-col items-start gap-2'>
              <p className='text-tiny uppercase font-bold opacity-50'>
                {category}
              </p>

              <h4 className='font-bold text-large'>{title}</h4>
            </CardHeader>
            <CardBody className='overflow-visible py-2'>
              <Image
                isBlurred
                shadow='sm'
                radius='lg'
                width='100%'
                src={imageUrl}
                alt='Project Image'
                className='w-full object-cover h-auto'
              />
            </CardBody>
            <CardFooter>
              <div className='flex flex-wrap gap-2 items-center justify-center'>
                {tags.map((tag: string) => (
                  <Chip size='sm' color='default' variant='flat' key={tag}>
                    {tag}
                  </Chip>
                ))}
              </div>
            </CardFooter>
          </Card>
        </CardBody>
        <CardFooter className='text-small justify-between flex flex-col relative'>
          <div className='grid-hero'>
            <svg
              className='grid-svg'
              xmlns='http://www.w3.org/2000/svg'
              width='982'
              height='786'
              viewBox='0 0 982 786'
              fill='none'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M490 401V537H348.5V401H490ZM490 785.5V676H348.5V785.5H347.5V676H206V785.5H205V676H63.5V785.5H62.5V676H0V675H62.5V538H0V537H62.5V401H0V400H62.5V258H0V257H62.5V116H0V115H62.5V0H63.5V115L205 115V0H206V115L347.5 115V0H348.5V115H490V0H491V115L627.5 115V0H628.5V115H765V0H766V115L902.5 115V0H903.5V115H982V116H903.5V257H982V258H903.5V400H982V401H903.5V537H982V538H903.5V675H982V676H903.5V785.5H902.5V676H766V785.5H765V676H628.5V785.5H627.5V676H491V785.5H490ZM902.5 675V538H766V675H902.5ZM902.5 537V401H766V537H902.5ZM902.5 400V258H766V400H902.5ZM902.5 257V116L766 116V257H902.5ZM627.5 675H491V538H627.5V675ZM765 675H628.5V538H765V675ZM348.5 675H490V538H348.5V675ZM347.5 538V675H206V538H347.5ZM205 538V675H63.5V538H205ZM765 537V401H628.5V537H765ZM765 400V258H628.5V400H765ZM765 257V116H628.5V257H765ZM347.5 401V537H206V401H347.5ZM205 401V537H63.5V401H205ZM627.5 401V537H491V401H627.5ZM627.5 116L491 116V257H627.5V116ZM627.5 258H491V400H627.5V258ZM63.5 257V116L205 116V257H63.5ZM63.5 400V258H205V400H63.5ZM206 116V257H347.5V116L206 116ZM348.5 116V257H490V116H348.5ZM206 400V258H347.5V400H206ZM348.5 258V400H490V258H348.5Z'
                fill='url(#paint0_radial_1_8)'
              />
              <defs>
                <radialGradient
                  id='paint0_radial_1_8'
                  cx='0'
                  cy='0'
                  r='1'
                  gradientUnits='userSpaceOnUse'
                  gradientTransform='translate(491 392.75) rotate(90) scale(513.25 679.989)'
                >
                  <stop stopColor='white' stopOpacity='0.9' />
                  <stop offset='1' stopColor='#2c2c2c' stopOpacity='0' />
                </radialGradient>
              </defs>
            </svg>
          </div>
          {expandedDescription === id ? (
            // Full description with "see less" button
            <p
              onClick={() => {
                toggleDescription(id)
              }}
              className='text-base cursor-pointer '
            >
              {description}
            </p>
          ) : (
            // Truncated description with "see more" button
            <p
              onClick={() => {
                toggleDescription(id)
              }}
              className='text-base cursor-pointer  line-clamp-3'
            >
              {description}
            </p>
          )}

          {link && (
            <Button
              as={Link}
              href={link}
              radius='full'
              target='blank'
              className='font-semibold text-base dark:bg-white bg-black px-12 py-3 mt-6 uppercase z-10'
            >
              <Link
                showAnchorIcon
                className=' dark:text-black text-white text-sm'
              >
                Discover
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
