const BOOKING = require("../models/Booking");

//find all
const find = () => {
    return BOOKING.find();
};

//find by userID
const findForUser = (id) => {
    return BOOKING.find({userId:id});
};

const create = (body) => {
    console.log(body)
    return BOOKING.create(body);
};

const delOne = (id) => {
    //   User.find(title).remove().exec()
    return BOOKING.findOneAndRemove(id.id);
};

const editOne = (id, body) => {
    return BOOKING.findByIdAndUpdate(id.id, body, { new: true });
};

module.exports = {
    create,
    find,
    delOne,
    editOne,
    findForUser
};