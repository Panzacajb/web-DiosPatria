export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <p className="mb-2">© {new Date().getFullYear()} Dios, Patria y Familia</p>

        <a
          href="https://www.instagram.com/diospatriayfamiliaobra"
          target="_blank"
          rel="noopener noreferrer"
          className="text-light text-decoration-none"
        >
          Seguinos en Instagram 
        </a>        
      </div>
    </footer>
  );
}
