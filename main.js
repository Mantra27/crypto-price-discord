
    const Discord = require('discord.js');
    const client = new Discord.Client();
    const token = '<put discord bot token here>';
    const prefix = '*';
    client.once('ready', () => {
console.log('bot is online!!')
channel = client.channels.cache.get('<put channel id here>')
channel.send('Crypto-Ticker: ').then(obj=>{
    setInterval(()=>{
        var date = new Date
    async function aditya_bhaiyaa_gulabiDil(){
            const price = require('crypto-price')
            const doge = await price.getCryptoPrice('USD', 'DOGE')
            const bit = await price.getCryptoPrice('USD', 'BTC')
            const ethe = await price.getCryptoPrice('USD', 'ETH')
            const lite = await price.getCryptoPrice('USD', 'DOGE')
            const ripp = await price.getCryptoPrice('USD', 'XRP')
        
                if(doge.change > 0){
                    var emoji = "📈"
                }
                    else{
                    var emoji = "📉"
                    }

                    if(bit.change > 0){
                        var bit_emoji = "📈"
                    }
                        else{
                        var bit_emoji = "📉"
                        }

                        if(ethe.change > 0){
                            var ethe_emoji = "📈"
                        }
                            else{
                            var ethe_emoji = "📉"
                            }

                            if(lite.change > 0){
                                var lite_emoji = "📈"
                            }
                                else{
                                var lite_emoji = "📉"
                                }

                                if(ripp.change > 0){
                                    var ripp_emoji = "📈"
                                }
                                    else{
                                    var ripp_emoji = "📉"
                                    }
                
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#FFFF00')
        .setTitle(`Last Updated: ${date.getHours()+`:`+date.getMinutes()+`:`+date.getSeconds()}`)

        .setDescription(`
        ➡ DogeCoin: ${doge.price} USD (Change: ${doge.change})${emoji}


➡ BitCoin: ${bit.price} USD (Change: ${bit.change}) ${bit_emoji}


➡ Ethereum: ${ethe.price} USD (Change: ${ethe.change}) ${ethe_emoji}


➡ Litecoin: ${lite.price} USD (Change: ${lite.change}) ${lite_emoji}


➡ Ripple XRP: ${ripp.price} USD (Change: ${ripp.change}) ${ripp_emoji}
            `)

        .setThumbnail('https://i.pinimg.com/originals/25/f4/93/25f4934fd36f553fef4d95a871c41f77.png')
            obj.edit(exampleEmbed)
            console.log()
    }
    aditya_bhaiyaa_gulabiDil();
}, 5000)//5000 miliseconds means it repeates entire process every 5 secs

})
});
    client.login(token);
