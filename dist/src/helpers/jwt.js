import jwt from 'jsonwebtoken';
import labels from '../labels.js';
const getjwt = (uid, role) => {
    try {
        return new Promise((resolve, reject) => {
            const payload = { uid, role };
            jwt.sign(payload, process.env.secret_key || '', {
                expiresIn: '5h'
            }, (error, token) => {
                if (error) {
                    console.error(error);
                    reject(labels.failed_token);
                }
                else {
                    resolve(token);
                }
            });
        });
    }
    catch (e) {
        console.error(e);
        throw new Error(labels.Error);
    }
};
export default getjwt;
//# sourceMappingURL=jwt.js.map