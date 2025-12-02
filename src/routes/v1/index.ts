import { Router } from 'express';

import auth from './auth';
import users from './users';
import author from './author';
import book from './book';
import genre from './genre';
import script from './script';

const router = Router();

router.use('/auth', auth);
router.use('/users', users);
router.use('/author', author);
router.use('/books', book);
router.use('/genre', genre);
router.use('/script', script);
export default router;
