"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const builder_1 = require("./builder");
require("./product/create");
require("./product/products");
require("./product/type");
require("./user/create");
require("./user/type");
require("./user/users");
require("./stats/count/type");
require("./stats/stats");
require("./stats/type");
builder_1.builder.queryType({});
builder_1.builder.mutationType({});
// builder.subscriptionType({})
builder_1.builder.queryField('root', t => t.string({
    resolve: () => 'Root query placeholder'
}));
exports.schema = builder_1.builder.toSchema();
