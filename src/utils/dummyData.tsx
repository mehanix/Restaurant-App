import { RestaurantType } from "./types";

export const restaurants: RestaurantType[] = [
    {
        id: 1,
        name: 'test1',
        description: 'lorem ipsum set dolor.',
        address: 'Oras Test, Strada Test, nr. 13',
        presentationImageUrl: 'https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?b=1&k=20&m=1211547141&s=612x612&w=0&h=L4QZ_Ku1LttaUtarsEERWjJIExKiTYYKrNs3ZYH4q9k=',
        score: 3.65,
        reviews: [
            {
                id: 2,
                username: 'userTest1',
                postedOn: '10.10.2022',
                score: 4,
                title: 'It was Good',
                message: 'Test lorem ipsum',
                relevance: 5,
            },
            {
                id: 5,
                username: 'userTest2',
                postedOn: '15.03.2021',
                score: 3,
                title: 'It was OK',
                message: 'Test dolor set ipsum',
                relevance: -2,
            }
        ]
    },
    {
        id: 2,
        name: 'test22',
        description: 'Acesta este un restaurant de test.',
        address: 'Oras Test22, Strada Test23, nr. 674',
        presentationImageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/b8/46/6d/london-stock.jpg',
        score: 4.38,
        reviews: [
            {
                id: 5,
                username: 'userTest2',
                postedOn: '13.11.2021',
                score: 4,
                title: 'It was kinda good',
                message: 'Test lorem ipsum',
                relevance: 15,
            },
            {
                id: 8,
                username: 'userTest23',
                postedOn: '18.03.2021',
                score: 5,
                title: 'It was super good',
                message: 'Test 123 set ipsum',
                relevance: -5,
            },
            {
                id: 13,
                username: 'userTest123',
                postedOn: '18.03.2020',
                score: 1,
                title: 'It was NOT GOOD',
                message: 'Test dolor 444 ipsum',
                relevance: -15,
            }
        ]
    },
    {
        id: 3,
        name: 'Some Fancy Name',
        description: 'lorem ipsum set dolor.',
        address: 'Oras Comuna, Strada Sat, nr. 871',
        presentationImageUrl: 'https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?b=1&k=20&m=1211547141&s=612x612&w=0&h=L4QZ_Ku1LttaUtarsEERWjJIExKiTYYKrNs3ZYH4q9k=',
        score: 4.76,
        reviews: [
            {
                id: 2,
                username: 'userTest1',
                postedOn: '10.10.2022',
                score: 4,
                title: 'It was Good',
                message: 'Test lorem ipsum',
                relevance: 5,
            },
            {
                id: 5,
                username: 'userTest2',
                postedOn: '15.03.2021',
                score: 3,
                title: 'It was OK',
                message: 'Test dolor set ipsum',
                relevance: -2,
            }
        ]
    },
    {
        id: 4,
        name: 'Restaurantul Restaurant',
        description: 'Acesta este un restaurant de test.',
        address: 'Oras Oras, Sector Sector, Strada Strada, nr. 23674',
        presentationImageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/b8/46/6d/london-stock.jpg',
        score: 2.74,
        reviews: [
            {
                id: 5,
                username: 'userTest2',
                postedOn: '13.11.2021',
                score: 4,
                title: 'It was kinda good',
                message: 'Test lorem ipsum',
                relevance: 15,
            },
            {
                id: 8,
                username: 'userTest23',
                postedOn: '18.03.2021',
                score: 5,
                title: 'It was super good',
                message: 'Test 123 set ipsum',
                relevance: -5,
            },
            {
                id: 13,
                username: 'userTest123',
                postedOn: '18.03.2020',
                score: 1,
                title: 'It was NOT GOOD',
                message: 'Test dolor 444 ipsum',
                relevance: -15,
            }
        ]
    },
    {
        id: 5,
        name: 'test1123211233213',
        description: 'lorem ipsum set dolor.',
        address: 'Oras Test, Strada Test, nr. 13',
        presentationImageUrl: 'https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?b=1&k=20&m=1211547141&s=612x612&w=0&h=L4QZ_Ku1LttaUtarsEERWjJIExKiTYYKrNs3ZYH4q9k=',
        score: 1.25,
        reviews: [
            {
                id: 2,
                username: 'userTest1',
                postedOn: '10.10.2022',
                score: 4,
                title: 'It was Good',
                message: 'Test lorem ipsum',
                relevance: 5,
            },
            {
                id: 5,
                username: 'userTest2',
                postedOn: '15.03.2021',
                score: 3,
                title: 'It was OK',
                message: 'Test dolor set ipsum',
                relevance: -2,
            }
        ]
    },
    {
        id: 6,
        name: 't34esfffxxt22',
        description: 'Acesta este un restaurant de test.',
        address: 'Oras Test22, Strada Test23, nr. 674',
        presentationImageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/b8/46/6d/london-stock.jpg',
        score: 2.75,
        reviews: [
            {
                id: 5,
                username: 'userTest2',
                postedOn: '13.11.2021',
                score: 4,
                title: 'It was kinda good',
                message: 'Test lorem ipsum',
                relevance: 15,
            },
            {
                id: 8,
                username: 'userTest23',
                postedOn: '18.03.2021',
                score: 5,
                title: 'It was super good',
                message: 'Test 123 set ipsum',
                relevance: -5,
            },
            {
                id: 13,
                username: 'userTest123',
                postedOn: '18.03.2020',
                score: 1,
                title: 'It was NOT GOOD',
                message: 'Test dolor 444 ipsum',
                relevance: -15,
            }
        ]
    }
]