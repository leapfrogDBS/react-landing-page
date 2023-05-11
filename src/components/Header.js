import LFLogo from '../images/lf-logo.png'; // replace with your image path

export default function Header() {
  return (
    <header className="bg-blue-500 text-white p-2 flex justify-center">
      <img 
        className="h-20" 
        alt="Leapfrog Digital Business Solutions Logo" 
        src={LFLogo} 
      />
    </header>
  );
}
