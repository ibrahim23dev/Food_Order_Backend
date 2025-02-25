import express, { Request, Response,NextFunction} from 'express';

const routes = express.Router();
// Middleware to handle CORS
routes.get('/', (req: Request, res: Response, next: NextFunction ) => {
   
    res.json({ message: 'Hello from the backend!' });
  });

  export { routes as vendorRoutes };