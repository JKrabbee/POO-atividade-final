import { tweets } from "../dataBase/tweets"
import { Base } from "./Base"
import { Tweet } from "./Tweet"

export class User extends Base {
    private _following: User[]
    constructor(
        private _name: string,
        private _username: string,
        private _email: string,
        private _password: string,
        ){
        super()
        this._name = _name
        this._username = _username
        this._email = _email
        this._password = _password
        this._following = []
    }

    get username (): string {
        return this._username
    }

    public sendTweet(tweet:Tweet) {
        if (tweet.userId !== this.id) {
            return console.log('usuarios incorreto');
        }
        tweets.push(tweet)
    }

    public follow (user:User) {
        this._following.push(user)
    }

    public showTweets () {
        tweets.forEach((tweet)=> {
            if (tweet.userId === this.id) {
                tweet.showReplies()
            }
        })
    }
    
    public showFeed() {
        this.showTweets()

        this._following.forEach((user)=>{
            user.showTweets()
        })
    }

    public show() {
        console.log(`
        Name: ${this._name}
        Usarname: ${this._username}
        E-mail:${this._email}
        Seguidores:`);

        this._following.forEach((seguindo) => {
            console.log(`@${seguindo.username}`);
        })
        
    }
}