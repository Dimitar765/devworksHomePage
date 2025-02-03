import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Stanko Popov",
      role: "CEO, IMK",
      content:
        "mbDevWorks delivered a website solution that perfectly captures our company's needs. Absolutely stellar work!",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Jane Janev",
      role: "Founder, testBed.mk",
      content:
        "Working with mdWebWorks was like taking a delightful journey back in time. They understood our vision perfectly.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ];

  return (
    <section id="testimonials" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-green-400">
        &lt;Client_Feedback&gt;
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="border border-green-400 p-6">
            <p className="text-green-200 mb-4">
              &quot;{testimonial.content}&quot;
            </p>
            <div className="flex items-center">
              <Image
                src={testimonial.avatar || "/placeholder.svg"}
                alt={testimonial.name}
                width={50}
                height={50}
                className="rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold text-green-300">
                  {testimonial.name}
                </h3>
                <p className="text-green-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-3xl font-bold text-center mt-12 text-green-400">
        &lt;/Client_Feedback&gt;
      </h2>
    </section>
  );
}
