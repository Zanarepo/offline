// ✅ 1. src/dexieDB.js
import Dexie from 'dexie';

const dexieDB = new Dexie('sellytics_offline_db');

dexieDB.version(1).stores({
  dynamic_product: '++id, name, created_at, store_id',
  dynamic_sales: '++id, dynamic_product_id, sold_at',
  dynamic_inventory: '++id, dynamic_product_id, store_id',
});

export default dexieDB;
