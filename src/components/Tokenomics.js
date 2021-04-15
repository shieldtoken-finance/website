import React from "react";
import { Card } from "antd";

function TokenCard({ text, title }) {
  return (
    <Card
      className="overflow-hidden"
      hoverable
      bodyStyle={{
        backgroundColor: "#ffffff",
        height: "300px",
      }}
    >
      <div className="h-full flex flex-col justify-center items-center space-y-3">
        <span className="text-xl text-black text-center block">{title}</span>
        <span className="text-2xl text-green-500 text-center block">
          {text}
        </span>
      </div>
    </Card>
  );
}

export default TokenCard;
