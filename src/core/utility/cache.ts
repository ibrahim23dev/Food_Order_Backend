import NodeCache from "node-cache";

class Cache {
  private static instance: Cache;
  private myCache: NodeCache;

  private constructor(ttl: number = 100, checkPeriod: number = 120) {
    this.myCache = new NodeCache({ stdTTL: ttl, checkperiod: checkPeriod });
  }

  // Get the singleton instance
  public static getInstance(): Cache {
    if (!Cache.instance) {
      Cache.instance = new Cache();
    }
    return Cache.instance;
  }

  // Method to set cache value
  public set<T>(key: string, value: T): boolean {
    return this.myCache.set(key, value);
  }

  // Method to get all cache entries
  public getAll(): Record<string, unknown> {
    const keys = this.myCache.keys(); // Get all keys
    const values = this.myCache.mget(keys); // Get values for all keys
    return values;
  }

  // Method to get cache value
  public get<T>(key: string): T | null {
    return this.myCache.get<T>(key) || null;
  }

  // Method to delete a cache key
  public delete(key: string): boolean {
    return this.myCache.del(key) > 0;
  }

  // Method to flush all cache
  public flush(): void {
    this.myCache.flushAll();
  }
}

export default Cache;
