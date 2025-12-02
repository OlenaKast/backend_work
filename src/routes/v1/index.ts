import { Router } from 'express';

import auth from './auth';
import users from './users';
import author from './author';
import book from './book';

const router = Router();

router.use('/auth', auth);
router.use('/users', users);
router.use('/authors', author);
router.use('/books', book);
export default router;
