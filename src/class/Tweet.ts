import { Base } from "./Base";
import { Like } from "./Like";
import { User } from "./User";
import { Type } from "../types/Type";
import { tweets } from "../dataBase/tweets";

export class Tweet extends Base {
    private _replies: Tweet[]
    private _likes: Like[]
    constructor(
        private _content: string,
        private _type: Type,
        private _user: User
    ) {
        super()
        this._content = _content
        this._type = "NORMAL"
        this._likes = []
        this._user = _user
        this._replies = []
    }

    get userId ():string {
        return this._user.id
    }

    public reply (content:string, user: User) {
        const newReply = new Tweet(content, 'REPLY', user)
        this._replies.push(newReply)
    }

    public like (user: User) {
        const newLike = new Like(user)
        this._likes.push(newLike)
    }

    public show () {
        if (!this._likes.length) {
            console.log(`@${this._user.username}: ${this._content}`)
        }
        if (this._likes.length == 1) {
            console.log(`@${this._user.username}: ${this._content}`)
            console.log(`@${this._likes[0].username} curtiu.`)
        }
        if (this._likes.length > 1) {
            console.log(`@${this._user.username}: ${this._content}`)
            console.log(`@${this._likes[0].username} e mais ${(this._likes.length) - 1} usuários curtiram.`)
        }
    }

    public showReplies () {
        this.show()
        this._replies.forEach((reply)=> {
            console.log(` > @${reply._user.username}: ${reply._content}`)   
        })
        console.log('-----------------------------------------------------');

    }
}