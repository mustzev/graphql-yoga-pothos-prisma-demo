"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("schema/builder");
const type_1 = require("./type");
builder_1.builder.queryField('stats', t => t.field({
    type: type_1.StatsRef,
    resolve: () => ({
        count: {
            userCount: 0,
            productCount: 0
        }
    })
}));
