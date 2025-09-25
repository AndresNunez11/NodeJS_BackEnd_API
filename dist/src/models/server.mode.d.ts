declare class Server {
    private app;
    private port;
    private login_path;
    private user_path;
    private product_path;
    constructor();
    listen(): void;
    connect_db(): Promise<void>;
    routes(): void;
    middlewares(): void;
}
export default Server;
//# sourceMappingURL=server.mode.d.ts.map