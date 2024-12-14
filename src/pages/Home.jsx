import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';

const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    
    async function fetchProductDate(){
        setLoading(true);

        try{
            const res = await fetch(API_URL);
            const data = await res.json();

            setPosts(data);
        }
        catch(error){
            console.log("Error");
            setPosts([]);

        }
        setLoading(false);
    }
    useEffect( () => {
        fetchProductDate();
    },[])
  return (
    <div>
    {
        loading ? <Spinner/> :
        posts.length > 0 ?
        (<div>
            {
                posts.map((post) => (
                    <Product key={post.id} post={post}/>
                ))
            }
            </div>):
        <div>
            <p>
                NO DATA FOUND
            </p>
        </div>
    }
    </div>
  )
}

export default Home