import mongoose from "mongoose";

const cosmeticScheme = mongoose.Schema(
    {
        item: {
            type: String,
            required: true,
        },
        skinType: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        availableItem: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Cosmetic = mongoose.model('Skin_Care', cosmeticScheme);