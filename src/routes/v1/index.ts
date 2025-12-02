import { Router } from 'express';

import author from './author';
import book from './book';
import genre from './genre';
import script from './script';
import review from './review';
import scriptEmployee from './scriptEmployee';
import order from './order';
import user from './user';
import employee from './employee';
const router = Router();

router.use('/author', author);
router.use('/book', book);
router.use('/genre', genre);
router.use('/script', script);
router.use('/review', review);
router.use('/script_employee', scriptEmployee);
router.use('/order', order);
router.use('/user', user);
router.use('/employee', employee);
export default router;
