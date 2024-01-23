'use client'
import { Card, CardHeader, Chip } from '@nextui-org/react'
import React from 'react'

const Cards = ({ card }: { card: any }) => {
  return (
    <Card className=' dark:bg-[#0B0B0C] bg-white flex justify-center items-center'>
      <CardHeader>
        <div className=' flex gap-2 items-center justify-center'>
          <Chip
            className=' font-bold items-center flex justify-center text-lg w-10 h-10  '
            variant='flat'
            color='default'
            radius='full'
            size='lg'
          >
            {card.icon}
          </Chip>
          <h3 className=' font-semibold text-sm lg:text-lg'>{card.title}</h3>
        </div>
      </CardHeader>
    </Card>
  )
}

export default Cards
