import { builder } from './builder'
import './user/create'
import './user/type'
import './user/users'

export const schema = builder.toSchema()
