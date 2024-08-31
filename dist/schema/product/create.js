"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("schema/builder");
const CreateProductInput = builder_1.builder.inputType('CreateProductInput', {
    fields: t => ({
        code: t.string({ required: true }),
        name: t.string({ required: true }),
        description: t.string(),
        price: t.float({ required: true }),
        quantity: t.int({ required: true })
    })
});
builder_1.builder.mutationField('createProduct', t => t.prismaField({
    type: 'Product',
    args: {
        createProductInput: t.arg({
            type: CreateProductInput,
            required: true
        })
    },
    resolve: (query, root, args, ctx, info) => builder_1.prisma.product.create({
        data: args.createProductInput
    })
}));
