import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Shield, Zap, Globe, ArrowUpRight, ArrowRightLeft } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data for currency charts
const dolarData = [
  { time: '09:00', valor: 5.15 },
  { time: '10:00', valor: 5.18 },
  { time: '11:00', valor: 5.16 },
  { time: '12:00', valor: 5.20 },
  { time: '13:00', valor: 5.22 },
  { time: '14:00', valor: 5.19 },
  { time: '15:00', valor: 5.24 },
  { time: '16:00', valor: 5.26 },
];

const euroData = [
  { time: '09:00', valor: 5.45 },
  { time: '10:00', valor: 5.48 },
  { time: '11:00', valor: 5.50 },
  { time: '12:00', valor: 5.47 },
  { time: '13:00', valor: 5.52 },
  { time: '14:00', valor: 5.55 },
  { time: '15:00', valor: 5.53 },
  { time: '16:00', valor: 5.58 },
];

interface LandingPageProps {
  onNavigateToSystem: () => void;
}

export function LandingPage({ onNavigateToSystem }: LandingPageProps) {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6 text-center">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold text-white leading-tight">
              Câmbio com a <span className="text-emerald-400">Força</span> de um Gorila
            </h2>
            <p className="text-xl text-neutral-300">
              Taxas competitivas, segurança absoluta e agilidade incomparável para suas operações cambiais
            </p>
          </div>
          <div className="flex gap-4 justify-center">
            <Button 
              onClick={onNavigateToSystem}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg"
            >
              Acessar Sistema
              <ArrowRightLeft className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline"
              className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 px-8 py-6 text-lg"
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-neutral-500/30 bg-neutral-800/70 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-emerald-500/10">
                <Shield className="w-6 h-6 text-emerald-500" />
              </div>
              <CardTitle className="text-white">Segurança Total</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-neutral-300">
              Suas transações protegidas com criptografia de ponta e conformidade total com regulamentações internacionais
            </p>
          </CardContent>
        </Card>

        <Card className="border-neutral-500/30 bg-neutral-800/70 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-emerald-500/10">
                <Zap className="w-6 h-6 text-emerald-500" />
              </div>
              <CardTitle className="text-white">Rapidez Incomparável</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-neutral-300">
              Processamento instantâneo de operações cambiais com as melhores taxas do mercado
            </p>
          </CardContent>
        </Card>

        <Card className="border-neutral-500/30 bg-neutral-800/70 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-emerald-500/10">
                <Globe className="w-6 h-6 text-emerald-500" />
              </div>
              <CardTitle className="text-white">Alcance Global</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-neutral-300">
              Opere com mais de 50 moedas internacionais e parceiros em todos os continentes
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Currency Charts */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Dólar Chart */}
        <Card className="border-neutral-500/30 bg-neutral-800/70 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-white">Dólar Americano</CardTitle>
                <CardDescription className="text-neutral-300">USD/BRL - Hoje</CardDescription>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-white">R$ 5,26</p>
                <div className="flex items-center gap-1 text-emerald-400">
                  <ArrowUpRight className="w-4 h-4" />
                  <span className="text-sm">+2.14%</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={dolarData}>
                <defs>
                  <linearGradient id="colorDolar" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#404040" />
                <XAxis dataKey="time" stroke="#a3a3a3" />
                <YAxis domain={[5.10, 5.30]} stroke="#a3a3a3" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#262626', border: '1px solid #404040', borderRadius: '8px' }}
                  labelStyle={{ color: '#a3a3a3' }}
                />
                <Area type="monotone" dataKey="valor" stroke="#10b981" fillOpacity={1} fill="url(#colorDolar)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Euro Chart */}
        <Card className="border-neutral-500/30 bg-neutral-800/70 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-white">Euro</CardTitle>
                <CardDescription className="text-neutral-300">EUR/BRL - Hoje</CardDescription>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-white">R$ 5,58</p>
                <div className="flex items-center gap-1 text-emerald-400">
                  <ArrowUpRight className="w-4 h-4" />
                  <span className="text-sm">+2.38%</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={euroData}>
                <defs>
                  <linearGradient id="colorEuro" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#404040" />
                <XAxis dataKey="time" stroke="#a3a3a3" />
                <YAxis domain={[5.40, 5.60]} stroke="#a3a3a3" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#262626', border: '1px solid #404040', borderRadius: '8px' }}
                  labelStyle={{ color: '#a3a3a3' }}
                />
                <Area type="monotone" dataKey="valor" stroke="#3b82f6" fillOpacity={1} fill="url(#colorEuro)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Stats */}
      <Card className="border-neutral-500/30 bg-neutral-800/70 backdrop-blur-sm">
        <CardContent className="pt-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-emerald-400">R$ 2.5B+</p>
              <p className="text-neutral-300 mt-2">Volume Transacionado</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-emerald-400">50+</p>
              <p className="text-neutral-300 mt-2">Moedas Disponíveis</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-emerald-400">10k+</p>
              <p className="text-neutral-300 mt-2">Clientes Ativos</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-emerald-400">24/7</p>
              <p className="text-neutral-300 mt-2">Suporte Disponível</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Why Choose Us Section */}
      <Card className="border-neutral-500/30 bg-neutral-800/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white text-3xl text-center">Por que escolher a GORILLA Cambio FX?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-emerald-400">🏆 Experiência Comprovada</h3>
              <p className="text-neutral-300">
                Mais de 10 anos no mercado cambial, atendendo desde pequenos investidores até grandes corporações com excelência e transparência.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-emerald-400">💰 Taxas Competitivas</h3>
              <p className="text-neutral-300">
                Oferecemos as melhores taxas de câmbio do mercado, sem taxas ocultas. O que você vê é o que você paga.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-emerald-400">⚡ Processamento Instantâneo</h3>
              <p className="text-neutral-300">
                Suas operações são processadas em tempo real, garantindo agilidade e eficiência em todas as transações.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-emerald-400">🌍 Cobertura Internacional</h3>
              <p className="text-neutral-300">
                Parceiros estratégicos em todos os continentes, permitindo operações cambiais em mais de 50 moedas diferentes.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA Section */}
      <Card className="border-emerald-500/30 bg-gradient-to-br from-emerald-900/30 to-neutral-800/70 backdrop-blur-sm">
        <CardContent className="py-12">
          <div className="text-center space-y-6">
            <h3 className="text-3xl font-bold text-white">
              Pronto para começar suas operações cambiais?
            </h3>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
              Junte-se a milhares de clientes que confiam na força e segurança da GORILLA Cambio FX
            </p>
            <Button 
              onClick={onNavigateToSystem}
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-6 text-lg"
            >
              Acessar Sistema Agora
              <ArrowRightLeft className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
