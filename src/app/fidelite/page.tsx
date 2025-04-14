import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Code,
  CreditCard,
  Gift,
  LineChart,
  Shield,
  Wallet,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function FidelitePage() {
  return (
    <div className="fidelite-theme">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#011627] px-4 py-20 text-white md:py-32">
        <div className='absolute inset-0 bg-[url("/placeholder.svg?height=800&width=1600")] bg-cover bg-center opacity-5'></div>
        <div className="container mx-auto grid gap-8 md:grid-cols-2 md:items-center max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 z-10">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Votre carte de fidélité, 100% digitale
            </h1>
            <p className="text-lg md:text-xl">
              Récompensez, analysez, fidélisez : votre programme client en
              quelques clics, sans code, sans plastique.
            </p>
            <Button
              size="lg"
              className="bg-[#C5F500] text-[#011627] hover:bg-[#C5F500]/90"
            >
              Lancer mon programme <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="relative mx-auto h-[400px] w-full max-w-md z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[250px] w-[400px] rounded-xl bg-gradient-to-br from-[#C5F500] to-[#9BE22B] p-6 shadow-2xl transform transition-all duration-500 hover:rotate-3">
              <div className="flex items-start justify-between">
                <div>
                  <div className="mb-2 h-10 w-10 rounded-full bg-white/20"></div>
                  <h3 className="text-lg font-bold text-[#011627]">
                    Café Moka
                  </h3>
                  <p className="text-sm text-[#011627]/80">
                    Programme fidélité
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-[#011627]/80">
                    Points
                  </p>
                  <p className="text-3xl font-bold text-[#011627]">10</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-sm font-medium text-[#011627]/80">
                  Progression
                </p>
                <div className="mt-2 h-4 w-full rounded-full bg-white/30">
                  <div className="h-4 w-[40%] rounded-full bg-[#011627]"></div>
                </div>
                <div className="mt-1 flex justify-between text-xs text-[#011627]/80">
                  <span>Bronze</span>
                  <span>Argent</span>
                  <span>Or</span>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#011627]/80">Membre depuis</p>
                  <p className="font-medium text-[#011627]">Mars 2025</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Wallet className="h-5 w-5 text-[#011627]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute -bottom-16 left-0 right-0 h-32 bg-white"
          style={{ clipPath: "polygon(0 0, 100% 100%, 100% 100%, 0% 100%)" }}
        ></div>
      </section>

      {/* Design Customization Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 md:items-center lg:gap-12">
            <div>
              <div className="mb-4 inline-block rounded-lg bg-[#C5F500]/20 px-3 py-1 text-sm text-[#011627]">
                Personnalisation
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Concevez-la à votre image
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Notre éditeur drag-and-drop vous permet de créer une carte de
                fidélité qui reflète parfaitement votre marque. Choisissez vos
                couleurs, téléchargez votre logo et définissez vos règles de
                points.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#C5F500]/20">
                    <Check className="h-5 w-5 text-[#011627]" />
                  </div>
                  <div>
                    <h3 className="font-bold">Éditeur visuel intuitif</h3>
                    <p className="text-sm text-muted-foreground">
                      Aucune compétence technique requise, tout est visuel
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#C5F500]/20">
                    <Check className="h-5 w-5 text-[#011627]" />
                  </div>
                  <div>
                    <h3 className="font-bold">
                      Règles de points personnalisables
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Définissez votre propre système (ex: 1€ = 1 point)
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#C5F500]/20">
                    <Check className="h-5 w-5 text-[#011627]" />
                  </div>
                  <div>
                    <h3 className="font-bold">Aperçu en temps réel</h3>
                    <p className="text-sm text-muted-foreground">
                      Visualisez les changements instantanément
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative mx-auto h-[400px] w-full max-w-md overflow-hidden rounded-xl border bg-white p-4 shadow-xl">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-bold">Éditeur de carte</h3>
                <Badge className="bg-green-500">Aperçu en direct</Badge>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-lg border p-3">
                    <p className="mb-1 text-xs font-medium">Couleurs</p>
                    <div className="flex space-x-2">
                      <div className="h-6 w-6 rounded-full bg-[#C5F500]"></div>
                      <div className="h-6 w-6 rounded-full bg-[#011627]"></div>
                      <div className="h-6 w-6 rounded-full bg-gray-200"></div>
                      <div className="h-6 w-6 rounded-full bg-white border"></div>
                    </div>
                  </div>
                  <div className="rounded-lg border p-3">
                    <p className="mb-1 text-xs font-medium">Logo</p>
                    <div className="flex items-center">
                      <div className="mr-2 h-8 w-8 rounded bg-gray-100"></div>
                      <Button size="sm" variant="outline" className="text-xs">
                        Changer
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-lg border p-3">
                    <p className="mb-1 text-xs font-medium">Règles</p>
                    <div className="flex items-center">
                      <div className="mr-2 w-12 rounded border p-1 text-center text-xs">
                        1€
                      </div>
                      <span className="mx-2">=</span>
                      <div className="w-12 rounded border p-1 text-center text-xs">
                        1pt
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[300px] rounded-lg border p-3">
                  <p className="mb-2 text-xs font-medium">Aperçu</p>
                  <div className="h-[250px] w-full rounded-lg bg-gradient-to-br from-[#C5F500] to-[#9BE22B] p-3 shadow-md">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="mb-1 h-6 w-6 rounded-full bg-white/20"></div>
                        <p className="text-xs font-bold text-[#011627]">
                          Café Moka
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-[#011627]/80">Points</p>
                        <p className="text-sm font-bold text-[#011627]">10</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Retention Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 md:items-center lg:gap-12">
            <div className="order-2 md:order-1">
              <div className="relative mx-auto h-[400px] w-full max-w-md overflow-hidden rounded-xl bg-white p-6 shadow-xl">
                <div className="mb-6">
                  <h3 className="font-bold">Programme de fidélité Café Moka</h3>
                  <p className="text-sm text-muted-foreground">
                    Progression des clients
                  </p>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="mr-2 h-8 w-8 rounded-full bg-gray-100"></div>
                        <p className="font-medium">Sophie Martin</p>
                      </div>
                      <Badge className="bg-[#C5F500] text-[#011627]">
                        Bronze
                      </Badge>
                    </div>
                    <div className="h-3 w-full rounded-full bg-gray-100">
                      <div className="h-3 w-[40%] rounded-full bg-[#C5F500]"></div>
                    </div>
                    <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                      <span>0</span>
                      <span>50</span>
                      <span>100</span>
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="mr-2 h-8 w-8 rounded-full bg-gray-100"></div>
                        <p className="font-medium">Thomas Dubois</p>
                      </div>
                      <Badge className="bg-gray-300 text-gray-800">
                        Argent
                      </Badge>
                    </div>
                    <div className="h-3 w-full rounded-full bg-gray-100">
                      <div className="h-3 w-[65%] rounded-full bg-gray-300"></div>
                    </div>
                    <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                      <span>0</span>
                      <span>50</span>
                      <span>100</span>
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="mr-2 h-8 w-8 rounded-full bg-gray-100"></div>
                        <p className="font-medium">Julie Lefebvre</p>
                      </div>
                      <Badge className="bg-yellow-400 text-yellow-900">
                        Or
                      </Badge>
                    </div>
                    <div className="h-3 w-full rounded-full bg-gray-100">
                      <div className="h-3 w-[90%] rounded-full bg-yellow-400"></div>
                    </div>
                    <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                      <span>0</span>
                      <span>50</span>
                      <span>100</span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-[#C5F500]/10 p-4">
                  <div>
                    <p className="text-sm font-medium">Taux de fidélisation</p>
                    <p className="text-2xl font-bold">+35%</p>
                  </div>
                  <Button
                    size="sm"
                    className="bg-[#011627] hover:bg-[#011627]/90"
                  >
                    Voir détails
                  </Button>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="mb-4 inline-block rounded-lg bg-[#C5F500]/20 px-3 py-1 text-sm text-[#011627]">
                Fidélisation
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Faites revenir vos clients
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Créez un programme de fidélité qui incite vos clients à revenir.
                Système de points, niveaux de fidélité, bonus
                d&apos;anniversaire et récompenses pour les parrainages.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#C5F500]/20">
                    <Check className="h-5 w-5 text-[#011627]" />
                  </div>
                  <div>
                    <h3 className="font-bold">Système de points flexible</h3>
                    <p className="text-sm text-muted-foreground">
                      Récompensez les achats, visites, partages sur les réseaux
                      sociaux
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#C5F500]/20">
                    <Check className="h-5 w-5 text-[#011627]" />
                  </div>
                  <div>
                    <h3 className="font-bold">Niveaux de fidélité</h3>
                    <p className="text-sm text-muted-foreground">
                      Créez un parcours Bronze → Argent → Or avec avantages
                      croissants
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#C5F500]/20">
                    <Check className="h-5 w-5 text-[#011627]" />
                  </div>
                  <div>
                    <h3 className="font-bold">Récompenses automatiques</h3>
                    <p className="text-sm text-muted-foreground">
                      Envoi automatique de cadeaux pour les anniversaires et
                      étapes clés
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Card Issuance Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <div className="mb-4 inline-block rounded-lg bg-[#C5F500]/20 px-3 py-1 text-sm text-[#011627]">
              Distribution
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Émettez des cartes en quelques secondes
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Plusieurs façons simples de distribuer vos cartes de fidélité
              digitales à vos clients, sans friction et sans délai.
            </p>
          </div>
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#C5F500]/20">
                  <CreditCard className="h-6 w-6 text-[#011627]" />
                </div>
                <h3 className="mb-2 font-bold">QR sur reçu</h3>
                <p className="text-sm text-muted-foreground">
                  Code QR imprimé sur le reçu d&apos;achat pour inscription
                  instantanée
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#C5F500]/20">
                  <Wallet className="h-6 w-6 text-[#011627]" />
                </div>
                <h3 className="mb-2 font-bold">Apple/Google Wallet</h3>
                <p className="text-sm text-muted-foreground">
                  Ajout en un clic aux portefeuilles numériques des smartphones
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#C5F500]/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-[#011627]"
                  >
                    <path d="M11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z" />
                    <path d="M7.5 10.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z" />
                    <path d="M7.5 13.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z" />
                    <path d="M13.5 10.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z" />
                    <path d="M13.5 13.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z" />
                    <path d="M16 6H8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z" />
                  </svg>
                </div>
                <h3 className="mb-2 font-bold">Tag NFC</h3>
                <p className="text-sm text-muted-foreground">
                  Inscription par simple tap du smartphone sur le comptoir
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#C5F500]/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-[#011627]"
                  >
                    <rect width="16" height="13" x="4" y="5" rx="2" />
                    <path d="m19 5-5-5" />
                    <path d="m5 5 5-5" />
                    <path d="M4 18v-5" />
                    <path d="M20 18v-5" />
                    <path d="M12 4v9" />
                    <path d="M12 18v-5" />
                    <path d="M4 12h16" />
                  </svg>
                </div>
                <h3 className="mb-2 font-bold">Import email</h3>
                <p className="text-sm text-muted-foreground">
                  Importez votre base clients existante pour envoi groupé
                </p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Button className="bg-[#011627] hover:bg-[#011627]/90">
                Voir la démo d&apos;inscription{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 md:items-center lg:gap-12">
            <div>
              <div className="mb-4 inline-block rounded-lg bg-[#C5F500]/20 px-3 py-1 text-sm text-[#011627]">
                Analytique
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Mesurez et optimisez
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Suivez vos actifs, identifiez le churn avant qu&apos;il
                n&apos;arrive. Notre tableau de bord vous donne toutes les
                métriques clés pour optimiser votre programme de fidélité.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#C5F500]/20">
                    <Check className="h-5 w-5 text-[#011627]" />
                  </div>
                  <div>
                    <h3 className="font-bold">Valeur client (CLV)</h3>
                    <p className="text-sm text-muted-foreground">
                      Mesurez l&apos;impact de votre programme sur le panier
                      moyen
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#C5F500]/20">
                    <Check className="h-5 w-5 text-[#011627]" />
                  </div>
                  <div>
                    <h3 className="font-bold">Prédiction de churn</h3>
                    <p className="text-sm text-muted-foreground">
                      Identifiez les clients à risque avant qu&apos;ils ne
                      partent
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#C5F500]/20">
                    <Check className="h-5 w-5 text-[#011627]" />
                  </div>
                  <div>
                    <h3 className="font-bold">Rapports personnalisés</h3>
                    <p className="text-sm text-muted-foreground">
                      Exportez vos données au format Excel ou CSV
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative mx-auto h-[400px] w-full max-w-md overflow-hidden rounded-xl bg-white p-6 shadow-xl">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="font-bold">Tableau de bord</h3>
                  <p className="text-sm text-muted-foreground">
                    Café Moka - Avril 2025
                  </p>
                </div>
                <Badge className="bg-green-500">En direct</Badge>
              </div>
              <div className="mb-6 grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-gray-50 p-3">
                  <p className="text-sm text-muted-foreground">
                    Membres actifs
                  </p>
                  <p className="text-2xl font-bold">1,245</p>
                  <p className="text-xs text-green-600">+12% ce mois</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-3">
                  <p className="text-sm text-muted-foreground">CLV moyen</p>
                  <p className="text-2xl font-bold">185€</p>
                  <p className="text-xs text-green-600">+23% vs non-membres</p>
                </div>
              </div>
              <div className="mb-6 h-[150px] rounded-lg bg-gray-50 p-3">
                <p className="mb-2 text-sm font-medium">
                  Évolution des membres
                </p>
                <div className="h-[100px] w-full bg-white rounded-md"></div>
              </div>
              <div className="rounded-lg bg-[#C5F500]/10 p-3">
                <p className="mb-2 text-sm font-medium">Risque de churn</p>
                <div className="grid grid-cols-10 gap-1">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                    <div
                      key={i}
                      className={`h-6 rounded ${
                        i <= 2
                          ? "bg-red-500"
                          : i <= 5
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      }`}
                    ></div>
                  ))}
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  2 clients à haut risque identifiés. Cliquez pour voir les
                  actions recommandées.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 md:items-center lg:gap-12">
            <div className="order-2 md:order-1">
              <div className="relative mx-auto h-[400px] w-full max-w-md overflow-hidden rounded-xl bg-white p-6 shadow-xl">
                <Tabs defaultValue="connectors" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="connectors">Connecteurs</TabsTrigger>
                    <TabsTrigger value="api">API</TabsTrigger>
                  </TabsList>
                  <TabsContent value="connectors" className="mt-4">
                    <p className="mb-4 text-sm text-muted-foreground">
                      Connectez-vous en quelques clics avec nos intégrations
                      prêtes à l&apos;emploi.
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((logo) => (
                        <div
                          key={logo}
                          className="flex h-16 items-center justify-center rounded-lg border p-2"
                        >
                          <div className="text-xs text-gray-400">Logo</div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="api" className="mt-4">
                    <p className="mb-4 text-sm text-muted-foreground">
                      Utilisez notre API REST ou GraphQL pour des intégrations
                      personnalisées.
                    </p>
                    <div className="rounded-lg bg-gray-900 p-3 text-xs text-green-400 font-mono">
                      <pre>
                        {`// Exemple d'ajout de points
fetch('https://api.airlod.com/v1/loyalty/add-points', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    customerId: '12345',
    points: 10,
    reason: 'purchase'
  })
})`}
                      </pre>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <Button variant="outline" size="sm" className="text-xs">
                        Voir la documentation
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="mb-4 inline-block rounded-lg bg-[#C5F500]/20 px-3 py-1 text-sm text-[#011627]">
                Intégrations
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Connectez à votre écosystème
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Intégrez facilement votre programme de fidélité à vos systèmes
                existants. Connecteurs prêts à l&apos;emploi ou API ouverte pour
                une flexibilité totale.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#C5F500]/20">
                    <Check className="h-5 w-5 text-[#011627]" />
                  </div>
                  <div>
                    <h3 className="font-bold">
                      Connecteurs prêts à l&apos;emploi
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Lightspeed, Square, Shopify et bien d&apos;autres
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#C5F500]/20">
                    <Check className="h-5 w-5 text-[#011627]" />
                  </div>
                  <div>
                    <h3 className="font-bold">API REST et GraphQL</h3>
                    <p className="text-sm text-muted-foreground">
                      Documentation complète et SDK pour développeurs
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#C5F500]/20">
                    <Check className="h-5 w-5 text-[#011627]" />
                  </div>
                  <div>
                    <h3 className="font-bold">Webhooks personnalisables</h3>
                    <p className="text-sm text-muted-foreground">
                      Déclenchez des actions dans vos systèmes externes
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-6">
                <Button className="bg-[#011627] hover:bg-[#011627]/90">
                  Explorer les intégrations{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <Badge className="mb-2 bg-[#C5F500] text-[#011627]">
                  Étude de cas
                </Badge>
                <h2 className="text-2xl font-bold">Café Moka</h2>
                <p className="text-muted-foreground">
                  Chaîne de cafés, 5 établissements
                </p>
              </div>
              <div className="h-16 w-16 rounded-full bg-gray-100"></div>
            </div>
            <blockquote className="mb-6 border-l-4 border-[#C5F500] pl-4 italic text-muted-foreground">
              &quot;Depuis le lancement de notre programme de fidélité digital
              avec Airlod, nous avons vu une augmentation de 35% des visites
              répétées en seulement trois mois. Nos clients adorent
              l&apos;expérience mobile et nous avons enfin des données
              exploitables sur leurs habitudes.&quot;
            </blockquote>
            <div className="mb-6 grid grid-cols-3 gap-4">
              <div className="rounded-lg bg-gray-50 p-3 text-center">
                <p className="text-sm text-muted-foreground">
                  Visites répétées
                </p>
                <p className="text-2xl font-bold">+35%</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-3 text-center">
                <p className="text-sm text-muted-foreground">Panier moyen</p>
                <p className="text-2xl font-bold">+18%</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-3 text-center">
                <p className="text-sm text-muted-foreground">ROI</p>
                <p className="text-2xl font-bold">412%</p>
              </div>
            </div>
            <div className="mb-6 h-[150px] rounded-lg bg-gray-50 p-3">
              <p className="mb-2 text-sm font-medium">
                Évolution des visites mensuelles
              </p>
              <div className="h-[100px] w-full bg-white"></div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="mr-3 h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Photo de Marie Dupont"
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">Marie Dupont</p>
                  <p className="text-xs text-muted-foreground">
                    Directrice Marketing, Café Moka
                  </p>
                </div>
              </div>
              <Button className="bg-[#011627] hover:bg-[#011627]/90">
                Lire l&apos;étude complète{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <div className="mb-4 inline-block rounded-lg bg-[#C5F500]/20 px-3 py-1 text-sm text-[#011627]">
              Tarification
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Une tarification qui évolue avec vous
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Choisissez le plan qui correspond à vos besoins actuels et changez
              à tout moment. Paiement mensuel sans engagement.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3 lg:gap-10">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Starter</CardTitle>
                <CardDescription>Pour les petites entreprises</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4">
                  <span className="text-3xl font-bold">29€</span>
                  <span className="text-muted-foreground">/mois</span>
                </div>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-[#011627]" />
                    <span>Jusqu&apos;à 1 000 cartes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-[#011627]" />
                    <span>Personnalisation basique</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-[#011627]" />
                    <span>Intégration QR code</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-[#011627]" />
                    <span>Support par email</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#011627] hover:bg-[#011627]/90">
                  Commencer
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col border-[#C5F500] shadow-lg">
              <CardHeader className="bg-[#C5F500]/10">
                <div className="mb-2 text-center text-sm font-medium text-[#011627]">
                  Populaire
                </div>
                <CardTitle>Growth</CardTitle>
                <CardDescription>
                  Pour les entreprises en croissance
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4">
                  <span className="text-3xl font-bold">79€</span>
                  <span className="text-muted-foreground">/mois</span>
                </div>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-[#011627]" />
                    <span>Jusqu&apos;à 5 000 cartes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-[#011627]" />
                    <span>Personnalisation avancée</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-[#011627]" />
                    <span>Intégration Apple/Google Wallet</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-[#011627]" />
                    <span>Analytique avancée</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-[#011627]" />
                    <span>Intégrations POS</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-[#011627]" />
                    <span>Support prioritaire</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#C5F500] text-[#011627] hover:bg-[#C5F500]/90">
                  Commencer
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>Pour les grandes entreprises</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4">
                  <span className="text-3xl font-bold">Sur mesure</span>
                </div>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-[#011627]" />
                    <span>Cartes illimitées</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-[#011627]" />
                    <span>Personnalisation totale</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-[#011627]" />
                    <span>API dédiée</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-[#011627]" />
                    <span>Intégrations sur mesure</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-[#011627]" />
                    <span>Account manager dédié</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-[#011627]" />
                    <span>SLA garanti</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Contacter les ventes
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <p className="mb-4 text-muted-foreground">
              Tous nos plans incluent un essai gratuit de 14 jours. Annulez à
              tout moment.
            </p>
            <Button
              size="lg"
              className="bg-[#C5F500] text-[#011627] hover:bg-[#C5F500]/90"
            >
              Lancer mon programme <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-8 text-3xl font-bold">Questions fréquentes</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Comment gérer la propriété des données ?
                  </AccordionTrigger>
                  <AccordionContent>
                    Vous restez l&apos;unique propriétaire de toutes les données
                    collectées. Nous ne les utilisons jamais à des fins
                    marketing et vous pouvez les exporter à tout moment au
                    format CSV ou Excel.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    Êtes-vous conforme au RGPD ?
                  </AccordionTrigger>
                  <AccordionContent>
                    Oui, notre plateforme est 100% conforme au RGPD. Nous
                    proposons des outils intégrés pour gérer les consentements,
                    les demandes d&apos;accès et de suppression des données,
                    ainsi que des politiques de confidentialité
                    personnalisables.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Le système fonctionne-t-il hors ligne ?
                  </AccordionTrigger>
                  <AccordionContent>
                    Oui, notre application mobile fonctionne en mode hors ligne.
                    Les transactions sont stockées localement et synchronisées
                    automatiquement dès que la connexion est rétablie.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    Comment migrer depuis des cartes papier ?
                  </AccordionTrigger>
                  <AccordionContent>
                    Nous proposons un processus de migration simple. Vous pouvez
                    soit importer votre base de données existante, soit utiliser
                    notre système de double-scan temporaire qui permet aux
                    clients de scanner leur carte papier pour la convertir en
                    version digitale.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <h2 className="mb-8 text-3xl font-bold">
                Certifications et confiance
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg border p-4 text-center">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 mx-auto">
                    <Shield className="h-6 w-6 text-[#011627]" />
                  </div>
                  <h3 className="font-bold">RGPD Compliant</h3>
                  <p className="text-sm text-muted-foreground">
                    Protection des données
                  </p>
                </div>
                <div className="rounded-lg border p-4 text-center">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 mx-auto">
                    <Code className="h-6 w-6 text-[#011627]" />
                  </div>
                  <h3 className="font-bold">API Ouverte</h3>
                  <p className="text-sm text-muted-foreground">
                    Documentation complète
                  </p>
                </div>
                <div className="rounded-lg border p-4 text-center">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 mx-auto">
                    <Gift className="h-6 w-6 text-[#011627]" />
                  </div>
                  <h3 className="font-bold">+2M</h3>
                  <p className="text-sm text-muted-foreground">
                    Cartes actives
                  </p>
                </div>
                <div className="rounded-lg border p-4 text-center">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 mx-auto">
                    <LineChart className="h-6 w-6 text-[#011627]" />
                  </div>
                  <h3 className="font-bold">99.9%</h3>
                  <p className="text-sm text-muted-foreground">
                    Uptime garanti
                  </p>
                </div>
              </div>
              <div className="mt-8 rounded-lg bg-[#C5F500]/10 p-6">
                <h3 className="mb-4 font-bold">Ils nous font confiance</h3>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((logo) => (
                    <div
                      key={logo}
                      className="h-12 rounded-md bg-white p-2 flex items-center justify-center"
                    >
                      <div className="text-xs text-gray-400">
                        Logo partenaire
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#011627] py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Prêt à fidéliser vos clients ?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Rejoignez les milliers d&apos;entreprises qui ont déjà transformé
            leur relation client avec Airlod Fidélité.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-[#C5F500] text-[#011627] hover:bg-[#C5F500]/90"
            >
              Lancer mon programme
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Voir une démo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#011627] py-12 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-bold">Airlod Fidélité</h3>
              <p className="mb-4 text-sm text-gray-300">
                La solution de fidélisation tout-en-un pour les commerces et
                entreprises de toutes tailles.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Produits</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white">
                    Cartes digitales
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Analytique client
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Intégrations POS
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    API & Développeurs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Ressources</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>contact@airlod.com</li>
                <li>+33 1 23 45 67 89</li>
                <li>
                  123 Avenue de la Fidélité
                  <br />
                  75001 Paris, France
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-300">
            <p>
              &copy; {new Date().getFullYear()} Airlod. Tous droits réservés.
            </p>
            <div className="mt-2 space-x-4">
              <Link href="#" className="hover:text-white">
                Mentions légales
              </Link>
              <Link href="#" className="hover:text-white">
                Politique de confidentialité
              </Link>
              <Link href="#" className="hover:text-white">
                CGU
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="h-14 w-14 rounded-full bg-[#C5F500] p-0 shadow-lg hover:bg-[#C5F500]/90">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-[#011627]"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </Button>
      </div>
    </div>
  );
}
