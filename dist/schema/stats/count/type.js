"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountRef = void 0;
const builder_1 = require("schema/builder");
exports.CountRef = builder_1.builder.objectRef('Count');
exports.CountRef.implement({
    fields: t => ({
        userCount: t.int({
            resolve: () => builder_1.prisma.user.count()
        }),
        productCount: t.int({
            resolve: () => builder_1.prisma.product.count()
        })
    })
});
