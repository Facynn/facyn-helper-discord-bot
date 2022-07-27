// Episode #4 - Facyn

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {

        client.user.setPresence({
            activities: [
                {
                    name: 'facyn.xyz - /help'
                }
            ],
        })

        console.log(`[✅] ${client.user.tag}`)
    }
}