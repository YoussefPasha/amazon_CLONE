import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
          alt="AmazonBAr"
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/31PTviHMeUL._AC_US240_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="NATIVE UNION Night Cable USB-A to Lightning - 10ft Ultra-Strong Durable Lightning to USB Charging Cable"
            price={39.99}
            image="https://m.media-amazon.com/images/I/817eHlLr-YL._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung 860 EVO 500GB 2.5 Inch SATA III Internal SSD (MZ-76E500B/AM)"
            price={71.99}
            image="https://m.media-amazon.com/images/I/814poe+IDsL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="23445930"
            title="Acer Predator Helios 300 Gaming Laptop, Intel i7-10750H, NVIDIA GeForce RTX 2060 6GB, 15.6 Full HD 144Hz 3ms IPS Display, 16GB Dual-Channel DDR4, 512GB NVMe SSD, Wi-Fi 6, RGB Keyboard, PH315-53-72XD"
            price={1178}
            image="https://m.media-amazon.com/images/I/71k45hZkLmL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="3254354345"
            title="APC UPS, 1500VA UPS Battery Backup & Surge Protector, BX1500M Backup Battery, AVR, Dataline Protection and LCD Display, Back-UPS Pro Uninterruptible Power Supply"
            price={164.99}
            image="https://m.media-amazon.com/images/I/81lgJ++wufL._AC_UY327_QL65_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung 34-Inch CJ791 Ultrawide Curved Gaming Monitor (LC34J791WTNXZA) - 100Hz Refresh, QLED Computer Monitor, 3440 x 1440p Resolution, 4ms Response, Stereo Speakers, White"
            price={699.99}
            image="https://m.media-amazon.com/images/I/91-hWcNu2yL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
