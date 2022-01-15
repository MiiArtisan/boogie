module.exports = {
    app: {
        px: '%',
        token: 'ODg3NTUwMzA5OTczNTEyMzAy.YUFxow.h8cvDV-lU1CaxnWFdnIG3kl2DVM',
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
