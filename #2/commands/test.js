module.exports = {
  name: "test",
  description: "testing command",
  alias: [],
  run: async (client, message, args) => {
    client.createMessage(message.channel.id, "Testing!")
  }
}