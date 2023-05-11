export default function Testimonials() {
    const testimonials = [
        {
          id: 1,
          quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id luctus est, et fringilla nulla.',
          author: 'John Doe',
          position: 'CEO, Company Name'
        },
        {
            id: 2,
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id luctus est, et fringilla nulla.',
            author: 'Jane Doe',
            position: 'CEO, Company Name'
          },
          {
            id: 3,
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id luctus est, et fringilla nulla.',
            author: 'John Smith',
            position: 'CEO, Company Name'
          },
        // Add more testimonials as needed
      ];
    
      return (
        <section id="testimonials" className="py-10 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6">
                  <p className="text-lg mb-4">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-4">
                      <img src="https://example.com/avatar.jpg" alt={testimonial.author} className="h-10 w-10 rounded-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold">{testimonial.author}</h4>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )
}

