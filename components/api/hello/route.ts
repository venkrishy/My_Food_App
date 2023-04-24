export async function GET(request: Request) {
  console.log('Calling api/Hello')
  return new Response('Hello, Next.js!')
}
