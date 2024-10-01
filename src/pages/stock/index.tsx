import { CardCar } from "@/components/card-car";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

export function Stock() {
  const [searchTerm, setSearchTerm] = useState("");

  const cars = [
    {
      image_url: "car-1.jpg",
      modelo: "onix",
      marca: "chevrolet",
      ano: 2024,
      details: "1.4 LT FLEX MANUAL",
    },
    {
      image_url: "car-2.jpeg",
      modelo: "ecosport",
      marca: "ford",
      ano: 2013,
      details: "1.6 FREESTYLE 16V FLEX 4P MANUAL",
    },
    {
      image_url: "car-3.jpeg",
      modelo: "fox",
      marca: "volkswagen",
      ano: 2014,
      details: "1.6 FLEX MANUAL",
    },
    {
      image_url: "car-4.jpg",
      modelo: "mobi",
      marca: "fiat",
      ano: 2020,
      details: "1.0 EVO FLEX LIKE MANUAL",
    },
    {
      image_url: "car-5.jpeg",
      modelo: "siena",
      marca: "fiat",
      ano: 2018,
      details: "1.0 FLEX MANUAL",
    },
    {
      image_url: "car-6.jpg",
      modelo: "kicks",
      marca: "nissan",
      ano: 2020,
      details: "1.6 FLEX MANUAL",
    },
  ];

  const filteredCars = cars.filter((car) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      car.modelo.toLowerCase().includes(searchLower) ||
      car.marca.toLowerCase().includes(searchLower) ||
      car.ano.toString().includes(searchLower) ||
      car.details.toLowerCase().includes(searchLower)
    );
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <Badge variant="outline" className="text-xl border-red-500 uppercase">
        Estoque
      </Badge>

      <section className="mt-10 px-10 xl:px-20">
        <div className="flex items-center gap-2">
          <Input
            placeholder="Pesquise por carro/marca/ano"
            onChange={handleSearchChange}
          />
          <Button>
            <Search />
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
          {filteredCars.map((car, index) => (
            <CardCar
              key={index}
              image_url={car.image_url}
              ano={car.ano}
              marca={car.marca}
              modelo={car.modelo}
              details={car.details}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
