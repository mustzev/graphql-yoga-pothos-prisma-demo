"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
builder_1.builder.queryField('users', t => t.prismaField({
    type: ['User'],
    resolve: (query, root, args, ctx, info) => __awaiter(void 0, void 0, void 0, function* () { return builder_1.prisma.user.findMany(Object.assign({}, query)); })
}));
