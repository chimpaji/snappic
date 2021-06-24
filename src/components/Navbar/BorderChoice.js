import { useGlobalContext } from "../../context";

export default function BorderChoice({ index, selected = "false" }) {
	const { border, chooseBorderHandling } = useGlobalContext();
	return (
		<div
			key={index}
			className='cursor-pointer md:text-2xl'
			onClick={() => chooseBorderHandling(border[index].id)}
		>
			<div
				className={
					selected === "true"
						? "w-16 bg-gray-200 p-2 rounded flex flex-col justify-center items-center md:w-24"
						: "w-16  p-2 rounded flex flex-col justify-center items-center md:w-24"
				}
			>
				<img className='w-full rounded ' src={border[index].img} alt='1' />
				<div
					className={
						selected === "true" ? "font-bold text-pink-500" : "font-bold"
					}
				>
					{border[index].id}
				</div>
			</div>
		</div>
	);
}
