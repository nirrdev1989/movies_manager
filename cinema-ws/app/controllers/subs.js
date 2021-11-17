const axiosFactory = require('../data.access.logic/axios/axios.factory')


exports.addSub = axiosFactory.post('http://localhost:7799/api/subs/add_sub/')