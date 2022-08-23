import { Schema, model, Document } from 'mongoose';
import { User as IUser } from '../typings/User';

interface UserModel extends IUser, Document { }

const User = model<UserModel>('User', new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    zip: {
        type: String,
    },
    country: {
        type: String,
    },
    paid: {
        ok: {
            type: Boolean,
            default: false
        },
        features: {
            type: String,
        }
    },
    verified: {
        type: Boolean,
        default: false
    },
    companies: [{
        type: Schema.Types.ObjectId,
        ref: 'Company'
    }],
}))

export default User;



