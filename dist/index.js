"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tweet_1 = require("./class/Tweet");
const users_1 = require("./dataBase/users");
const tweet1 = new Tweet_1.Tweet('Olá meu nome é joão', 'NORMAL', users_1.usuarios[0]);
const tweet2 = new Tweet_1.Tweet('Olá meu nome é Vitor', 'NORMAL', users_1.usuarios[1]);
const tweet3 = new Tweet_1.Tweet('Olá meu nome é Krabbe', 'NORMAL', users_1.usuarios[2]);
//João
users_1.usuarios[0].sendTweet(tweet1);
//Vitor
users_1.usuarios[1].sendTweet(tweet2);
//Krabbe
users_1.usuarios[2].sendTweet(tweet3);
//João seguindo Vitor e Krabbe
users_1.usuarios[0].follow(users_1.usuarios[1]);
users_1.usuarios[0].follow(users_1.usuarios[2]);
//Vitor seguindo Krabbe e João
users_1.usuarios[1].follow(users_1.usuarios[2]);
users_1.usuarios[1].follow(users_1.usuarios[0]);
//Krabbe seguindo João e Vitor
users_1.usuarios[2].follow(users_1.usuarios[0]);
users_1.usuarios[2].follow(users_1.usuarios[1]);
//João e Krabbe curtindo o Tweet de Vitor
tweet2.like(users_1.usuarios[0]);
tweet2.like(users_1.usuarios[2]);
//Reply João tweet do Vitor
tweet2.reply('Legal Vitor! Meu nome é João!', users_1.usuarios[0]);
// tweet2.showReplies()
users_1.usuarios[0].showFeed();
