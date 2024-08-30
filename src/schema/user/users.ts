import { builder, prisma } from 'schema/builder'

builder.queryField('users', t => t.prismaField({
    type: ['User'],
    resolve: (query, root, args, ctx, info) => prisma.user.findMany({ ...query })
}))
