import Express, { Application } from "express";
import { configuration } from './config';
import * as bodyParser from "body-parser";
import { Logger } from "./helpers/logger";
import { Dino } from 'dinoloop';
import { UserController } from "./controllers/user/user.controller";
import { Container } from "inversify";
import { AppContainer } from "./container/app.container";
import { JsonResponse } from "./config/middlewares/json.response";
import { AuthController } from "./controllers/auth/auth.controller";
import { JwtAuthentication } from "./config/middlewares/jwt.authentication";
import { serve, setup} from 'swagger-ui-express';
import * as swaggerDoc from './swagger.json'
import { Enums } from "./config/messages/enums";

/**
 * App
 */
class App {

    public app: Application;
    public PORT = configuration.nodePort || 3300;
    public dino: Dino;

    /**
     * Constructor to App class
     */
    constructor() {
        this.app = Express();
        this.applyMiddlewares();
        this.dino = new Dino(this.app, Enums.API_BASE);
    }

    /**
     * Starts app
     */
    start() {
        this.configureDinoloop();
        this.app.listen(this.PORT, async () => {
            Logger.log(`${Enums.SERVER_RUNNING} ${this.PORT}`);
        });
    }

    /**
     * Applys middlewares
     */
    applyMiddlewares(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.set(Enums.API_KEY,configuration.apiKey);
        this.app.use(Enums.SWAGGER_BASE, serve, setup(swaggerDoc));
    }

    /**
     * Configures dinoloop
     */
    configureDinoloop(): void {
        this.dino.useRouter(() => Express.Router());
        this.dino.registerController(UserController);
        this.dino.registerController(AuthController);
        this.dino.requestStart(JwtAuthentication);
        this.dino.requestEnd(JsonResponse);
        this.dino.dependencyResolver<Container>(AppContainer,
            (injector, type) => {
                return injector.resolve(type);
            });
        this.dino.bind();
    }

}

export const app = new App();