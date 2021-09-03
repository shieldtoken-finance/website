import React from "react";

function Footer(props) {
  return (
    <footer className="h-16 bg-black p-3">
      <div className="w-full h-full flex justify-center items-center">
        <span className="text-base text-white text-center">
          &copy; 2021 Blocklens $BLENS
        </span>
      </div>
    </footer>
  );
}

export default Footer;
