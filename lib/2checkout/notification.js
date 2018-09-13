crypto = require('crypto');

module.exports = function (options) {
    return {
        valid: function () {
            return crypto.createHash('md5').update(
                data.sale_id + options.sellerId + data.invoice_id + options.secretWord
            ).digest("hex").toUpperCase() == data.md5_hash;
        }
    }
};