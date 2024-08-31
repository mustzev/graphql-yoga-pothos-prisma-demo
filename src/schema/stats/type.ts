import { builder } from 'schema/builder'
import { Count, CountRef } from './count/type'

type Stats = {
    count: Count
}

export const StatsRef = builder.objectRef<Stats>('Stats')

StatsRef.implement({
    fields: t => ({
        count: t.expose('count', {
            type: CountRef
        })
    })
})
