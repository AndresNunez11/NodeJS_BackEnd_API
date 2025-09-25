declare class Login {
    private username;
    private password;
    private role;
    private status;
    constructor(username: string, password: string, role: string, status: boolean);
    get _username(): string;
    get _password(): string;
    get _role(): string;
    get _status(): boolean;
    set _username(username: string);
    set _password(password: string);
    set _role(role: string);
    set _status(status: boolean);
}
declare const LoginModel: import("@typegoose/typegoose").ReturnModelType<typeof Login, import("@typegoose/typegoose/lib/types.js").BeAnObject>;
export default LoginModel;
//# sourceMappingURL=login.model.d.ts.map