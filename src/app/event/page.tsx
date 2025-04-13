import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Clock,
  Download,
  Star,
  Users,
  Zap,
  Shield,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
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

export default function EventPage() {
  return (
    <div className="event-theme">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#6C5CE7] to-[#8854FF] px-4 py-20 text-white md:py-32">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto grid gap-8 md:grid-cols-2 md:items-center max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 z-10">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Votre événement, vos règles
            </h1>
            <p className="text-lg md:text-xl">
              Créez, vendez, scannez : prenez le contrôle total de votre
              événement sans intermédiaire ni frais cachés.
            </p>
            <Button
              size="lg"
              className="bg-[#00E0FF] text-[#011627] hover:bg-[#00E0FF]/90"
            >
              Créer mon événement gratuit{" "}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="relative mx-auto h-[500px] w-full max-w-md z-10">
            <div className="absolute top-0 left-0 right-0 h-[400px] w-full overflow-hidden rounded-xl shadow-2xl">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Affiche d'événement vibrante"
                width={300}
                height={400}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="absolute bottom-0 right-0 h-[300px] w-[220px] overflow-hidden rounded-xl bg-white p-4 shadow-2xl">
              <div className="mb-4 text-center">
                <h3 className="text-lg font-bold text-gray-900">
                  Festival Électro
                </h3>
                <p className="text-sm text-gray-600">15 Avril 2025 • 20:00</p>
              </div>
              <div className="mx-auto mb-4 h-[180px] w-[180px] bg-gray-100 flex items-center justify-center rounded-lg">
                <div className="h-32 w-32 bg-gray-200 flex items-center justify-center text-xs text-gray-500">
                  QR Code Ticket
                </div>
              </div>
              <div className="text-center text-sm text-gray-600">
                <p>Scan pour valider l'entrée</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute -bottom-16 left-0 right-0 h-32 bg-white"
          style={{ clipPath: "polygon(0 0, 100% 100%, 100% 100%, 0% 100%)" }}
        ></div>
      </section>

      {/* 2-Minute Setup Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 md:items-center lg:gap-12">
            <div>
              <div className="mb-4 inline-block rounded-lg bg-[#6C5CE7]/10 px-3 py-1 text-sm text-[#6C5CE7]">
                Configuration rapide
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Prêt en 2 minutes chrono
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Entrez simplement quatre informations (titre, date, lieu,
                visuel) et regardez votre page de billetterie se construire en
                temps réel. Aucune compétence technique requise.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#6C5CE7]/10">
                    <Check className="h-5 w-5 text-[#6C5CE7]" />
                  </div>
                  <div>
                    <h3 className="font-bold">Aperçu en direct</h3>
                    <p className="text-sm text-muted-foreground">
                      Visualisez exactement ce que verront vos participants
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#6C5CE7]/10">
                    <Check className="h-5 w-5 text-[#6C5CE7]" />
                  </div>
                  <div>
                    <h3 className="font-bold">Personnalisation complète</h3>
                    <p className="text-sm text-muted-foreground">
                      Adaptez les couleurs et le style à votre image de marque
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#6C5CE7]/10">
                    <Check className="h-5 w-5 text-[#6C5CE7]" />
                  </div>
                  <div>
                    <h3 className="font-bold">Mise en ligne instantanée</h3>
                    <p className="text-sm text-muted-foreground">
                      URL personnalisée prête à être partagée immédiatement
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative mx-auto h-[400px] w-full max-w-md overflow-hidden rounded-xl border bg-white p-4 shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-500">
                Animation de l'assistant de création d'événement
              </div>
              <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-[#6C5CE7]/10 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">
                      Temps moyen de configuration
                    </p>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-[#6C5CE7]" />
                      <p className="text-2xl font-bold text-[#6C5CE7]">2:15</p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="bg-[#6C5CE7] hover:bg-[#6C5CE7]/90"
                  >
                    Essayer maintenant
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Comparison Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <div className="mb-4 inline-block rounded-lg bg-[#6C5CE7]/10 px-3 py-1 text-sm text-[#6C5CE7]">
              Économies réelles
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Conservez tous vos revenus
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Dites adieu aux commissions exorbitantes des plateformes
              traditionnelles. Avec Airlod Event, vous gardez plus d'argent dans
              votre poche.
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="mr-3 h-12 w-12 rounded-full bg-[#6C5CE7]/10 flex items-center justify-center">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="Logo Airlod"
                        width={40}
                        height={40}
                        className="h-8 w-8"
                      />
                    </div>
                    <h3 className="text-xl font-bold">Airlod Event</h3>
                  </div>
                  <Badge className="bg-[#6C5CE7]">3,5%</Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Prix du billet</span>
                    <span className="font-bold">100,00 €</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Commission</span>
                    <span className="font-bold text-[#6C5CE7]">-3,50 €</span>
                  </div>
                  <div className="flex items-center justify-between border-t pt-2">
                    <span>Vous recevez</span>
                    <span className="text-xl font-bold">96,50 €</span>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="mr-3 h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="Logo Compétiteur"
                        width={40}
                        height={40}
                        className="h-8 w-8"
                      />
                    </div>
                    <h3 className="text-xl font-bold">Compétiteur</h3>
                  </div>
                  <Badge className="bg-gray-500">10%</Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Prix du billet</span>
                    <span className="font-bold">100,00 €</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Commission</span>
                    <span className="font-bold text-red-500">-10,00 €</span>
                  </div>
                  <div className="flex items-center justify-between border-t pt-2">
                    <span>Vous recevez</span>
                    <span className="text-xl font-bold">90,00 €</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 rounded-xl bg-[#00E0FF]/10 p-6 text-center">
              <div className="mb-2 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                +6,50 € par billet
              </div>
              <p className="text-lg font-bold">
                Pour un événement de 500 personnes, c'est{" "}
                <span className="text-green-600">3 250 € d'économies</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 md:items-center lg:gap-12">
            <div className="order-2 md:order-1">
              <div className="relative mx-auto h-[400px] w-full max-w-md overflow-hidden rounded-xl border bg-white p-4 shadow-xl">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-bold">
                    Tableau de bord - Festival Électro
                  </h3>
                  <div className="flex space-x-2">
                    <Badge className="bg-[#6C5CE7]">En direct</Badge>
                    <Badge variant="outline">Exporter</Badge>
                  </div>
                </div>
                <div className="mb-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Billets vendus</span>
                    <span className="font-bold">387 / 500</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-100">
                    <div className="h-2 w-[77%] rounded-full bg-[#6C5CE7]"></div>
                  </div>
                </div>
                <div className="mb-6 h-[180px] w-full bg-gray-50 rounded-lg flex items-center justify-center">
                  <div className="text-sm text-gray-500">
                    Graphique des ventes en temps réel
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">Dernières ventes</span>
                    <span className="text-[#6C5CE7]">Voir tout</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between rounded-lg border p-2">
                      <div>
                        <p className="font-medium">Sophie Martin</p>
                        <p className="text-xs text-muted-foreground">
                          Il y a 2 min
                        </p>
                      </div>
                      <Badge className="bg-green-500">Payé</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="mb-4 inline-block rounded-lg bg-[#6C5CE7]/10 px-3 py-1 text-sm text-[#6C5CE7]">
                Gestion centralisée
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Tout dans un seul tableau de bord
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Suivez vos ventes en temps réel, exportez vos données et gérez
                vos participants depuis une interface intuitive et puissante.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#6C5CE7]/10">
                    <Check className="h-5 w-5 text-[#6C5CE7]" />
                  </div>
                  <div>
                    <h3 className="font-bold">Mises à jour en temps réel</h3>
                    <p className="text-sm text-muted-foreground">
                      Graphiques et statistiques actualisés toutes les 15
                      secondes
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#6C5CE7]/10">
                    <Check className="h-5 w-5 text-[#6C5CE7]" />
                  </div>
                  <div>
                    <h3 className="font-bold">Exportation facile</h3>
                    <p className="text-sm text-muted-foreground">
                      Téléchargez vos données au format CSV ou Excel en un clic
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#6C5CE7]/10">
                    <Check className="h-5 w-5 text-[#6C5CE7]" />
                  </div>
                  <div>
                    <h3 className="font-bold">Paiements instantanés</h3>
                    <p className="text-sm text-muted-foreground">
                      Versements Stripe automatiques sur votre compte bancaire
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-6">
                <Button className="bg-[#6C5CE7] hover:bg-[#6C5CE7]/90">
                  Découvrir le tableau de bord{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Day-of-Show Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 md:items-center lg:gap-12">
            <div>
              <div className="mb-4 inline-block rounded-lg bg-[#6C5CE7]/10 px-3 py-1 text-sm text-[#6C5CE7]">
                Le jour J
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Super-pouvoirs à l'entrée
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                À l'entrée, vos bénévoles scannent le QR avec l'app Airlod
                Event, la jauge de capacité passe de 0% à 100% en temps réel.
                Aucun matériel supplémentaire nécessaire.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#6C5CE7]/10">
                    <Check className="h-5 w-5 text-[#6C5CE7]" />
                  </div>
                  <div>
                    <h3 className="font-bold">Scan ultra-rapide</h3>
                    <p className="text-sm text-muted-foreground">
                      Validation en moins de 0,5 seconde, même avec une mauvaise
                      connexion
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#6C5CE7]/10">
                    <Check className="h-5 w-5 text-[#6C5CE7]" />
                  </div>
                  <div>
                    <h3 className="font-bold">Mode hors-ligne</h3>
                    <p className="text-sm text-muted-foreground">
                      Fonctionne sans internet et se synchronise automatiquement
                      plus tard
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#6C5CE7]/10">
                    <Check className="h-5 w-5 text-[#6C5CE7]" />
                  </div>
                  <div>
                    <h3 className="font-bold">Anti-fraude intégré</h3>
                    <p className="text-sm text-muted-foreground">
                      Détection des doublons et des billets contrefaits en temps
                      réel
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative mx-auto h-[500px] w-full max-w-md">
              <div className="absolute top-0 right-0 h-[300px] w-[200px] overflow-hidden rounded-xl bg-white p-4 shadow-xl">
                <div className="mb-4 text-center">
                  <h3 className="text-lg font-bold text-gray-900">Scanner</h3>
                  <p className="text-sm text-amber-600">Prêt à valider</p>
                </div>
                <div className="mx-auto mb-4 h-[180px] w-[180px] bg-gray-100 flex items-center justify-center rounded-lg">
                  <div className="text-xs text-gray-500">Caméra active</div>
                </div>
                <div className="text-center">
                  <Badge className="bg-green-500">Prêt</Badge>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-[350px] w-[250px] overflow-hidden rounded-xl bg-white p-4 shadow-xl">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    Jauge en direct
                  </h3>
                  <p className="text-sm text-gray-600">Festival Électro</p>
                </div>
                <div className="mb-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Capacité</span>
                    <span className="font-bold">387 / 500</span>
                  </div>
                  <div className="h-4 w-full rounded-full bg-gray-100">
                    <div className="h-4 w-[77%] rounded-full bg-[#6C5CE7]"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-lg bg-gray-50 p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Entrées</span>
                      <span className="font-bold text-green-500">+24</span>
                    </div>
                    <p className="text-xs text-amber-600">Dernière heure</p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Taux de scan</span>
                      <span className="font-bold">77%</span>
                    </div>
                    <p className="text-xs text-amber-600">Des billets vendus</p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Temps moyen</span>
                      <span className="font-bold">0.4s</span>
                    </div>
                    <p className="text-xs text-amber-600">Par validation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <div className="mb-4 inline-block rounded-lg bg-[#6C5CE7]/10 px-3 py-1 text-sm text-[#6C5CE7]">
              Témoignages
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Ils ont choisi Airlod Event
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Découvrez comment des organisateurs comme vous ont transformé leur
              façon de gérer leurs événements.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 lg:gap-10">
            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-4 h-40 overflow-hidden rounded-md bg-gray-100">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Soirée techno"
                    width={300}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardTitle>Nuit Techno Underground</CardTitle>
                <CardDescription>Club Le Tunnel, Paris</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="mb-4 italic text-muted-foreground">
                  "Avant Airlod, je passais 10h par semaine à gérer la
                  billetterie. Maintenant, c'est 1h maximum, et j'économise 800€
                  par mois en commissions."
                </blockquote>
                <div className="flex items-center">
                  <div className="mr-3 h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Photo de Marc Dubois"
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold">Marc Dubois</p>
                    <p className="text-xs text-muted-foreground">
                      Promoteur, 2 événements/mois
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-4 h-40 overflow-hidden rounded-md bg-gray-100">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Gala de charité"
                    width={300}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardTitle>Gala Annuel de Charité</CardTitle>
                <CardDescription>Fondation Espoir, Lyon</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="mb-4 italic text-muted-foreground">
                  "La simplicité du système nous a permis de vendre 200 billets
                  de plus que l'année dernière. Les frais économisés ont été
                  directement reversés à notre cause."
                </blockquote>
                <div className="flex items-center">
                  <div className="mr-3 h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Photo de Claire Moreau"
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold">Claire Moreau</p>
                    <p className="text-xs text-muted-foreground">
                      Directrice d'événements, Fondation Espoir
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-4 h-40 overflow-hidden rounded-md bg-gray-100">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Atelier UX"
                    width={300}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardTitle>Workshop UX Design</CardTitle>
                <CardDescription>Digital Campus, Bordeaux</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="mb-4 italic text-muted-foreground">
                  "L'application de scan a transformé notre accueil. Plus de
                  files d'attente, plus de stress. Nos participants sont ravis
                  et nous aussi !"
                </blockquote>
                <div className="flex items-center">
                  <div className="mr-3 h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Photo de Thomas Laurent"
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold">Thomas Laurent</p>
                    <p className="text-xs text-muted-foreground">
                      Organisateur, 4 workshops/mois
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Free Trial Section */}
      <section className="bg-[#6C5CE7]/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Essayez gratuitement
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            0 € pour 50 tickets, aucune carte bancaire nécessaire. Créez votre
            premier événement en quelques minutes.
          </p>
          <div className="mx-auto max-w-md rounded-xl bg-white p-8 shadow-lg">
            <div className="mb-6 text-left">
              <h3 className="mb-2 text-xl font-bold">Plan Gratuit</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-4 w-4 text-[#6C5CE7]" />
                  <span>Jusqu'à 50 billets</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-4 w-4 text-[#6C5CE7]" />
                  <span>Toutes les fonctionnalités incluses</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-4 w-4 text-[#6C5CE7]" />
                  <span>Application de scan illimitée</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-4 w-4 text-[#6C5CE7]" />
                  <span>Support par email</span>
                </li>
              </ul>
            </div>
            <Button
              size="lg"
              className="w-full bg-[#6C5CE7] hover:bg-[#6C5CE7]/90"
            >
              Créer mon événement gratuit{" "}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-8 text-3xl font-bold">Questions fréquentes</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Comment sont gérés les remboursements ?
                  </AccordionTrigger>
                  <AccordionContent>
                    Vous pouvez configurer votre politique de remboursement
                    (complet, partiel ou aucun) et la durée pendant laquelle les
                    remboursements sont autorisés. Les remboursements sont
                    traités instantanément et peuvent être initiés par vous ou
                    automatiquement selon vos règles.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    Quand sont versés les paiements ?
                  </AccordionTrigger>
                  <AccordionContent>
                    Les paiements sont versés sur votre compte bancaire dans les
                    48 heures suivant la transaction. Vous pouvez également
                    configurer des versements hebdomadaires ou mensuels selon
                    vos préférences.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Peut-on créer un plan de salle avec places numérotées ?
                  </AccordionTrigger>
                  <AccordionContent>
                    Oui, notre éditeur de plan de salle vous permet de créer
                    facilement des configurations avec places numérotées. Vous
                    pouvez définir différentes zones, prix et disponibilités
                    pour chaque section.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    Quelles sont les mesures de sécurité pour les données ?
                  </AccordionTrigger>
                  <AccordionContent>
                    Nous sommes conformes RGPD et PCI DSS. Toutes les données
                    sont chiffrées en transit et au repos. Nous n'utilisons
                    jamais les données de vos participants à des fins marketing
                    et vous en restez l'unique propriétaire.
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
                    <Shield className="h-6 w-6 text-[#6C5CE7]" />
                  </div>
                  <h3 className="font-bold">RGPD Compliant</h3>
                  <p className="text-sm text-muted-foreground">
                    Protection des données
                  </p>
                </div>
                <div className="rounded-lg border p-4 text-center">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 mx-auto">
                    <Zap className="h-6 w-6 text-[#6C5CE7]" />
                  </div>
                  <h3 className="font-bold">PCI DSS</h3>
                  <p className="text-sm text-muted-foreground">
                    Paiements sécurisés
                  </p>
                </div>
                <div className="rounded-lg border p-4 text-center">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 mx-auto">
                    <Users className="h-6 w-6 text-[#6C5CE7]" />
                  </div>
                  <h3 className="font-bold">+500 000</h3>
                  <p className="text-sm text-muted-foreground">
                    Participants satisfaits
                  </p>
                </div>
                <div className="rounded-lg border p-4 text-center">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 mx-auto">
                    <Download className="h-6 w-6 text-[#6C5CE7]" />
                  </div>
                  <h3 className="font-bold">99.9%</h3>
                  <p className="text-sm text-muted-foreground">
                    Uptime garanti
                  </p>
                </div>
              </div>
              <div className="mt-8 rounded-lg bg-[#6C5CE7]/10 p-6">
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
      <section className="bg-gradient-to-br from-[#6C5CE7] to-[#8854FF] py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Prêt à révolutionner vos événements ?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Rejoignez les milliers d'organisateurs qui ont déjà adopté Airlod
            Event pour simplifier leur billetterie et maximiser leurs revenus.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-[#00E0FF] text-[#011627] hover:bg-[#00E0FF]/90"
            >
              Créer mon événement gratuit
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
              <h3 className="mb-4 text-lg font-bold">Airlod Event</h3>
              <p className="mb-4 text-sm text-gray-300">
                La solution de billetterie tout-en-un pour les organisateurs
                d'événements indépendants.
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
                    Billetterie en ligne
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Application de scan
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Tableau de bord
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    API & Intégrations
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
                  123 Avenue des Événements
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
        <Button className="h-14 w-14 rounded-full bg-[#00E0FF] p-0 shadow-lg hover:bg-[#00E0FF]/90">
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
