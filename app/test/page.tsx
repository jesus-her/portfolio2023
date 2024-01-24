'use client'
import { Button, Input } from '@nextui-org/react'
import { useState } from 'react'

export default function CheckoutForm () {
  const [cardNumber, setCardNumber] = useState('')
  const [expMonth, setExpMonth] = useState('')
  const [expYear, setExpYear] = useState('')
  const [cvv, setCvv] = useState('')
  const payworksConfig = {
    user: 'CO924535711',
    password: '.MimexA89.',
    merchant: '9273397',
    terminal: '92733971',
    forwardPath: 'https://www.commercemarketmimexa.com', // Endpoint para manejar la respuesta de 3D Secure
    merchantName: 'COMMERCE & MARKET MIME', // Reemplaza con el nombre de tu comercio
    merchantCity: 'TIJUANA' // Reemplaza con la ciudad de tu comercio
  }

  function generateNumericControlNumber (length: number) {
    let result = ''
    for (let i = 0; i < length; i++) {
      result += Math.floor(Math.random() * 10) // Genera un dígito aleatorio del 0 al 9
    }
    return result
  }
  async function handleSubmit (event: any) {
    event.preventDefault()

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
      AMOUNT: '1.00',
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
      THREED_VERSION: 2,
      MOBILE_PHONE: '2462224323',
      CREDIT_TYPE: 'DB'
    }

    try {
      const response = await fetch(
        'https://via.banorte.com/secure3d/Solucion3DSecure.htm',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams(body).toString()
        }
      )

      // Aquí manejarías la respuesta
      if (response.ok) {
        const responseData = await response.json()
        console.log(responseData)

        // Haz algo con responseData
      } else {
        // Manejar errores
        console.error('Error en la petición:', response.status)
      }
    } catch (error) {
      console.error('Error al realizar la petición:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Numero de tarjeta *
          <Input
            type='text'
            value={cardNumber}
            onChange={e => setCardNumber(e.target.value)}
            required
          />
        </label>
      </div>

      {/* <div>
        <label>
          Código de seguridad *
          <input
            type='text'
            value={cvv}
            onChange={e => setCvv(e.target.value)}
          />
        </label>
      </div> */}
      <div>
        <Button type='submit'>Comprar Ahora</Button>
      </div>
    </form>
  )
}
