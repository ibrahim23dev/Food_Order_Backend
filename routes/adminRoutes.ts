import express, {Request, Response, NextFunction} from 'express';
import { createVendors, getAllVendors, getVendorById } from '../controllers/adminController';
const router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json({ message: 'Hello from the backend!' });
});

// Middleware to handle CORS
router.post('/',  );
export { router as adminRoutes };