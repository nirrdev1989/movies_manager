const { getAll, createOne, deleteOne, updateOne } = require("../../../cinema-ws/app/data.access.logic/db/factory")
const { MemberModel } = require("../db/models/members")


exports.allMembers = getAll(MemberModel)
exports.createMember = createOne(MemberModel)
exports.deleteMember = deleteOne(MemberModel)
exports.updateMember = updateOne(MemberModel)