import { builder } from 'schema/builder'
import { StatsRef } from './type'

builder.queryField('stats', t => t.field({
    type: StatsRef,
    resolve: () => ({
        count: {
            userCount: 0,
            productCount: 0
        }
    })
}))
