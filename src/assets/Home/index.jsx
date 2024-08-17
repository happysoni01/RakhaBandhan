import { useState } from "react";
import React from "react";
import axios from 'axios';
import CustomCategories from "./components/category";
import ProductCard from "./components/product-card";
import '../style/home.css'

const rakshaBandhanWishes = [
    "May our bond of love grow stronger with each passing year. Happy Raksha Bandhan!",
    "Wishing you a Raksha Bandhan filled with joy, laughter, and countless blessings. Let's cherish our bond forever.",
    "On this special day, I wish us both a life filled with love, support, and endless understanding. Happy Raksha Bandhan!",
    "On this Raksha Bandhan, I promise to always stand by your side. Here's to our lifetime of togetherness and love!",
    "May this Rakhi bring us even closer and strengthen our bond. Happy Raksha Bandhan, with all my love!",
    "May this Raksha Bandhan bring happiness and prosperity into our lives. Wishing you a joyful celebration!",
    "Celebrating the beautiful bond that we share. May it always be filled with love and understanding. Happy Raksha Bandhan!",
    "On this Raksha Bandhan, let's celebrate the connection that makes us stronger together. Wishing you a wonderful day!",
    "May the love we share continue to grow and bring us closer. Happy Raksha Bandhan!",
    "Sending you warm wishes and a big hug on this special day. Happy Raksha Bandhan!",
    "May the spirit of Raksha Bandhan always keep us united and strong. Wishing you a happy and blessed day!"
  ];

const Home=()=>{
    const [name, setName] = useState("");
    const [productCard,setProductCard] = useState([])
    const [category,setCategory] = useState('all')
    const [categories, setCategories] = useState(['Select Category','All', 'Rakhi', 'Handkerchief', 'Sweets']);
    const [generatedWish, setGeneratedWish] = useState("< Custom wish here >");

    const onNameChange = (e) => {
        setName(e.target.value);
      }

      const saveTaskToSheet = (name) => {
        const data = { name };
        axios.post('https://sheet2api.com/v1/eFXi0bePQuqk/todo', data)
          .then(response => {
            console.log('Data saved successfully:', response);
          })
          .catch(error => {
            if (error.response) {
              console.error('Error response from server:', error.response.data);
            } else if (error.request) {
              console.error('No response received:', error.request);
            } else {
              console.error('Error in setting up request:', error.message);
            }
            console.error('Error details:', error.config);
          });
      };

      const getRandomWish = () => {
        const randomIndex = Math.floor(Math.random() * rakshaBandhanWishes.length);
        return rakshaBandhanWishes[randomIndex];
      };
      const wish = getRandomWish();

      const onSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) {
          alert("Please enter your name.");
          return;
        } 
        else {
            setGeneratedWish(`${wish} - From ${name}`);
          saveTaskToSheet(name);
        }
      };


    return <div className="container">

        <section className="intro">
        <h1>Welcome to Hop Store</h1>
        <div className="random-wish">
            <p>Hey there ! Firstly let's create a random Raksha Bandhan wish for your sibling</p>
            <input onChange={onNameChange} value={name} type="text" placeholder="Enter Your Name" required/>
            <button onClick={onSubmit} type="submit" className="btn">Create Wish</button>
            <div className="generated-wish">
            {generatedWish}
          </div>
        </div>
        </section>


        <section className="category">
                <CustomCategories initialCategories={categories} onCategoryChange={setCategory} />
            </section>


         <section className="products">
            <ProductCard productCard={productCard} setProductCard={setProductCard} category={category}/>
        </section>



        <section className="footer">
            <h2>Happy Raksha Bandhan - From Happy</h2>
        </section>
    </div>
}
export default Home;