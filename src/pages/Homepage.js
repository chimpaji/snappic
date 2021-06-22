import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactPlayer from "react-player/youtube";
import { Link } from "react-router-dom";

const Homepage = () => {
	return (
		<div className='relative'>
			<div className='flex flex-col text-gray-700 scrollable-pitch'>
				<div className='mx-6 Header'>
					<div className='flex justify-between mt-8 mb-5 logo-and-menu'>
						<div>
							<img src='./img/homepage/logo.webp' className='w-32' />
						</div>
						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='w-6 h-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M4 6h16M4 12h16M4 18h16'
								/>
							</svg>
						</div>
					</div>
					<div className='text-container'>
						<div className='mb-5 text-4xl font-bold leading-10'>
							Turn your photos into stunning wall art
						</div>
					</div>
					<div className='header-photo'>
						<img
							src='./img/homepage/header.jpg'
							alt='snappic picture on the wall'
							className='rounded'
						/>
					</div>
				</div>
				<div className='flex flex-col items-center justify-center IconsContainer'>
					<div className='flex flex-col items-center justify-center pt-16'>
						<img src='./img/homepage/nails.svg' />
						<div className='text-center'>
							ไม่ต้องเจาะตะปู
							<br />
							Snappic ติดได้ถูกพื้นผิวไม่ทิ้งร่องรอย
						</div>
					</div>
					<div className='flex flex-col items-center justify-center pt-16'>
						<img src='./img/homepage/boxAndPlane.svg' />
						<div className='text-center'>
							ส่งฟรีทั่วไทย
							<br />
							ถึงบ้านคุณภายใน1สัปดาห์
						</div>
					</div>
					<div className='flex flex-col items-center justify-center pt-16'>
						<img src='./img/homepage/medal.svg' />
						<div className='text-center'>
							ประกันความพึงพอใจ
							<br />
							ลูกค้าSnappicทุกท่าน สุขใจทั้งผู้ให้และรับ
						</div>
					</div>
				</div>
				<div className='py-4 Divider'></div>
				<div className='p-6 GifContianer'>
					<div className='w-full overflow-hidden rounded-t'>
						<ReactPlayer
							controls={true}
							light='./img/homepage/thumbnail.jpg'
							width='340px'
							url='https://youtu.be/1h0iG_9q02A'
						/>
					</div>

					<div className='p-10 text-center bg-pink-100 rounded-b'>
						<div className='mb-2 text-xl font-bold'>
							กรอบรูปSnappicติดได้ทุกพื้นผิว ไม่ทิ้งร่องรอย
						</div>
						<div>
							เปลี่ยนรูปภายในมือถือของคุณมาอยู่บนผนังด้วยกรอบรูปสุดหรูจากSnappic
							ง่ายๆไม่ต้องช่าง ไม่ทิ้งร่องรอย
						</div>
					</div>
				</div>
				<div className='py-4 Divider'></div>
				<div className='Carousel'>
					<div className='flex flex-col items-center Headers'>
						<div className='text-xl font-bold'>รีวิวจากลูกค้าSNAPPIC</div>
						<div>แชร์รูปของคุณและtagเราผ่านInstagramได้เลย</div>
					</div>
					<div className='my-8'>
						<Carousel showArrows={true} autoPlay='true' infiniteLoop='true'>
							<div>
								<img src='./img/homepage/previews/preview1.jpg' />
							</div>
							<div>
								<img src='./img/homepage/previews/preview2.jpg' />
							</div>
							<div>
								<img src='./img/homepage/previews/preview3.jpg' />
							</div>
							<div>
								<img src='./img/homepage/previews/preview4.jpg' />
							</div>
							<div>
								<img src='./img/homepage/previews/preview5.jpg' />
							</div>
							<div>
								<img src='./img/homepage/previews/preview6.jpg' />
							</div>
						</Carousel>
					</div>
				</div>
				<div className='py-4 Divider'></div>
			</div>
			<div className='absolute sticky bottom-0 flex items-center justify-center w-full bg-white shadow-2xl sticky-pitch'>
				<Link to='/main'>
					<button className='z-50 px-32 py-2 my-4 text-xl font-bold text-white bg-pink-500 rounded-md'>
						Let's Go
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Homepage;
