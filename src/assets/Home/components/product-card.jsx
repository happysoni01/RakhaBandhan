import React, { useEffect } from "react";
import Product from "./product";

const ProductCard = ({ productCard, setProductCard, category }) => {

    let itemList = [{
        "image": "https://www.unusualgifts.in/wp-content/uploads/2016/07/Multi-colored-rakhi-with-traditional-design.jpg",
        "id": 1,
        "name": "Rakhi Design 01",
        "price": 99,
        "category": "Rakhi"
    },
    {
        "image": "https://www.bigbasket.com/media/uploads/p/l/40176685_3-shubh-rakhi-stylish-metal-assorted-colordesign.jpg",
        "id": 2,
        "name": "Rakhi Design 02",
        "price": 89,
        "category": "Rakhi"
    },
    {
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBe6qgdpkfl0ZBHv26-rMiPyQ5MQvh2ymIg&s",
        "id": 3,
        "name": "Rakhi Design 03",
        "price": 109,
        "category": "Rakhi"
    },
    {
        "image": "https://images.meesho.com/images/products/125251152/lsjqk_512.webp",
        "id": 4,
        "name": "Rakhi Design 04",
        "price": 49,
        "category": "Rakhi"
    },
    {
        "image": "https://catalog.sendrakhizonline.com/AR-11165.jpg",
        "id": 5,
        "name": "Rakhi Design 05",
        "price": 149,
        "category": "Rakhi"
    },
    {
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0n9r016qea6sJKOeWoJ4VvXxyZfkqgY6gtA&s",
        "id": 6,
        "name": "Handkerchief 001",
        "price": 49,
        "category": "Handkerchief"
    },
    {
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLM7o806_Cs3q2p7La_KeAm436kDO0g9mEtA&s",
        "id": 7,
        "name": "Handkerchief 002",
        "price": 55,
        "category": "Handkerchief"
    },
    {
        "image": "https://rukminim2.flixcart.com/image/850/1000/xif0q/handkerchief/x/s/u/boys-handkerchief-whiteline-06-pc-6-s06-mans-hnadkerchief-1-original-imaghwqa3dczfbnc.jpeg?q=90&crop=false",
        "id": 8,
        "name": "Handkerchief 003",
        "price": 60,
        "category": "Handkerchief"
    },
    {
        "image": "https://www.elegantextras.co.uk/contents/media/purple%20spotted%20handkerchief%20square.jpg",
        "id": 9,
        "name": "Handkerchief 004",
        "price": 65,
        "category": "Handkerchief"
    },
    {
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr1X3Y-ShcVwrPY6bkyfHeCuaoeMEWSg0tuw&s",
        "id": 10,
        "name": "Handkerchief 005",
        "price": 70,
        "category": "Handkerchief"
    },
    {
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT39_mffhe0iwnXH3g5k0PM7MgpEGg_WSFALg&s",
        "id": 11,
        "name": "Kaju Katli",
        "price": "400 per Kg",
        "category": "Sweets"
    },
    {
        "image": "https://www.ramasrey.com/wp-content/uploads/2018/08/Rasgulla.jpg",
        "id": 12,
        "name": "Rasgulla",
        "price": "300 per Kg",
        "category": "Sweets"
    },
    {
        "image": "https://5.imimg.com/data5/GLADMIN/Default/2022/7/YD/GQ/TN/86648/gulab-jamun-250x250.jpg",
        "id": 13,
        "name": "Gulab Jamun",
        "price": "350 per Kg",
        "category": "Sweets"
    },
    {
        "image": "https://tiimg.tistatic.com/fp/3/007/987/sweet-delicious-a-grade-square-khoya-sugar-plain-barfi-552.jpg",
        "id": 14,
        "name": "Barfi",
        "price": "450 per Kg",
        "category": "Sweets"
    },
    {
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk6pkcLLBYAM40Uwp0wiXsNSq-Yj44-kNNUEzGiRJATlRbum8a7w69F_kYy8nV8q-p5qU&usqp=CAU",
        "id": 15,
        "name": "Jalebi",
        "price": "250 per Kg",
        "category": "Sweets"
    }  
];

    useEffect(() => {
        const loadProduct = async () => {
            if (category === "All") {
                setProductCard(itemList);
            } else {
                setProductCard(itemList.filter(item => item.category === category));
            }
        };
        loadProduct();
    }, [category, setProductCard]);

    return (
        <div className="cards">
            {productCard.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductCard;


