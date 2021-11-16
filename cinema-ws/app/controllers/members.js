const axiosFactory = require('../data.access.logic/axios/axios.factory')

exports.updateMember = axiosFactory.update('http://localhost:7799/api/members/update/')
exports.deleteMember = axiosFactory.delete('http://localhost:7799/api/members/delete/')
exports.createMember = axiosFactory.post('http://localhost:7799/api/members/add_member')
exports.allMembers = axiosFactory.get('http://localhost:7799/api/members/all')

