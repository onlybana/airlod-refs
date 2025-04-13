import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Star } from "lucide-react";

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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function RestauPage() {
  return (
    <div className="restau-theme">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FF7360] to-[#FFB89F] px-4 py-20 text-white md:py-32">
        <div className="container mx-auto grid gap-8 md:grid-cols-2 md:items-center max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Réservez, placez, servez : gérez votre salle comme un cockpit
            </h1>
            <p className="text-lg md:text-xl">
              Optimisez votre gestion de salle et réduisez les no-shows avec
              notre solution complète
            </p>
            <Button
              size="lg"
              className="bg-white text-[#FF7360] hover:bg-white/90"
            >
              Essayer la démo gratuite <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="relative mx-auto h-[400px] w-full max-w-md">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Plan de salle et widget de réservation"
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

      {/* Reservation Widget */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 md:items-center lg:gap-12">
            <div>
              <div className="mb-4 inline-block rounded-lg bg-[#FF7360]/10 px-3 py-1 text-sm text-[#FF7360]">
                Réservation en ligne
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Widget de réservation intuitif
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Intégrez facilement notre widget de réservation sur votre site
                web, Instagram ou Facebook. Vos clients peuvent réserver en
                moins de 30 secondes.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#FF7360]/10">
                    <Check className="h-5 w-5 text-[#FF7360]" />
                  </div>
                  <div>
                    <h3 className="font-bold">Disponibilité en temps réel</h3>
                    <p className="text-sm text-muted-foreground">
                      Synchronisation instantanée avec votre plan de salle
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#FF7360]/10">
                    <Check className="h-5 w-5 text-[#FF7360]" />
                  </div>
                  <div>
                    <h3 className="font-bold">Confirmation automatique</h3>
                    <p className="text-sm text-muted-foreground">
                      SMS et email avec ajout au calendrier
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#FF7360]/10">
                    <Check className="h-5 w-5 text-[#FF7360]" />
                  </div>
                  <div>
                    <h3 className="font-bold">Personnalisable</h3>
                    <p className="text-sm text-muted-foreground">
                      Adaptez les couleurs et le style à votre image de marque
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative mx-auto h-auto w-full max-w-md overflow-hidden rounded-xl bg-white p-6 shadow-xl">
              <div className="mb-4 text-center">
                <h3 className="text-xl font-bold">Réservez votre table</h3>
                <p className="text-sm text-muted-foreground">
                  Restaurant Le Gourmet
                </p>
              </div>
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      Date
                    </label>
                    <div className="rounded-md border p-3 text-sm">
                      12 Avril 2025
                    </div>
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      Heure
                    </label>
                    <div className="rounded-md border p-3 text-sm">20:00</div>
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Nombre de personnes
                  </label>
                  <div className="flex">
                    {[2, 3, 4, 5, 6].map((num) => (
                      <div
                        key={num}
                        className={`flex h-10 w-10 items-center justify-center rounded-full border mr-3 ${
                          num === 4
                            ? "border-[#FF7360] bg-[#FF7360]/10 text-[#FF7360]"
                            : ""
                        }`}
                      >
                        {num}
                      </div>
                    ))}
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border">
                      +
                    </div>
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Nom</label>
                  <Input placeholder="Votre nom" className="p-3" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Téléphone
                  </label>
                  <Input
                    placeholder="Votre numéro de téléphone"
                    className="p-3"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Email
                  </label>
                  <Input placeholder="Votre email" className="p-3" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Demandes spéciales
                  </label>
                  <Textarea
                    placeholder="Allergies, occasion spéciale, etc."
                    rows={2}
                    className="p-3"
                  />
                </div>
                <Button className="w-full bg-[#FF7360] hover:bg-[#FF7360]/90 py-3">
                  Confirmer ma réservation
                </Button>
                <div className="text-center text-xs text-muted-foreground">
                  Réservation confirmée en moins de 30 secondes
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table Manager Live Demo */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 md:items-center lg:gap-12">
            <div className="order-2 md:order-1">
              <div className="relative mx-auto h-auto w-full max-w-md overflow-hidden rounded-xl bg-white p-4 shadow-xl">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-bold">Plan de salle</h3>
                  <div className="flex items-center space-x-3 text-xs">
                    <div className="flex items-center">
                      <div className="mr-1 h-3 w-3 rounded-full bg-green-500"></div>
                      <span>Libre</span>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-1 h-3 w-3 rounded-full bg-yellow-500"></div>
                      <span>Réservé</span>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-1 h-3 w-3 rounded-full bg-red-500"></div>
                      <span>Occupé</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { id: 1, status: "occupied", time: "" },
                    { id: 2, status: "reserved", time: "20:00" },
                    { id: 3, status: "free", time: "" },
                    { id: 4, status: "occupied", time: "" },
                    { id: 5, status: "reserved", time: "20:00" },
                    { id: 6, status: "free", time: "" },
                    { id: 7, status: "occupied", time: "" },
                    { id: 8, status: "reserved", time: "20:00" },
                    { id: 9, status: "free", time: "" },
                    { id: 10, status: "occupied", time: "" },
                    { id: 11, status: "reserved", time: "20:00" },
                    { id: 12, status: "free", time: "" },
                    { id: 13, status: "occupied", time: "" },
                    { id: 14, status: "reserved", time: "20:00" },
                    { id: 15, status: "free", time: "" },
                    { id: 16, status: "occupied", time: "" },
                  ].map((table) => {
                    const statusColor =
                      table.status === "occupied"
                        ? "bg-red-500"
                        : table.status === "reserved"
                        ? "bg-yellow-500"
                        : "bg-green-500";
                    const statusText =
                      table.status === "occupied"
                        ? "Occupé"
                        : table.status === "reserved"
                        ? table.time
                        : "";

                    return (
                      <div
                        key={table.id}
                        className="relative flex h-24 w-full items-center justify-center rounded-lg border border-gray-200 bg-white p-2 shadow-sm"
                      >
                        <div
                          className={`absolute right-2 top-2 h-3 w-3 rounded-full ${statusColor}`}
                        ></div>
                        <div className="text-center">
                          <div className="font-bold">T{table.id}</div>
                          <div className="text-xs text-muted-foreground">
                            {statusText}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="mb-4 inline-block rounded-lg bg-[#FF7360]/10 px-3 py-1 text-sm text-[#FF7360]">
                Gestion de salle
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Table Manager en temps réel
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Visualisez et gérez votre salle comme un cockpit. Drag-and-drop
                intuitif, statuts en temps réel et optimisation des placements.
              </p>
              <div className="mb-8 rounded-lg bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold">Réduction des no-shows</h3>
                    <p className="text-3xl font-bold text-[#FF7360]">-23%</p>
                  </div>
                  <div>
                    <h3 className="font-bold">Optimisation des tables</h3>
                    <p className="text-3xl font-bold text-[#FF7360]">+18%</p>
                  </div>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#FF7360]/10">
                    <Check className="h-5 w-5 text-[#FF7360]" />
                  </div>
                  <div>
                    <h3 className="font-bold">Drag-and-drop intuitif</h3>
                    <p className="text-sm text-muted-foreground">
                      Déplacez les réservations d'une table à l'autre en un clic
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#FF7360]/10">
                    <Check className="h-5 w-5 text-[#FF7360]" />
                  </div>
                  <div>
                    <h3 className="font-bold">Liste d'attente intelligente</h3>
                    <p className="text-sm text-muted-foreground">
                      Algorithme d'attribution automatique des tables
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CRM & Upsell */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 md:items-center lg:gap-12">
            <div>
              <div className="mb-4 inline-block rounded-lg bg-[#FF7360]/10 px-3 py-1 text-sm text-[#FF7360]">
                Fidélisation client
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                CRM & Upsell
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Connaissez vos clients comme jamais. Préférences, allergies,
                historique de dépenses et fréquence de visite en un coup d'œil.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#FF7360]/10">
                    <Check className="h-5 w-5 text-[#FF7360]" />
                  </div>
                  <div>
                    <h3 className="font-bold">Profils clients détaillés</h3>
                    <p className="text-sm text-muted-foreground">
                      Préférences, allergies et historique complet
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#FF7360]/10">
                    <Check className="h-5 w-5 text-[#FF7360]" />
                  </div>
                  <div>
                    <h3 className="font-bold">Demande d'avis en un clic</h3>
                    <p className="text-sm text-muted-foreground">
                      Augmentez vos avis Google et votre visibilité
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#FF7360]/10">
                    <Check className="h-5 w-5 text-[#FF7360]" />
                  </div>
                  <div>
                    <h3 className="font-bold">Campagnes marketing ciblées</h3>
                    <p className="text-sm text-muted-foreground">
                      Promotions personnalisées basées sur les habitudes
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative mx-auto h-auto w-full max-w-md overflow-hidden rounded-xl bg-white p-6 shadow-xl">
              <div className="mb-6 flex items-center">
                <div className="mr-4 h-16 w-16 overflow-hidden rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-xs text-gray-500">Photo client</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Sophie Martin</h3>
                  <p className="text-sm text-muted-foreground">
                    Cliente depuis: Juin 2023
                  </p>
                </div>
              </div>
              <div className="mb-6 grid grid-cols-3 gap-4">
                <div className="rounded-lg bg-gray-50 p-3 text-center">
                  <p className="text-xs text-muted-foreground">Visites</p>
                  <p className="text-xl font-bold">12</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-3 text-center">
                  <p className="text-xs text-muted-foreground">Dépense moy.</p>
                  <p className="text-xl font-bold">78€</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-3 text-center">
                  <p className="text-xs text-muted-foreground">Avis</p>
                  <div className="flex justify-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <h4 className="mb-3 font-bold">Préférences</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Table préférée</span>
                    <span className="font-medium">Près de la fenêtre</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Plat favori</span>
                    <span className="font-medium">Risotto aux cèpes</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Vin préféré</span>
                    <span className="font-medium">Bourgogne blanc</span>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <h4 className="mb-3 font-bold">Allergies</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-red-100 px-3 py-1 text-xs text-red-800">
                    Fruits de mer
                  </span>
                  <span className="rounded-full bg-red-100 px-3 py-1 text-xs text-red-800">
                    Arachides
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1 bg-[#FF7360] hover:bg-[#FF7360]/90">
                  Envoyer une offre
                </Button>
                <Button variant="outline" className="flex-1">
                  Demander un avis
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anti-No-Show Automation */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center">
            <div className="mb-4 inline-block rounded-lg bg-[#FF7360]/10 px-3 py-1 text-sm text-[#FF7360]">
              Anti No-Show
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Automatisation des rappels
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground">
              Réduisez drastiquement les no-shows grâce à notre système de
              rappels automatiques multi-canaux
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="relative">
              <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gray-200"></div>
              <div className="relative z-10 space-y-8">
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#FF7360] text-white">
                    <Check className="h-5 w-5" />
                  </div>
                  <div className="rounded-lg bg-white p-6 shadow-sm">
                    <h3 className="mb-2 font-bold">Confirmation immédiate</h3>
                    <p className="mb-2 text-muted-foreground">
                      Email de confirmation avec ajout au calendrier
                    </p>
                    <div className="rounded-lg bg-gray-50 p-3 text-sm">
                      <p className="font-medium">
                        Objet: Confirmation de votre réservation - Le Gourmet
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Envoyé immédiatement après la réservation
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#FF7360] text-white">
                    <Check className="h-5 w-5" />
                  </div>
                  <div className="rounded-lg bg-white p-6 shadow-sm">
                    <h3 className="mb-2 font-bold">Rappel J-1</h3>
                    <p className="mb-2 text-muted-foreground">
                      SMS de rappel avec option de confirmation
                    </p>
                    <div className="rounded-lg bg-gray-50 p-3 text-sm">
                      <p className="font-medium">
                        Bonjour Sophie, nous vous attendons demain à 20h au
                        restaurant Le Gourmet. Merci de confirmer en répondant
                        OUI.
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Envoyé 24h avant la réservation
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#FF7360] text-white">
                    <Check className="h-5 w-5" />
                  </div>
                  <div className="rounded-lg bg-white p-6 shadow-sm">
                    <h3 className="mb-2 font-bold">Rappel H-2</h3>
                    <p className="mb-2 text-muted-foreground">
                      Message WhatsApp avec informations pratiques
                    </p>
                    <div className="rounded-lg bg-gray-50 p-3 text-sm">
                      <p className="font-medium">
                        Bonjour Sophie, nous vous confirmons votre réservation
                        ce soir à 20h. Parking disponible à 50m. À très vite !
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Envoyé 2h avant la réservation
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#FF7360] text-white">
                    <Check className="h-5 w-5" />
                  </div>
                  <div className="rounded-lg bg-white p-6 shadow-sm">
                    <h3 className="mb-2 font-bold">Après la visite</h3>
                    <p className="mb-2 text-muted-foreground">
                      Demande d'avis et offre de fidélité
                    </p>
                    <div className="rounded-lg bg-gray-50 p-3 text-sm">
                      <p className="font-medium">
                        Merci pour votre visite ! Comment s'est passé votre
                        expérience ? Laissez-nous un avis et recevez 10% sur
                        votre prochaine visite.
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Envoyé le lendemain de la visite
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu NFC & Tag XL */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 md:items-center lg:gap-12">
            <div className="order-2 md:order-1">
              <div className="relative mx-auto h-[400px] w-full max-w-md overflow-hidden rounded-xl shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Menu NFC sur table élégante"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/90 p-4 shadow-lg backdrop-blur">
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="font-bold">Menu Digital</h4>
                    <div className="flex">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    </div>
                  </div>
                  <p className="text-sm">
                    Scannez pour accéder au menu, commander et payer directement
                    depuis votre téléphone
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="mb-4 inline-block rounded-lg bg-[#FF7360]/10 px-3 py-1 text-sm text-[#FF7360]">
                Expérience client
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Menu NFC & Tag XL
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Offrez une expérience moderne à vos clients. Menu digital,
                commande et paiement sans contact, et demande d'avis simplifiée.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#FF7360]/10">
                    <Check className="h-5 w-5 text-[#FF7360]" />
                  </div>
                  <div>
                    <h3 className="font-bold">Menu digital interactif</h3>
                    <p className="text-sm text-muted-foreground">
                      Photos, descriptions détaillées et allergènes
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#FF7360]/10">
                    <Check className="h-5 w-5 text-[#FF7360]" />
                  </div>
                  <div>
                    <h3 className="font-bold">Suggestions personnalisées</h3>
                    <p className="text-sm text-muted-foreground">
                      Basées sur les préférences et l'historique du client
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#FF7360]/10">
                    <Check className="h-5 w-5 text-[#FF7360]" />
                  </div>
                  <div>
                    <h3 className="font-bold">Paiement à table</h3>
                    <p className="text-sm text-muted-foreground">
                      Lien de paiement sécurisé et pourboire digital
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-6">
                <Button className="bg-[#FF7360] hover:bg-[#FF7360]/90">
                  Découvrir le Menu NFC
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Starter Kit */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Tarifs et kits de démarrage
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground">
              Des solutions adaptées à tous les types d'établissements, de la
              petite brasserie au restaurant gastronomique
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3 lg:gap-10">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Menu Pack</CardTitle>
                <CardDescription>Menu digital et QR codes</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4">
                  <span className="text-3xl font-bold">299€</span>
                </div>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-[#FF7360]" />
                    <span>10 QR codes pour tables</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-[#FF7360]" />
                    <span>Menu digital personnalisable</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-[#FF7360]" />
                    <span>Mise à jour illimitée</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#FF7360] hover:bg-[#FF7360]/90">
                  Commander
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col border-[#FF7360] shadow-lg">
              <CardHeader className="bg-[#FF7360]/10">
                <div className="mb-2 text-center text-sm font-medium text-[#FF7360]">
                  Populaire
                </div>
                <CardTitle>Tag XL</CardTitle>
                <CardDescription>
                  Gestion complète des réservations
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4">
                  <span className="text-3xl font-bold">599€</span>
                </div>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-[#FF7360]" />
                    <span>Widget de réservation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-[#FF7360]" />
                    <span>Plan de salle interactif</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-[#FF7360]" />
                    <span>Rappels automatiques</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-[#FF7360]" />
                    <span>CRM basique</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#FF7360] hover:bg-[#FF7360]/90">
                  Commander
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Full Suite</CardTitle>
                <CardDescription>Solution complète tout-en-un</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4">
                  <span className="text-3xl font-bold">999€</span>
                </div>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-[#FF7360]" />
                    <span>Toutes les fonctionnalités</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-[#FF7360]" />
                    <span>Menu NFC + Tag XL</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-[#FF7360]" />
                    <span>CRM avancé</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-[#FF7360]" />
                    <span>Paiement à table</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-[#FF7360]" />
                    <span>Support prioritaire</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#FF7360] hover:bg-[#FF7360]/90">
                  Commander
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <p className="mb-4 text-muted-foreground">
              Tous nos kits incluent une formation complète et un accompagnement
              personnalisé
            </p>
            <Button variant="outline" size="lg">
              Demander un devis personnalisé
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Ils nous font confiance
          </h2>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3 lg:gap-10">
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
                "Depuis que nous utilisons Airlod Restau, nos no-shows ont
                diminué de 30% et notre chiffre d'affaires a augmenté de 15%. Un
                investissement rentabilisé en moins de 2 mois."
              </p>
              <div className="flex items-center">
                <div className="mr-3 h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Photo de Jean Dupont"
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">Jean Dupont</p>
                  <p className="text-xs text-muted-foreground">
                    Propriétaire, Le Bistrot Parisien
                  </p>
                  <p className="text-xs text-muted-foreground">
                    120 couverts/jour
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
                "Le CRM nous a permis de mieux connaître nos clients et de
                personnaliser leur expérience. Nos avis Google ont explosé et
                notre taux de retour client a augmenté de 25%."
              </p>
              <div className="flex items-center">
                <div className="mr-3 h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Photo de Marie Laurent"
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">Marie Laurent</p>
                  <p className="text-xs text-muted-foreground">
                    Directrice, La Table des Chefs
                  </p>
                  <p className="text-xs text-muted-foreground">
                    80 couverts/jour
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
                "L'interface est intuitive et notre équipe l'a adoptée
                immédiatement. Le support client est réactif et à l'écoute. Je
                recommande vivement Airlod Restau."
              </p>
              <div className="flex items-center">
                <div className="mr-3 h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Photo de Thomas Moreau"
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">Thomas Moreau</p>
                  <p className="text-xs text-muted-foreground">
                    F&B Manager, Hôtel Royal
                  </p>
                  <p className="text-xs text-muted-foreground">
                    150 couverts/jour
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & Contact */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-8 text-3xl font-bold">Questions fréquentes</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Combien de temps faut-il pour mettre en place la solution ?
                  </AccordionTrigger>
                  <AccordionContent>
                    La mise en place est rapide, généralement entre 24 et 48
                    heures. Nous vous accompagnons dans toutes les étapes, de la
                    configuration initiale à la formation de votre équipe.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    Est-ce compatible avec mon système de caisse actuel ?
                  </AccordionTrigger>
                  <AccordionContent>
                    Oui, notre solution s'intègre avec la plupart des systèmes
                    de caisse du marché. Nous proposons des connecteurs pour les
                    principaux logiciels et des API pour les intégrations
                    personnalisées.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Puis-je personnaliser l'apparence du widget de réservation ?
                  </AccordionTrigger>
                  <AccordionContent>
                    Absolument ! Vous pouvez personnaliser les couleurs, les
                    polices et le style général pour qu'il corresponde
                    parfaitement à l'identité visuelle de votre établissement.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    Comment les clients accèdent-ils au menu digital ?
                  </AccordionTrigger>
                  <AccordionContent>
                    Les clients peuvent scanner un QR code ou un tag NFC placé
                    sur la table. Le menu s'ouvre instantanément dans leur
                    navigateur, sans nécessiter de téléchargement d'application.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    Y a-t-il un engagement de durée ?
                  </AccordionTrigger>
                  <AccordionContent>
                    Non, nos formules sont sans engagement. Vous pouvez annuler
                    à tout moment. Cependant, la plupart de nos clients restent
                    avec nous car ils constatent rapidement un retour sur
                    investissement significatif.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <h2 className="mb-8 text-3xl font-bold">Contactez-nous</h2>
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <p className="mb-6 text-muted-foreground">
                  Une question ? Besoin d'un devis personnalisé ? Notre équipe
                  vous répond en moins de 2 heures.
                </p>
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        Nom
                      </label>
                      <Input placeholder="Votre nom" />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        Email
                      </label>
                      <Input placeholder="Votre email" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      Téléphone
                    </label>
                    <Input placeholder="Votre numéro de téléphone" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      Message
                    </label>
                    <Textarea placeholder="Votre message" rows={4} />
                  </div>
                  <Button className="w-full bg-[#FF7360] hover:bg-[#FF7360]/90">
                    Envoyer
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    Nous vous garantissons une réponse en moins de 2 heures
                    pendant les heures d'ouverture
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FF7360] py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Prêt à transformer votre restaurant ?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Rejoignez les centaines de restaurants qui font confiance à Airlod
            Restau pour optimiser leur gestion et améliorer l'expérience client.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-white text-[#FF7360] hover:bg-white/90"
            >
              Essayer la démo gratuite
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-[#FF7360] text-black "
            >
              Commander un kit
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#222] py-12 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-bold">Airlod Restau</h3>
              <p className="mb-4 text-sm text-gray-300">
                Solutions innovantes pour la gestion de restaurant et
                l'expérience client.
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
                    Widget de réservation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Table Manager
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Menu NFC
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    CRM Restaurant
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
                  123 Avenue de la Gastronomie
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

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t bg-white p-4 shadow-lg md:hidden">
        <Button className="w-full bg-[#FF7360] hover:bg-[#FF7360]/90">
          Obtenir mon kit
        </Button>
      </div>
    </div>
  );
}
