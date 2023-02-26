"use strict";
exports.__esModule = true;
exports.Client = void 0;
var Client = /** @class */ (function () {
    function Client(props) {
        var endpoint = props.endpoint, fetchOptions = props.fetchOptions, signOptions = props.signOptions;
        this.endpoint = endpoint;
        this.fetchOptions = fetchOptions;
        this.signOptions = signOptions;
    }
    Client.prototype.execute = function (command) {
        return command.fetch(this.endpoint, this.fetchOptions);
    };
    return Client;
}());
exports.Client = Client;
