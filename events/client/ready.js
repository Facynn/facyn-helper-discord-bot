// Episode #4 - Facyn

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(`[✅] ${client.user.tag}`)
    }
}