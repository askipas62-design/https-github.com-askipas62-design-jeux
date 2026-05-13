import React from "react";
import { Cookie } from "lucide-react";

export default function Cookies() {
  return (
    <div className="min-h-screen bg-[#FFF8F0] py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white border-4 border-brand-dark rounded-[32px] p-8 md:p-12 shadow-[16px_16px_0px_#1B1B2F]">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12 border-b-4 border-brand-dark pb-12">
            <div className="w-20 h-20 bg-brand-yellow text-brand-dark rounded-2xl flex items-center justify-center shrink-0">
              <Cookie size={40} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-brand-dark uppercase tracking-tight leading-none">Gestion des Cookies</h1>
              <p className="mt-4 text-gray-500 font-mono text-sm uppercase tracking-widest font-bold">Transparence & Respect</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-brand-dark">
            <h2 className="text-2xl font-black uppercase mb-6">C'est quoi un cookie ?</h2>
            <p className="mb-8">
              Un cookie est un petit fichier texte déposé sur votre ordinateur lors de la visite d'un site. Ils nous permettent de faire fonctionner le site correctement et d'améliorer votre expérience.
            </p>

            <h2 className="text-2xl font-black uppercase mb-6">Quels cookies utilisons-nous ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="p-6 bg-brand-cream rounded-2xl border-2 border-brand-dark">
                <h3 className="font-black uppercase mb-2">Cookies Essentiels</h3>
                <p className="text-sm opacity-80">Indispensables pour maintenir votre session ouverte, gérer votre panier et assurer la sécurité de vos transactions.</p>
              </div>
              <div className="p-6 bg-brand-cream rounded-2xl border-2 border-brand-dark opacity-50">
                <h3 className="font-black uppercase mb-2">Cookies Marketing</h3>
                <p className="text-sm">Non utilisés sur Appiotti Game Shop. Nous ne revendons pas vos données et ne faisons pas de publicité ciblée envahissante.</p>
              </div>
            </div>

            <h2 className="text-2xl font-black uppercase mb-6">Comment les gérer ?</h2>
            <p className="mb-8 font-medium">
              Vous pouvez configurer votre navigateur pour bloquer les cookies, mais attention : le panier et la connexion à votre compte ne fonctionneront plus correctement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
