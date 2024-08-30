import { createYoga } from 'graphql-yoga'
import { createServer } from 'node:http'
import { schema } from 'schema/builder'

const port = Number(process.env.SERVER_PORT) || 9000

const yoga = createYoga({ schema })

const server = createServer(yoga)

server.listen(port, () => {
    console.info(`Server is running on http://localhost:${port}/graphql`)
})
