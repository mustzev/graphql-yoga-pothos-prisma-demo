import { builder, prisma } from 'schema/builder'

const CreateUserInput = builder.inputType('CreateUserInput', {
    fields: t => ({
        email: t.string({ required: true }),
        name: t.string()
    })
})

builder.mutationField('createUser', t => t.prismaField({
    type: 'User',
    args: {
        createUserInput: t.arg({
            type: CreateUserInput,
            required: true
        })
    },
    resolve: (query, root, args, ctx, info) => prisma.user.create({
        data: args.createUserInput
    })
}))
