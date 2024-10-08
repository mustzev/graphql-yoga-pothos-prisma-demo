"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("schema/builder");
const CreateUserInput = builder_1.builder.inputType('CreateUserInput', {
    fields: t => ({
        email: t.string({ required: true }),
        name: t.string()
    })
});
builder_1.builder.mutationField('createUser', t => t.prismaField({
    type: 'User',
    args: {
        createUserInput: t.arg({
            type: CreateUserInput,
            required: true
        })
    },
    resolve: (query, root, args, ctx, info) => builder_1.prisma.user.create({
        data: args.createUserInput
    })
}));
