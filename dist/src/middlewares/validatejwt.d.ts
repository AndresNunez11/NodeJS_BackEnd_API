import type { NextFunction, Request, Response } from "express";
declare const validatejwt: (roleToValidate?: string) => (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export default validatejwt;
//# sourceMappingURL=validatejwt.d.ts.map