export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center">


      {/* Placeholder page for now */}
      <header className="bg-primary text-primary-foreground py-24 px-6 sm:px-10 lg:px-16 rounded-xl shadow-lg w-full max-w-5xl mx-auto animate-fade-in">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight animate-bounce">
            Secure Trade
          </h1>
          <h3 className="text-2xl sm:text-2xl font-bold tracking-tight animate-fade-in-up">
            Your Trusted Escrow Service in Nigeria
          </h3>
          <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto animate-fade-in-up delay-200">
            Buy and sell online with confidence. SecureTrade holds funds securely
            until your transaction is complete, protecting both buyers and sellers.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <p className="text-2xl sm:text-3xl font-bold tracking-tight animate-pulse">Coming Soon</p>
          </div>
        </div>
      </header>

    </div>
  );
}
