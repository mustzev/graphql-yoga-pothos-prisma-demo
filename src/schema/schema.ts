import { builder } from './builder'

import './product/create'
import './product/products'
import './product/type'

import './user/create'
import './user/type'
import './user/users'

import './stats/count/count'
import './stats/stats'

builder.queryType({})
builder.mutationType({})
// builder.subscriptionType({})

builder.queryField('root', t => t.string({
    resolve: () => 'Root query placeholder'
}))

export const schema = builder.toSchema()
