import Banner from '../components/Banner';


// import images
import img from '../assets/catalog/img.png';
import Catalog from '../components/Catalog';


const Home = () => {
  return (
    <>
        <Banner data={bannerData1} height={'380px'} />
        <Catalog data={catalogData}/>
        <Banner data={bannerData2} height={'240px'} />
        <Catalog data={catalogData2}/>
        <Banner data={bannerData2} height={'240px'} />
    </>
  );
}

export default Home;


let bannerData1 = [
    {
        id: 1,
        category_id: 1,
        title: "Lorem ipsum dolor sit.",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        preview: "https://cdn.pixabay.com/photo/2016/09/22/10/44/banner-1686943_960_720.jpg"
    },
    {
        id: 2,
        category_id: 1,
        title: "Lorem ipsum dolor sit.",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        preview: "https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_960_720.png"
    },
];

let bannerData2 = [
    {
        id: 1,
        category_id: 1,
        title: "Lorem ipsum dolor sit.",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        preview: "https://cdn.pixabay.com/photo/2022/05/10/09/33/floral-7186550__340.png"
    },
    {
        id: 2,
        category_id: 1,
        title: "Lorem ipsum dolor sit.",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        preview: "https://cdn.pixabay.com/photo/2022/06/28/06/09/geometric-7288900__340.png"
    },
];


let catalogData ={
    id: 1,
    title: "Eng ko'p sotilgan",
    products: [
        {
            id: 1,
            name: "Apple Airpods Pro simsiz quloqchin, Oq rangda",
            brand: {
                id: 1,
                name: "Apple",
                description: "Apple chotki kompaniya"
            },
            categories: [
                {
                    id: 1,
                    name: "Laptop"
                },
                {
                    id: 2,
                    name: "Gaming"
                }
            ],
            tags: [
                {
                    id: 1,
                    name: 'new'
                }
            ],
            variants: [
                {
                    id: 1,
                    product_id: 1,
                    available: true,
                    annotation: "Apple Airpods Pro simsiz quloqchin",
                    img: img,
                    color: "white",
                    modifications: [
                        {
                            id: 1,
                            variant_id: 1,
                            size: 32,
                            available: true,
                            price: 3000,
                            price_old: 4000,
                            quantity: 5
                        }
                    ]
                }

            ]
        },
        {
            id: 2,
            name: "Apple Airpods Pro simsiz quloqchin, Oq rangda",
            brand: {
                id: 1,
                name: "Apple",
                description: "Apple chotki kompaniya"
            },
            categories: [
                {
                    id: 1,
                    name: "Laptop"
                },
                {
                    id: 2,
                    name: "Gaming"
                }
            ],
            variants: [
                {
                    id: 1,
                    product_id: 1,
                    available: true,
                    annotation: "Apple Airpods Pro simsiz quloqchin",
                    img: img,
                    color: "white",
                    modifications: [
                        {
                            id: 1,
                            variant_id: 1,
                            size: 32,
                            available: true,
                            price: 3000,
                            price_old: 4000,
                            quantity: 5
                        }
                    ]
                }

            ]
        },
        {
            id: 3,
            name: "Apple Airpods Pro simsiz quloqchin, Oq rangda",
            brand: {
                id: 1,
                name: "Apple",
                description: "Apple chotki kompaniya"
            },
            categories: [
                {
                    id: 1,
                    name: "Laptop"
                },
                {
                    id: 2,
                    name: "Gaming"
                }
            ],
            variants: [
                {
                    id: 1,
                    product_id: 1,
                    available: true,
                    annotation: "Apple Airpods Pro simsiz quloqchin",
                    img: img,
                    color: "white",
                    modifications: [
                        {
                            id: 1,
                            variant_id: 1,
                            size: 32,
                            available: true,
                            price: 3000,
                            price_old: 4000,
                            quantity: 5
                        }
                    ]
                }

            ]
        },
        {
            id: 4,
            name: "Apple Airpods Pro simsiz quloqchin, Oq rangda",
            brand: {
                id: 1,
                name: "Apple",
                description: "Apple chotki kompaniya"
            },
            categories: [
                {
                    id: 1,
                    name: "Laptop"
                },
                {
                    id: 2,
                    name: "Gaming"
                }
            ],
            variants: [
                {
                    id: 1,
                    product_id: 1,
                    available: true,
                    annotation: "Apple Airpods Pro simsiz quloqchin",
                    img: img,
                    color: "white",
                    modifications: [
                        {
                            id: 1,
                            variant_id: 1,
                            size: 32,
                            available: true,
                            price: 3000,
                            price_old: 4000,
                            quantity: 5
                        }
                    ]
                }

            ]
        },
        {
            id: 5,
            name: "Apple Airpods Pro simsiz quloqchin, Oq rangda",
            brand: {
                id: 1,
                name: "Apple",
                description: "Apple chotki kompaniya"
            },
            categories: [
                {
                    id: 1,
                    name: "Laptop"
                },
                {
                    id: 2,
                    name: "Gaming"
                }
            ],
            tags: [
                {
                    id: 1,
                    name: 'top'
                }
            ],
            variants: [
                {
                    id: 1,
                    product_id: 1,
                    available: true,
                    annotation: "Apple Airpods Pro simsiz quloqchin",
                    img: img,
                    color: "white",
                    modifications: [
                        {
                            id: 1,
                            variant_id: 1,
                            size: 32,
                            available: true,
                            price: 3000,
                            price_old: 4000,
                            quantity: 5
                        }
                    ]
                }

            ]
        },
    ]
}
let catalogData2 ={
    id: 1,
    title: "Eng Ommabop",
    products: [
        {
            id: 1,
            name: "Apple Airpods Pro simsiz quloqchin, Oq rangda",
            brand: {
                id: 1,
                name: "Apple",
                description: "Apple chotki kompaniya"
            },
            categories: [
                {
                    id: 1,
                    name: "Laptop"
                },
                {
                    id: 2,
                    name: "Gaming"
                }
            ],
            variants: [
                {
                    id: 1,
                    product_id: 1,
                    available: true,
                    annotation: "Apple Airpods Pro simsiz quloqchin",
                    img: img,
                    color: "white",
                    modifications: [
                        {
                            id: 1,
                            variant_id: 1,
                            size: 32,
                            available: true,
                            price: 3000,
                            price_old: 4000,
                            quantity: 5
                        }
                    ]
                }

            ]
        },
        {
            id: 2,
            name: "Apple Airpods Pro simsiz quloqchin, Oq rangda",
            brand: {
                id: 1,
                name: "Apple",
                description: "Apple chotki kompaniya"
            },
            categories: [
                {
                    id: 1,
                    name: "Laptop"
                },
                {
                    id: 2,
                    name: "Gaming"
                }
            ],
            variants: [
                {
                    id: 1,
                    product_id: 1,
                    available: true,
                    annotation: "Apple Airpods Pro simsiz quloqchin",
                    img: img,
                    color: "white",
                    modifications: [
                        {
                            id: 1,
                            variant_id: 1,
                            size: 32,
                            available: true,
                            price: 3000,
                            price_old: 4000,
                            quantity: 5
                        }
                    ]
                }

            ]
        },
        {
            id: 3,
            name: "Apple Airpods Pro simsiz quloqchin, Oq rangda",
            brand: {
                id: 1,
                name: "Apple",
                description: "Apple chotki kompaniya"
            },
            categories: [
                {
                    id: 1,
                    name: "Laptop"
                },
                {
                    id: 2,
                    name: "Gaming"
                }
            ],
            variants: [
                {
                    id: 1,
                    product_id: 1,
                    available: true,
                    annotation: "Apple Airpods Pro simsiz quloqchin",
                    img: img,
                    color: "white",
                    modifications: [
                        {
                            id: 1,
                            variant_id: 1,
                            size: 32,
                            available: true,
                            price: 3000,
                            price_old: 4000,
                            quantity: 5
                        }
                    ]
                }

            ]
        },
        {
            id: 4,
            name: "Apple Airpods Pro simsiz quloqchin, Oq rangda",
            brand: {
                id: 1,
                name: "Apple",
                description: "Apple chotki kompaniya"
            },
            categories: [
                {
                    id: 1,
                    name: "Laptop"
                },
                {
                    id: 2,
                    name: "Gaming"
                }
            ],
            variants: [
                {
                    id: 1,
                    product_id: 1,
                    available: true,
                    annotation: "Apple Airpods Pro simsiz quloqchin",
                    img: img,
                    color: "white",
                    modifications: [
                        {
                            id: 1,
                            variant_id: 1,
                            size: 32,
                            available: true,
                            price: 3000,
                            price_old: 4000,
                            quantity: 5
                        }
                    ]
                }

            ]
        },
        {
            id: 5,
            name: "Apple Airpods Pro simsiz quloqchin, Oq rangda",
            brand: {
                id: 1,
                name: "Apple",
                description: "Apple chotki kompaniya"
            },
            categories: [
                {
                    id: 1,
                    name: "Laptop"
                },
                {
                    id: 2,
                    name: "Gaming"
                }
            ],
            variants: [
                {
                    id: 1,
                    product_id: 1,
                    available: true,
                    annotation: "Apple Airpods Pro simsiz quloqchin",
                    img: img,
                    color: "white",
                    modifications: [
                        {
                            id: 1,
                            variant_id: 1,
                            size: 32,
                            available: true,
                            price: 3000,
                            price_old: 4000,
                            quantity: 5
                        }
                    ]
                }

            ]
        },
    ]
}
