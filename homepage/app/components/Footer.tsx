import { AtSign, Hash, Share2, Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-green-400 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2 text-green-400">
              mbDevWorks
            </h3>
            <p className="text-green-300">Coding like it's Y2K</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2 text-green-400">
              Quick_Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-green-300 hover:text-green-200"
                >
                  &gt; Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-green-300 hover:text-green-200"
                >
                  &gt; Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-green-300 hover:text-green-200"
                >
                  &gt; Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-green-300 hover:text-green-200"
                >
                  &gt; Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2 text-green-400">
              Connect
            </h4>
            <div className="flex space-x-4">
              <a href="#" className="text-green-400 hover:text-green-300">
                <AtSign size={24} />
              </a>
              <a href="#" className="text-green-400 hover:text-green-300">
                <Hash size={24} />
              </a>
              <a href="#" className="text-green-400 hover:text-green-300">
                <Share2 size={24} />
              </a>
              <a href="#" className="text-green-400 hover:text-green-300">
                <Zap size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-green-400">
          <p>
            &copy; {new Date().getFullYear()} mbDevWorks. All_rights_reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
