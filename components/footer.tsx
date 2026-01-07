export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-0">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
          <p>Copyright © {year}. Triananda Fajar Ramadhan. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}