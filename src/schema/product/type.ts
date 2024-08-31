import { builder } from 'schema/builder'

builder.prismaObject('Product', {
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
})
