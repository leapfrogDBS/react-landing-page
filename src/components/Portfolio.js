export default function Portfolio() {
    const projects = [
      {
        id: 1,
        title: 'Project 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id luctus est, et fringilla nulla.',
        image: 'https://example.com/project1.jpg',
        link: 'https://example.com/project1'
      },
      {
        id: 2,
        title: 'Project 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id luctus est, et fringilla nulla.',
        image: 'https://example.com/project1.jpg',
        link: 'https://example.com/project1'
      },
      {
        id: 3,
        title: 'Project 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id luctus est, et fringilla nulla.',
        image: 'https://example.com/project1.jpg',
        link: 'https://example.com/project1'
      }
      // Add more projects as needed
    ];
  
    return (
      <section id="portfolio" className="py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={project.image} alt={project.title} className="h-40 w-full object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  