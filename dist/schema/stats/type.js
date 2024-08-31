"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsRef = void 0;
const builder_1 = require("schema/builder");
const type_1 = require("./count/type");
exports.StatsRef = builder_1.builder.objectRef('Stats');
exports.StatsRef.implement({
    fields: t => ({
        count: t.expose('count', {
            type: type_1.CountRef
        })
    })
});
