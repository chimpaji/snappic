import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
export default function IndexPage() {
  // const [show, setSideBar] = useState(true);
  const { sideBar, setSideBar } = useGlobalContext();
  let show = sideBar;

  return (
    <>
      <div className="w-full h-full ">
        <div className="flex flex-no-wrap">
          {/*Mobile responsive sidebar*/}
          <div
            className={
              show
                ? "w-full h-full absolute z-40  transform  translate-x-0 "
                : "   w-full h-full absolute z-40  transform -translate-x-full"
            }
          >
            <div
              className=" opacity-60 w-full h-full absolute bg-transparent	"
              onClick={() => setSideBar(!sideBar)}
            />
            <div className="w-64 md:w-96 z-20 absolute bg-gray-800 shadow h-full flex-col justify-between pb4 transition duration-150 ease-in-out">
              <div className="h-full w-full flex flex-col justify-between">
                <div>
                  <div className="text-white flex items-center justify-between px-8">
                    <div className="h-16 w-full flex items-center">SNAPPIC</div>
                    <div onClick={() => setSideBar(!show)}>
                      <svg
                        id="cross"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-x"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1={18} y1={6} x2={6} y2={18} />
                        <line x1={6} y1={6} x2={18} y2={18} />
                      </svg>
                    </div>
                  </div>
                  <div className="px-8">
                    <ul className="mt-12">
                      <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
                        <div className="flex items-center">
                          <div className="w-6 h-6 md:w-8 md:h-8">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-grid"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <rect x={4} y={4} width={6} height={6} rx={1} />
                              <rect x={14} y={4} width={6} height={6} rx={1} />
                              <rect x={4} y={14} width={6} height={6} rx={1} />
                              <rect x={14} y={14} width={6} height={6} rx={1} />
                            </svg>
                          </div>
                          <span
                            className="xl:text-base md:text-2xl text-base ml-2"
                            onClick={() => {
                              location.href =
                                "https://www.facebook.com/Snappic-107064187923017/";
                            }}
                          >
                            Contact Us
                          </span>
                        </div>
                      </li>
                      <li className="flex w-full justify-between text-gray-500 hover:text-gray-400 cursor-pointer items-center mb-6">
                        <div className="flex items-center">
                          <div className="w-6 h-6 md:w-8 md:h-8">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-puzzle"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                            </svg>
                          </div>
                          <Link to="/privacy">
                            <span className="xl:text-base md:text-2xl text-base ml-2">
                              Privacy Policy
                            </span>
                          </Link>
                        </div>
                      </li>
                      <li className="flex w-full justify-between text-gray-500 hover:text-gray-400 cursor-pointer items-center mb-6">
                        <div className="flex items-center">
                          <div className="w-6 h-6 md:w-8 md:h-8">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-code"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <polyline points="7 8 3 12 7 16" />
                              <polyline points="17 8 21 12 17 16" />
                              <line x1={14} y1={4} x2={10} y2={20} />
                            </svg>
                          </div>
                          <Link to="/terms">
                            <span className="xl:text-base md:text-2xl text-base ml-2">
                              Terms of Service
                            </span>
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
