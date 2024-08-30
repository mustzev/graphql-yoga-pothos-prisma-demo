"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("schema/builder");
builder_1.builder.queryField('users', t => t.prismaField({
    type: ['User'],
    resolve: (query, root, args, ctx, info) => builder_1.prisma.user.findMany(Object.assign({}, query))
}));
