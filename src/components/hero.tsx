import { type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { useEffect, useState } from "react";

export function Hero() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <>
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        opts={{ loop: true }}
      >
        <CarouselContent>
          <CarouselItem
            className="bg-contain bg-no-repeat bg-center h-[600px]"
            style={{ backgroundImage: "url(img-1.jpg)" }}
          ></CarouselItem>
          <CarouselItem
            className="bg-contain bg-no-repeat bg-center h-[600px]"
            style={{ backgroundImage: "url(img-2.jpg)" }}
          ></CarouselItem>
        </CarouselContent>
      </Carousel>
      <div className="mt-5 flex justify-center space-x-2">
        {Array.from({ length: count }, (_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${
              current - 1 === index ? "bg-red-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </>
  );
}
