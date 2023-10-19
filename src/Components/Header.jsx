import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

function Header() {
  const app = useRef();

  useLayoutEffect(() => {
    gsap.fromTo(
      app.current,
      {
        y: -300,
        duration: 2,
        delay: 1
      },
      {
        y: 30,
      }
    );
  }, [app]);
  return (
    <div className="h-2/4">
      <div ref={app} className="mx-5 md:text-3xl">
        <h1 className="">Hi there</h1>
        <div>
          <h2>
            My name is <span className="font-bold">Kehinde Balogun</span>{" "}
          </h2>
          <p>
            I'm a FrontEnd Web Developer
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
