"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_cache_1 = __importDefault(require("node-cache"));
class Cache {
    constructor(ttl = 100, checkPeriod = 120) {
        this.myCache = new node_cache_1.default({ stdTTL: ttl, checkperiod: checkPeriod });
    }
    // Get the singleton instance
    static getInstance() {
        if (!Cache.instance) {
            Cache.instance = new Cache();
        }
        return Cache.instance;
    }
    // Method to set cache value
    set(key, value) {
        return this.myCache.set(key, value);
    }
    // Method to get all cache entries
    getAll() {
        const keys = this.myCache.keys(); // Get all keys
        const values = this.myCache.mget(keys); // Get values for all keys
        return values;
    }
    // Method to get cache value
    get(key) {
        return this.myCache.get(key) || null;
    }
    // Method to delete a cache key
    delete(key) {
        return this.myCache.del(key) > 0;
    }
    // Method to flush all cache
    flush() {
        this.myCache.flushAll();
    }
}
exports.default = Cache;
