var utils = require("./utils");

/**
 * Build URI for the given endpoint.
 *
 * @param endpoint
 * @returns {string}
 */
function path(endpoint) {
    return '/api/sales/' + endpoint.replace(/^\/*/g);
}

module.exports = function (options) {
    options.type = 'admin';

    return {
        retrieve: function(args, callback) {
            utils.execute(Object.assign({
                path: path('details_sale'),
                method: 'GET',
                payload: args,
            }, options), callback)
        },

        list: function(args, callback) {
            utils.execute(Object.assign({
                path: path('list_sales'),
                method: 'GET',
                payload: args,
            }, options), callback)
        },

        refund: function(args, callback) {
            utils.execute(Object.assign({
                path: args.lineitem_id
                    ? path('refund_lineitem')
                    : path('refund_invoice'),
                method: 'POST',
                payload: args,
            }, options), callback)
        },

        ship: function(args, callback) {
            utils.execute(Object.assign({
                path: path('mark_shipped'),
                method: 'POST',
                payload: args,
            }, options), callback)
        },

        comment: function(args, callback) {
            utils.execute(Object.assign({
                path: path('create_comment'),
                method: 'POST',
                payload: args,
            }, options), callback)
        },

        reauth: function(args, callback) {
            utils.execute(Object.assign({
                path: path('reauth'),
                method: 'POST',
                payload: args,
            }, options), callback)
        },

        stop: function(args, callback) {
            utils.execute(Object.assign({
                path: path('stop_lineitem_recurring'),
                method: 'POST',
                payload: args,
            }, options), callback)
        },
    }
};