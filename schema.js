const mongoose = require("mongoose")
// const Data=require('./data.json')
const Schema = mongoose.Schema
mongoose.connect( 'mongodb://localhost:27017/ClientsDB', { useNewUrlParser: true } )



const ClientSchema = new Schema({
    // _id: String,
      name: String,
      email: String,
      firstContact: String,
      emailType: String,
      sold: Boolean,
      owner: String,
      country: String
})


const Client = mongoose.model("Client", ClientSchema)

module.exports = Client

// for (let c of Data){
//     let client=new Client({
//         _id: c._id,
//       name: c.name,
//       email: c.email,
//       firstContact: c.firstContact,
//       emailType: c.emailType,
//       sold: c.sold,
//       owner: c.owner,
//       country: c.country
//     })
//     client.save()
// }
