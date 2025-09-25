import LoginModel from "../models/login.model.js";
import labels from "../labels.js";
import bcrypt from "bcryptjs";
import getjwt from "../helpers/jwt.js";
const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await LoginModel.findOne({ username });
        if (!user) {
            return res.status(400).json({
                msg: labels.msg_400,
                response: labels.failed_login
            });
        }
        if (!user._status) {
            return res.status(400).json({
                msg: labels.msg_400,
                response: labels.failed_status
            });
        }
        const validPassword = bcrypt.compareSync(password, user._password);
        if (!validPassword) {
            return res.status(400).json({
                msg: labels.msg_400,
                response: labels.failed_login
            });
        }
        const token = await getjwt(String(user._id), user._role);
        res.status(200).json({
            msj: labels.msg_200,
            response: labels.ok_login + user._username,
            token,
            expires: 5600 // indica en segundos
        });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({
            msg: labels.msg_500,
            response: labels.failed_server_userlog
        });
    }
};
export default login;
//# sourceMappingURL=Login.Controller.js.map