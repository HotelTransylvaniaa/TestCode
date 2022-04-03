const BOOKING = require("../models/Booking");

//find all
const find = () => {
    return BOOKING.find().populate("userId").populate("hotelId");
};

//find by userID
const findForUser = (id) => {
    console.log(id)
    const book= BOOKING.find({userId:id.id}).populate("hotelId");
    console.log(book);
    return BOOKING.find({userId:id.id}).populate("hotelId");
};

const findByid = (id) => {
    return BOOKING.findById(id.id).populate("hotelId").populate("userId");
};

const create = (body) => {
    console.log(body)
    return BOOKING.create(body);
};

const delOne = (id) => {
    //   User.find(title).remove().exec()
    return BOOKING.findByIdAndDelete(id.id);
};

const editOne = (id, body) => {
    return BOOKING.findByIdAndUpdate(id.id, body, { new: true });
};

module.exports = {
    create,
    find,
    delOne,
    editOne,
    findForUser,
    findByid
};