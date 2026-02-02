import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import {
  Code2, Cloud, Shield, Zap, Database, Globe, ChevronRight,
  Star, CheckCircle, Users, Rocket, Server, ShoppingCart,
  Calculator, FileCode, Award, TrendingUp, X
} from "lucide-react";

import { useTranslation } from "react-i18next";
import "../i18n";
import LanguageSwitcher from "./components/LanguageSwitcher";

import gorillaBackground from "../assets/gorilla.png";
import gorillaCode from "../assets/Gorilla-CODE.png";
import hackerMask from "../assets/anonymous.png";
import itau from "../assets/logos/itau.png";
import azericard from "../assets/logos/azericard.png";
import bradesco from "../assets/logos/bradesco.png";
import cielo from "../assets/logos/cielo.png";
import digitalcala from "../assets/logos/digitalcala.png";
import embraer from "../assets/logos/embraer.png";
import metlife from "../assets/logos/metlife.png";
import aci from "../assets/logos/aci.jpg";

import casino from "../app/images/casino.png";
import cambioFX from "../app/images/cambioFX.png";
import velvet from "../app/images/velvet.png";
import techFX from "../app/images/techFX.png";
import excelencia from "../app/images/excelencia.png";
import nft from "../app/images/nft.png";


export const clients = [
  { name: "Itaú", logo: itau },
  { name: "Bradesco", logo: bradesco },
  { name: "MetLife", logo: metlife },
  { name: "ACI Worldwide", logo: aci },
  { name: "Azericard", logo: azericard },
  { name: "DigitalCALA", logo: digitalcala },
  { name: "Embraer", logo: embraer },
  { name: "Cielo", logo: cielo }
];

interface Service {
  id: number;
  titleKey: string;
  descriptionKey: string;
  featuresKeys: string[];
  icon: React.ReactNode;
  color: string;
  image?: string;
}

export default function App() {
  const { t } = useTranslation();

  const [openPortfolio, setOpenPortfolio] = useState(false)
  const [openContact, setOpenContact] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [openServiceModal, setOpenServiceModal] = useState(false);

  const services: Service[] = [
    {
      id: 1,
      titleKey: "services.banking.title",
      descriptionKey: "services.banking.description",
      featuresKeys: [
        "services.banking.features.core",
        "services.banking.features.payments",
        "services.banking.features.antifraud",
        "services.banking.features.compliance"
      ],
      icon: <Shield className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      titleKey: "services.ecommerce.title",
      descriptionKey: "services.ecommerce.description",
      featuresKeys: [
        "services.ecommerce.features.shopify",
        "services.ecommerce.features.custom",
        "services.ecommerce.features.integrations",
        "services.ecommerce.features.seo"
      ],
      icon: <ShoppingCart className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 3,
      titleKey: "services.accounting.title",
      descriptionKey: "services.accounting.description",
      featuresKeys: [
        "services.accounting.features.erp",
        "services.accounting.features.taxes",
        "services.accounting.features.reports",
        "services.accounting.features.dashboard"
      ],
      icon: <Calculator className="w-6 h-6" />,
      color: "from-cyan-500 to-green-500"
    },
    {
      id: 4,
      titleKey: "services.cloud.title",
      descriptionKey: "services.cloud.description",
      featuresKeys: [
        "services.cloud.features.aws",
        "services.cloud.features.cicd",
        "services.cloud.features.monitoring",
        "services.cloud.features.autoscaling"
      ],
      icon: <Cloud className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      titleKey: "services.custom.title",
      descriptionKey: "services.custom.description",
      featuresKeys: [
        "services.custom.features.web",
        "services.custom.features.mobile",
        "services.custom.features.apis",
        "services.custom.features.microservices"
      ],
      icon: <FileCode className="w-6 h-6" />,
      color: "from-violet-500 to-purple-500"
    },
    {
      id: 6,
      titleKey: "services.maintenance.title",
      descriptionKey: "services.maintenance.description",
      featuresKeys: [
        "services.maintenance.features.support",
        "services.maintenance.features.updates",
        "services.maintenance.features.backup",
        "services.maintenance.features.security"
      ],
      icon: <Server className="w-6 h-6" />,
      color: "from-violet-500 to-purple-500"
    }
  ];

  const testimonials = [
    {
      nameKey: "testimonials.carlosSilva.name",
      companyKey: "testimonials.carlosSilva.company",
      rating: 5,
      textKey: "testimonials.carlosSilva.text"
    },
    {
      nameKey: "testimonials.anaPaula.name",
      companyKey: "testimonials.anaPaula.company",
      rating: 5,
      textKey: "testimonials.anaPaula.text"
    },
    {
      nameKey: "testimonials.ricardoOliveira.name",
      companyKey: "testimonials.ricardoOliveira.company",
      rating: 5,
      textKey: "testimonials.ricardoOliveira.text"
    }
  ];

  const stats = [
    {
      labelKey: "stats.projectsDelivered",
      value: "150+",
      icon: <Rocket className="w-5 h-5" />
    },
    {
      labelKey: "stats.clientsSatisfied",
      value: "170+",
      icon: <Users className="w-5 h-5" />
    },
    {
      labelKey: "stats.uptime",
      value: "95.5%",
      icon: <Shield className="w-5 h-5" />
    },
    {
      labelKey: "stats.yearsExperience",
      value: "15+",
      icon: <Award className="w-5 h-5" />
    }
  ];

  const achievements = [
    { icon: <Code2 className="w-5 h-5" />, textKey: "achievements.cleanCode" },
    { icon: <Shield className="w-5 h-5" />, textKey: "achievements.securityCertifications" },
    { icon: <Cloud className="w-5 h-5" />, textKey: "achievements.cloudNative" },
    { icon: <TrendingUp className="w-5 h-5" />, textKey: "achievements.scalability" }
  ];

  const portfolioProjects = [
    {
      id: 1,
      titleKey: "portfolio.projects.appGames.title",
      descriptionKey: "portfolio.projects.appGames.description",
      image: casino
    },
    {
      id: 2,
      titleKey: "portfolio.projects.appFinance.title",
      descriptionKey: "portfolio.projects.appFinance.description",
      image: cambioFX
    },
    {
      id: 3,
      titleKey: "portfolio.projects.appAdult.title",
      descriptionKey: "portfolio.projects.appAdult.description",
      image: velvet
    },
    {
      id: 4,
      titleKey: "portfolio.projects.appFX.title",
      descriptionKey: "portfolio.projects.appFX.description",
      image: techFX
    },
    {
      id: 5,
      titleKey: "portfolio.projects.appAccounting.title",
      descriptionKey: "portfolio.projects.appAccounting.description",
      image: excelencia
    },
    {
      id: 6,
      titleKey: "portfolio.projects.appNFT.title",
      descriptionKey: "portfolio.projects.appNFT.description",
      image: nft
    }
  ];


  useEffect(() => {
    document.body.style.overflow = openPortfolio ? 'hidden' : '';
  }, [openPortfolio]);

  useEffect(() => {
    document.body.style.overflow = openContact || openPortfolio ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [openContact, openPortfolio]);


  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden relative">

      {/* Hero Section */}
      <div
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 15, 0.85), rgba(10, 10, 15, 0.95)), url(${gorillaBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll'
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-cyan-900/20 pointer-events-none"></div>

        {/* Animated grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

            {/* Language Switcher */}
            <div className="flex justify-end mb-4">
              <LanguageSwitcher />
            </div>

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-3 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-md border border-purple-500/30 rounded-full px-6 py-3">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                {t("hero.badge")}
              </span>
            </div>

            {/* Logo */}
            <div className="mb-0">
              <img src={gorillaCode} className="animate-pulse w-[700px] mx-auto" />
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-snug text-center mb-8">
              <span className="text-white">{t("hero.title")}</span>
            </h2>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300"
                onClick={() => setOpenContact(true)}
              >
                <Rocket className="w-5 h-5 mr-2" />
                {t("hero.cta.primary")}
              </Button>

              <Button
                variant="outline"
                onClick={() => setOpenPortfolio(true)}
                className="group border-2 border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/10 px-8 py-6 text-lg rounded-full backdrop-blur-md transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]"
              >
                <Database className="w-5 h-5 mr-2 transition-transform group-hover:scale-110 group-hover:rotate-6" />
                {t("hero.cta.secondary")}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-md border border-purple-500/20 rounded-lg p-4">
                  <div className="flex items-center justify-center gap-2 mb-2 text-cyan-400">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400">{t(stat.labelKey)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
          <ChevronRight className="w-6 h-6 text-purple-400 rotate-90" />
        </div>

        {/* Modal Contato */}
        {openContact && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setOpenContact(false)}
            />
            <div className="relative w-[90%] max-w-xl max-h-[85vh] overflow-y-auto rounded-2xl bg-gradient-to-br from-[#0b0b14] via-[#0f1020] to-[#06060d] border border-purple-500/20 shadow-[0_0_80px_rgba(168,85,247,0.35)] p-8 animate-in fade-in zoom-in duration-300 z-50">
              <button
                onClick={() => setOpenContact(false)}
                className="absolute top-4 right-4 text-cyan-400 hover:text-cyan-200 transition"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-6 text-center">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {t("contact.title")}
                </h2>
                <p className="text-gray-400 mt-2">{t("contact.subtitle")}</p>
              </div>

              {!submitted ? (
                <form
                  className="space-y-4"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const data = new FormData(form);

                    try {
                      const response = await fetch("https://formspree.io/f/xjgovowb", {
                        method: "POST",
                        headers: { 'Accept': 'application/json' },
                        body: data,
                      });

                      if (response.ok) {
                        setSubmitted(true);
                        setTimeout(() => setOpenContact(false), 3000);
                        form.reset();
                      } else {
                        alert(t("contact.error") || "Erro ao enviar a mensagem. Tente novamente.");
                      }
                    } catch (error) {
                      alert(t("contact.error") || "Erro ao enviar a mensagem. Tente novamente.");
                    }
                  }}
                >
                  <input
                    type="text"
                    name="empresa"
                    placeholder={t("contact.form.company")}
                    required
                    className="w-full p-3 rounded-lg bg-gray-900 text-white border border-purple-500/30 focus:outline-none focus:border-cyan-400"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder={t("contact.form.email")}
                    required
                    className="w-full p-3 rounded-lg bg-gray-900 text-white border border-purple-500/30 focus:outline-none focus:border-cyan-400"
                  />
                  <input
                    type="tel"
                    name="telefone"
                    placeholder={t("contact.form.phone")}
                    required
                    className="w-full p-3 rounded-lg bg-gray-900 text-white border border-purple-500/30 focus:outline-none focus:border-cyan-400"
                  />
                  <textarea
                    name="mensagem"
                    placeholder={t("contact.form.message")}
                    rows={4}
                    required
                    className="w-full p-3 rounded-lg bg-gray-900 text-white border border-purple-500/30 focus:outline-none focus:border-cyan-400"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white px-6 py-4 rounded-full transition-all duration-300"
                  >
                    {t("contact.form.submit")}
                  </Button>
                </form>
              ) : (
                <div className="text-center text-green-400 font-semibold text-lg">
                  {t("contact.success")}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Modal Portfólio */}
        {openPortfolio && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setOpenPortfolio(false)} />
            <div className="relative w-[90%] max-w-5xl max-h-[85vh] overflow-y-auto rounded-2xl bg-gradient-to-br from-[#0b0b14] via-[#0f1020] to-[#06060d] border border-purple-500/20 shadow-[0_0_80px_rgba(168,85,247,0.35)] p-8 animate-in fade-in zoom-in duration-300 z-50">
              <button onClick={() => setOpenPortfolio(false)} className="absolute top-4 right-4 text-cyan-400 hover:text-cyan-200 transition">
                <X className="w-6 h-6" />
              </button>

              <div className="mb-10 text-center">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {t("portfolio.title")}
                </h2>
                <p className="text-gray-400 mt-3">
                  {t("portfolio.subtitle")}
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {portfolioProjects.map((item) => (
                  <div key={item.id} className="group rounded-xl border border-cyan-500/10 bg-white/5 overflow-hidden p-0 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                    <img src={item.image} alt={t(item.titleKey)} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition">{t(item.titleKey)}</h3>
                      <p className="text-sm text-gray-400 mt-1">{t(item.descriptionKey)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Clients Section */}
      <div className="relative py-16 bg-gradient-to-b from-[#0a0a0f] to-[#1a0a1f]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-purple-500/20 text-purple-400 border-purple-500/30 px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              {t("clients.title")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                {t("clients.subtitle")}
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {clients.map((client, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-4 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-white/10">
                <img src={client.logo} alt={client.name} className="w-full h-20 object-contain filter grayscale opacity-50 transition-all duration-300 hover:grayscale-0 hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div
        className="relative py-24 bg-gradient-to-b from-[#1a0a1f] to-[#0a0a0f]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(26, 10, 31, 0.92), rgba(10, 10, 15, 0.95)), url(${hackerMask})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-cyan-900/10 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-500/20 text-purple-400 border-purple-500/30 px-4 py-2">
              <Code2 className="w-4 h-4 mr-2" />
              {t("services.badge")} {/* tradução do título da seção */}
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                {t("services.subtitle")} {/* tradução do subtítulo */}
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t("services.description")} {/* descrição da seção */}
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card
                key={service.id}
                className="group relative overflow-hidden bg-gradient-to-br from-purple-950/60 to-cyan-950/60 border-purple-500/20 hover:border-purple-500/50 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>

                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${service.color} shadow-lg`}>
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                    {t(service.titleKey)} {/* tradução do título do serviço */}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {t(service.descriptionKey)} {/* tradução da descrição */}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-2 mb-4">
                    {service.featuresKeys.map((featureKey, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{t(featureKey)}</span> {/* tradução da feature */}
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full bg-gradient-to-r ${service.color} hover:shadow-lg transition-all duration-300 text-white font-bold`}
                    onClick={() => {
                      setSelectedService(service);
                      setOpenServiceModal(true);
                    }}
                  >
                    {t("services.button")} {/* tradução do botão */}
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Modal Detalhe do Serviço */}
        {openServiceModal && selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setOpenServiceModal(false)}
            />
            <div className="relative w-[90%] max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-gradient-to-br from-[#0b0b14] via-[#0f1020] to-[#06060d] border border-purple-500/20 shadow-[0_0_80px_rgba(168,85,247,0.35)] p-8 animate-in fade-in zoom-in duration-300 z-50">
              <button
                onClick={() => setOpenServiceModal(false)}
                className="absolute top-4 right-4 text-cyan-400 hover:text-cyan-200 transition"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Header do Serviço */}
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {t(selectedService.titleKey)} {/* título traduzido */}
                </h2>
                <p className="text-gray-400 mt-2">{t(selectedService.descriptionKey)}</p> {/* descrição traduzida */}
              </div>

              {/* Features */}
              <div className="mb-4 space-y-2">
                {selectedService.featuresKeys.map((featureKey, fidx) => (
                  <div key={fidx} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>{t(featureKey)}</span> {/* features traduzidas */}
                  </div>
                ))}
              </div>

              {/* Imagem do Serviço */}
              {selectedService.image && (
                <img
                  src={selectedService.image}
                  alt={t(selectedService.titleKey)}
                  className="w-full rounded-lg my-4 shadow-lg"
                />
              )}

              {/* Botão Entrar em Contato */}
              <Button
                className={`w-full bg-gradient-to-r ${selectedService.color} hover:shadow-lg transition-all duration-300 text-white font-bold`}
                onClick={() => {
                  setOpenServiceModal(false);
                  setOpenContact(true);
                }}
              >
                {t("services.contactButton")} {/* texto do botão traduzido */}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Testimonials Section */}
      <div className="relative py-24 bg-gradient-to-b from-[#0a0a0f] to-[#1a0a1f]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-500/20 text-purple-400 border-purple-500/30 px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              {t("testimonials.badge")}
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                {t("testimonials.title")}
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t("testimonials.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-purple-950/50 to-cyan-950/50 border-purple-500/20 backdrop-blur-sm"
              >
                <CardHeader>
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  {/* Texto do Testemunho */}
                  <p className="text-gray-300 italic">"{t(testimonial.textKey)}"</p>
                </CardHeader>
                <CardContent>
                  {/* Nome e Empresa */}
                  <p className="font-bold text-white">{t(testimonial.nameKey)}</p>
                  <p className="text-sm text-gray-400">{t(testimonial.companyKey)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="relative py-24 bg-gradient-to-b from-[#1a0a1f] to-[#0a0a0f]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                {t("whyChooseUs.title")}
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-cyan-900/30 border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-purple-600 to-cyan-600 mb-4">
                  {achievement.icon}
                </div>
                <p className="text-white font-medium">{t(achievement.textKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24 bg-gradient-to-r from-purple-900/20 via-fuchsia-900/20 to-cyan-900/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400">
              {t("cta.title")}
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {t("cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-cyan-600 hover:from-purple-700 hover:via-fuchsia-700 hover:to-cyan-700 text-white px-12 py-8 text-xl rounded-full shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 font-bold"
              onClick={() => window.open(
                'https://wa.me/5551999020666?text=Olá,%20quero%20agendar%20uma%20consultoria',
                '_blank'
              )}
            >
              <Rocket className="w-6 h-6 mr-2" />
              {t("cta.buttonText")}
            </Button>
          </div>
          <p className="mt-6 text-gray-400 text-sm">
            {t("cta.stats")}
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative py-12 bg-[#0a0a0f] border-t border-purple-500/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-2">
              {t("footer.name")}
            </h3>
            <p className="text-gray-400 mb-4">{t("footer.role")}</p>
            <p className="text-sm text-gray-500">{t("footer.specialty")}</p>
          </div>
          <div className="text-center pt-6 border-t border-purple-500/10">
            <p className="text-sm text-gray-500">{t("footer.copyright")}</p>
          </div>
        </div>
      </footer>
    </div >
  );
}
