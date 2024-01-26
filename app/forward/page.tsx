'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function Page () {
  const searchParams = useSearchParams()

  useEffect(() => {
    // Puedes usar 'searchParams.get()' para acceder a los parámetros de la URL
    const status = searchParams.get('Status')
    const eci = searchParams.get('ECI')
    const cavv = searchParams.get('CAVV')
    const xid = searchParams.get('XID')

    if (status === '200') {
      // Autenticación exitosa, procesar el pago
      procesarPagoConPayworks(eci, cavv, xid)
    } else {
      // Manejar errores de autenticación
      console.error('Error en la autenticación 3D Secure:', status)
      // Aquí puedes mostrar un mensaje de error o redirigir
    }
  }, [])

  const procesarPagoConPayworks = (eci: any, cavv: any, xid: any) => {
    // Lógica para procesar el pago
    console.log('Procesando pago con Payworks...', eci, cavv, xid)
    // Aquí podrías llamar a tu backend o tomar otras acciones
  }

  return (
    <div>
      <h1>Procesando respuesta de 3D Secure...</h1>
      {/* Contenido adicional aquí */}
    </div>
  )
}
