import { Invoice } from "../models/invoice";

export const invoiceData: Invoice = {
    id: 1,
    name: 'Componentes de PC',
    client: {
        name: 'Marcos',
        lastname: 'Sánchez',
        address: {
            country: 'México',
            city: 'Chilapa',
            street: '18 sur Avn Insurgentes',
            number: 15
        },
        company: {
            name: 'Softura Solutions',
            fiscalNumber: 3123123,
        },
        items: [
            {
                id: 1,
                product: 'Cpu intel i9',
                price: 2500,
                quantity: 1
            },
            {
                id: 2,
                product: 'Corsair Telclado Mecanico',
                price: 1000,
                quantity: 2
            },
            {
                id: 3,
                product: 'Mouse Corsair',
                price: 500,
                quantity: 10
            }
        ]
    }
}
