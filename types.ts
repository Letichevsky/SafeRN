import { ParamListBase } from '@react-navigation/native';

export type StackParamList = {
    FirstPage: undefined;
    ContactPage: {
        contact: {
            id: string;
            name: string;
            username: string;
            email: string;
            address: {
                street: string;
                suite: string;
                city: string;
                zipcode: string;
                geo: {
                    lat: string;
                    lng: string;
                };
            };
            phone: string;
            website: string;
            company: {
                name: string;
                catchPhrase: string;
                bs: string;
            };
        };
    };
};