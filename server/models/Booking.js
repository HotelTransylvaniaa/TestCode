const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true

    },
    hotelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotels',
        required: true
    },
    roomId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    roomType: {
        type: String,
        required: true
    },
    PaymentPrice: {
        type: Number,
        required: true
    },
    BookingStartDate: {
        type: Date,
        required: true
    }
    ,
    BookingEndDate: {
        type: Date,
        required: true
    },
    numberOfNights: {
        type: Number,
        required: true
    },
    numberOfRooms: {
        type: Number,
        required: true
    }
    // payment: {
    //     type: {
    //         _id: false,
    //         paymentId: {
    //             type: mongoose.Types.ObjectId,
    //             auto: true,
    //             required: true,
    //             index: true
    //         },
    //         paymentType: {
    //             type: String,
    //             required: true
    //         },
    //         paymentCardNumber: {
    //             type: Number,
    //             required: true
    //         },
    //         paymentTime: {
    //             type: Date,
    //             required: true
    //         },
    //         paymentRef: {
    //             type: String
    //         }
    //     }
    // }
}, { timestamps: true })

const Booking = mongoose.model("BOOKING", bookingSchema);
module.exports = Booking;