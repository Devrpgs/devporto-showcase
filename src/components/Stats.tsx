
const stats = [
  { number: "1500+", label: "Designers" },
  { number: "8500+", label: "Projetos" },
  { number: "25k+", label: "Visualizações" },
  { number: "150+", label: "Empresas" }
];

const Stats = () => {
  return (
    <section className="py-16 bg-devporto-navy text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 rounded-lg">
              <div className="text-4xl md:text-5xl font-bold text-devporto-blue mb-2">{stat.number}</div>
              <div className="text-lg text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
