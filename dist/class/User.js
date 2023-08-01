"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tweets_1 = require("../dataBase/tweets");
const Base_1 = require("./Base");
class User extends Base_1.Base {
    constructor(_name, _username, _email, _password) {
        super();
        this._name = _name;
        this._username = _username;
        this._email = _email;
        this._password = _password;
        this._name = _name;
        this._username = _username;
        this._email = _email;
        this._password = _password;
        this._following = [];
    }
    get username() {
        return this._username;
    }
    sendTweet(tweet) {
        if (tweet.userId === this.id) {
            tweets_1.tweets.push(tweet);
        }
    }
    follow(user) {
        this._following.push(user);
    }
    showTweets() {
        tweets_1.tweets.forEach((tweet) => {
            if (tweet.userId === this.id) {
                tweet.showReplies();
            }
        });
    }
    showFeed() {
        tweets_1.tweets.forEach((tweet) => {
            if (tweet.userId === this.id) {
                tweet.showReplies();
            }
        });
        this._following.forEach((user) => {
            user.showTweets();
        });
    }
}
exports.User = User;
