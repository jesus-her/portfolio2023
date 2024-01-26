import { headers } from 'next/headers'

export default function Page () {
  const headersList = headers()
  const referer = headersList.get('referer')
  console.log(headers)

  return <div>Referer: {referer}</div>
}
