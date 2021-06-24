import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactPlayer from "react-player/youtube";
import { Link } from "react-router-dom";
import ReactPixel from "react-facebook-pixel";

const Homepage = () => {
	useEffect(() => {
		ReactPixel.track("ViewContent", {});
	}, []);
	return (
		<div className='relative'>
			<div className='hidden md:block flex items-center bg-white shadow-md mb-8'>
				<div className='logo-and-menu flex justify-between py-4 px-2 '>
					<div className='flex justify-center items-center'>
						<img src='./img/homepage/logo.webp' className='w-32' />
					</div>
					<div className='flex space-x-4'>
						<a href='#' className=''>
							<div className='flex space-x-1'>
								<div>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-6 w-6'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
										/>
									</svg>
								</div>
								<div>ติดต่อ</div>
							</div>
						</a>
						<Link to='/main'>
							<div className='border-2 border-pink-500 text-pink-500 font-bold  px-8 rounded '>
								เริ่มเลย
							</div>
						</Link>
					</div>
				</div>
			</div>
			<div className='flex flex-col text-gray-700 scrollable-pitch'>
				<div className='mx-6 md:mx-20 lg:mx-40 md:flex text-gray-800 md:mb-16 Header'>
					<div className='logo-and-menu md:hidden flex justify-between mt-8 mb-5 '>
						<div>
							<img src='./img/homepage/logo.webp' className='w-32 md:w-64' />
						</div>
						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='w-6 h-6 md:w-12 md:h-12'
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
					<div className='text-container md:flex-1 md:px-12 md:py-24 md:text-left md:order-2 md:space-y-4'>
						<div className=' text-4xl font-bold leading-10   md:leading-normal md:w-4/5'>
							เปลี่ยนรูปในมือถือมาเป็นกรอบรูปที่น่าจดจำบนผนัง
						</div>
						<div className='hidden md:block font-semibold md:w-96 md:w-4/5'>
							ออกแบบผนังบ้านให้สวยขึ้นด้วยรูปภาพรูปโปรดของคุณด้วยกรอบรูปพร้อมปริ้นภาพจากSNAPPIC{" "}
						</div>
						<div className='hidden md:block'>
							<Link to='/main'>
								<button className=' px-24 bg-pink-500 text-white font-bold text-2xl py-2 rounded '>
									เริ่มเลย
								</button>
							</Link>
						</div>
						<div className='hidden md:flex md:space-x-2'>
							<div>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-6 w-6'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path d='M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z' />
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0'
									/>
								</svg>
							</div>
							<div>เราส่งฟรีทั่วไทย!</div>
						</div>
					</div>
					<div className='header-photo md:flex-1 md:  md:order-1 md:space-x-2 md:flex md:justify-center '>
						<div className='hidden lg:flex-1'></div>
						<div className='flex-1 flex'>
							<img
								src='./img/homepage/header.jpg'
								alt='snappic picture on the wall'
								className='rounded-xl self-center'
							/>
						</div>
						<div className='hidden md:flex-1 md:flex md:flex-col md:justify-center md:items-start'>
							<img
								src='./img/homepage/header1.jpg'
								alt='snappic picture on the wall'
								className='rounded-xl md:w-8/12 lg:w-8/12 xl:w-6/12 self-start'
							/>
							<img
								src='./img/homepage/header2.jpg'
								alt='snappic picture on the wall'
								className='rounded-xl mt-2 md:w-10/12 lg:w-64 xl:w-10/12 self-start'
							/>
						</div>
					</div>
				</div>
				<div className='flex flex-col md:flex-row md:space-x-12 items-center justify-center md:font-bold  IconsContainer'>
					<div className='flex flex-col items-center justify-center pt-16 md:space-y-4'>
						<img src='./img/homepage/nails.svg' />
						<div className='text-center'>
							ไม่ต้องเจาะตะปู
							<br />
							Snappic ติดได้ถูกพื้นผิวไม่ทิ้งร่องรอย
						</div>
					</div>
					<div className='flex flex-col items-center justify-center pt-16 md:space-y-4'>
						<img src='./img/homepage/boxAndPlane.svg' />
						<div className='text-center'>
							ส่งฟรีทั่วไทย
							<br />
							ถึงบ้านคุณภายใน1สัปดาห์
						</div>
					</div>
					<div className='flex flex-col items-center justify-center pt-16 md:space-y-4'>
						<img src='./img/homepage/medal.svg' />
						<div className='text-center'>
							ประกันความพึงพอใจ
							<br />
							ลูกค้าSnappicทุกท่าน สุขใจทั้งผู้ให้และรับ
						</div>
					</div>
				</div>
				<div className='py-4 Divider'></div>
				<div className='p-6 h-full w-full flex justify-center GifContianer'>
					<div className='rounded-t md:w-8/12 xl:w-5/12 flex flex-col h-full'>
						<div
							className='player-wrapper relative w-full '
							style={{
								minHeight: "200px",
								height: "350px",
								maxHeight: "400px",
							}}
						>
							<ReactPlayer
								controls={true}
								light='./img/homepage/thumbnail.jpg'
								width='100%'
								height='100%'
								url='https://youtu.be/XU9Xd4_bNu0'
							/>
						</div>

						<div className='relative h-full p-10 text-center bg-pink-100 rounded-b'>
							<div className='mb-2 text-xl font-bold'>
								กรอบรูปSnappicติดได้ทุกพื้นผิว ไม่ทิ้งร่องรอย
							</div>
							<div>
								เปลี่ยนรูปภายในมือถือของคุณมาอยู่บนผนังด้วยกรอบรูปสุดหรูจากSnappic
								ง่ายๆไม่ต้องช่าง ไม่ทิ้งร่องรอย
							</div>
						</div>
					</div>
				</div>
				<div className='GifContainer2'></div>
				<div className='py-4 Divider'></div>
				<div className='Carousel'>
					<div className='flex flex-col items-center md:text-2xl Headers'>
						<div className=' font-bold'>รีวิวจากลูกค้าSNAPPIC</div>
						<div className='font-semilight'>
							แชร์รูปของคุณและtagเราผ่านInstagramได้เลย
						</div>
					</div>
					<div className='my-8 w-full md:flex md:justify-center'>
						<div className=' md:w-4/6 lg:w-2/6'>
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
				</div>
				<div className='py-4 Divider'></div>
			</div>
			<div className='absolute sticky bottom-0 flex items-center justify-center w-full bg-white shadow-2xl sticky-pitch'>
				<Link to='/main'>
					<button className='z-50 px-32  py-2 my-4 text-xl font-bold text-white bg-pink-500 rounded-md md:px-56 md:py-4'>
						เริ่มเลย
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Homepage;
