<<<<<<< HEAD
import { Router } from 'express';
import { healthcheck } from "../controllers/healthcheck.controller.js"

const router = Router();

router.route('/').get(healthcheck);

=======
import { Router } from 'express';
import { healthcheck } from "../controllers/healthcheck.controller.js"

const router = Router();

router.route('/').get(healthcheck);

>>>>>>> 47cae4dbc7b0844ad6530116707cdb3a99d6aa8d
export default router