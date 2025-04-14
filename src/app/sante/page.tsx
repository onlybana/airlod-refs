import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Clock,
  Heart,
  Shield,
  Star,
  User,
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

export default function SantePage() {
  return (
    <div className="sante-theme">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#28C4B5] to-[#9BE9DF] px-4 py-20 text-white md:py-32">
        <div className="container mx-auto grid gap-8 md:grid-cols-2 md:items-center max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Un simple scan pour alerter, identifier et soigner
            </h1>
            <p className="text-lg md:text-xl">
              Badge NFC + cloud database = informations vitales en quelques
              secondes
            </p>
            <Button
              size="lg"
              className="bg-white text-[#28C4B5] hover:bg-white/90"
            >
              Demander une démo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="relative mx-auto h-[400px] w-full max-w-md">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Bracelet NFC Airlod Santé et écran d'urgence"
              width={400}
              height={400}
              className="object-contain"
              priority
            />
          </div>
        </div>
        <div
          className="absolute -bottom-16 left-0 right-0 h-32 bg-white"
          style={{ clipPath: "polygon(0 0, 100% 100%, 100% 100%, 0% 100%)" }}
        ></div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Comment ça fonctionne
          </h2>
          <div className="grid gap-8 md:grid-cols-3 lg:gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#28C4B5]/10">
                <Shield className="h-10 w-10 text-[#28C4B5]" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Scanner</h3>
              <p className="text-muted-foreground">
                Scannez le bracelet NFC ou le tag de chambre avec n&apos;importe
                quel smartphone
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#28C4B5]/10">
                <Heart className="h-10 w-10 text-[#28C4B5]" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Alerter</h3>
              <p className="text-muted-foreground">
                Accédez instantanément aux informations d&apos;urgence et
                contacts prioritaires
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#28C4B5]/10">
                <User className="h-10 w-10 text-[#28C4B5]" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Soigner</h3>
              <p className="text-muted-foreground">
                Consultez le dossier médical complet pour une prise en charge
                optimale
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Modules */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Nos solutions
          </h2>
          <div className="grid gap-8 md:grid-cols-3 lg:gap-10">
            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle>Bracelet NFC</CardTitle>
                <CardDescription>
                  Identification rapide et accès aux informations d&apos;urgence
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 h-48 overflow-hidden rounded-md bg-gray-100">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Bracelet NFC Airlod"
                    width={300}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#28C4B5]" /> Résistant
                    à l&apos;eau
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#28C4B5]" /> Batterie
                    non requise
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#28C4B5]" />{" "}
                    Personnalisable
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle>Tag Chambre</CardTitle>
                <CardDescription>
                  Identification des patients en milieu hospitalier
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 h-48 overflow-hidden rounded-md bg-gray-100">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Tag Chambre Airlod"
                    width={300}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#28C4B5]" />{" "}
                    Installation facile
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#28C4B5]" /> Compatible
                    avec tous les lits
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#28C4B5]" />{" "}
                    Traçabilité des soins
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle>Plateforme SAAS</CardTitle>
                <CardDescription>
                  Gestion centralisée des dossiers médicaux
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 h-48 overflow-hidden rounded-md bg-gray-100">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Plateforme SAAS Airlod"
                    width={300}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#28C4B5]" /> Accès
                    sécurisé
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#28C4B5]" /> Mise à
                    jour en temps réel
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#28C4B5]" /> Analytique
                    avancée
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Screen Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 md:items-center lg:gap-12">
            <div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Écran d&apos;urgence
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Interface intuitive et accessible permettant d&apos;accéder
                rapidement aux informations vitales du patient en cas
                d&apos;urgence.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#28C4B5]/10">
                    <Check className="h-5 w-5 text-[#28C4B5]" />
                  </div>
                  <div>
                    <h3 className="font-bold">Haute visibilité</h3>
                    <p className="text-sm text-muted-foreground">
                      Interface à fort contraste pour une lisibilité optimale
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#28C4B5]/10">
                    <Check className="h-5 w-5 text-[#28C4B5]" />
                  </div>
                  <div>
                    <h3 className="font-bold">Mode hors-ligne</h3>
                    <p className="text-sm text-muted-foreground">
                      Accès aux informations critiques même sans connexion
                      internet
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#28C4B5]/10">
                    <Check className="h-5 w-5 text-[#28C4B5]" />
                  </div>
                  <div>
                    <h3 className="font-bold">Conforme WCAG</h3>
                    <p className="text-sm text-muted-foreground">
                      Respecte les normes d&apos;accessibilité pour tous les
                      utilisateurs
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mx-auto h-[500px] w-full max-w-md overflow-hidden rounded-xl shadow-xl">
              <Image
                src="/placeholder.svg?height=500&width=300"
                alt="Écran d'urgence Airlod Santé"
                width={300}
                height={500}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/90 p-4 shadow-lg backdrop-blur">
                <div className="mb-2 flex items-center">
                  <div className="mr-2 h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Photo patient"
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Jean Dupont</h4>
                    <p className="text-xs text-muted-foreground">
                      Groupe sanguin: A+
                    </p>
                  </div>
                </div>
                <div className="mb-2 grid grid-cols-2 gap-2">
                  <Button
                    size="sm"
                    className="bg-[#E03E3E] hover:bg-[#E03E3E]/90"
                  >
                    Contact urgence 1
                  </Button>
                  <Button
                    size="sm"
                    className="bg-[#E03E3E] hover:bg-[#E03E3E]/90"
                  >
                    Contact urgence 2
                  </Button>
                </div>
                <div className="text-xs">
                  <p className="font-bold">Allergies:</p>
                  <p>Pénicilline, Arachides</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Database & Traceability */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Sécurité et traçabilité
          </h2>
          <div className="grid gap-8 md:grid-cols-2 md:items-center lg:gap-12">
            <div className="order-2 md:order-1">
              <div className="relative mx-auto h-[400px] w-full max-w-md overflow-hidden rounded-xl bg-white p-4 shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Dashboard Airlod Santé"
                  width={600}
                  height={400}
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="mb-6 text-2xl font-bold">
                Une plateforme sécurisée et conforme
              </h3>
              <p className="mb-6 text-muted-foreground">
                Toutes les données sont chiffrées et stockées selon les normes
                les plus strictes en matière de protection des données de santé.
              </p>
              <div className="mb-8 grid grid-cols-2 gap-4">
                <div className="rounded-lg border bg-white p-4 text-center shadow-sm">
                  <p className="font-bold">AES-256</p>
                  <p className="text-xs text-muted-foreground">
                    Chiffrement avancé
                  </p>
                </div>
                <div className="rounded-lg border bg-white p-4 text-center shadow-sm">
                  <p className="font-bold">RGPD</p>
                  <p className="text-xs text-muted-foreground">Conforme</p>
                </div>
                <div className="rounded-lg border bg-white p-4 text-center shadow-sm">
                  <p className="font-bold">HDS</p>
                  <p className="text-xs text-muted-foreground">
                    Hébergeur de Données de Santé
                  </p>
                </div>
                <div className="rounded-lg border bg-white p-4 text-center shadow-sm">
                  <p className="font-bold">ISO 27001</p>
                  <p className="text-xs text-muted-foreground">Certifié</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-[#28C4B5]" />
                  <p>Historique complet des accès et modifications</p>
                </div>
                <div className="flex items-center">
                  <Shield className="mr-2 h-5 w-5 text-[#28C4B5]" />
                  <p>
                    Authentification multi-facteurs pour tous les utilisateurs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Histoire de cas
          </h2>
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 grid gap-4 md:grid-cols-4">
              <div className="overflow-hidden rounded-xl bg-gray-100 p-4 shadow-sm">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Étape 1"
                  width={200}
                  height={200}
                  className="mb-2 h-40 w-full rounded-lg object-cover"
                />
                <p className="text-sm">
                  Marie, 78 ans, porte un bracelet Airlod Santé
                </p>
              </div>
              <div className="overflow-hidden rounded-xl bg-gray-100 p-4 shadow-sm">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Étape 2"
                  width={200}
                  height={200}
                  className="mb-2 h-40 w-full rounded-lg object-cover"
                />
                <p className="text-sm">Chute à domicile, perte de conscience</p>
              </div>
              <div className="overflow-hidden rounded-xl bg-gray-100 p-4 shadow-sm">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Étape 3"
                  width={200}
                  height={200}
                  className="mb-2 h-40 w-full rounded-lg object-cover"
                />
                <p className="text-sm">Les secours scannent son bracelet</p>
              </div>
              <div className="overflow-hidden rounded-xl bg-gray-100 p-4 shadow-sm">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Étape 4"
                  width={200}
                  height={200}
                  className="mb-2 h-40 w-full rounded-lg object-cover"
                />
                <p className="text-sm">Prise en charge rapide et adaptée</p>
              </div>
            </div>
            <div className="text-center">
              <Button variant="outline" className="gap-2">
                Voir la vidéo complète <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & ROI */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Tarifs et retour sur investissement
          </h2>
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 grid gap-8 md:grid-cols-3 lg:gap-10">
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>Pour les petites structures</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4">
                    <span className="text-3xl font-bold">499€</span>
                    <span className="text-muted-foreground">/mois</span>
                  </div>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-start">
                      <Check className="mr-2 mt-1 h-4 w-4 text-[#28C4B5]" />
                      <span>Jusqu&apos;à 50 patients</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-1 h-4 w-4 text-[#28C4B5]" />
                      <span>10 bracelets NFC inclus</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-1 h-4 w-4 text-[#28C4B5]" />
                      <span>Support par email</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#28C4B5] hover:bg-[#28C4B5]/90">
                    Demander une démo
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col border-[#28C4B5] shadow-lg">
                <CardHeader className="bg-[#28C4B5]/10">
                  <div className="mb-2 text-center text-sm font-medium text-[#28C4B5]">
                    Recommandé
                  </div>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>
                    Pour les cliniques et hôpitaux
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4">
                    <span className="text-3xl font-bold">999€</span>
                    <span className="text-muted-foreground">/mois</span>
                  </div>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-start">
                      <Check className="mr-2 mt-1 h-4 w-4 text-[#28C4B5]" />
                      <span>Jusqu&apos;à 200 patients</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-1 h-4 w-4 text-[#28C4B5]" />
                      <span>30 bracelets NFC inclus</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-1 h-4 w-4 text-[#28C4B5]" />
                      <span>10 tags de chambre</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-1 h-4 w-4 text-[#28C4B5]" />
                      <span>Support téléphonique 7j/7</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#28C4B5] hover:bg-[#28C4B5]/90">
                    Demander une démo
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>
                    Pour les grands établissements
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4">
                    <span className="text-3xl font-bold">Sur mesure</span>
                  </div>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-start">
                      <Check className="mr-2 mt-1 h-4 w-4 text-[#28C4B5]" />
                      <span>Patients illimités</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-1 h-4 w-4 text-[#28C4B5]" />
                      <span>Bracelets et tags illimités</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-1 h-4 w-4 text-[#28C4B5]" />
                      <span>Intégration API complète</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-1 h-4 w-4 text-[#28C4B5]" />
                      <span>Support dédié 24/7</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Recevoir un devis</Button>
                </CardFooter>
              </Card>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-bold">Calculateur de ROI</h3>
              <p className="mb-6 text-muted-foreground">
                Estimez votre retour sur investissement en fonction du temps
                économisé par votre personnel soignant.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-bold">
                    Temps économisé par patient
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Identification du patient</span>
                      <span className="font-bold">2 min</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Accès au dossier médical</span>
                      <span className="font-bold">5 min</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Communication avec la famille</span>
                      <span className="font-bold">3 min</span>
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t pt-2">
                      <span className="font-bold">Total par patient</span>
                      <span className="font-bold">10 min</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="mb-2 font-bold">
                    Économies annuelles estimées
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Pour 50 patients/jour</span>
                      <span className="font-bold">30 000 €</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Pour 100 patients/jour</span>
                      <span className="font-bold">60 000 €</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Pour 200 patients/jour</span>
                      <span className="font-bold">120 000 €</span>
                    </div>
                  </div>
                  <Button className="mt-4 w-full" variant="outline">
                    Recevoir un devis personnalisé
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Témoignages
          </h2>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="mb-4 italic text-muted-foreground">
                "Airlod Santé a révolutionné notre processus d&apos;admission
                aux urgences. Nous gagnons un temps précieux et évitons les
                erreurs."
              </p>
              <div className="flex items-center">
                <div className="mr-3 h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Photo du Dr. Martin"
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">Dr. Martin</p>
                  <p className="text-xs text-muted-foreground">
                    Chef des Urgences, Hôpital Saint-Louis
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="mb-4 italic text-muted-foreground">
                "En tant que secouriste, l&apos;accès immédiat aux informations
                vitales du patient fait toute la différence. Un outil
                indispensable."
              </p>
              <div className="flex items-center">
                <div className="mr-3 h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Photo de Sophie Durand"
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">Sophie Durand</p>
                  <p className="text-xs text-muted-foreground">
                    Secouriste, SAMU
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="mb-4 italic text-muted-foreground">
                "Depuis que ma mère porte un bracelet Airlod, toute la famille
                est plus sereine. Un investissement qui n&apos;a pas de prix."
              </p>
              <div className="flex items-center">
                <div className="mr-3 h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Photo de Pierre Lemoine"
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">Pierre Lemoine</p>
                  <p className="text-xs text-muted-foreground">
                    Fils d&apos;une patiente
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Questions fréquentes
          </h2>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Comment fonctionne le bracelet NFC ?
                </AccordionTrigger>
                <AccordionContent>
                  Le bracelet contient une puce NFC passive qui peut être lue
                  par n&apos;importe quel smartphone compatible NFC. Il suffit
                  d&apos;approcher le téléphone du bracelet pour accéder aux
                  informations d&apos;urgence du patient.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Les données sont-elles sécurisées ?
                </AccordionTrigger>
                <AccordionContent>
                  Oui, toutes les données sont chiffrées avec AES-256 et
                  stockées sur des serveurs certifiés HDS (Hébergeur de Données
                  de Santé). L&apos;accès aux informations complètes nécessite
                  une authentification.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Quelle est la durée de vie du bracelet ?
                </AccordionTrigger>
                <AccordionContent>
                  Le bracelet ne contient pas de batterie et est conçu pour
                  durer plusieurs années. Il est résistant à l&apos;eau et aux
                  chocs pour une utilisation quotidienne.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Comment mettre à jour les informations médicales ?
                </AccordionTrigger>
                <AccordionContent>
                  Les informations peuvent être mises à jour à tout moment via
                  notre plateforme web ou notre application mobile. Les
                  modifications sont instantanément disponibles.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Est-ce compatible avec tous les systèmes hospitaliers ?
                </AccordionTrigger>
                <AccordionContent>
                  Oui, notre solution s&apos;intègre avec la plupart des
                  systèmes d&apos;information hospitaliers via notre API. Nous
                  proposons également des connecteurs spécifiques pour les
                  principaux logiciels du marché.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  Quel est le délai de mise en place ?
                </AccordionTrigger>
                <AccordionContent>
                  Pour une petite structure, le déploiement peut se faire en
                  quelques jours. Pour un hôpital, comptez 2 à 4 semaines
                  incluant la formation du personnel et l&apos;intégration avec
                  vos systèmes existants.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#28C4B5] py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Prêt à révolutionner votre prise en charge ?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Rejoignez les établissements de santé qui font confiance à Airlod
            Santé pour améliorer leur efficacité et la sécurité de leurs
            patients.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-white text-[#28C4B5] hover:bg-white/90"
            >
              Demander une démo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Recevoir un devis
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#002B45] py-12 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-bold">Airlod Santé</h3>
              <p className="mb-4 text-sm text-gray-300">
                Solutions innovantes pour l&apos;identification et la gestion
                des patients.
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
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
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
                    Bracelet NFC
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Tag Chambre
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Plateforme SAAS
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
                    Études de cas
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
                  123 Avenue de la Santé
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
        <Button className="h-14 w-14 rounded-full bg-green-500 p-0 shadow-lg hover:bg-green-600">
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
            className="h-6 w-6"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </Button>
      </div>
    </div>
  );
}
