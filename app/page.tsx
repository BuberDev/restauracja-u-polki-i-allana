import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Camera,
  ChefHat,
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Star,
  Utensils,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { GalleryRail } from "./components/gallery-rail";
import { SiteHeader } from "./components/site-header";

const shell = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

const contact = {
  phone: "669 132 617",
  phoneHref: "tel:+48669132617",
  email: "",
  address: "ul. Węgierska 25a, 38-300 Gorlice",
  facebookHref: "https://www.facebook.com/u.polki.i.allana",
  googleReviewsHref:
    "https://www.google.com/maps/search/?api=1&query=U+Po%C5%82ki+i+Allana+Gorlice",
  mapsEmbedSrc:
    "https://maps.google.com/maps?hl=pl&q=U%20Po%C5%82ki%20i%20Allana%20Gorlice&t=&z=16&ie=UTF8&iwloc=B&output=embed",
  menuHref: "https://www.facebook.com/u.polki.i.allana",
  directionsHref:
    "https://www.google.com/maps/dir/?api=1&destination=W%C4%99gierska%2025a%2C%2038-300%20Gorlice",
  rating: 4.7,
  reviewCount: "1 512",
};

const navItems = [
  { label: "Menu", href: "#menu" },
  { label: "Opinie", href: "#opinie" },
  { label: "Podejście", href: "#podejscie" },
  { label: "O nas", href: "#o-nas" },
  { label: "Przyjęcia", href: "#przyjecia" },
  { label: "Galeria", href: "#galeria" },
  { label: "Kontakt", href: "#kontakt" },
];

const aboutHighlights = [
  "Regionalne dania, pierogi, hałuszki i domowe obiady.",
  "Jasna sala przygotowana pod rodzinne uroczystości.",
  "Zamówienia telefoniczne i aktualności publikowane na Facebooku.",
  "Adres w Gorlicach, wygodny punkt na trasie przez Beskid Niski.",
];

const reviews = [
  {
    author: "Grzegorz Dąbrowski",
    role: "Lokalny przewodnik · 279 opinii",
    initial: "G",
    date: "4 miesiące temu",
    text: "Solidne miejsce na kulinarnym planie Gorlic. Odwiedzam tę restaurację regularnie i rzadko kiedy wychodzę zawiedziony. To, co wyróżnia 'u Połki i Allana', to przede wszystkim powtarzalna, dobra jakość dań i bardzo uczciwe podejście do porcji.",
  },
  {
    author: "Aga Lasek",
    role: "Lokalny przewodnik · 40 opinii",
    initial: "A",
    date: "9 miesięcy temu",
    text: "Gustownie zaaranżowane wnętrze, smacznie i elegancko wyglądające dania. My wzięliśmy placek po węgiersku i porchetta roladka. Bardzo smaczne. Widać też było, że miejsce cieszy się sporym zainteresowaniem.",
  },
  {
    author: "Werka",
    role: "Lokalny przewodnik · 62 opinie",
    initial: "W",
    date: "3 miesiące temu",
    text: "Piękny lokal , przytulnie bardzo ! Desery oraz drinki wyśmienite 😋Obsługa przesympatyczna ☺️Napewno wrócę 😎",
  },
  {
    author: "Weronika Górecka",
    role: "Lokalny przewodnik · 42 opinie",
    initial: "W",
    date: "rok temu",
    text: "Lokal przyjemny, czysto, schludnie. Obsługa miła. Jedzenie było bardzo smaczne, dość szybko podane. Porcje OGROMNE, co jak najbardziej na plus tym bardziej w stosunku do ceny.",
  },
  {
    author: "Karolina Skoczylas",
    role: "4 opinie",
    initial: "K",
    date: "2 miesiące temu",
    text: "Bardzo polecam! Smaczne jedzenie, duże porcje, miła obsługa. Ceny standardowe. Naprawdę warto się wybrać na obiad. Różnorodne menu w którym każdy znajdzie coś dla siebie.",
  },
  {
    author: "Jacek Sowa",
    role: "Lokalny przewodnik · 29 opinii",
    initial: "J",
    date: "3 lata temu",
    text: "Bardzo polecamy ten lokal, czysto, przyjemnie, obsługa bardzo miła. Zamówiliśmy kurczaka teryiaki i linguine al. piccate. Oba dania-coś pięknego. Bardzo smaczne, porcja idealna.",
  },
  {
    author: "Krzysztof Rąpała",
    role: "Lokalny przewodnik · 103 opinie",
    initial: "K",
    date: "rok temu",
    text: "Polecam! Świetne miejsce, obsługa, klimat i przede wszystkim dania. Duże porcje, bardzo estetycznie podane. Zarówno żeberka, ryba, medaliony wieprzowe oraz kurczak vol-au-vent po prostu przepyszne.",
  },
  {
    author: "Marci N",
    role: "Lokalny przewodnik · 42 opinie",
    initial: "M",
    date: "2 lata temu",
    text: "Gorlice ma super knajpkę, z bardzo smacznymi, delikatnymi żeberkami i fantastyczną kwaśnicą! Porcje obfite, które serwuje przesympatyczna i kompetentna obsługa.",
  },
  {
    author: "Patrycja P.",
    role: "Lokalny przewodnik · 70 opinii",
    initial: "P",
    date: "7 lat temu",
    text: "Rewelacyjna obsługa i takie samo jedzenie. Porcje ogromne - pokonał nas nie tylko burger, ale nawet sałatka grecka! Kelnerka na wagę złota drobna niska w ciemnych włosach.",
  },
  {
    author: "Sebastian Jasiczek",
    role: "Lokalny przewodnik · 13 opinii",
    initial: "S",
    date: "9 miesięcy temu",
    text: "Świetne miejsce! Jedzenie przepyszne – świeże, doprawione idealnie i w naprawdę dużych porcjach, więc nikt stąd nie wychodzi głodny. Menu jest różnorodne.",
  },
];

const pillars = [
  {
    title: "Domowość bez skrótów",
    description:
      "Gotujemy tak, żeby dania miały prosty, rozpoznawalny smak: świeżo, uczciwie i bez przekombinowania.",
  },
  {
    title: "Menu dnia, które żyje",
    description:
      "Dania dnia zmieniają się rytmem tygodnia, sezonu i tego, co najlepiej pasuje do obiadu na miejscu lub na wynos.",
  },
  {
    title: "Gościnność przy stole",
    description:
      "Sala, obsługa i kuchnia pracują razem, żeby rodzinne spotkanie, chrzciny czy urodziny były spokojnie dopięte.",
  },
  {
    title: "Smak Gorlic",
    description:
      "Lokalny klimat traktujemy jak przewagę: proste składniki, ciepłe wnętrze i kuchnia, do której chce się wracać.",
  },
];

const services = [
  {
    title: "Codzienne dania dnia",
    text: "Codziennie inna kompozycja, od kalafiorowej z przyprawą cajun po pierogi ruskie.",
    image: "/images/u-polki-i-allana/facebook-danie-dnia.jpg",
  },
  {
    title: "Obfite porcje obiadowe",
    text: "Solidne dania, od wrapów i burgerów po tradycyjnego schabowego i ryby.",
    image: "/images/u-polki-i-allana/facebook-talerz.jpg",
  },
  {
    title: "Wyjątkowy wystrój",
    text: "Przytulne, gustownie zaaranżowane wnętrze z dużą ilością zieleni.",
    image: "/images/u-polki-i-allana/facebook-wnetrze.jpg",
  },
];

const gallery = [
  {
    title: "Nasze Wnętrze",
    label: "Wnętrze",
    description: "Gustownie zaaranżowane wnętrze, idealne na obiad i spotkanie.",
    image: "/images/u-polki-i-allana/facebook-wnetrze.jpg",
  },
  {
    title: "Danie dnia",
    label: "Z Facebooka",
    description: "Kadr z restauracyjnej galerii: domowy talerz i solidna porcja.",
    image: "/images/u-polki-i-allana/facebook-danie-dnia.jpg",
  },
  {
    title: "Na talerzu",
    label: "Menu",
    description: "Wybrane danie pokazujące kuchnię U Połki i Allana.",
    image: "/images/u-polki-i-allana/facebook-talerz.jpg",
  },
  {
    title: "Burger",
    label: "Menu",
    description: "Jedno z sycących dań z restauracyjnych materiałów zdjęciowych.",
    image: "/images/u-polki-i-allana/facebook-burger.jpg",
  },
  {
    title: "Sala",
    label: "Na miejscu",
    description: "Wnętrze restauracji przygotowane na spokojny obiad i spotkanie.",
    image: "/images/u-polki-i-allana/facebook-sala.jpg",
  },
];

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "U Połki i Allana",
  description:
    "Domowa kuchnia, dania dnia, pierogi i przyjęcia okolicznościowe w Gorlicach.",
  telephone: contact.phone,
  email: contact.email,
  servesCuisine: ["restauracja", "dania domowe", "dania dnia"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Gorlice 219",
    postalCode: "38-315",
    addressLocality: "Gorlice",
    addressCountry: "PL",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
      />
      <SiteHeader contact={contact} navItems={navItems} />
      <main>
        <HeroSection />
        <MenuIntroSection />
        <ReviewsSection />
        <ApproachSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

function HeroSection() {
  return (
    <section
      id="start"
      className="relative min-h-[100svh] overflow-hidden bg-[#111812] pt-24 text-white"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/u-polki-i-allana/facebook-wnetrze.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/video_hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[#101711]/62" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_42%,rgba(10,16,11,0.52)_0%,rgba(10,16,11,0.34)_34%,rgba(10,16,11,0.14)_66%,rgba(10,16,11,0)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(180deg,rgba(244,251,241,0)_0%,rgba(244,251,241,0.58)_74%,var(--background)_100%)]" />

      <div className={`${shell} relative z-10 flex min-h-[calc(100svh-6rem)] items-center py-16`}>
        <div className="max-w-3xl">
          <Badge className="animate-fade-up rounded-[8px] border-white/15 bg-white/10 px-3 py-1 text-white hover:bg-white/10">
            Restauracja · Gorlice
          </Badge>
          <h1 className="animate-fade-up delay-100 mt-7 max-w-4xl text-balance text-5xl font-semibold leading-[0.98] tracking-normal sm:text-7xl lg:text-8xl">
            U Połki i Allana
          </h1>
          <p className="animate-fade-up delay-200 mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
            Solidne miejsce na kulinarnym planie Gorlic. Pyszne domowe dania, codziennie nowe dania dnia i wyjątkowe wnętrze pełne zieleni.
          </p>

          {/* Google rating inline badge */}
          <div className="animate-fade-up delay-300 mt-8 inline-flex items-center gap-3 rounded-[8px] border border-white/14 bg-black/28 px-4 py-2.5 backdrop-blur-sm">
            <GoogleGLogo />
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-white">
                {contact.rating || 4.6}
              </span>
              <div className="flex text-[#F9AB00]">
                {[...Array(5)].map((_, i) => {
                  const ratingValue = contact.rating || 4.6;
                  const fullStars = Math.floor(ratingValue);
                  const partialPercentage = Math.round((ratingValue % 1) * 100);

                  if (i < fullStars) {
                    return <Star key={i} className="h-3.5 w-3.5 fill-current" />;
                  } else if (i === fullStars && partialPercentage > 0) {
                    return <StarPartial key={i} percentage={partialPercentage} className="h-3.5 w-3.5 text-[#F9AB00]" />;
                  } else {
                    return <Star key={i} className="h-3.5 w-3.5 text-[#F9AB00]/30" />;
                  }
                })}
              </div>
              <span className="text-xs text-white/58">· {contact.reviewCount || "1 419"} opinii</span>
            </div>
          </div>

          <div className="animate-fade-up delay-300 mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="min-h-12 rounded-[8px] bg-white px-6 text-base font-semibold text-[#172117] hover:bg-white/90"
            >
              <a href="#menu">
                Zobacz menu
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="min-h-12 rounded-[8px] border-white/20 bg-white/10 px-6 text-base font-semibold text-white hover:bg-white/15 hover:text-white"
            >
              <a href={contact.directionsHref} target="_blank" rel="noreferrer">
                <MapPin className="size-4" />
                Wyznacz trasę
              </a>
            </Button>
          </div>

          <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
            {[
              ["7,1 tys.", "polubień na Facebooku"],
              [contact.reviewCount, "opinii w Google"],
              ["7,1 tys.", "obserwujących na Fb"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-[8px] border border-white/10 bg-black/25 p-4 backdrop-blur"
              >
                <p className="text-3xl font-semibold">{value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-white/60">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#menu"
        aria-label="Przewiń do następnej sekcji"
        className="group absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 items-center justify-center text-white/75 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:flex"
      >
        <span className="scroll-cue-shell relative flex h-14 w-9 items-start justify-center rounded-full border border-white/35 bg-white/10 pt-2 shadow-[0_18px_45px_rgba(0,0,0,0.28)] backdrop-blur-md transition group-hover:border-white/55 group-hover:bg-white/15">
          <span className="scroll-cue-dot block h-1.5 w-1.5 rounded-full bg-current" />
        </span>
      </a>
    </section>
  );
}

function MenuIntroSection() {
  return (
    <section id="menu" className="ks-noise py-20 sm:py-24">
      <div className={`${shell} grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center`}>
        <div>
          <SectionLabel icon={<Utensils className="size-4" />}>Menu i zamówienia</SectionLabel>
          <h2 className="mt-5 max-w-2xl text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            Różnorodne menu i potężne porcje.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
            Oferujemy codziennie inne dania dnia, obfite porcje i smaki, po które chce się wracać. Śledź naszego Facebooka, aby być na bieżąco z aktualnym menu.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="min-h-12 rounded-[8px] px-6 text-base">
              <a href={contact.menuHref} target="_blank" rel="noreferrer">
                Sprawdź menu
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="min-h-12 rounded-[8px] border-[#1877f2]/25 bg-white px-6 text-base text-[#1877f2] hover:border-[#1877f2]/45 hover:bg-[#1877f2]/8 hover:text-[#1877f2]"
            >
              <a href={contact.facebookHref} target="_blank" rel="noreferrer">
                <FacebookLogo />
                Facebook
              </a>
            </Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
          <ImageCard
            src="/images/u-polki-i-allana/facebook-danie-dnia.jpg"
            alt="Menu tygodnia U Połki i Allana"
            title="Dania dnia"
            className="min-h-[420px]"
          />
          <div className="grid gap-4">
            <ImageCard
              src="/images/u-polki-i-allana/facebook-talerz.jpg"
              alt="Domowe danie obiadowe U Połki i Allana"
              title="Obiady"
              className="min-h-[250px]"
            />
            <Card className="rounded-[8px] border-primary/10 bg-white/80 shadow-sm">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <Clock className="size-4" />
                  Zamówienia
                </div>
                <p className="mt-3 text-3xl font-semibold tracking-tight">{contact.phone}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Najszybciej zamówisz telefonicznie. Aktualne dania dnia są publikowane
                  na profilu restauracji.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  const reviewTags = [
    "Pierogi",
    "Hałuszki",
    "Barszcz",
    "Regionalnie",
    "Domowo",
    "Gorlice",
  ];

  return (
    <section id="opinie" className="scroll-mt-24 overflow-hidden bg-background pb-20 sm:pb-24">
      <div className="border-y bg-white/72 px-4 py-3">
        <div className={`${shell} flex items-center justify-between gap-6 overflow-hidden`}>
          <div className="flex min-w-0 items-center gap-5">
            {reviewTags.map((word) => (
              <span
                key={word}
                className="shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-primary/70"
              >
                {word}
              </span>
            ))}
          </div>
          <div
            className="hidden shrink-0 items-center gap-2 rounded-[8px] border border-primary/10 bg-white px-3 py-1.5 shadow-sm sm:flex"
            aria-label="Opinie Google, ocena 5 na 5"
          >
            <GoogleRating compact />
            <span className="text-xs font-semibold text-foreground/62">opinie</span>
          </div>
        </div>
      </div>

      <div className={`${shell} pt-16`}>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-end">
          <div>
            <SectionLabel icon={<MessageCircle className="size-4" />}>
              Co mówią goście
            </SectionLabel>
            <h2 className="mt-5 max-w-2xl text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              Najlepsze reklamy piszą ludzie po obiedzie.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
              Opinie z Google pokazują dokładnie to, co warto wyciągnąć na
              pierwszy plan: regionalny smak, porcje, pierogi, hałuszki i obsługę,
              która zostaje w pamięci.
            </p>
          </div>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="min-h-12 rounded-[8px] px-6 text-base lg:justify-self-end"
          >
            <a href={contact.googleReviewsHref} target="_blank" rel="noreferrer">
              Zobacz opinie
              <ExternalLink className="size-4" />
            </a>
          </Button>
        </div>

        <div className="marquee-mask mt-12 space-y-4 overflow-hidden py-2">
          <div className="animate-reviews-left flex w-max gap-4 will-change-transform">
            {[...reviews, ...reviews].map((review, index) => (
              <ReviewCard key={`top-${review.author}-${index}`} review={review} />
            ))}
          </div>
          <div className="animate-reviews-right flex w-max gap-4 will-change-transform">
            {[...reviews.slice().reverse(), ...reviews.slice().reverse()].map((review, index) => (
              <ReviewCard key={`bottom-${review.author}-${index}`} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({
  review,
}: Readonly<{
  review: (typeof reviews)[number];
}>) {
  return (
    <article className="flex h-[260px] w-[310px] shrink-0 flex-col rounded-[8px] border bg-white p-5 shadow-[0_12px_36px_rgba(17,24,18,0.06)] transition hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_20px_56px_rgba(17,24,18,0.10)] sm:w-[370px]">
      <div className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/15 bg-primary/10 text-sm font-semibold text-primary"
          aria-hidden="true"
        >
          {review.initial}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">{review.author}</p>
          <p className="truncate text-xs text-muted-foreground">{review.role}</p>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between gap-2">
        <div className="flex gap-0.5 text-[#5f7f50]" aria-label="Ocena 5 na 5">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <span className="text-xs text-muted-foreground">{review.date}</span>
      </div>

      <p className="mt-4 flex-1 overflow-hidden text-sm leading-6 text-foreground/78">
        {review.text}
      </p>
    </article>
  );
}

function ApproachSection() {
  return (
    <section id="podejscie" className="relative overflow-hidden bg-[#111812] py-20 text-white sm:py-28">
      <div className="absolute inset-0 ks-grid opacity-70" />
      <div className={`${shell} relative`}>
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel center inverted icon={<ChefHat className="size-4" />}>
            Podejście U Połki i Allana
          </SectionLabel>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            Szanujemy prostotę domowego smaku.
          </h2>
          <p className="mt-5 text-base leading-8 text-white/65">
            Dobra restauracja nie musi opowiadać wielkich historii. Wystarczy,
            że obiad jest uczciwy, obsługa uważna, a gość wie, że może wrócić.
          </p>
        </div>

        <div className="relative mt-16">
          <div
            className="absolute left-0 right-0 top-[1.75rem] hidden h-px lg:block"
            style={{
              background:
                "linear-gradient(to right, transparent 0%, rgba(216,242,194,0.30) 15%, rgba(216,242,194,0.30) 85%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((item, index) => (
              <div key={item.title} className="group relative">
                <div className="relative mb-8 hidden h-14 items-start lg:flex">
                  <div className="relative h-3.5 w-3.5 rounded-full border-2 border-[#d8f2c2] bg-[#111812] shadow-[0_0_18px_rgba(216,242,194,0.24)] transition-all duration-300 group-hover:bg-[#d8f2c2]" />
                </div>

                <span
                  className="pointer-events-none absolute right-0 top-0 select-none text-[5rem] font-semibold leading-none text-white/[0.035] lg:-top-2 lg:text-[7rem]"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                  <span className="font-mono text-sm font-semibold tracking-widest text-[#d8f2c2]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight text-white">
                    {item.title}
                  </h3>
                  <div className="mt-3 h-px w-8 bg-[#d8f2c2]/50 transition-all duration-500 group-hover:w-16 group-hover:bg-[#d8f2c2]" />
                  <p className="mt-4 text-sm leading-7 text-white/60">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <Button asChild size="lg" className="min-h-12 rounded-[8px] bg-white px-6 text-base font-semibold text-[#111812] hover:bg-white/90">
            <a href="#kontakt">
              Zapytaj o termin
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="przyjecia" className="bg-background py-20 sm:py-24">
      <div className={shell}>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <SectionLabel icon={<CalendarDays className="size-4" />}>Na co dzień i od święta</SectionLabel>
            <h2 className="mt-5 max-w-xl text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              Jedno miejsce na obiad, uroczystość i zamówienie na wynos.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-muted-foreground lg:justify-self-end">
            U Połki i Allana wyglądają lokalnie i działają praktycznie: możesz
            wpaść na obiad, odebrać zamówienie albo przygotować spotkanie rodzinne
            w sali pokazanej w materiałach restauracji.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-[8px] border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="o-nas" className="scroll-mt-24 bg-[#eef8ea] py-20 sm:py-24">
      <div className={`${shell} grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center`}>
        <div className="relative min-h-[460px] overflow-hidden rounded-[8px] border bg-black shadow-sm sm:min-h-[560px]">
          <Image
            src="/images/u-polki-i-allana/facebook-sala.jpg"
            alt="Sala U Połki i Allana przygotowana na przyjęcie"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 48vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
          <div className="absolute inset-x-5 bottom-5 rounded-[8px] border border-white/15 bg-[#111812]/82 p-5 text-white backdrop-blur-sm">
            <p className="text-xl font-semibold">Domowa kuchnia i sala na rodzinne spotkania.</p>
            <p className="mt-2 text-sm leading-6 text-white/68">
              Miejsce na obiad, przyjęcie i spokojny powrót do regionalnych smaków.
            </p>
          </div>
        </div>

        <div>
          <SectionLabel icon={<ChefHat className="size-4" />}>O restauracji</SectionLabel>
          <h2 className="mt-5 max-w-2xl text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            Wyjątkowy klimat na kulinarnej mapie Gorlic.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
            Restauracja u Połki i Allana łączy świetne jedzenie z przyjemnym wystrojem. Wpadnij na pyszny, sycący obiad i poczuj się jak u siebie.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {aboutHighlights.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-[8px] border bg-white/72 p-4">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <p className="text-sm font-medium leading-6 text-foreground/82">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="min-h-12 rounded-[8px] px-6 text-base">
              <a href={contact.phoneHref}>
                <Phone className="size-4" />
                Zadzwoń
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-h-12 rounded-[8px] px-6 text-base">
              <a href="#galeria">
                Zobacz galerię
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section id="galeria" className="relative overflow-hidden bg-[#0d170f] py-20 text-white sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(216,242,194,0.14)_0%,rgba(216,242,194,0)_34%),radial-gradient(circle_at_84%_12%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_28%)]" />
      <div className="absolute inset-0 ks-grid opacity-35" />

      <div className={`${shell} relative`}>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel inverted icon={<Camera className="size-4" />}>Galeria</SectionLabel>
            <h2 className="mt-5 max-w-2xl text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Kadry z Facebooka i materiałów restauracji.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/62">
              Wybrane zdjęcia pokazane jak edytorska opowieść: wnętrze, talerze,
              menu i przyjęcia w jednym, płynnym module.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="min-h-12 rounded-[8px] border-white/20 bg-white/8 px-6 text-base text-white hover:bg-white hover:text-[#0d170f]"
          >
            <a href={contact.facebookHref} target="_blank" rel="noreferrer">
              Więcej zdjęć
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>

        <GalleryRail items={gallery} />

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/58 sm:flex-row sm:items-center sm:justify-between">
          <p>Kliknij dowolny kadr, aby otworzyć zdjęcie w większym podglądzie.</p>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#d8f2c2]/80">
            {gallery.length} wybranych ujęć
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="kontakt" className="scroll-mt-24 bg-background py-20 sm:py-24">
      <div className={shell}>
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel center icon={<MapPin className="size-4" />}>Kontakt i dojazd</SectionLabel>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            Restauracja w Gorlicach, gotowa na obiad i przyjęcie.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
            Zadzwoń, zapytaj o aktualne dania dnia, zamów na wynos albo ustal
            szczegóły rodzinnego spotkania. Poniżej masz adres, mapę i najważniejsze
            drogi kontaktu.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <aside className="space-y-4">
            <ContactCard icon={<Phone className="size-5" />} label="Telefon" value={contact.phone} href={contact.phoneHref} />
            <ContactCard icon={<Mail className="size-5" />} label="E-mail" value={contact.email} href={`mailto:${contact.email}`} />
            <ContactCard icon={<MapPin className="size-5" />} label="Adres" value={contact.address} href={contact.directionsHref} />
            <ContactCard icon={<MessageCircle className="size-5" />} label="Facebook" value="U Połki i Allana" href={contact.facebookHref} />
          </aside>

          <Card className="rounded-[8px] border bg-white shadow-[0_20px_60px_rgba(17,24,18,0.07)]">
            <CardContent className="p-5 sm:p-6">
              <div className="grid gap-5 lg:grid-cols-[1fr_0.88fr]">
                <div>
                  <h3 className="text-2xl font-semibold">Mapa Google</h3>
                  <MapEmbed />
                  <Button asChild variant="outline" className="mt-4 min-h-11 w-full rounded-[8px]">
                    <a href={contact.directionsHref} target="_blank" rel="noreferrer">
                      <MapPin className="size-4" />
                      Wyznacz trasę
                    </a>
                  </Button>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">Godziny i rezerwacje</h3>
                  <div className="mt-4 rounded-[8px] border bg-secondary/45 p-4">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      <Clock className="size-4" />
                      Aktualne informacje
                    </div>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      Aktualne godziny, dania dnia i informacje o przyjęciach najlepiej
                      potwierdzić telefonicznie lub na profilu Facebook restauracji.
                    </p>
                  </div>

                  <div className="mt-4 space-y-3 rounded-[8px] border p-4">
                    <div className="flex items-start justify-between gap-4 text-sm">
                      <span className="font-semibold">Zamówienia</span>
                      <a href={contact.phoneHref} className="text-right font-semibold text-primary">
                        {contact.phone}
                      </a>
                    </div>
                    <Separator />
                    <div className="flex items-start justify-between gap-4 text-sm">
                      <span className="font-semibold">Adres</span>
                      <span className="max-w-[14rem] text-right text-muted-foreground">
                        {contact.address}
                      </span>
                    </div>
                  </div>

                  <Button asChild size="lg" className="mt-5 min-h-12 w-full rounded-[8px]">
                    <a href={contact.phoneHref}>
                      <Phone className="size-4" />
                      Zadzwoń teraz
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#111812] py-14 text-white">
      <div className={shell}>
        <div className="grid gap-x-8 gap-y-10 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-[1.35fr_0.75fr_0.9fr_0.9fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex justify-center sm:justify-start">
              <Image
                src="/logo.png"
                alt="U Połki i Allana"
                width={200}
                height={160}
                className="h-20 w-auto object-contain opacity-90 transition-opacity hover:opacity-100"
              />
            </div>
            <p className="mx-auto mt-5 max-w-sm leading-7 text-white/62 sm:mx-0">
              Domowa kuchnia, regionalne smaki, dania dnia i przyjęcia rodzinne
              w sercu Gorlic.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#d8f2c2]">
              Nawigacja
            </h2>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a className="text-sm font-medium text-white/62 transition hover:text-[#d8f2c2]" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#d8f2c2]">
              Kontakt
            </h2>
            <ul className="mt-4 space-y-3 text-sm font-medium">
              <li>
                <a href={contact.phoneHref} className="text-white/62 transition hover:text-white">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="break-all text-white/62 transition hover:text-white">
                  {contact.email}
                </a>
              </li>
              <li className="text-white/62">{contact.address}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#d8f2c2]">
              Znajdź nas
            </h2>
            <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
              {[
                { label: "Facebook", href: contact.facebookHref },
                { label: "Google", href: contact.googleReviewsHref },
                { label: "Pierogi", href: contact.menuHref },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[8px] border border-white/10 px-3 py-2 text-sm font-semibold text-white/70 transition hover:bg-white/8 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-5 flex justify-center sm:justify-start">
              <GoogleRating className="rounded-[8px] border border-white/10 bg-white/[0.04] px-3 py-2" />
            </div>
            <p className="mt-3 text-xs leading-5 text-white/42">
              Opinie gości z Google i Facebooka pomagają nowym osobom trafić do restauracji.
            </p>
          </div>
        </div>

        <Separator className="bg-white/10 sm:hidden" />

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/10 pt-7 sm:flex-row sm:justify-between">
          <p className="text-center text-xs text-white/42 sm:text-left">
            © {new Date().getFullYear()} U Połki i Allana · Gorlice
          </p>
          <a href="#kontakt" className="text-xs font-semibold text-white/42 transition hover:text-white">
            Kontakt i dojazd
          </a>
        </div>
      </div>
    </footer>
  );
}

function SectionLabel({
  children,
  icon,
  center = false,
  inverted = false,
}: Readonly<{
  children: React.ReactNode;
  icon: React.ReactNode;
  center?: boolean;
  inverted?: boolean;
}>) {
  return (
    <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-[8px] border ${inverted
            ? "border-[#d8f2c2]/25 bg-white/5 text-[#d8f2c2]"
            : "border-primary/15 bg-primary/10 text-primary"
          }`}
      >
        {icon}
      </span>
      <p
        className={`text-xs font-semibold uppercase tracking-[0.18em] ${inverted ? "text-[#d8f2c2]" : "text-primary"
          }`}
      >
        {children}
      </p>
    </div>
  );
}

function GoogleGLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 shrink-0">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function FacebookLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 shrink-0 fill-current">
      <path d="M14.2 8.1V6.6c0-.7.5-.9.9-.9h2.2V2.1L14.2 2c-3.4 0-4.1 2.5-4.1 4.1v2H7.4V12h2.7v10h4.1V12h3.1l.5-3.9h-3.6z" />
    </svg>
  );
}

function StarPartial({ percentage = 60, className = "" }: Readonly<{ percentage?: number; className?: string }>) {
  return (
    <svg viewBox="0 0 24 24" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <defs>
        <linearGradient id={`partial-${percentage}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset={`${percentage}%`} stopColor="currentColor" />
          <stop offset={`${percentage}%`} stopColor="transparent" />
        </linearGradient>
      </defs>
      <polygon fill={`url(#partial-${percentage})`} points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function GoogleRating({
  compact = false,
  className = "",
}: Readonly<{
  compact?: boolean;
  className?: string;
}>) {
  return (
    <div
      className={`inline-flex items-center ${compact ? "gap-1.5" : "gap-2"} ${className}`}
      aria-hidden="true"
    >
      <GoogleGLogo />
      <div className="flex gap-0.5 text-[#fbbc05]">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${compact ? "h-3.5 w-3.5" : "h-4 w-4"} fill-current`}
          />
        ))}
      </div>
    </div>
  );
}

function ImageCard({
  src,
  alt,
  title,
  className = "",
}: Readonly<{
  src: string;
  alt: string;
  title: string;
  className?: string;
}>) {
  return (
    <figure className={`relative overflow-hidden rounded-[8px] border bg-black shadow-sm ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        loading="eager"
        className="object-cover opacity-90"
        sizes="(max-width: 1024px) 100vw, 42vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <figcaption className="absolute bottom-4 left-4 right-4 text-white">
        <p className="text-xl font-semibold">{title}</p>
      </figcaption>
    </figure>
  );
}

function MapEmbed() {
  return (
    <div className="relative mt-4 h-72 overflow-hidden rounded-[8px] border bg-secondary sm:h-80">
      <iframe
        src={contact.mapsEmbedSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa Google: U Połki i Allana w Gorlicach"
      />
    </div>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: Readonly<{
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}>) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="group flex items-center gap-4 rounded-[8px] border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] bg-primary/10 text-primary">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          {label}
        </span>
        <span className="mt-1 block break-words text-sm font-semibold leading-6 group-hover:text-primary">
          {value}
        </span>
      </span>
    </a>
  );
}
