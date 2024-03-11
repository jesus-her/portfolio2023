import { projectsData } from '@/lib/data'

import Filter2DiagonalLines from './filters/Filter2DiagonalLines'
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
import { useActiveSectionContext } from '@/context/active-section-context'

type ProjectProps = typeof projectsData[number]

export default function Project ({
  title,
  description,
  tags,
  imageUrl,
  category,
  link
}: ProjectProps) {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext()
  return (
    <div className='relative rounded-xl break-inside  mb-4 flex-1 flex flex-col border shadow-sm dark:border-[#2c2c2c] border-gray-200'>
      <div className=' opacity-50'>
        <Image
          width='100%'
          src={imageUrl}
          alt='Project Image'
          removeWrapper
          className='skills-blur opacity-50'
        />
      </div>
      <Card className=' bg-trasparent relative'>
        <Filter2DiagonalLines rotate={'rotate-90'} />
        <Filter2DiagonalLines rotate={'rotate-0'} />

        <CardBody className='overflow-visible'>
          <Card
            className='py-4'
            isPressable
            onClick={() => {
              setActiveSection('Projects')
              setTimeOfLastClick(Date.now())
            }}
          >
            <CardHeader className='pb-0 pt-2 px-4 flex-col items-start gap-2'>
              <p className='text-tiny uppercase font-bold opacity-50'>
                {category}
              </p>

              {/* <small className='text-default-500'>12 Tracks</small> */}
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
                className='w-full object-cover h-56'
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
        <CardFooter className='text-small justify-between'>
          <p className='text-left text-sm leading-relaxed  opacity-80 line-clamp-3'>
            {description}
          </p>
          {/* <p className='text-default-500'>ashajks</p> */}
        </CardFooter>
      </Card>
      {/* <div className='flex flex-col gap-4 z-10 overflow-hidden relative rounded-lg p-4 border-red-500 border '>
        <div className=' relative  rounded-xl flex flex-col gap-4 py-4 px-2'>
          <Image
            isBlurred
            src={imageUrl}
            alt='Project Image'
            removeWrapper
            className=' skills-blur '
          />
          <h3 className='font-bold text-4xl '>{title}</h3>
          <Image
            src={imageUrl}
            alt='Project Image'
            className='rounded-lg mb-6'
          />
        </div>
        <div className='flex flex-wrap gap-2 items-center justify-center'>
          {tags.map((tag: string) => (
            <Chip size='sm' color='default' variant='flat' key={tag}>
              {tag}
            </Chip>
          ))}
        </div>
        <p className='text-left text-sm leading-relaxed  opacity-80'>
          {description}
        </p>

        {link && (
          <Button
            variant='shadow'
            color='primary'
            as={Link}
            href={link}
            radius='full'
            target='blank'
            className='font-semibold dark:bg-white bg-black border px-6 py-3 mt-6 uppercase shadow-md shadow-black/30'
          >
 
            <Link showAnchorIcon className=' dark:text-black text-white'>
              Discover
            </Link>
          </Button>
        )}
      </div> */}
    </div>
  )
}
