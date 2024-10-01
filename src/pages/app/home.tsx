import { CardIconText } from "@/components/card-icon-text";
import { Hero } from "@/components/hero";
import { Separator } from "@/components/ui/separator";
import { DollarSign, Percent, ShieldCheck } from "lucide-react";

export function Home() {
  return (
    <>
      <section className="px-14">
        <Hero />
      </section>

      <div className="flex gap-16 justify-center items-center">
        <img src="city-driver.svg" className="h-[700px] w-auto" />
        <div className="max-w-[600px] flex flex-col justify-center items-center">
          <h2 className="text-4xl border-b pb-2 px-4 border-red-500">
            Por que escolher a{" "}
            <span className="text-red-500 font-bold uppercase">lions</span>?
          </h2>
          <p className="mt-4 text-xl opacity-75">
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
