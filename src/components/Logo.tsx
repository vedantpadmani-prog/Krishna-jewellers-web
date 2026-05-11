import logo from "@/assets/logo.jpeg";

export function Logo({ className = "h-12" }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="Krishna Jewellers Logo"
      className={`${className} w-auto rounded-md object-contain shadow-soft ring-1 ring-[color:var(--gold)]/40`}
    />
  );
}
