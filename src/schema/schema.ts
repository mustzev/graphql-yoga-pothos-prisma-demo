import SchemaBuilder from '@pothos/core'
import PrismaPlugin from '@pothos/plugin-prisma'
import type PrismaTypes from '@pothos/plugin-prisma/generated'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({})

const builder = new SchemaBuilder<{
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

builder.prismaObject('User', {
    name: 'User',
    fields: t => ({
        id: t.exposeID('id'),
        email: t.exposeString('email'),
        name: t.exposeString('name')
    })
})

builder.queryType({
    fields: t => ({
        hello: t.string({
            resolve: () => 'world'
        })
    })
})

builder.queryField('users', t => t.prismaField({
    type: ['User'],
    resolve: async (query, root, args, ctx, info) => prisma.user.findMany({ ...query })
}));

export const schema = builder.toSchema()
