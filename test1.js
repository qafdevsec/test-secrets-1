require('dotenv').config();

module.exports = {
  app: {
    port: process.env.PORT,
    httpsPort: process.env.HTTPS_PORT,
    cacheServer: process.env.MEMCACHE_SERVER,
    cacheEnabled: process.env.ENABLE_CACHE === 'true',
    cacheTime: {
      oneDay: parseInt(process.env.CACHE_TIME_ONE_DAY || '86400', 10),
      minutes: parseInt(process.env.CACHE_TIME_MINUTES || '300', 10),
      streaming: parseInt(process.env.CACHE_TIME_STREAMING || '300', 10),
    },
    priceList: process.env.PRICE_LIST || '1-F9GL',
    region: process.env.REGION,
  },
  lineup: {
    bucket: process.env.S3_BUCKET_LINEUP,
    fileName: process.env.S3_FILENAME_LINEUP,
  },
  mongoDb: {
    url: process.env.MONGO_URI,
    dbName: process.env.MONGO_DATABASE,
    collections: {
      upgradeEquipmentRank: process.env.COLLECTION_UPGRADE_EQUIPMENT_RANK,
      catalogChannelServices: process.env.COLLECTION_CATALOG_CHANNEL_SERVICE,
    },
  },
  stripPrefix: {
    path: `/api/${process.env.SERVICE_NAME.replace(/-/g, '')}`,
    useRoutePrefix: Object.is(process.env.USE_ROUTE_PREFIX, 'true'),
  },
  redis: {
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_URL,
    hostRead: process.env.REDIS_URL_READ,
    useRedisCluster: Object.is(process.env.USE_REDIS_CLUSTER, 'true'),
    redisCluster: process.env.REDIS_CLUSTER,
    redisClusterPort: process.env.REDIS_CLUSTER_PORT,
  },
  rds: {
    user: process.env.NODE_ORACLEDB_USER || 'INS00057',
    password: process.env.NODE_ORACLEDB_PASSWORD || 'kahdTYF19',
    connectString: process.env.NODE_ORACLEDB_CONNECTIONSTRING
    || 'sdigcdev.cphhwifraiuq.sa-east-1.rds.amazonaws.com/SDIGCDEV',
    externalAuth: process.env.NODE_ORACLEDB_EXTERNALAUTH || false,
    poolMax: parseInt(process.env.MAX_POOL_RDS || '1', 10),
    poolTimeout: parseInt(process.env.POOL_TIMEOUT_RDS || '5', 10),
    poolQueueTimeout: parseInt(process.env.POOL_QUEUE_TIMEOUT_RDS || '5', 10) * 1000,
    poolPingInterval: parseInt(process.env.POOL_PING_INTERVAL || '5', 10),
    poolUVThreadPoolSize: process.env.UV_THREADPOOL_SIZE,
    poolCallTimeout: parseInt(process.env.POOL_CALL_TIMEOUT_RDS || '5', 10) * 1000,
    pga_aggregate_limit: 0,
  },
};
