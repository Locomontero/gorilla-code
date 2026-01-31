import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import {
  Code2, Cloud, Shield, Zap, Database, Globe, ChevronRight,
  Star, CheckCircle, Users, Rocket, Server, ShoppingCart,
  Calculator, FileCode, Award, TrendingUp, X
} from "lucide-react";
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
import aci from "../assets/logos/aci.png";


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


export default function App() {

  const [openPortfolio, setOpenPortfolio] = useState(false)
  const [openContact, setOpenContact] = useState(false);

  const services = [
    {
      id: 1,
      title: "Plataformas Bancárias",
      description: "Sistemas financeiros robustos, seguros e escaláveis com compliance total",
      icon: <Shield className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      features: ["Core Banking", "Payment Processing", "Anti-Fraude", "Compliance"]
    },
    {
      id: 2,
      title: "E-commerce & Shopify",
      description: "Lojas online de alto desempenho com integrações completas",
      icon: <ShoppingCart className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-500",
      features: ["Shopify Plus", "Customização", "Integrações", "SEO"]
    },
    {
      id: 3,
      title: "Sistemas de Contabilidade",
      description: "Automação contábil e fiscal com precisão e conformidade",
      icon: <Calculator className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      features: ["ERP", "Fiscal", "Relatórios", "Dashboard"]
    },
    {
      id: 4,
      title: "Cloud & DevOps",
      description: "Hospedagem em nuvem com alta disponibilidade e segurança",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      features: ["AWS/Azure", "CI/CD", "Monitoramento", "Auto-scaling"]
    },
    {
      id: 5,
      title: "Aplicações Customizadas",
      description: "Desenvolvimento sob medida para qualquer necessidade do seu negócio",
      icon: <FileCode className="w-6 h-6" />,
      color: "from-violet-500 to-purple-500",
      features: ["Web Apps", "Mobile", "APIs", "Microserviços"]
    },
    {
      id: 6,
      title: "Manutenção & Suporte",
      description: "Gerenciamento contínuo e evolução das suas aplicações",
      icon: <Server className="w-6 h-6" />,
      color: "from-fuchsia-500 to-pink-500",
      features: ["24/7 Support", "Updates", "Backup", "Segurança"]
    }
  ];


  const testimonials = [
    {
      name: "Carlos Silva",
      company: "Diretor de TI - Banco Regional",
      rating: 5,
      text: "A plataforma bancária desenvolvida superou todas as expectativas. Segurança impecável e performance excelente."
    },
    {
      name: "Ana Paula Santos",
      company: "CEO - E-commerce Fashion",
      rating: 5,
      text: "Nossa loja Shopify teve um crescimento de 300% após a customização. Equipe extremamente competente!"
    },
    {
      name: "Ricardo Oliveira",
      company: "CFO - Indústria Automotiva",
      rating: 5,
      text: "Sistema contábil revolucionou nosso processo fiscal. Reduzimos erros em 98%. Altamente recomendado!"
    }
  ];

  const stats = [
    { label: "Projetos Entregues", value: "750+", icon: <Rocket className="w-5 h-5" /> },
    { label: "Clientes Satisfeitos", value: "185+", icon: <Users className="w-5 h-5" /> },
    { label: "Uptime Garantido", value: "92.5%", icon: <Shield className="w-5 h-5" /> },
    { label: "Anos de Experiência", value: "15+", icon: <Award className="w-5 h-5" /> }
  ];

  const achievements = [
    { icon: <Code2 className="w-5 h-5" />, text: "Clean Code & Best Practices" },
    { icon: <Shield className="w-5 h-5" />, text: "Certificações de Segurança" },
    { icon: <Cloud className="w-5 h-5" />, text: "Cloud Native Architecture" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Escalabilidade Garantida" }
  ];
  // Exemplo no topo do App.tsx, antes do return
  const portfolioProjects = [
    {
      id: 1,
      title: "App de Jogos Online",
      description: "Landing page moderna com design responsivo e interativo.",
      image: "src/app/images/casino.png" // coloque suas imagens na pasta public/images
    },
    {
      id: 2,
      title: "App Financeiro",
      description: "Aplicativo de finanças com dashboard interativo.",
      image: "src/app/images/cambioFX.png"
    },
    {
      id: 3,
      title: "App de Conteúdo +18",
      description: "Plataforma de e-commerce com checkout otimizado.",
      image: "src/app/images/velvet.png"
    },
    {
      id: 4,
      title: "App de Cambio FX",
      description: "Sistema completo de reservas online.",
      image: "src/app/images/techFX.png"
    },
    {
      id: 5,
      title: "App Contabilidade",
      description: "Dashboard de análise de dados em tempo real.",
      image: "src/app/images/excelencia.png"
    },
    {
      id: 6,
      title: "App NFT Blockchain",
      description: "Plataforma NFT com recursos interativos.",
      image: "src/app/images/nft.png"
    },
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
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-3 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-md border border-purple-500/30 rounded-full px-6 py-3">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                EXCELÊNCIA EM ENGENHARIA DE SOFTWARE
              </span>
            </div>

            {/* Logo */}
            <div className="mb-0">
              <img src={gorillaCode} className="animate-pulse w-[700px] mx-auto" />
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-snug text-center mb-8">
              <span className="text-white">
                Transforme Seu Negócio com Soluções Tecnológicas de Ponta.
              </span>
            </h2>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300"
                onClick={() => setOpenContact(true)}
              >
                <Rocket className="w-5 h-5 mr-2" />
                Iniciar Projeto
              </Button>

              <Button
                variant="outline"
                onClick={() => setOpenPortfolio(true)}
                className="group border-2 border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/10 px-8 py-6 text-lg rounded-full backdrop-blur-md transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]"
              >
                <Database className="w-5 h-5 mr-2 transition-transform group-hover:scale-110 group-hover:rotate-6" />
                Ver Portfólio
              </Button>
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
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setOpenContact(false)} />
            <div className="relative w-[90%] max-w-xl max-h-[85vh] overflow-y-auto rounded-2xl bg-gradient-to-br from-[#0b0b14] via-[#0f1020] to-[#06060d] border border-purple-500/20 shadow-[0_0_80px_rgba(168,85,247,0.35)] p-8 animate-in fade-in zoom-in duration-300 z-50">
              <button onClick={() => setOpenContact(false)} className="absolute top-4 right-4 text-cyan-400 hover:text-cyan-200 transition">
                <X className="w-6 h-6" />
              </button>

              <div className="mb-6 text-center">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Fale Conosco
                </h2>
                <p className="text-gray-400 mt-2">Preencha seus dados e entraremos em contato</p>
              </div>

              <form className="space-y-4">
                <input type="text" placeholder="Nome da Empresa" className="w-full p-3 rounded-lg bg-gray-900 text-white border border-purple-500/30 focus:outline-none focus:border-cyan-400" />
                <input type="email" placeholder="Email" className="w-full p-3 rounded-lg bg-gray-900 text-white border border-purple-500/30 focus:outline-none focus:border-cyan-400" />
                <input type="tel" placeholder="Telefone" className="w-full p-3 rounded-lg bg-gray-900 text-white border border-purple-500/30 focus:outline-none focus:border-cyan-400" />
                <textarea placeholder="Motivo do Contato" className="w-full p-3 rounded-lg bg-gray-900 text-white border border-purple-500/30 focus:outline-none focus:border-cyan-400" rows={4} />
                <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white px-6 py-4 rounded-full transition-all duration-300">
                  Enviar
                </Button>
              </form>
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
                  Portfólio
                </h2>
                <p className="text-gray-400 mt-3">
                  Projetos reais. Design, performance e impacto.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {portfolioProjects.map((item) => (
                  <div key={item.id} className="group rounded-xl border border-cyan-500/10 bg-white/5 overflow-hidden p-0 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                    <img src={item.image} alt={item.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition">{item.title}</h3>
                      <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div> {/* fim Hero Section */}

      {/* Clients Section */}
      <div className="relative py-16 bg-gradient-to-b from-[#0a0a0f] to-[#1a0a1f]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-purple-500/20 text-purple-400 border-purple-500/30 px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              Clientes que Confiam
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Empresas Líderes de Mercado
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {clients.map((client, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 flex flex-col items-center justify-center hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                <div className="mb-2 flex items-center justify-center h-12">
                  <img src={client.logo} className="h-10 mx-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition" />
                </div>
                <p className="text-sm text-gray-300 font-medium text-center">{client.name}</p>
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
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-500/20 text-purple-400 border-purple-500/30 px-4 py-2">
              <Code2 className="w-4 h-4 mr-2" />
              Nossos Serviços
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Soluções Completas
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Do planejamento à entrega, cuidamos de toda infraestrutura tecnológica do seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card
                key={service.id}
                className="group relative overflow-hidden bg-gradient-to-br from-purple-950/60 to-cyan-950/60 border-purple-500/20 hover:border-purple-500/50 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${service.color} shadow-lg`}>
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className={`w-full bg-gradient-to-r ${service.color} hover:shadow-lg transition-all duration-300 text-white font-bold`}>
                    Saiba Mais
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative py-24 bg-gradient-to-b from-[#0a0a0f] to-[#1a0a1f]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-500/20 text-purple-400 border-purple-500/30 px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              Avaliações
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Clientes Satisfeitos
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Veja o que nossos clientes dizem sobre nosso trabalho
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-purple-950/50 to-cyan-950/50 border-purple-500/20 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.text}"</p>
                </CardHeader>
                <CardContent>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.company}</p>
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
                Por Que Escolher Nossos Serviços?
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
                <p className="text-white font-medium">{achievement.text}</p>
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
              Pronto para Escalar Seu Negócio?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Vamos conversar sobre como podemos transformar suas ideias em realidade digital
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-cyan-600 hover:from-purple-700 hover:via-fuchsia-700 hover:to-cyan-700 text-white px-12 py-8 text-xl rounded-full shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 font-bold">
              <Rocket className="w-6 h-6 mr-3" />
              Agendar Consulta
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative py-12 bg-[#0a0a0f] border-t border-purple-500/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-2">
              Patrick Monteiro
            </h3>
            <p className="text-gray-400 mb-4">Engenheiro de Software</p>
            <p className="text-sm text-gray-500">
              Especialista em Plataformas Bancárias, E-commerce e Cloud Architecture
            </p>
          </div>
          <div className="text-center pt-6 border-t border-purple-500/10">
            <p className="text-sm text-gray-500">
              © 2026 Patrick Monteiro - Engenharia de Software. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
