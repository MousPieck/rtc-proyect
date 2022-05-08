import { NextFunction, Request, Response } from 'express';

import { validationResult } from 'express-validator';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const validazioneCampi = (req: Request, res: Response, next: NextFunction) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (err: any) {
    res.send({ errors: err.array() });
    return next();
  }
};

export { validazioneCampi };
