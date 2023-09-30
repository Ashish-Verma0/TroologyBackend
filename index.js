const app = require("./app")
const startDatabase = require("./db/db")

const port=process.env.PORT || 80

const startServer=async()=>{
    try {
        await startDatabase()
        app.listen(port,()=>{
            console.log(`server is running on port : ${port}`)
        })
    } catch (error) {
       console.log(error) 
    }
}
startServer()