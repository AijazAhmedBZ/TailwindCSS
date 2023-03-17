import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="flex mx-6 my-4 p-10 bg-blue-100 shadow-2xl rounded-xl">
      <div>
        <Image src="/next.svg" alt="Nrxt Logo" height="500" width="500" />
        <h2 className="text-2xl font-bold">The company Tagline</h2>
      </div>
      <div className="flex justify-left space-x-5">
        <div>
          <h2 className="text-lg font-bold">Quick Links</h2>
          <p>Lorem ipsum</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Contact Us</h2>
          <p>Lorem ipsum</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Social</h2>
          <p>Lorem ipsum</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
