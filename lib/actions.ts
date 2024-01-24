'use server'

// Categories
export async function post3DSecure (body: any) {
  const requestOptions: RequestInit = {
    method: 'POST',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    // body: new URLSearchParams(body).toString()
    body: Object.keys(body)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(body[key]))
      .join('&')
  }
  const response = await fetch(
    'https://via.banorte.com/secure3d/Solucion3DSecure.htm',
    requestOptions
  )
  console.log(response)

  if (!response.ok) {
    throw new Error('Error al cargar las categorías')
  }

  // await new Promise((resolve) => setTimeout(resolve, 5000))

  return response.text()
}
