
import mongoose from "mongoose";
import config from "./config/config";
import app from "./app";




async function server() {

    try {



        await mongoose.connect(config.database_url!)

        console.log(`Connected to database`);

        app.listen(config.port, () => {
            console.log(`server running`);

        })

    }
    catch (error) {
        console.error(`server error ${error}`);

    }
}

server();