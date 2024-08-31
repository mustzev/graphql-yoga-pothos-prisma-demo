"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("schema/builder");
builder_1.builder.queryField('products', t => t.prismaField({
    type: ['Product'],
    resolve: (query, root, args, ctx, info) => builder_1.prisma.product.findMany(Object.assign({}, query))
}));
