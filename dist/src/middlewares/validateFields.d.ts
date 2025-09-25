import type { NextFunction, Request, Response } from "express";
declare const validateFieldsRequest: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export { validateFieldsRequest };
//# sourceMappingURL=validateFields.d.ts.map