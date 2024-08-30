"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = exports.builder = exports.prisma = void 0;
const core_1 = __importDefault(require("@pothos/core"));
const plugin_prisma_1 = __importDefault(require("@pothos/plugin-prisma"));
const client_1 = require("@prisma/client");
exports.prisma = new client_1.PrismaClient({});
exports.builder = new core_1.default({
    plugins: [plugin_prisma_1.default],
    prisma: {
        client: exports.prisma,
        exposeDescriptions: true,
        filterConnectionTotalCount: true,
        onUnusedQuery: process.env.NODE_ENV === 'production'
            ? null
            : 'warn',
    }
});
exports.builder.queryType({
    fields: t => ({
        root: t.string({
            resolve: () => 'Root query placeholder'
        })
    })
});
exports.schema = exports.builder.toSchema();
