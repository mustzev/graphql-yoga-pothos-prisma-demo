import { builder, prisma } from 'schema/builder'

builder.queryField('products', t => t.prismaField({
    type: ['Product'],
    resolve: (query, root, args, ctx, info) => prisma.product.findMany({ ...query })
}))
