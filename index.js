const connexion = require('./rabbit')
const mongoose = require('mongoose');
mongoose.connect('mongodb://' + process.env.MONGO_URL + '/message', { useMongoClient: true, promiseLibrary: global.Promise });
const Message = mongoose.model('Message', { content: String })

connexion().then(element => {
    const message = new Message({ content: "test" })
    console.log(element, message)
})