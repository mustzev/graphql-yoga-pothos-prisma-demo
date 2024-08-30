"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_yoga_1 = require("graphql-yoga");
const node_http_1 = require("node:http");
const builder_1 = require("schema/builder");
const port = Number(process.env.SERVER_PORT) || 9000;
const yoga = (0, graphql_yoga_1.createYoga)({ schema: builder_1.schema });
const server = (0, node_http_1.createServer)(yoga);
server.listen(port, () => {
    console.info(`Server is running on http://localhost:${port}/graphql`);
});
