const Discord = require("eris")
const client = new Discord("Token Bot") //Disini kita akan menggunakan Token Bot kita

client.on('ready', () => {
  console.log("Bot siap untuk di gunakan") //dia akan memberitahu kita apabila botnya sudah siap di log
})

client.on('messageCreate', async (message) => {
  if(message.content == "halo") {
    client.createMessage(message.channel.id, "Halo juga") //Bot akan merespon Halo Juga apa bila kamu bilang halo
  }
})

client.connect() //Code ini digunakan agar si bot dapat terkoneksi ke Discord