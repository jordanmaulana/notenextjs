import React from "react";

export const Footer = () => {
  return (
    <footer className="text-center bg-regal-blue p-8 w-full">
      <div className="flex justify-between items-end text-black">
        <div className="gap-2 flex">
          <p> Special Thanks to</p>
          <a
            href="https://www.devscale.id/"
            target="_blank"
            className="underline text-blue-500"
          >
            devscale.id
          </a>
          ❤️
        </div>

        <div className="flex gap-2">
          <p>Design by</p>
          <a
            href="https://www.figma.com/community/file/1118119058492366983/notebook-minimal-blog-template-free"
            target="_blank"
            className="underline text-blue-500"
          >
            Themefisher
          </a>
        </div>
      </div>
    </footer>
  );
};
