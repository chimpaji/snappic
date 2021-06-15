import { useGlobalContext } from "./context";

export default function Navbar() {
  const { border, chooseBorder, setChooseBorder } = useGlobalContext();

  return (
    <div className=" flex flex-col shadow-md py-2 px-2">
      <div className="flex justify-between">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </div>
        <div className="text-gray-800 text-bold font-semibold ">SNAPPIC</div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
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
      <div className="flex justify-between">
        {border.map((element, index) => {
          if (border[index].id === chooseBorder) {
            return (
              <div
                className=""
                onClick={() => setChooseBorder(border[index].id)}
              >
                <div className="w-16 bg-gray-200 p-2 rounded flex flex-col justify-center items-center">
                  <img
                    className="w-12 rounded"
                    src={border[index].img}
                    alt="1"
                  />
                  <div className="font-bold text-pink-500">
                    {border[index].id}
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div
                className=""
                onClick={() => setChooseBorder(border[index].id)}
              >
                <div className="w-16  p-2 rounded flex flex-col justify-center items-center">
                  <img
                    className="w-12 rounded"
                    src={border[index].img}
                    alt="1"
                  />
                  <div className="font-bold">{border[index].id}</div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
