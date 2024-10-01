import { CardIconText } from "@/components/card-icon-text";
import { Hero } from "@/components/hero";
import { Separator } from "@/components/ui/separator";
import { DollarSign, Percent, ShieldCheck } from "lucide-react";
import { Helmet } from "react-helmet-async";

export function Home() {
  return (
    <>
      <Helmet title="Home" />

      <section className="md:px-14">
        <Hero />
      </section>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:mt-20">
        <img
          src="city-driver.svg"
          className="h-[300px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] w-auto"
        />
        <div className="max-w-[600px] flex flex-col justify-center items-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl border-b pb-2 px-4 border-red-500">
            Por que escolher a{" "}
            <span className="text-red-500 font-bold uppercase">lions</span>?
          </h2>
          <p className="mt-4 text-lg md:text-xl opacity-75 text-center">
            As melhores condições para a compra do veículo dos seus sonhos estão
            aqui.
          </p>

          <div className="mt-8 px-8 flex flex-col justify-center items-center gap-6">
            <CardIconText
              icon={<DollarSign />}
              title="Ótimos preços"
              description="Compramos carros em grandes lotes e com grandes descontos. Desta forma, conseguimos te repassar bons descontos."
            />

            <Separator className="bg-red-200 opacity-30" />

            <CardIconText
              icon={<Percent />}
              title="Nada de juros altos"
              description="Somos o líder nacional em financiamentos. Por consequência, grandes bancos fornecem para nossos clientes taxas de juros baixas e fácil aprovação de crédito."
            />

            <Separator className="bg-red-200 opacity-30" />

            <CardIconText
              icon={<ShieldCheck />}
              title="Fique despreocupado"
              description="Possuímos um ótimo sistema de atendimento pós-venda com uma equipe especializada e oficinas credenciadas para deixar nossos clientes satisfeitos."
            />
          </div>
        </div>
      </div>
    </>
  );
}
