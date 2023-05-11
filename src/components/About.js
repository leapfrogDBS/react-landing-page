import photo from '../images/david.jpg';
export default function About() {
    return (
        <section id="about" className="p-6">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
            <img className="w-full md:w-1/2 rounded-lg shadow-lg" src={photo} alt="Your face"/>
            <div className="w-full md:w-1/2 space-y-4">
              <p className="text-lg">
                Hello, I'm David, a freelance WordPress developer specialising in custom WordPress theme development. I'm passionate about delivering high-quality, reliable, and performant WordPress themes that ensure an excellent user experience and fast loading times.
              </p>
              <p className="text-lg">
                I've worked with numerous UK-based creative agencies, helping them bring their clients' website designs to life. Recently, I've expanded my skillset to include React, allowing me to create headless WordPress solutions.
              </p>
              <p className="text-lg">
                My mission is to create exceptional websites that meet your unique needs. If you're a creative agency looking to convert Figma designs into bespoke WordPress themes, I'd love to discuss how we can collaborate.
              </p>
            </div>
          </div>
        </section>
      )
    }




