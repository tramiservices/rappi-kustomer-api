import { Pool, PoolClient } from 'pg';
import { configuration } from '../../config';

/**
 * Db context
 */
export class DbContext {

    public pool: Pool;

    /**
     * Constructor of DbContext.
     */
    constructor() {
        this.pool = new Pool({
            user: configuration.database.user,
            host: configuration.database.host,
            database: configuration.database.name,
            password: configuration.database.password,
            port: parseInt(configuration.database.port as string)
        });
    }

    /**
     * Init pool connection
     */
    async init(): Promise<PoolClient> {
        return await this.pool.connect();
    }
}

export const db = new DbContext();
