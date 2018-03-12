#!/usr/bin/env node
const Conf = require('conf');
const helpers = require('./helpers.js');
const cash = require('./cash.js');

const config = new Conf();
const argv = process.argv.slice(2);


helpers(argv);


/** 
	*@namespace 
  */
const command = {
    /** The amount to convert. The default value is 1
    */

    'amount': argv[0] || 1,
    /** The starting currencie. The default value is USD
    */

    'from': argv[1] || config.get('defaultFrom', 'USD'),
    /**The arrival currencie. The default values are : USD, EUR, GBP, PLN
	*/
    'to':
    argv.length > 2
        ? process.argv.slice(4)
        : config.get('defaultTo', ['USD', 'EUR', 'GBP', 'PLN'])

};

cash(command);
