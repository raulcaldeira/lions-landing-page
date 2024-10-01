import { Button } from "./ui/button";

interface CardCarProps {
  image_url: string;
  modelo: string;
  marca: string;
  ano: number;
  details?: string;
}

export function CardCar({ image_url, modelo, marca, ano, details }: CardCarProps) {
  return (
    <div className="shadow-lg flex flex-col">
      <img src={image_url} className="w-full h-auto" />
      <div className="bg-gray-200 dark:bg-neutral-600 p-4 flex-1 flex flex-col justify-between">
        <div>
          <p className="uppercase">
            {" "}
            <strong>{ano}</strong> {`${marca} ${modelo}`}
          </p>
          <p>{details}</p>
        </div>
        <div className="flex justify-center">
          <Button className="mt-6 px-10"> Saiba mais </Button>
        </div>
      </div>
    </div>
  );
}
