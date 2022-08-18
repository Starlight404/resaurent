import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"

dotenv.config()

const MongoClient = mongodb.MongoClient
const port = process.env.PORT || 8000

const uri = "mongodb+srv://starlight404: mern123@project.ichqunk.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
client.connect()

.catch(err => {
    console.error(err.stack)
    process.exit(1)
})
.then(async client => {
    app.listen(port, () =>{
        console.log(`listening on port ${port}`)
    })
})