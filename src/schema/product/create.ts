import { builder, prisma } from 'schema/builder'

const createProductInput = builder.inputType('createProductInput', {
    fields: t => ({
        code: t.string({ required: true }),
        name: t.string({ required: true }),
        description: t.string(),
        price: t.float({ required: true }),
        quantity: t.int({ required: true })
    })
})

builder.mutationField('createProduct', t => t.prismaField({
    type: 'Product',
    args: {
        createProductInput: t.arg({
            type: createProductInput,
            required: true
        })
    },
    resolve: (query, root, args, ctx, info) => prisma.product.create({
        data: args.createProductInput
    })
}))
