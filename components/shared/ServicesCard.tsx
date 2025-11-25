import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const ServicesCard = ({
  img,
  tittle,
  discription,
  button,
  whichside,
}: Service) => {
  return (
    <div>
      <div
        className={`container mx-auto flex  gap-8  ${
          whichside === "left" ? "flex-row" : "flex-row-reverse"
        }  `}
      >
        <div>
          <Image src={img} alt={tittle} width={768} height={373} />
        </div>
        <div>
          <h2>{tittle} </h2>
          <p>{discription}</p>
          <Button>{button}</Button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
