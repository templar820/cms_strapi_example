'use strict';

/**
 * my-collection service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::my-collection.my-collection');
