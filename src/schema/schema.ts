import { builder } from './builder'
import './product/create'
import './product/products'
import './product/type'
import './user/create'
import './user/type'
import './user/users'

export const schema = builder.toSchema()
