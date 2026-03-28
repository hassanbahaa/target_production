import { Phone } from "lucide-react";

const CallButton = () => {
  return (
    <a 
    
      href="tel:+201091611267"
      className="md:hidden fixed bottom-[88px] right-4 z-50 w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 bg-primary animate-fade-in"
      aria-label="Call us"
    >
      <Phone className="w-7 h-7 text-white" />
    </a>
  );
};

export default CallButton;
