'use client'

import { useTheme } from '@/context/theme-context'
import { Switch } from '@nextui-org/react'
import React from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

export default function ThemeSwitch () {
  const { theme, toggleTheme } = useTheme()

  return (
    <Switch
      onClick={toggleTheme}
      color='warning'
      isSelected={theme === 'light'}
      startContent={theme === 'dark' ? <BsMoon /> : <BsSun />}
      endContent={theme === 'light' ? <BsSun /> : <BsMoon />}
    ></Switch>
  )
}
