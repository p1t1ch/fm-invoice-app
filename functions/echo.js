require('dotenv').config()

const fetch = require('node-fetch')

console.log('log 1')

exports.handler = async () => {
  console.log('log 2')
  try {
    const email = 'belobeev.kirill@gmail.com'
    console.log('log 3')

    await fetch(process.env.HASURA_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Hasura-Admin-Secret': process.env.HASURA_ADMIN_SECRET,
      },
      body: JSON.stringify({
        query: `query GetInvoices($email: String!) {
          invoices(where: {email: {_eq: $email}}, order_by: {id: asc}) {
            id
            name
            created_at
            payment_due
            payment_terms
            description
            status
            sender
            client
            items
            total
          }
        }`,
        variables: {
          email,
        },
      }),
    })
    console.log('log 4')

    return {
      statusCode: 200,
      body: JSON.stringify({ message: '123' }),
    }
  } catch (e) {
    console.log('log 8')
    console.log(e)
    return {
      statusCode: 500,
      body: JSON.stringify({ message: `Error: ${e.message}` }),
    }
  }
}
