import { injectable } from 'inversify';
import { Pool } from 'pg';
import { db } from '../dbcontext/db.context';
import { IBaseRepository } from './ibase.repository';

/**
 * Injectable base repository
 * @template T 
 */
@injectable()
export abstract class BaseRepository<T> implements IBaseRepository<T> {

    private pool: Pool;

    
    /**
     * Constructor of BaseRepository class
     * @description constructor with arguments to manipulate postgreSQL operations
     */
    constructor() {
        this.pool = db.pool;
    }

    /**
     * Gets all
     * @param queryText 
     * @returns all 
     */
    async getAll(queryText: string): Promise<T[]> {
        const result = await this.pool.query(queryText);
        const items = result.rows as T[];
        return items;
    }

    /**
     * Gets by id
     * @param id 
     * @returns by id 
     */
    async getById(queryText: string, id: number): Promise<T> {
        const result = await this.pool.query(queryText,Array(id.toString()));
        const items = result.rows[0] as T;
        return items;
    }

    /**
     * Posts base repository
     * @param item 
     * @returns post 
     */
    async post(queryText: string, values: string[]): Promise<T> {
        const result = await this.pool.query(queryText,values);
        const items = result.rows[0] as T;
        return items;
    }

    /**
     * Puts base repository
     * @param id 
     * @param item 
     * @returns put 
     */
    async put(queryText: string, values: string[]): Promise<T> {
        const result = await this.pool.query(queryText,values);
        const items = result.rows[0] as T;
        return items;
    }
}