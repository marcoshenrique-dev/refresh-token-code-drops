import {Router} from 'express';
import { ensureAuthenticated } from './middleware/ensureAuthenticated';
import { AuthenticateUserController } from './useCases/authenticateUser/AuthenticateUserController';
import { CreateUserController } from './useCases/createUser/CreateUserController';
import { RefreshTokenUserController } from './useCases/refreshTokenUser/refreshTokenUserController';

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const refreshTokenUserController = new RefreshTokenUserController();

router.post('/users', createUserController.handle);
router.post('/login', authenticateUserController.handle);
router.post('/refresh-token', refreshTokenUserController.handle);

router.get('/courses', ensureAuthenticated, (request, response) => {
  return response.json([
    {id: 1, name: 'node'},
    {id: 2, name: 'react'},
    {id: 3, name: 'react-native'},
  ]);
});

export {router};