import { theme } from "./src/styles/styles";

export const mock = {
    login: {
        email: "test@test.com",
        password: "12345678"
    },
    userInfo: {
        email: "test@test.com",
        firstName: "Jonh",
        lastName: "Cena",
        isOver18: true,
    },
    account: {
        portifolio: "1245.23",
        bankAccount: "1457.23",
        increaseByPorcent: "37"
    },

    funds: [
         {
            name:"Wind Fund",
            acronym: "WDF",
            price: "1032.23",
            year:"2022",
            increaseByPorcent: "3.51",
            AUM: "4300000",
            issueDate: "13/05/2023",
            vintageRange: "2019-2022",
            TER: "0.15",
            priceAtClose: "17.48",
            priceAtOpen: "17.44",
            credits:"12",
            lastPurchase: "1d ago",
            charts: {
                labels: [],
                datasets: [
                {
                    data: [32, 77, 75, 22, 49, 11, 8,4,32,68,11],
                    color: (opacity = 1) => theme.colors.colorPrimary, // optional
                    strokeWidth: 3 // optional
                }
                ],
                legend: ["Rainy Days"] // optional
            }
        },
        {
            name:"Solar Fund",
            year:"2024",
            acronym: "SAL",
            price: "986.61",
            increaseByPorcent: "0.13",
            AUM: "6420000",
            issueDate: "13/05/2023",
            vintageRange: "2019-2022",
            TER: "0.89",
            priceAtClose: "6.48",
            priceAtOpen: "4.44",
            credits:"55",
            lastPurchase: "6d ago",
            charts: {
                labels: [],
                datasets: [
                {
                    data: [32, 54, 54, 34, 49, 43, 8,4,23,55,67],
                    color: (opacity = 1) => theme.colors.darkGrey, // optional
                    strokeWidth: 3 // optional
                }
                ],
                legend: ["Rainy Days"] // optional
            }
        },
        {
            name:"Natural Fund",
            year:"2012",
            acronym: "NTL",
            price: "1122.95",
            increaseByPorcent: "0.15",
            AUM: "320000",
            issueDate: "13/10/2023",
            vintageRange: "2019-2022",
            TER: "0.43",
            priceAtClose: "29.48",
            priceAtOpen: "32.44",
            credits:"30",
            lastPurchase: "29d ago",
            charts: {
                labels: [],
                datasets: [
                {
                    data: [32, 23, 12, 34, 99, 43, 8,77,35,90,33],
                    color: (opacity = 1) => theme.colors.orange, // optional
                    strokeWidth: 3 // optional
                }
                ],
                legend: ["Rainy Days"] // optional
            }
            
        }
    ],

    faq: [
        "Why should you invest here?",
        "How become a millionaire?",
        "How convert Dolar in to Real?"
    ]
}