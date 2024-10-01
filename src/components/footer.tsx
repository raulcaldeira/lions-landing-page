import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="mt-10 py-16 border-t h-[80px] flex justify-center items-center gap-10">
      <div className="flex flex-col items-center max-w-96">
        <p className="uppercase font-bold text-red-500">
          Horário de atendimento
        </p>
        <span className="text-center opacity-75">
          Segunda a sexta das 9:00 às 20:00, Sábado das 9:00 às 18:00 e Domingo
          10:00 às 18:00
        </span>
      </div>
      <div>
        <a
          href="https://api.whatsapp.com/send?phone=5521970951262&text=Ol%C3%A1,%20gostaria%20de%20entrar%20em%20contato."
          target="_blank"
        >
          <Button> Entre em contato </Button>
        </a>
      </div>
    </footer>
  );
}
