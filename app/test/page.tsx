'use client'
import { Button, Input } from '@nextui-org/react'

export default function CheckoutForm () {
  return (
    <form
      className=' flex flex-col gap-4 max-w-sm mx-auto my-52'
      id='payment-form'
      action='https://via.banorte.com/secure3d/Solucion3DSecure.htm'
      method='post'
    >
      <Input
        label='Numero de tarjeta'
        isRequired
        type='text'
        id='card-number'
        name='CARD_NUMBER'
        placeholder='Número de tarjeta'
        required
      />

      <Input
        isRequired
        label='Fecha de EXP'
        type='text'
        id='card_exp'
        name='CARD_EXP'
        placeholder='Fecha de exp'
        required
      />

      <input type='hidden' name='AMOUNT' value='1.00' />
      <Input label='VISA or MC' isRequired type='text' name='CARD_TYPE' />
      <input type='hidden' name='MERCHANT_ID' value='9273397' />
      <input
        type='hidden'
        name='MERCHANT_NAME'
        value='COMMERCE & MARKET MIME'
      />
      <input type='hidden' name='MERCHANT_CITY' value='TIJUANA' />
      <Input type='text' name='FORWARD_PATH' label='FORWARD_PATH' isRequired />
      <input type='hidden' name='Cert3D' value='03' />

      <Input
        isRequired
        size='sm'
        maxLength={15}
        label='ID'
        type='text'
        name='REFERENCE3D'
        id='reference3d'
      />
      <input type='hidden' name='CITY' value='Tlaxcala' />
      <input type='hidden' name='COUNTRY' value='Mexico' />
      <input type='hidden' name='EMAIL' value='jesus101.hn@gmail.com' />
      <input type='hidden' name='NAME' value='Jesu' />
      <input type='hidden' name='LAST_NAME' value='Hernande' />
      <input type='hidden' name='POSTAL_CODE' value='90670' />
      <input type='hidden' name='STATE' value='NL' />
      <input type='hidden' name='STREET' value='3 de marzo' />
      <input type='hidden' name='THREED_VERSION' value={2} />
      <input type='hidden' name='MOBILE_PHONE' value='2462224323' />
      <input type='hidden' name='CREDIT_TYPE' value='DB' />
      <Button className=' mt-10' color='primary' variant='shadow' type='submit'>
        Comprar Ahora
      </Button>
    </form>
  )
}
