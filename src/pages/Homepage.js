import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactPlayer from "react-player/youtube";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="relative">
      <div className="scrollable-pitch flex flex-col  text-gray-700">
        <div className="Header mx-6">
          <div className="logo-and-menu flex justify-between mb-5 mt-8">
            <div>
              <img src="./img/homepage/logo.webp" className="w-32" />
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
          </div>
          <div className="text-container">
            <div className="text-4xl font-bold leading-10 mb-5">
              Turn your photos into stunning wall art
            </div>
          </div>
          <div className="header-photo">
            <img
              src="./img/homepage/header.jpg"
              alt="snappic picture on the wall"
              className="rounded"
            />
          </div>
        </div>
        <div className="IconsContainer flex flex-col justify-center items-center">
          <div className="pt-16 flex flex-col items-center justify-center">
            <img src="./img/homepage/nails.svg" />
            <div className="text-center">
              ไม่ต้องเจาะตะปู
              <br />
              Snappic ติดได้ถูกพื้นผิวไม่ทิ้งร่องรอย
            </div>
          </div>
          <div className="pt-16 flex flex-col items-center justify-center">
            <img src="./img/homepage/boxAndPlane.svg" />
            <div className="text-center">
              ส่งฟรีทั่วไทย
              <br />
              ถึงบ้านคุณภายใน1สัปดาห์
            </div>
          </div>
          <div className="pt-16 flex flex-col items-center justify-center">
            <img src="./img/homepage/medal.svg" />
            <div className="text-center">
              ประกันความพึงพอใจ
              <br />
              ลูกค้าSnappicทุกท่าน สุขใจทั้งผู้ให้และรับ
            </div>
          </div>
        </div>
        <div className="Divider py-4"></div>
        <div className="GifContianer p-6">
          <div className="w-full overflow-hidden rounded-t">
            <ReactPlayer
              controls="true"
              light="./img/homepage/thumbnail.jpg"
              width="340px"
              url="https://youtu.be/1h0iG_9q02A"
            />
          </div>

          <div className="text-center bg-pink-100 rounded-b p-10">
            <div className="text-xl font-bold mb-2">
              กรอบรูปSnappicติดได้ทุกพื้นผิว ไม่ทิ้งร่องรอย
            </div>
            <div>
              เปลี่ยนรูปภายในมือถือของคุณมาอยู่บนผนังด้วยกรอบรูปสุดหรูจากSnappic
              ง่ายๆไม่ต้องช่าง ไม่ทิ้งร่องรอย
            </div>
          </div>
        </div>
        <div className="Divider py-4"></div>
        <div className="Carousel">
          <div className="Headers flex flex-col items-center">
            <div className="text-xl font-bold">รีวิวจากลูกค้าSNAPPIC</div>
            <div>แชร์รูปของคุณและtagเราผ่านInstagramได้เลย</div>
          </div>
          <div className="my-8">
            <Carousel showArrows={true} autoPlay="true" infiniteLoop="true">
              <div>
                <img src="./img/homepage/previews/preview1.jpg" />
              </div>
              <div>
                <img src="./img/homepage/previews/preview2.jpg" />
              </div>
              <div>
                <img src="./img/homepage/previews/preview3.jpg" />
              </div>
              <div>
                <img src="./img/homepage/previews/preview4.jpg" />
              </div>
              <div>
                <img src="./img/homepage/previews/preview5.jpg" />
              </div>
              <div>
                <img src="./img/homepage/previews/preview6.jpg" />
              </div>
            </Carousel>
          </div>
        </div>
        <div className="Divider py-4"></div>
      </div>
      <div className="sticky-pitch absolute sticky  bottom-0 shadow-2xl bg-white w-full flex justify-center items-center">
        <Link to="/main">
          <button className="z-50 bg-pink-500 py-2 px-32 rounded-md my-4 text-white font-bold text-xl">
            Let's Go
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
