module.exports = {
    app: {
        px: '%',
        token: 'ODg3NTUwMzA5OTczNTEyMzAy.YUFxow.e8Pb0LDBlM21yijQ3sbdYaML3I0',
        playing: 'epic beats'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
