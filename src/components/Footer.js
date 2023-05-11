export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-6">
          <div className="container mx-auto">
            <div className="flex justify-center">
              <p className="text-sm">
                &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      )
}
