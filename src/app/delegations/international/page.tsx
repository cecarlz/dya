"use client";

import { useState } from "react";
import Brands from "@/components/Brands";

const InternationalPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const delegations = [
    {
      country: "Alicante",
      bases: [
        {
          name: "CENTRAL Elche",
          address: "C/ Mesalina 12 – 03202 Elche",
          phone: "966 61 12 45",
          fax: "Fax: 965 05 25 93",
          website: "http://www.dyaelche.com",
          email: "info@dyaelche.com",
        },
      ],
    },
    {
      country: "Bizkaia",
      bases: [
        {
          name: "CENTRAL Bilbao (Coordinating Center)",
          address: "Alameda San Mamés no 33 – 48010 Bilbao",
          phone: "94 410 10 10",
          website: "http://www.dya.eus",
          email: "info@dya.eus",
        },
        {
          name: "Base Muskiz – Canine Unit",
          address: "c/ Antonio Trueba no 8 – 48550 Muskiz",
          phone: "94 410 10 10",
        },
        {
          name: "Base Santurtzi",
          address:
            "El Parke, s/n (Renfe Cercanías station building) – 48980 Santurtzi",
          phone: "94 410 10 10",
        },
        {
          name: "Sodupe Logistics Centre",
          address: "C/ Lorgi no 2 – 48840 Sodupe",
          phone: "94 410 10 10",
        },
        {
          name: "DYA School of Training and Prevention (Bilbao)",
          address: "Avenida Julián Gaiarre no 64 – 48004 Bilbao",
          phone: "94 410 10 10",
        },
        {
          name: "DYA School of Training and Prevention (Getxo)",
          address: "C/ Villa de Plentzia no 14 Bajo – 48930 Getxo",
          phone: "94 410 10 10",
        },
        {
          name: "DYA Center, Acacias",
          address: "C/ Acacias no 39 – 48990 Neguri (Getxo)",
          phone: "94 602 32 00",
        },
        {
          name: "Base Rescue Group",
          address: "Avenida Zarandoa no 13 – 48015 Bilbao",
          phone: "94 410 10 10",
        },
      ],
    },
    {
      country: "Cantabria",
      bases: [
        {
          name: "CENTRAL Castro Urdiales",
          address: "c/ Leonardo Rucabado No 9, Bajo – 39700 Castro Urdiales",
          phone: "942 86 03 00",
          fax: "Fax: 942 86 18 14",
          website: "http://www.dyacantabria.com",
          email: "info@dyacantabria.com",
        },
      ],
    },
    {
      country: "Extremadura",
      bases: [
        {
          name: "CENTRAL Cáceres",
          address: "Avda. Isabel Moctezuma no 31 Bajo – 10005 Cáceres",
          phone: "927 21 55 08 / 630 036 013",
          website: "http://www.dyaextremadura.com",
          email: "info@dyaextremadura.com",
        },
      ],
    },
    {
      country: "Leon",
      bases: [
        {
          name: "CENTRAL Leon",
          address: "C/ Espoz y Mina no 4 – 24010 Trobajo del Camino (León)",
          phone: "684 148 853",
          website: "http://www.dyaleon.com",
          email: "info@dyaleon.com",
        },
      ],
    },
    {
      country: "Gipuzkoa",
      bases: [
        {
          name: "CENTRAL Donosti",
          address: "c/ Mendigain Kalea 30 Bass – 20014 Donosti",
          phone: "943 46 46 22",
          fax: "Fax: 943 46 22 22",
          website: "http://www.dyagipuzkoa.com",
          email: "info@dyagipuzkoa.com",
        },
        {
          name: "Training and Volunteering Center",
          address: "c/ Baratzategi 10, bass (Bo Intxaurrondo) – 20015 Donostia",
          phone: "943 46 46 22",
          fax: "Fax: 943 46 22 22",
        },
        {
          name: "Zarautz base",
          address: "c/ Iturribidea 12-14 bass – 20800 Zarautz",
          phone: "943 46 46 22",
        },
        {
          name: "Base Urnieta",
          address: "c/ Idiazabal, 13 Bajo – 20130 Urnieta",
          phone: "943 46 46 22",
        },
        {
          name: "Base Tolosa",
          address: "c/ Larramendi 7 Bajo – 20400 Tolosa",
          phone: "943 46 46 22",
        },
        {
          name: "Base Ordizia",
          address: "c/ Aita Urdaneta – Exte Aldea 7 – 20240 Ordizia",
          phone: "943 46 46 22",
        },
        {
          name: "Base Hondarribia",
          address: "c/ Soroetagain 6/7 Bass – 20280 Hondarribia",
          phone: "943 46 46 22",
        },
        {
          name: "Base Hernani",
          address: "c/ Sandiusterri s/n – 20120 Hernani",
          phone: "943 46 46 22",
        },
        {
          name: "Base Errenteria",
          address: "c/ Norberto Almandoz 5 – 20100 Orereta",
          phone: "943 46 46 22",
        },
        {
          name: "Base Eibar",
          address: "c/ Page 5 – 20600 Eibar",
          phone: "943 46 46 22",
        },
        {
          name: "Donostia Base",
          address: "c/ Javier Barkaiztegi 15, bass – 2010 Donosti",
          phone: "943 46 46 22",
        },
        {
          name: "Base Under Oria",
          address: "c/ Muna Lurra s/n – 20170 Usurbil",
          phone: "943 46 46 22",
        },
        {
          name: "Base Azpeitia",
          address: "c/ Juan Elorza, s/n – 20730 Azpeitia",
          phone: "943 46 46 22",
        },
        {
          name: "Base Alto Deba",
          address: "c/ Martoko kalea 22 – 20570 Bergara",
          phone: "943 46 46 22",
        },
      ],
    },
    {
      country: "Girona",
      bases: [
        {
          name: "CENTRAL Verges",
          address: "C/ Placeta no 2 – 17142 Verges",
          phone: "600 111 517 / 609 870 350",
          website: "http://www.dyagirona.org",
          email: "info@dyagirona.org",
        },
        {
          name: "Girona (Base)",
          address: "c/ Cort Reial, 4 – 17004 Girona",
        },
      ],
    },
    {
      country: "La Rioja",
      bases: [
        {
          name: "CENTRAL La Rioja",
          address: "Constitution Square No. 1 – 26511 El Villar de Arnedo",
          phone: "941 401 410 / 690 607 080",
          website: "http://www.dyalarioja.org",
          email: "larioja@dya.biz",
        },
      ],
    },
    {
      country: "Lleida",
      bases: [
        {
          name: "CENTRAL Lleida",
          address: "Avda. Catalunya no 6, baixos – 25300 Tàrrega",
          phone: "606 26 85 43",
          website: "http://www.dyalleida.com",
          email: "info@dyalleida.es",
        },
      ],
    },
    {
      country: "Malaga",
      bases: [
        {
          name: "CENTRAL Malaga",
          address:
            "c/ Santa Isabel – San Merino, Block C, no 2 – 29670 San Pedro de Alcántara",
          phone: "951 70 36 08 / 952 91 09 58 / 663 82 48 70",
          website: "www.dyamalaga.es",
          email: "info@dyamalaga.es",
        },
      ],
    },
    {
      country: "Navarra",
      bases: [
        {
          name: "CENTRAL – Pamplona",
          address: "c/ Crossing Monastery Iratxe s/n – 31011 Pamplona",
          phone: "948 17 17 17",
          fax: "Fax: 948 19 89 69",
          website: "http://www.dyanavarra.com",
          email: "central@dyanavarra.com",
        },
        {
          name: "Base Puente La Reina",
          address: "Paseo Los Fueros s/n – 31100 Puente La Reina",
          phone: "948 34 10 37",
        },
        {
          name: "Base Peralta",
          address: "c/ Irurzun s/n – 31350 Peralta",
          phone: "948 71 30 68",
        },
        {
          name: "Base Olite",
          address: "Plaza Carlos III The Noble no1 1o – 31390 Olite",
          phone: "948 74 05 07",
        },
        {
          name: "Base The Arches",
          address: "c/ of Weight No. 1 Bass – 31210 Los Arcos",
          phone: "948 44 11 77",
        },
        {
          name: "Base Aoiz",
          address: "c/ Sunday Elizondo s/n – 31430 Aoiz",
          phone: "948 33 60 65",
        },
        {
          name: "Base Alsasua",
          address: "c/ La Paz no 7 – 31800 Alsasua",
          phone: "948 46 88 22",
          website: "http://www.dyasakana.org",
        },
      ],
    },
    {
      country: "Zaragoza",
      bases: [
        {
          name: "Intermodal Station Delights",
          address: "Avda. Navarra 80 (Local 201) – 50012 Zaragoza",
          phone: "976 313 300",
          fax: "Fax: 976 313 103",
          website: "http://www.dyazaragoza.com",
          email: "services@dyazaragoza.com",
        },
      ],
    },
    {
      country: "Philippines",
      bases: [
        {
          name: "DYA Philippines",
          address:
            "St. Ezekiel Moreno Convent. 4th Road, Baranggay Villamonte – Bacolod City (Black West, Philippines 6100)",
          phone: "+63 34 454 2834 / +63938 214 6229 / +63906 894 2419",
          website: "https://goo.gl/tjbyUC",
        },
      ],
    },
    {
      country: "Dominican Republic",
      bases: [
        {
          name: "CENTRAL (coordination and training centre)",
          address:
            "c/ Sicily No11 Urb. Italy Sto. East Sunday (Rep. Dominican)",
          phone: "+1-809-590-7374",
          website: "http://www.dyadominicana.com",
          email: "info@dyadominicana.com",
        },
      ],
    },
  ];

  const filteredDelegations = delegations.filter((delegation) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      delegation.country.toLowerCase().includes(searchLower) ||
      delegation.bases.some(
        (base) =>
          base.name.toLowerCase().includes(searchLower) ||
          base.address?.toLowerCase().includes(searchLower) ||
          base.email?.toLowerCase().includes(searchLower),
      )
    );
  });

  return (
    <>
      <section className="from-dark/100 to-primary/10 relative mt-25 bg-gradient-to-r py-6 md:py-6 lg:py-6">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-primary mb-2 text-4xl font-bold text-black md:text-5xl lg:text-5xl">
              International Delegations
            </h1>
          </div>
        </div>
      </section>

      <section id="delegations" className="py-12 md:py-20 lg:py-24">
        <div className="container">
          {/* Search Bar */}
          <div className="mx-auto mb-8 max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search delegations by country, name, address, or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-primary bg-dark text-body-color placeholder:text-body-color/50 focus:ring-primary w-full rounded-lg border px-4 py-3 pr-12 focus:ring-2 focus:outline-none"
              />
              <svg
                className="text-primary absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <Brands />
          <div className="mx-auto max-w-4xl">
            {filteredDelegations.map((delegation, index) => (
              <div
                key={index}
                className="border-primary bg-dark mb-4 overflow-hidden rounded-lg border"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="hover:bg-primary/10 flex w-full items-center justify-between p-6 text-left transition-all"
                >
                  <h2 className="text-primary text-2xl font-bold">
                    {delegation.country}
                  </h2>
                  <svg
                    className={`text-primary h-6 w-6 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="border-primary/30 border-t p-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {delegation.bases.map((base, baseIndex) => (
                        <div
                          key={baseIndex}
                          className="border-primary/50 bg-dark rounded-lg border p-4"
                        >
                          <h3 className="text-primary mb-4 text-lg font-semibold">
                            {base.name}
                          </h3>
                          <div className="space-y-3">
                            {base.address && (
                              <div className="flex items-start">
                                <span className="text-secondary mr-3">📍</span>
                                <p className="text-body-color text-sm">
                                  {base.address}
                                </p>
                              </div>
                            )}
                            {base.phone && (
                              <div className="flex items-start">
                                <span className="text-secondary mr-3">📞</span>
                                <p className="text-body-color text-sm">
                                  {base.phone}
                                </p>
                              </div>
                            )}
                            {base.fax && (
                              <div className="flex items-start">
                                <span className="text-secondary mr-3">📠</span>
                                <p className="text-body-color text-sm">
                                  {base.fax}
                                </p>
                              </div>
                            )}
                            {base.email && (
                              <div className="flex items-start">
                                <span className="text-secondary mr-3">✉️</span>
                                <a
                                  href={`mailto:${base.email}`}
                                  className="text-primary text-sm underline"
                                >
                                  {base.email}
                                </a>
                              </div>
                            )}
                            {base.website && (
                              <div className="flex items-start">
                                <span className="text-secondary mr-3">🌐</span>
                                <a
                                  href={base.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary text-sm underline"
                                >
                                  {base.website}
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default InternationalPage;
