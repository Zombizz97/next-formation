type InfoCardProps = {
  title: string;
  children: React.ReactNode;
};

export default function InfoCard({ title, children }: InfoCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 my-6 bg-gray-50">
      <h3 className="text-lg font-bold uppercase mb-2">{title}</h3>
      <div className="text-sm text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}

