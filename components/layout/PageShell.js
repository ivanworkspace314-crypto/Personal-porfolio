import HeroBackground from "@/components/hero/HeroBackground";

export default function PageShell({ children, className = "" }) {
  return (
    <main
      className={`relative min-h-screen bg-black overflow-hidden ml-[397px] w-[calc(100%-397px)] [@media(max-width:1024px)]:ml-[280px] [@media(max-width:1024px)]:w-[calc(100%-280px)] [@media(max-width:768px)]:ml-0 [@media(max-width:768px)]:w-full [@media(max-width:768px)]:pt-[57px] ${className}`}
    >
      <HeroBackground />
      {children}
    </main>
  );
}
