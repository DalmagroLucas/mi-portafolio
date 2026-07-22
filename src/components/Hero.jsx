import imagen from "../assets/image.png";

export default function Hero() {
  return (
    <section className="flex flex-col items-center" style={{ color: "black" }}>
      <h1 className="font-righteous text-5xl antialiased">Dalmagro Lucas</h1>
      <p className="w-1/3 text-[24px] text-center">
        I am a backend developer focused on building robust solutions using  modern, cutting-edge technologies. I am passionate about staying  up-to-date with the latest industry trends and am constantly learning to adopt new tools and best practices.<br/><br/>Skilled Full-Stack developer with a strong programming foundation in C and Python. Experienced in building scalable backends with Node.js and designing responsive frontend layouts with Tailwind CSS.
      </p>
      
      <img src={imagen} alt="ImagenMia" className="w-[200px] h-[200px] rounded-full object-cover block " />
      
      <div className="mt-4">
        <a href="TU_LINK_GITHUB" className="bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-700 transition py-4">GitHub </a>
        <a href="TU_LINK_LINKEDIN" className="bg-transparent border border-white px-6 py-2 rounded-full hover:bg-white hover:text-gray-900 transition">LinkedIn</a>
      </div>
    </section>
  );
}