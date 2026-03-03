import {ButtonLink} from "@/components/ui/ButtonLink";

type ErrorBlockProps = {
  code: string;
  children: React.ReactNode;
};

export default function ErrorBlock({ code, children }: ErrorBlockProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <span className="text-[10rem] font-bold leading-none text-gray-200">
        {code}
      </span>
      <div className="mt-4 text-lg text-gray-600 max-w-md">{children}</div>
        <ButtonLink href="/" variant="outline" color="dark">
            Retour à l&#39;accueil
        </ButtonLink>
    </div>
  );
}

