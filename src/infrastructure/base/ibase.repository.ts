import { injectable } from "inversify";

/**
 * Injectable
 * @template T 
 */
@injectable()
export abstract class IBaseRepository<T> {
  abstract getAll(queryText: string): Promise<T[]>;
  abstract getById(queryText: string, id: number): Promise<T>;
  abstract post(queryText: string, values: string[]): Promise<T>;
  abstract put(queryText: string, values: string[]): Promise<T>;
}