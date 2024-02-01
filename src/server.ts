import app from "./app";
import AppDatasource from "./data-source";
import "dotenv/config";

const startServer = async () => {
    const PORT = process.env.PORT || 3000;

    await AppDatasource.initialize()
    .then(() => {
        console.log("Datasource initialized successfully!");
    })
    .catch((err: any) => {
        console.log("Data Source error!", err);
    })

    app.listen(PORT, () => console.log("The server is running!"))
}

startServer();
