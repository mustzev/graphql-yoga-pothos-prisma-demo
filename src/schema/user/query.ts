import { builder, prisma } from 'schema/builder'

builder.prismaObject('User', {
    name: 'User',
    fields: t => ({
        id: t.exposeID('id'),
        email: t.exposeString('email'),
        name: t.exposeString('name')
    })
})

builder.queryField('users', t => t.prismaField({
    type: ['User'],
    resolve: async (query, root, args, ctx, info) => prisma.user.findMany({ ...query })
}))
