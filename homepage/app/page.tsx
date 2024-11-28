// import Image from "next/image";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
// TODO:
const 
const SetTheme = dynamic(() => import("../components/SetTheme"), {
    ssr: false,
}); // this can be moved to navbar component

export default function Home() {
    return (
        <main className="">
            <section className="flex min-h-screen w-full items-center justify-between p-24 ml-11">
                <section className="flex flex-col md:flex-row">
                    <div className="">
                        <div className="w-2/3 px-4 md:px-6">
                            <div className="flex flex-col gap-6 lg:flex-row lg:gap-12 xl:flex-row">
                                <div className="flex flex-col justify-center space-y-4">
                                    <div className="space-y-2">
                                        <h1 className="text-3xl font-bold sm:text-5xl xl:text-6xl/none">
                                            Streamline Your Workflow with Our All-in-One Solution
                                        </h1>
                                        <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                            Boost productivity, improve collaboration, and achieve
                                            your business goals with our open-source based solutions.
                                            Simplify your processes and focus on what matters most.
                                        </p>
                                    </div>
                                    <div className="w-full max-w-sm space-y-2">
                                        <form className="flex gap-2">
                                            <Input
                                                type="email"
                                                placeholder="Enter your email"
                                                className="max-w-lg flex-1"
                                                name="email"
                                                id='1'
                                                autoComplete="false"
                                            />
                                            <Button type="submit">Get Started</Button>
                                        </form>
                                        <p className="text-xs text-muted-foreground">
                                            Sign up to experience the future of work.{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-center item-center py-10 h-full w-full">
                            <div
                                className="relative z-[-1] flex justify-center items-center place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
                                <h1 className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:text-white text-4xl font-bold text-center sm:text-5xl lg:text-left lg:pr-24 lg:text-6xl">
                                    mbDevWorks
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section className="flex justify-around  mb-52">
                <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
                    <a
                        href=""
                        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-blue-500 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        TODO set up on hover color for dark and light mode accordingly
                        <h2 className="mb-3 text-2xl font-semibold">
                            Design{" "}
                            <span
                                className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                -&gt;
                            </span>
                        </h2>
                        <p className="m-0 max-w-[30ch] text-sm opacity-50">
                            Bring your own design. Start from scratch or use a template.
                        </p>
                    </a>

                    <a
                        href=""
                        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className="mb-3 text-2xl font-semibold">
                            Develop{" "}
                            <span
                                className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                -&gt;
                            </span>
                        </h2>
                        <p className="m-0 max-w-[30ch] text-sm opacity-50">
                            We bring your idea to life, enhancing your brand.
                        </p>
                    </a>

                    <a
                        href=""
                        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className="mb-3 text-2xl font-semibold">
                            Deploy{" "}
                            <span
                                className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                -&gt;
                            </span>
                        </h2>
                        <p className="m-0 max-w-[30ch] text-sm opacity-50">
                            Best cost-effective hosting solutions for your project.
                        </p>
                    </a>
                </div>
            </section>
        </main>
    );
}
