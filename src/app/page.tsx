import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-4 text-center">
      <h1 className="mb-6 text-4xl font-bold">Airlod</h1>
      <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        <Link
          href="/sante"
          className="flex h-64 w-full max-w-md flex-col items-center justify-center rounded-xl bg-gradient-to-br from-[#28C4B5] to-[#9BE9DF] p-6 text-white shadow-lg transition-all hover:scale-105 sm:w-64"
        >
          <h2 className="mb-2 text-2xl font-bold">Airlod Santé</h2>
          <p className="text-sm">
            Un simple scan pour alerter, identifier et soigner
          </p>
        </Link>
        <Link
          href="/restau"
          className="flex h-64 w-full max-w-md flex-col items-center justify-center rounded-xl bg-gradient-to-br from-[#FF7360] to-[#FFB89F] p-6 text-white shadow-lg transition-all hover:scale-105 sm:w-64"
        >
          <h2 className="mb-2 text-2xl font-bold">Airlod Restau</h2>
          <p className="text-sm">
            Réservez, placez, servez : gérez votre salle comme un cockpit
          </p>
        </Link>
        <Link
          href="/event"
          className="flex h-64 w-full max-w-md flex-col items-center justify-center rounded-xl bg-gradient-to-br from-[#6C5CE7] to-[#8854FF] p-6 text-white shadow-lg transition-all hover:scale-105 sm:w-64"
        >
          <h2 className="mb-2 text-2xl font-bold">Airlod Event</h2>
          <p className="text-sm">
            Créez, vendez, scannez : prenez le contrôle total de votre événement
          </p>
        </Link>
        <Link
          href="/fidelite"
          className="flex h-64 w-full max-w-md flex-col items-center justify-center rounded-xl bg-gradient-to-br from-[#C5F500] to-[#9BE22B] p-6 text-[#011627] shadow-lg transition-all hover:scale-105 sm:w-64"
        >
          <h2 className="mb-2 text-2xl font-bold">Airlod Fidélité</h2>
          <p className="text-sm">
            Récompensez, analysez, fidélisez : votre programme client en
            quelques clics
          </p>
        </Link>
      </div>
    </div>
  );
}
