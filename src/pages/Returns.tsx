import React from "react";
import { RefreshCcw, PackageCheck, AlertCircle } from "lucide-react";

export default function Returns() {
  return (
    <div className="min-h-screen bg-[#FFF8F0] py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white border-4 border-brand-dark rounded-[32px] p-8 md:p-12 shadow-[16px_16px_0px_#1B1B2F]">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12 border-b-4 border-brand-dark pb-12">
            <div className="w-20 h-20 bg-brand-green text-white rounded-2xl flex items-center justify-center shrink-0">
              <RefreshCcw size={40} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-brand-dark uppercase tracking-tight leading-none">Retours & Remboursements</h1>
              <p className="mt-4 text-gray-500 font-mono text-sm uppercase tracking-widest font-bold">Votre satisfaction est notre priorité</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center p-6 bg-brand-cream/50 rounded-2xl">
              <div className="w-12 h-12 bg-white border-2 border-brand-dark rounded-full flex items-center justify-center mb-4 font-black">14</div>
              <h3 className="font-black uppercase text-sm mb-2">Jours pour changer d'avis</h3>
              <p className="text-xs opacity-70">Délai légal de rétractation après réception.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-brand-cream/50 rounded-2xl">
              <div className="w-12 h-12 bg-white border-2 border-brand-dark rounded-full flex items-center justify-center mb-4 text-brand-green"><PackageCheck size={24} /></div>
              <h3 className="font-black uppercase text-sm mb-2">État Neuf Requis</h3>
              <p className="text-xs opacity-70">Les produits doivent être scellés et non ouverts.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-brand-cream/50 rounded-2xl">
              <div className="w-12 h-12 bg-white border-2 border-brand-dark rounded-full flex items-center justify-center mb-4 text-brand-orange"><AlertCircle size={24} /></div>
              <h3 className="font-black uppercase text-sm mb-2">Frais de Retour</h3>
              <p className="text-xs opacity-70">À la charge du client, sauf erreur de notre part.</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-brand-dark">
            <h2 className="text-2xl font-black uppercase mb-6">La Procédure</h2>
            <ol className="list-decimal ml-8 space-y-4 mb-10">
              <li className="font-bold">Contactez-nous via le formulaire de contact pour nous prévenir.</li>
              <li className="font-bold">Emballez soigneusement le produit dans son emballage d'origine.</li>
              <li className="font-bold">Expédiez le colis à l'adresse indiquée sur votre facture.</li>
              <li className="font-bold">Dès réception et vérification, nous effectuons le remboursement sous 7 jours.</li>
            </ol>
            
            <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-lg">
              <p className="text-red-800 text-sm font-medium">
                <strong>Attention :</strong> Pour les cartes Pokémon, tout produit dont le scellé (plastique d'origine) a été retiré ne pourra être repris pour des raisons évidentes de sécurité des collections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
