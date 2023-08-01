"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Like = void 0;
const Base_1 = require("./Base");
class Like extends Base_1.Base {
    constructor(_user) {
        super();
        this._user = _user;
        this._user = _user;
    }
    get username() {
        return this._user.username;
    }
}
exports.Like = Like;
