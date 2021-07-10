#!/usr/bin/env node

import dotenv = require('dotenv');

/**
 * initialize environmental configuration
 */
dotenv.config({ path: 'configs/' + process.env.ENV + '.env'})
dotenv.config({ path: 'configs/secret/' + process.env.ENV + '.env'})

console.log(process.env.IGDB_CLIENT_ID)


