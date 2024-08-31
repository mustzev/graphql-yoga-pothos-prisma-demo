"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("schema/builder");
builder_1.builder.prismaObject('Product', {
    name: 'Product',
    fields: t => ({
        id: t.exposeID('id'),
        code: t.exposeString('code'),
        name: t.exposeString('name'),
        description: t.exposeString('description'),
        price: t.exposeFloat('price'),
        quantity: t.exposeInt('quantity'),
        createdAt: t.expose('createdAt', {
            type: 'Date'
        })
    })
});
