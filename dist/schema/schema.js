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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const core_1 = __importDefault(require("@pothos/core"));
const plugin_prisma_1 = __importDefault(require("@pothos/plugin-prisma"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({});
const builder = new core_1.default({
    plugins: [plugin_prisma_1.default],
    prisma: {
        client: prisma,
        exposeDescriptions: true,
        filterConnectionTotalCount: true,
        onUnusedQuery: process.env.NODE_ENV === 'production'
            ? null
            : 'warn',
    }
});
builder.prismaObject('User', {
    name: 'User',
    fields: t => ({
        id: t.exposeID('id'),
        email: t.exposeString('email'),
        name: t.exposeString('name')
    })
});
builder.queryType({
    fields: t => ({
        hello: t.string({
            resolve: () => 'world'
        })
    })
});
builder.queryField('users', t => t.prismaField({
    type: ['User'],
    resolve: (query, root, args, ctx, info) => __awaiter(void 0, void 0, void 0, function* () { return prisma.user.findMany(Object.assign({}, query)); })
}));
exports.schema = builder.toSchema();
