// Episode #4 - Facyn

const fs = require('fs');
const path = require('path');

module.exports = (client) => {
    client.handleEvents = async () => {
        const eventsFolders = fs.readdirSync(path.join(__dirname, '../../events'))
        for (const eventsFolder of eventsFolders) {
            const eventsFiles = fs
            .readdirSync(path.join(__dirname, '../../events', eventsFolder))
            .filter(file => file.endsWith('.js'));
            switch(eventsFolder) {
                case 'client':
                    for(const eventsFile of eventsFiles) {
                        const event = require(`../../events/${eventsFolder}/${eventsFile}`)
                        if(event.once) client.once(event.name, (...args) => event.execute(...args, client))
                        else client.on(event.name, (...args) => event.execute(...args, client));
                    }
                break;
            }
        }
    }
}