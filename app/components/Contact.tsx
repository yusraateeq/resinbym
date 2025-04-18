import Image from 'next/image';
import hero1 from '../assets/be.jpg';

export default function ContactForm() {
  return (
    <section className="relative w-full h-[400px] flex items-center justify-center overflow-hidden mt-8">
      {/* Background image using Next.js Image */}
      <Image
        src={hero1}
        alt="Background"
        fill
        className="object-cover z-0"
      />

      {/* Form with backdrop blur */}
      <div className="relative z-10 bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-md w-[90%] max-w-xl">
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="border-b border-gray-600 bg-transparent placeholder-gray-700 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="border-b border-gray-600 bg-transparent placeholder-gray-700 focus:outline-none"
          />
          <textarea
            placeholder="Questions"
            className="border-b border-gray-600 bg-transparent placeholder-gray-700 focus:outline-none resize-none h-20"
          />
          <button
            type="submit"
            className="border border-gray-700 px-4 py-1 rounded hover:bg-gray-800 hover:text-white transition self-start"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
