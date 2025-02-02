import { Monitor, Code, Cpu } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Monitor className="w-12 h-12 text-green-400" />,
      title: "Retro Web Design",
      description: "Nostalgic designs that stand out in the modern web",
    },
    {
      icon: <Code className="w-12 h-12 text-green-400" />,
      title: "Vintage-Inspired Development",
      description: "Cutting-edge tech with a retro aesthetic",
    },
    {
      icon: <Cpu className="w-12 h-12 text-green-400" />,
      title: "Legacy System Integration",
      description: "Bridging the gap between old and new technologies",
    },
  ];

  return (
    <section id="services" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-green-400">
        &lt;Our_Services&gt;
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {services.map((service, index) => (
          <div key={index} className="border border-green-400 p-6 text-center">
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-green-300">
              {service.title}
            </h3>
            <p className="text-green-200">{service.description}</p>
          </div>
        ))}
      </div>
      <h2 className="text-3xl font-bold text-center mt-12 text-green-400">
        &lt;/Our_Services&gt;
      </h2>
    </section>
  );
}
