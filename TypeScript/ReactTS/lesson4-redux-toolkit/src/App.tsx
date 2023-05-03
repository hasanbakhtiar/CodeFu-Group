import React, { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "./store";
import { add } from "./features/todoSlice";
import video from './video.mp4';
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
const App = () => {
  const todos = useAppSelector((a) => a.todos);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    AOS.init();
  }, []);
  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputRef.current!.value) {
      alert("err");
    } else {
      dispatch(add(inputRef.current!.value));
      inputRef.current!.value = "";
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={formSubmit}>
        <input type="text" ref={inputRef} />
        <button>add</button>

        <ol>
          {todos.map((i: any, c: number) => {
            return (
              <li data-aos="fade-right" key={c}>
                {i.title}
                <button>del</button>
              </li>
            );
          })}
        </ol>
      </form>
      <video src={video} muted autoPlay ></video>
    </div>
  );
};

export default App;
