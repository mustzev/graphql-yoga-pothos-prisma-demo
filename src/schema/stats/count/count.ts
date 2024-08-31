import { builder, prisma } from 'schema/builder'

export type Count = {
    userCount: number
    productCount: number
}

export const CountRef = builder.objectRef<Count>('Count')

CountRef.implement({
    fields: t => ({
        userCount: t.int({
            resolve: () => prisma.user.count()
        }),
        productCount: t.int({
            resolve: () => prisma.product.count()
        })
    })
})
