import Banner from '../components/Banner';
import Category from '../components/Category';

// import images
import img1 from '../assets/category/img1.png';
import img2 from '../assets/category/img2.png';
import img3 from '../assets/category/img3.png';

const Categories = () => {
  return (
    <>
          <Banner data={bannerData1} height={'380px'} />
          <Category data={categoryData} categoryName={'barchasi'} />
    </>
  );
}

export default Categories;

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
let categoryData = [
    {
        id: 1,
        name: 'PC ASUS',
        quantity: 238,
        img: img1,
    },
    {
        id: 2,
        name: 'Laptop ASUS',
        quantity: 238,
        img: img2,
    },
    {
        id: 3,
        name: 'Monitor ASUS',
        quantity: 238,
        img: img3,
    },
    {
        id: 4,
        name: 'PC ASUS',
        quantity: 238,
        img: img1,
    },
    {
        id: 5,
        name: 'Laptop ASUS',
        quantity: 238,
        img: img2,
    },
    {
        id: 6,
        name: 'Monitor ASUS',
        quantity: 238,
        img: img3,
    },
    {
        id: 7,
        name: 'PC ASUS',
        quantity: 238,
        img: img1,
    },
    {
        id: 8,
        name: 'Laptop ASUS',
        quantity: 238,
        img: img2,
    },
    {
        id: 9,
        name: 'Monitor ASUS',
        quantity: 238,
        img: img3,
    },
    {
        id: 10,
        name: 'PC ASUS',
        quantity: 238,
        img: img1,
    },
    {
        id: 11,
        name: 'Laptop ASUS',
        quantity: 238,
        img: img2,
    },
    {
        id: 12,
        name: 'Monitor ASUS',
        quantity: 238,
        img: img3,
    },
    {
        id: 13,
        name: 'PC ASUS',
        quantity: 238,
        img: img1,
    },
    {
        id: 14,
        name: 'Laptop ASUS',
        quantity: 238,
        img: img2,
    },
    {
        id: 15,
        name: 'Monitor ASUS',
        quantity: 238,
        img: img3,
    },
]
