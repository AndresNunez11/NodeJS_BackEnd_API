import login from "../models/login.model.js";
import bcrypt from "bcryptjs";
import labels from "../labels.js";
export const createUser = async (req, res) => {
    try {
        const { username, password, role } = req.body;
        const user = new login({ username, password, role });
        const salt = bcrypt.genSaltSync();
        user._password = bcrypt.hashSync(password, salt);
        await user.save();
        res.status(201).json({
            msg: labels.msg_201,
            response: labels.Succesfull_register,
            username: user._username
        });
    }
    catch (e) {
        console.error(e);
        res.status(500).json({
            msg: labels.msg_500,
            response: labels.failed_server_usercreate
        });
    }
};
//# sourceMappingURL=user.Controller.js.map