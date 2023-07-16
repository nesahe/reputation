import { Request, Response, NextFunction } from 'express'
import ApiError from '../../exceptions/ApiError';

import { logger } from '../../helpers/logging';

export const errorMiddleware = (err: ApiError, req: Request, res: Response, next: NextFunction) => {

    if (err instanceof ApiError) {
        logger.error({ message: err.message });
        return res.status(err.status).json({ message: err.message });
    }

    return res.status(500).json({ message: 'Unexpected error' });
}