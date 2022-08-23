export interface User{
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    avatar?: string;
    phone?: string;
    address?: string;
    city?: string;
    state?: string;
    zip?: string;
    verified: boolean;
    paid?:{
        ok:Boolean,
        features?: string
    }
    country?: string;
    companies: string[];
}