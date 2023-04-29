import React from 'react';
import Lottie from "lottie-react";
import { HiShoppingCart } from "react-icons/hi2";
import phoneAnimations from '../assets/phone-ani.json';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='grid grid-cols-2 mx-20 h-screen'>
            <div className='flex flex-col justify-center'>
                <h2 className='text-3xl font-semibold mb-2'>Welcome to Phone-Hunt</h2>
                <p className='text-justify mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto a quis accusantium facere illo fugit ipsum, possimus doloremque harum quam autem velit adipisci amet, itaque quia dolorum aliquam non. Nihil saepe non quo beatae enim odit optio voluptate distinctio ducimus sapiente. Qui alias, odio quibusdam nam cum ea eveniet.</p>
                <Link to='/stor'><button className="btn btn-active btn-primary hover:bg-red-600">View Stor <HiShoppingCart></HiShoppingCart></button></Link>
            </div>
            <div>
                <Lottie animationData={phoneAnimations} loop={true} />;
            </div>
        </div>
    );
};

export default Home;