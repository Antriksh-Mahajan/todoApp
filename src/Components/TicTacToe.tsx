import { useState } from "react";

type Props = {};

const TicTacToe = (props: Props) => {
  const [empty, setEmpty] = useState("");
  const [x,setX]= useState("X");
  const [Y, setY] = useState("Y");
  const [user,setUser]=useState("X");
  return (
    <>
      <h2 className="text-5xl  text-center">Welcome in TicTacToe Game</h2>
      <div className="flex items-center flex-col justify-center h-screen">
        <div className="border border-purple-500 w-80 h-80 grid grid-cols-3 gap-3 ">
          <div>
            <h2>{empty}</h2>
            <button
              onClick={(e) => {
                const target = e.target as HTMLInputElement;
                setEmpty(target.value);
                console.log("clicked");
              }}
            >
              asdf
            </button>
          </div>
          <div>
            <button
              onClick={(e) => {
                const target = e.target as HTMLInputElement;
                setEmpty(target.value);
                console.log("clicked");
              }}
            >
              asdf
            </button>
          </div>
          <div>
            {" "}
            <button
              onClick={(e) => {
                const target = e.target as HTMLInputElement;
                setEmpty(target.value);
                console.log("clicked");
              }}
            >
              asdf
            </button>
          </div>
          <div>
            {" "}
            <button
              onClick={(e) => {
                const target = e.target as HTMLInputElement;
                setEmpty(target.value);
                console.log("clicked");
              }}
            >
              asdf
            </button>
          </div>
          <div>
            {" "}
            <button
              onClick={(e) => {
                const target = e.target as HTMLInputElement;
                setEmpty(target.value);
                console.log("clicked");
              }}
            >
              asdf
            </button>
          </div>
          <div>
            {" "}
            <button
              onClick={(e) => {
                const target = e.target as HTMLInputElement;
                setEmpty(target.value);
                console.log("clicked");
              }}
            >
              asdf
            </button>
          </div>
          <div>
            {" "}
            <button
              onClick={(e) => {
                const target = e.target as HTMLInputElement;
                setEmpty(target.value);
                console.log("clicked");
              }}
            >
              asdf
            </button>
          </div>
          <div>
            {" "}
            <button
              onClick={(e) => {
                const target = e.target as HTMLInputElement;
                setEmpty(target.value);
                console.log("clicked");
              }}
            >
              asdf
            </button>
          </div>
          <div>
            {" "}
            <button
              onClick={(e) => {
                const target = e.target as HTMLInputElement;
                setEmpty(target.value);
                console.log("clicked");
              }}
            >
              asdf
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicTacToe;
