// import inverisfy decorate statements
import './inversify.decorate';
import { Container } from 'inversify';
import { UserController } from '../controllers/user/user.controller';
import { UserDomain } from '../domain/user/user.domain';
import { IUserDomain } from '../domain/user/iuser.domain';
import { UserRepository } from '../infrastructure/user/user.repository';
import { IUserRepository } from '../infrastructure/user/iuser.repository';
import { IUserHelper } from '../domain/user/helper/iuser.helper';
import { UserHelper } from '../domain/user/helper/user.helper';
import { JsonResponse } from '../config/middlewares/json.response';
import { AuthDomain } from '../domain/auth/auth.domain';
import { IAuthDomain } from '../domain/auth/iauth.domain';
import { IAuthRepository } from '../infrastructure/auth/iauth.repository';
import { AuthRepository } from '../infrastructure/auth/auth.repository';
import { AuthController } from '../controllers/auth/auth.controller';
import { JwtAuthentication } from '../config/middlewares/jwt.authentication';

let container = new Container();
container.bind(IUserDomain).to(UserDomain);
container.bind(IUserRepository).to(UserRepository);
container.bind(IAuthDomain).to(AuthDomain);
container.bind(IAuthRepository).to(AuthRepository);
container.bind(IUserHelper).to(UserHelper);
container.bind(UserController).toSelf();
container.bind(AuthController).toSelf();
container.bind(JsonResponse).toSelf();
container.bind(JwtAuthentication).toSelf();

export { container as AppContainer };