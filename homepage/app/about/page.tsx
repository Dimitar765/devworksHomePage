import Image from "next/image";

function About() {
  return (
    <main className="flex justify-around">
      <section className="min-h-screen flex place-items-center">
        <div className="min-w-[660px] mx-auto px-4 ">
          <div className="py-20 max-w-[900px] space-y-2">
            <h1 className="text-3xl font-bold px-12 py-4 space-y-2">
              About Us
            </h1>
            <p className="mt-4 min-w-[600px] px-12 text-muted-foreground text-pretty border-r-2 border-blue-300 md:text-xl">
              [Welcome to] @{" "}
              <span className="text-blue-300 cursor-pointer">mbDevWorks</span>,
              [where] we specialize in creating stunning, efficient, and
              user-friendly web applications tailored to your needs. Our team of
              experts leverages cutting-edge tools and processes to ensure your
              digital presence stands out. We utilize Figma for seamless,
              collaborative design, ensuring every project aligns perfectly with
              your vision. From initial concept to final deployment, our
              development process integrates industry-leading technologies like
              React, Tailwind CSS, and React Query, combined with robust
              back-end solutions in Go. Our holistic approach ensures that your
              web application is not only visually appealing but also highly
              functional and scalable. Partner with us to transform your ideas
              into reality and drive your business forward.
            </p>
          </div>
        </div>
      </section>
      <section className="w-1/2 flex justify-center items-center">
        <Image
          src="https://blog.thenounproject.com/wp-content/uploads/2023/04/figma-design-systems.png"
          alt="mbDevWorks"
          width={800}
          height={800}
        />
      </section>
    </main>
  );
}

export default About;
