"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("schema/builder");
const type_1 = require("./count/type");
const StatsRef = builder_1.builder.objectRef('Stats');
StatsRef.implement({
    fields: t => ({
        count: t.expose('count', {
            type: type_1.CountRef
        })
    })
});
builder_1.builder.queryField('stats', t => t.field({
    type: StatsRef,
    resolve: () => ({
        count: {
            userCount: 0,
            productCount: 0
        }
    })
}));
