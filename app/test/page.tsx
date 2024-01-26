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
      className=' flex flex-col gap-4 max-w-sm mx-auto my-52'
      id='payment-form'
      action='https://via.banorte.com/secure3d/Solucion3DSecure.htm'
      method='post'
    >
      <label>Numero de tarjeta *</label>
      <input
        type='text'
        id='card-number'
        name='CARD_NUMBER'
        placeholder='Número de tarjeta'
        required
      />

      <label>Fecha de expiracion *</label>
      <input
        type='text'
        id='card_exp'
        name='CARD_EXP'
        placeholder='Fecha de exp'
        required
      />

      <input type='hidden' name='AMOUNT' value='1.00' />
      <label>VISA or MC *</label>
      <input type='text' name='CARD_TYPE' />
      <input type='hidden' name='MERCHANT_ID' value='9273397' />
      <input
        type='hidden'
        name='MERCHANT_NAME'
        value='COMMERCE & MARKET MIME'
      />
      <input type='hidden' name='MERCHANT_CITY' value='TIJUANA' />
      <input
        type='text'
        name='FORWARD_PATH'
        value='https://jesushn.vercel.app/Pago_Banorte_Web/ResponsePayment.aspx?transactionId=5534&URL_Back=https://jesushn.vercel.app/'
      />
      <input type='hidden' name='Cert3D' value='03' />
      <label>id</label>
      <input maxLength={15} type='text' name='REFERENCE3D' id='reference3d' />
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
      <Button type='submit'>Comprar Ahora</Button>
    </form>
  )
}
