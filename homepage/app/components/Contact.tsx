import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-green-400">&lt;Contact_Us&gt;</h2>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Your_Name"
            className="w-full bg-gray-800 border-green-400 text-green-400 placeholder-green-600"
          />
        </div>
        <div className="mb-4">
          <Input
            type="email"
            placeholder="Your_Email"
            className="w-full bg-gray-800 border-green-400 text-green-400 placeholder-green-600"
          />
        </div>
        <div className="mb-4">
          <Textarea
            placeholder="Your_Message"
            className="w-full bg-gray-800 border-green-400 text-green-400 placeholder-green-600"
            rows={4}
          />
        </div>
        <Button
          type="submit"
          variant="outline"
          size="lg"
          className="w-full border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900"
        >
          SEND_MESSAGE
        </Button>
      </form>
      <h2 className="text-3xl font-bold text-center mt-12 text-green-400">&lt;/Contact_Us&gt;</h2>
    </section>
  )
}

