import { builder } from 'schema/builder'
import { Count, CountRef } from './count/count'

type Stats = {
    count: Count
}

const StatsRef = builder.objectRef<Stats>('Stats')

StatsRef.implement({
    fields: t => ({
        count: t.expose('count', {
            type: CountRef
        })
    })
})

builder.queryField('stats', t => t.field({
    type: StatsRef,
    resolve: () => ({
        count: {
            userCount: 0,
            productCount: 0
        }
    })
}))
