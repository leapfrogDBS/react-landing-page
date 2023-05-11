export default function Contact() {
    return (
        <section id="contact" className="py-10">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="mb-4">Have a project in mind? Let's talk!</p>
                <p className="mb-4">Email: example@example.com</p>
                <p className="mb-4">Phone: 123-456-7890</p>
                <p>Address: 123 Main St, City, Country</p>
              </div>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">Your Name</label>
                  <input type="text" id="name" className="border border-gray-300 px-4 py-2 rounded-md w-full" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email Address</label>
                  <input type="email" id="email" className="border border-gray-300 px-4 py-2 rounded-md w-full" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">Message</label>
                  <textarea id="message" className="border border-gray-300 px-4 py-2 rounded-md w-full" rows="4"></textarea>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Submit</button>
              </form>
            </div>
          </div>
        </section>
      );
}
