import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg"
        ></img>

        <div className="home__row">
          <Product title="ASUS VA249HE Monitör 24 inch" 
          image="https://images-eu.ssl-images-amazon.com/images/G/41/TR-hq/2021/CE-SM/Evergreen/WirelessPC/XCM_Manual_1309837_1579939_TR_TR_DEALS_tr_gw_pc_single_category_card_2x_tr_tr_3702805_379x304_1X_tr_TR._SY304_CB659060736_.jpg"
           price="19.99" rating="3" />
          <Product title="Nestl Deep Pocket Split King Sheets: 5 Piece Split King Size Bed Sheets with Fitted Sheet" 
          image="https://images-na.ssl-images-amazon.com/images/I/81DS5W7EC-L._AC_SL1500_.jpg" 
          price="25.45" 
          rating="4"/>
        </div>
        <div className="home__row">
        <Product title="GOOACC 240PCS Bumper Retainer Clips Car Plastic Rivets Fasteners Push Retainer Kit Most Popular Sizes Auto Push Pin Rivets" 
        image="https://images-na.ssl-images-amazon.com/images/I/71lueAZq6AL._AC_SL1485_.jpg" 
        price="13.95" 
        rating="3"/>
        <Product 
        title="CeraVe AM Facial Moisturizing Lotion SPF 30" 
        image="https://images-na.ssl-images-amazon.com/images/I/617XrCx0ugL._SL1000_.jpg" 
        price="35.79" 
        rating="4"/>
        <Product 
        title="TruSkin Vitamin C Serum for Face, Topical Facial Serum with Hyaluronic Acid & Vitamin E, 1 fl oz" 
        image="https://images-na.ssl-images-amazon.com/images/I/61vTv7sVXaS._SL1500_.jpg" 
        price="5.66" 
        rating="4"/>
        </div>
        <div className="home__row">
        <Product 
        title="TOZO T6 True Wireless Earbuds Bluetooth Headphones Touch Control with Wireless Charging Case IPX8 Waterproof TWS Stereo Earphones in-Ear Built-in Mic" 
        image="https://images-na.ssl-images-amazon.com/images/I/71gtHnQGfQL._AC_SL1500_.jpg"
         price="25.99" 
         rating="4"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
