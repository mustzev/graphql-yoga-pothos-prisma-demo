"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("schema/builder");
builder_1.builder.prismaObject('User', {
    name: 'User',
    fields: t => ({
        id: t.exposeID('id'),
        email: t.exposeString('email'),
        name: t.exposeString('name')
    })
});
