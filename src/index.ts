import { Tweet } from "./class/Tweet";
import { usuarios } from "./dataBase/users";

const tweet1 = new Tweet('Olá meu nome é joão', 'NORMAL', usuarios[0])
const tweet2 = new Tweet('Olá meu nome é Vitor', 'NORMAL', usuarios[1])
const tweet3 = new Tweet('Olá meu nome é Krabbe', 'NORMAL', usuarios[2])

//João
usuarios[0].sendTweet(tweet1)
//Vitor
usuarios[1].sendTweet(tweet2)
//Krabbe
usuarios[2].sendTweet(tweet3)

//João seguindo Vitor e Krabbe
usuarios[0].follow(usuarios[1])
usuarios[0].follow(usuarios[2])
//Vitor seguindo Krabbe e João
usuarios[1].follow(usuarios[2])
usuarios[1].follow(usuarios[0])
//Krabbe seguindo João e Vitor
usuarios[2].follow(usuarios[0])
usuarios[2].follow(usuarios[1])

//João e Krabbe curtindo o Tweet de Vitor
tweet2.like(usuarios[0])
tweet2.like(usuarios[2])
//João curtindo o Tweet de Krabbe
tweet3.like(usuarios[0])

//Reply João tweet do Vitor
tweet2.reply('Legal Vitor! Meu nome é João!', usuarios[0])
//Reply Krabbe tweet do Vitor
tweet2.reply('Azar!', usuarios[2])



usuarios[0].showFeed()
usuarios[0].show()