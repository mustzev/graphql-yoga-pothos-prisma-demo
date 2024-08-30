import SchemaBuilder from '@pothos/core'
import PrismaPlugin from '@pothos/plugin-prisma'
import type PrismaTypes from '@pothos/plugin-prisma/generated'
import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({})

export const builder = new SchemaBuilder<{
    PrismaTypes: PrismaTypes
}>({
    plugins: [PrismaPlugin],
    prisma: {
        client: prisma,
        exposeDescriptions: true,
        filterConnectionTotalCount: true,
        onUnusedQuery: process.env.NODE_ENV === 'production'
            ? null
            : 'warn',
    }
})

builder.queryType({
    fields: t => ({
        root: t.string({
            resolve: () => 'Root query placeholder'
        })
    })
})

export const schema = builder.toSchema()
