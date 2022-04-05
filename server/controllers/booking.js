const BOOKING = require("../models/Booking");

//find all
const find = () => {
    return BOOKING.find().populate("userId").populate("hotelId");
};

//find by userID
const findForUser = (id) => {
    console.log(id)
    return BOOKING.find({userId:id.id}).populate("hotelId");
};

const findUserBooking = (id) => {
    console.log(id)
    return BOOKING.find({userId:id}).populate("hotelId").populate("userId");
};
const findByid = (id) => {
    return BOOKING.findById(id.id).populate("hotelId").populate("userId");
};

const create = (body) => {
    console.log(body)
    return BOOKING.create(body);
};

const delOne = (id) => {
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
    findByid,
    findUserBooking
};