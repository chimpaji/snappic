import { useGlobalContext } from "../../context";
import BorderChoice from "./BorderChoice";
import NavbarUpper from "./NavbarUpper";

export default function Navbar() {
	const { border, chooseBorder } = useGlobalContext();

	return (
		<div className=' flex flex-col  shadow-md py-2 px-2'>
			<NavbarUpper />
			<div className='flex justify-center'>
				<div className='flex justify-between md:w-4/6 lg:w-2/3'>
					{border.map((element, index) => {
						if (border[index].id === chooseBorder.id) {
							return <BorderChoice key={index} index={index} selected='true' />;
						} else {
							return (
								<BorderChoice key={index} index={index} selected='false' />
							);
						}
					})}
				</div>
			</div>
		</div>
	);
}
