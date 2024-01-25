'use client'
import { post3DSecure } from '@/lib/actions'
import { Button, Input } from '@nextui-org/react'
import { useState } from 'react'

export default function CheckoutForm () {
  const [cardNumber, setCardNumber] = useState('')

  const [cvv, setCvv] = useState('')

  function generateNumericControlNumber (length: number) {
    let result = ''
    for (let i = 0; i < length; i++) {
      result += Math.floor(Math.random() * 10) // Genera un dígito aleatorio del 0 al 9
    }
    return result
  }
  async function handleSubmit (event: any) {
    event.preventDefault()

    const payworksConfig = {
      user: 'CO924535711',
      password: '.MimexA89.',
      merchant: '9273397',
      terminal: '92733971',
      forwardPath: 'https://www.commercemarketmimexa.com', // Endpoint para manejar la respuesta de 3D Secure
      merchantName: 'COMMERCE & MARKET MIME', // Reemplaza con el nombre de tu comercio
      merchantCity: 'TIJUANA' // Reemplaza con la ciudad de tu comercio
    }
    const paymentDetails = {
      card_number: cardNumber,
      card_exp: '09/31',
      cvv: cvv,
      amount: 1.0
      // Aquí deberás agregar el resto de las propiedades requeridas
    }

    // Aquí agregarías el resto de los campos necesarios para el body

    const body = {
      CARD_NUMBER: paymentDetails.card_number,
      CARD_EXP: paymentDetails.card_exp,
      AMOUNT: 1.0,
      CARD_TYPE: 'VISA',
      MERCHANT_ID: payworksConfig.merchant,
      MERCHANT_NAME: payworksConfig.merchantName,
      MERCHANT_CITY: payworksConfig.merchantCity,
      FORWARD_PATH: payworksConfig.forwardPath,
      CERTIFICACION_3D: '03',
      REFERENCE3D: generateNumericControlNumber(15), // Ejemplo de cómo podrías generar una referencia
      CITY: 'Tlaxcala',
      COUNTRY: 'Mexico',
      EMAIL: 'jesus10.hn@gmail.com',
      NAME: 'Jesus',
      LAST_NAME: 'Hernandez',
      POSTAL_CODE: '90670',
      STATE: 'NL',
      STREET: '3 de marzo',
      VERSION_3D: 2,
      MOBILE_PHONE: '2462224323',
      CREDIT_TYPE: 'DB'
    }

    post3DSecure(body)
      .then(res => {
        console.log('RES: ', res)
      })
      .catch(error => console.log(error))
  }

  return (
    <form
      className=' border max-w-md self-center flex flex-col gap-4'
      id='payment-form'
      action='https://via.banorte.com/secure3d/Solucion3DSecure.htm'
      method='post'
    >
      <label>Numero de tarjeta *</label>
      <input
        className=' w-full p-3 my-3'
        type='text'
        id='card-number'
        name='CARD_NUMBER'
        placeholder='Número de tarjeta'
        required
      />

      <label>Fecha de expiracion *</label>
      <input
        className=' w-full p-3 my-3'
        type='text'
        id='card_exp'
        name='CARD_EXP'
        placeholder='Fecha de exp'
        required
      />

      <input
        className=' w-full p-3 my-3'
        type='hidden'
        name='AMOUNT'
        value='1.00'
      />
      <input
        className=' w-full p-3 my-3'
        type='hidden'
        name='CARD_TYPE'
        value='MC'
      />
      <input
        className=' w-full p-3 my-3'
        type='hidden'
        name='MERCHANT_ID'
        value='9273397'
      />
      <input
        className=' w-full p-3 my-3'
        type='hidden'
        name='MERCHANT_NAME'
        value='COMMERCE & MARKET MIME'
      />
      <input
        className=' w-full p-3 my-3'
        type='hidden'
        name='MERCHANT_CITY'
        value='TIJUANA'
      />
      <input
        type='hidden'
        className=' w-full p-3 my-3'
        name='FORWARD_PATH'
        value='/test'
      />
      <input
        className=' w-full p-3 my-3'
        type='hidden'
        name='CERTIFICACION_3D'
        value='03'
      />
      <input
        type='text'
        className=' w-full p-3 my-3'
        name='REFERENCE3D'
        id='reference3d'
      />
      <input
        className=' w-full p-3 my-3'
        type='hidden'
        name='CITY'
        value='Tlaxcala'
      />
      <input
        className=' w-full p-3 my-3'
        type='hidden'
        name='COUNTRY'
        value='Mexico'
      />
      <input
        className=' w-full p-3 my-3'
        type='hidden'
        name='EMAIL'
        value='jesus10.hn@gmail.com'
      />
      <input
        className=' w-full p-3 my-3'
        type='hidden'
        name='NAME'
        value='Jesus'
      />
      <input
        className=' w-full p-3 my-3'
        type='hidden'
        name='LAST_NAME'
        value='Hernandez'
      />
      <input
        className=' w-full p-3 my-3'
        type='hidden'
        name='POSTAL_CODE'
        value='90670'
      />
      <input
        className=' w-full p-3 my-3'
        type='hidden'
        name='STATE'
        value='NL'
      />
      <input
        className=' w-full p-3 my-3'
        type='hidden'
        name='STREET'
        value='3 de marzo'
      />
      <input
        className=' w-full p-3 my-3'
        type='hidden'
        name='THREED_VERSION'
        value={2}
      />
      <input
        className=' w-full p-3 my-3'
        type='hidden'
        name='MOBILE_PHONE'
        value='2462224323'
      />
      <input
        className=' w-full p-3 my-3'
        type='hidden'
        name='CREDIT_TYPE'
        value='DB'
      />
      <button className=' bg-green-500 p-2' type='submit'>
        Comprar Ahora
      </button>
    </form>
  )
}
