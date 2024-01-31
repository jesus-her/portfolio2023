'use client'
import React, { useEffect, useState } from 'react'

export default function Page () {
  const [status, setStatus] = useState('')

  useEffect(() => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://example.com', true) // Reemplaza 'https://example.com' con tu URL objetivo
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        // Solicitar las cabeceras
        const allHeaders = xhr.getAllResponseHeaders()
        console.log(allHeaders)
        // Aquí puedes parsear las cabeceras como desees, por ejemplo, buscar una específica
        const statusHeader = xhr.status
        console.log('Status:', statusHeader)
        // setStatus(statusHeader.toString())
      }
    }
    xhr.send()
  }, [])

  return <div>status: {status}</div>
}
