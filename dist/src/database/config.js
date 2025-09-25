import { connect } from "mongoose";
const db_connect = async () => {
    try {
        //await connect(process.env.conection_DB_MongoDB || "")
        await connect(process.env.conection_DB_Cloud_MongoDB || "");
    }
    catch (e) {
        console.log(e);
    }
};
export default db_connect;
//# sourceMappingURL=config.js.map