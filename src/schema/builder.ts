import SchemaBuilder from '@pothos/core'
import PrismaPlugin from '@pothos/plugin-prisma'
import type PrismaTypes from '@pothos/plugin-prisma/generated'
import { PrismaClient } from '@prisma/client'
import { DateResolver } from 'graphql-scalars'

export const prisma = new PrismaClient({})

export const builder = new SchemaBuilder<{
    Scalars: {
        Date: {
            Input: Date
            Output: Date
        }
    }
    PrismaTypes: PrismaTypes
    
}>({
    plugins: [PrismaPlugin],
    prisma: {
        client: prisma,
        exposeDescriptions: true,
        filterConnectionTotalCount: true,
        onUnusedQuery: process.env.NODE_ENV === 'production'
            ? null
            : 'warn'
    }
})

builder.addScalarType('Date', DateResolver, {})

builder.queryType({})
builder.mutationType({})
// builder.subscriptionType({})

builder.queryField('root', t => t.string({
    resolve: () => 'Root query placeholder'
}))
