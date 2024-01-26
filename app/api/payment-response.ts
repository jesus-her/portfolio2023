// pages/api/payment-response.js

export default function handler (req: any, res: any) {
    // Next.js API route body parsing is automatic, so you can access req.body directly
    if (req.method === 'POST') {
      // Aquí manejas la respuesta. Puedes obtener los headers así:
      const headers = req.headers
  
      // Logica para procesar los datos de la respuesta
      console.log('HEADERS', headers)
  
      // ...
  
      // Finalmente, envía una respuesta al cliente
    //   return res.status(200).json({ message: 'Respuesta recibida y procesada' })
    } else {
      // Método HTTP no soportado
      console.log("not supported");
      
    //   return res.status(405).end()
    }
  }
  