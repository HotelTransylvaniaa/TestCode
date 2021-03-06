const mongoose = require("mongoose");

const hotelsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    address: {
        type: {
            _id: false,
            country: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            },
            street: {
                type: String,
                required: true
            },
            lan: {
                type: Number,
                required: true
            },
            lat: {
                type: Number,
                required: true
            }
        },
        required: true,
    },
    images: {
        type: [String],
        required: true
    },
    facilities: {
        type: {
            _id: false,
            languages: {
                type: {
                    _id: false,
                    English: {
                        type: Boolean,
                        required: true,
                    },
                    Arabic: {
                        type: Boolean,
                        required: true,
                    },
                    French: {
                        type: Boolean,
                        required: true,
                    },
                },
                required: true
            },
            services: {
                type: {
                    _id: false,
                    Cash_withdrawal: {
                        type: Boolean,
                        required: true,
                    },
                    Daily_housekeeping: {
                        type: Boolean,
                        required: true,
                    },
                    Dry_cleaning: {
                        type: Boolean,
                        required: true,
                    },
                    Salon: {
                        type: Boolean,
                        required: true,
                    },
                },
                required: true
            },
            relax: {
                type: {
                    _id: false,
                    tours: {
                        type: Boolean,
                        required: true
                    },
                    nightclub: {
                        type: Boolean,
                        required: true
                    },
                    sauna: {
                        type: Boolean,
                        required: true
                    },
                    spa: {
                        type: Boolean,
                        required: true
                    },
                },
                required: true
            },
            internet: {
                type: {
                    _id: false,
                    wifi_public: {
                        type: Boolean,
                        required: true
                    },
                    wifi_inrooms: {
                        type: Boolean,
                        required: true
                    },
                },
                required: true
            },
            access: {
                type: {
                    _id: false,
                    pets_allow: {
                        type: Boolean,
                        required: true
                    },
                    security: {
                        type: Boolean,
                        required: true
                    },
                    front_desk: {
                        type: Boolean,
                        required: true
                    },
                },
                required: true
            },
            for_kids: {
                type: {
                    _id: false,
                    kids_club: {
                        type: Boolean,
                        required: true
                    },
                    playground: {
                        type: Boolean,
                        required: true
                    },
                    swimmingpool: {
                        type: Boolean,
                        required: true
                    },
                },
                required: true
            },
            additional: {
                type: [String],
                required: true
            }
        },
        required: true
    },
    rooms: {
        type: [{
            _id: false,
            roomId: {
                type: mongoose.Types.ObjectId,
                auto: true,
                required: true,
                index: true
            },
            roomType: {
                type: String,
                required: true
            },
            count: {
                type: Number,
                required: true
            },
            capacity: {
                type: Number, //number
                required: true
            },
            images: {
                type: [String],
                required: true
            },
            pricePerNight: {
                type: Number,
                required: true
            },
            facilities: {
                type: {
                    _id: false,
                    internetAccess: {
                        type: Boolean,
                        required: true
                    },
                    washingMachine: {
                        type: Boolean,
                        required: true
                    },
                    kitchen: {
                        type: Boolean,
                        required: true
                    },
                    airConditioning: {
                        type: Boolean,
                        required: true
                    },
                    coffeeteaMaker: {
                        type: Boolean,
                        required: true
                    },
                    tv: {
                        type: Boolean,
                        required: true
                    },
                    bathtub: {
                        type: Boolean,
                        required: true
                    },
                    balcony: {
                        type: Boolean,
                        required: true
                    }
                },
                required: true
            },
            roomOffers: {
                type: {
                    _id: false,
                    breakfastIncluded: {
                        type: Boolean,
                        required: true
                    },
                    earlyCheckin: {
                        type: Boolean,
                        required: true
                    },
                    dinnerIncluded: {
                        type: Boolean,
                        required: true
                    }
                },
                required: true
            }
        }],
        required: true
    },
    contact: {
        type: {
            _id: false,
            phone: {
                type: [Number],
                required: true
            },
            email: {
                type: String,
                required: true
            }
        },
        required: true
    },
    postalCode: {
        type: Number,
        required: true
    }

}, { timestamps: true });


const HotelsModle = mongoose.model("Hotels", hotelsSchema);
module.exports = HotelsModle;