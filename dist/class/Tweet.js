"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tweet = void 0;
const Base_1 = require("./Base");
const Like_1 = require("./Like");
const tweets_1 = require("../dataBase/tweets");
class Tweet extends Base_1.Base {
    constructor(_content, _type, _user) {
        super();
        this._content = _content;
        this._type = _type;
        this._user = _user;
        this._content = _content;
        this._type = "NORMAL";
        this._likes = [];
        this._user = _user;
        this._replies = [];
    }
    get userId() {
        return this._user.id;
    }
    reply(content, user) {
        const newReply = new Tweet(content, 'REPLY', user);
        this._replies.push(newReply);
        tweets_1.tweets.push(newReply);
    }
    like(user) {
        const newLike = new Like_1.Like(user);
        this._likes.push(newLike);
    }
    show() {
        if (!this._likes) {
            console.log(`@${this._user.username}: ${this._content}`);
        }
        if (this._likes.length == 1) {
            console.log(`@${this._user.username}: ${this._content}`);
            console.log(`@${this._likes[0].username} curtiu.`);
        }
        if (this._likes.length > 1) {
            console.log(`@${this._user.username}: ${this._content}`);
            console.log(`@${this._likes[0].username} e mais ${(this._likes.length) - 1} usuários curtiram.`);
        }
    }
    showReplies() {
        if (!this._likes) {
            console.log(`@${this._user.username}: ${this._content}`);
        }
        if (this._likes.length == 1) {
            console.log(`@${this._user.username}: ${this._content}`);
            console.log(`@${this._likes[0].username} curtiu.`);
        }
        if (this._likes.length > 1) {
            console.log(`@${this._user.username}: ${this._content}`);
            console.log(`@${this._likes[0].username} e mais ${(this._likes.length) - 1} usuários curtiram.`);
        }
        console.log(`-----------------------------------------`);
        this._replies.forEach((reply) => {
            console.log(` > @${reply._user.username}: ${reply._content}`);
        });
    }
}
exports.Tweet = Tweet;
