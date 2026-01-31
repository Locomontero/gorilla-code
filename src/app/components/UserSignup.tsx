import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { UserPlus, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { validarCPF, validarCNPJ, validarEmail, formatarCPF, formatarCNPJ, formatarTelefone } from "../utils/validators";
import { countries } from "../utils/countries";

interface UserSignupProps {
  onBackToLogin: () => void;
  onAccountCreated: (accountData: any) => void;
}

export function UserSignup({ onBackToLogin, onAccountCreated }: UserSignupProps) {
  const [loading, setLoading] = useState(false);
  
  // Form states
  const [accountType, setAccountType] = useState<"PF" | "PJ">("PF");
  const [fullName, setFullName] = useState("");
  const [document, setDocument] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("BR");
  const [baseCurrency, setBaseCurrency] = useState("BRL");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Mock database - em produção viria de uma API real
  const [existingAccounts] = useState<string[]>(["12345678900", "98765432100"]);

  const handleCountryChange = (countryCode: string) => {
    setCountry(countryCode);
    const selectedCountry = countries.find(c => c.code === countryCode);
    if (selectedCountry) {
      setBaseCurrency(selectedCountry.currency);
    }
  };

  const handleDocumentChange = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length <= 11) {
      setDocument(formatarCPF(value));
    } else {
      setDocument(formatarCNPJ(value));
    }
  };

  const handleCreateAccount = () => {
    // Validations
    if (!fullName.trim()) {
      toast.error("Nome completo é obrigatório");
      return;
    }

    if (!document.trim()) {
      toast.error(`${accountType === "PF" ? "CPF" : "CNPJ"} é obrigatório`);
      return;
    }

    // Validate CPF or CNPJ
    const cleanedDocument = document.replace(/\D/g, '');
    let isValid = false;

    if (accountType === "PF") {
      if (cleanedDocument.length !== 11) {
        toast.error("CPF deve ter 11 dígitos");
        return;
      }
      isValid = validarCPF(cleanedDocument);
      if (!isValid) {
        toast.error("CPF inválido! Verifique os dados e tente novamente.");
        return;
      }
    } else {
      if (cleanedDocument.length !== 14) {
        toast.error("CNPJ deve ter 14 dígitos");
        return;
      }
      isValid = validarCNPJ(cleanedDocument);
      if (!isValid) {
        toast.error("CNPJ inválido! Verifique os dados e tente novamente.");
        return;
      }
    }

    // Check if account already exists
    if (existingAccounts.includes(cleanedDocument)) {
      toast.error(`${accountType === "PF" ? "CPF" : "CNPJ"} já cadastrado na base de dados!`);
      return;
    }

    if (!validarEmail(email)) {
      toast.error("Email inválido! Certifique-se de incluir @ no endereço de email.");
      return;
    }

    const cleanedPhone = phone.replace(/\D/g, '');
    if (cleanedPhone.length < 10) {
      toast.error("Telefone inválido! Deve conter pelo menos 10 dígitos.");
      return;
    }

    if (password.length < 6) {
      toast.error("A senha deve ter pelo menos 6 caracteres");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("As senhas não coincidem");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const newAccountId = `ACC-${Date.now().toString().slice(-8)}`;
      const accountData = {
        id: newAccountId,
        name: fullName,
        email: email,
        document: cleanedDocument,
        type: accountType,
        country: country,
        baseCurrency: baseCurrency,
        balance: 0
      };

      toast.success("Conta criada com sucesso! Faça login para continuar.");
      onAccountCreated(accountData);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <Card className="border-emerald-500/30 bg-neutral-800/70 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Button
              onClick={onBackToLogin}
              variant="ghost"
              size="sm"
              className="text-neutral-300 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </div>
          <div className="text-center mt-4">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-emerald-500/10">
                <UserPlus className="w-12 h-12 text-emerald-500" />
              </div>
            </div>
            <CardTitle className="text-2xl text-white">Criar Minha Conta</CardTitle>
            <CardDescription className="text-neutral-300">
              Preencha seus dados para abrir sua conta na GORILLA Cambio FX
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Account Type Toggle */}
          <div className="flex gap-2">
            <Button
              onClick={() => setAccountType("PF")}
              variant={accountType === "PF" ? "default" : "outline"}
              className={accountType === "PF" 
                ? "flex-1 bg-emerald-600 hover:bg-emerald-700" 
                : "flex-1 border-neutral-500/50 text-neutral-300"
              }
            >
              Pessoa Física
            </Button>
            <Button
              onClick={() => setAccountType("PJ")}
              variant={accountType === "PJ" ? "default" : "outline"}
              className={accountType === "PJ" 
                ? "flex-1 bg-emerald-600 hover:bg-emerald-700" 
                : "flex-1 border-neutral-500/50 text-neutral-300"
              }
            >
              Pessoa Jurídica
            </Button>
          </div>

          {/* Full Name */}
          <div className="space-y-2">
            <Label className="text-neutral-200">
              {accountType === "PF" ? "Nome Completo" : "Razão Social"} *
            </Label>
            <Input
              placeholder={accountType === "PF" ? "João da Silva" : "Empresa LTDA"}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="bg-neutral-900/50 border-neutral-500/40 text-white placeholder:text-neutral-400"
            />
          </div>

          {/* Document */}
          <div className="space-y-2">
            <Label className="text-neutral-200">
              {accountType === "PF" ? "CPF" : "CNPJ"} *
            </Label>
            <Input
              placeholder={accountType === "PF" ? "000.000.000-00" : "00.000.000/0000-00"}
              value={document}
              onChange={(e) => handleDocumentChange(e.target.value)}
              className="bg-neutral-900/50 border-neutral-500/40 text-white placeholder:text-neutral-400"
            />
          </div>

          {/* Email and Phone */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-neutral-200">Email *</Label>
              <Input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-neutral-900/50 border-neutral-500/40 text-white placeholder:text-neutral-400"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-neutral-200">Telefone *</Label>
              <Input
                placeholder="+55 51 99999-9999"
                value={phone}
                onChange={(e) => setPhone(formatarTelefone(e.target.value))}
                className="bg-neutral-900/50 border-neutral-500/40 text-white placeholder:text-neutral-400"
              />
            </div>
          </div>

          {/* Country and Currency */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-neutral-200">País *</Label>
              <Select value={country} onValueChange={handleCountryChange}>
                <SelectTrigger className="bg-neutral-900/50 border-neutral-500/40 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-neutral-900 border-neutral-500/40 max-h-60">
                  {countries.map((c) => (
                    <SelectItem key={c.code} value={c.code} className="text-white">
                      {c.flag} {c.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-neutral-200">Moeda Base</Label>
              <Input
                value={baseCurrency}
                disabled
                className="bg-neutral-900/30 border-neutral-500/40 text-neutral-400"
              />
            </div>
          </div>

          {/* Password */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-neutral-200">Senha *</Label>
              <Input
                type="password"
                placeholder="Mínimo 6 caracteres"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-neutral-900/50 border-neutral-500/40 text-white placeholder:text-neutral-400"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-neutral-200">Confirmar Senha *</Label>
              <Input
                type="password"
                placeholder="Digite novamente"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-neutral-900/50 border-neutral-500/40 text-white placeholder:text-neutral-400"
              />
            </div>
          </div>

          {/* Submit Button */}
          <Button
            onClick={handleCreateAccount}
            disabled={loading}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg mt-6"
          >
            <UserPlus className="w-5 h-5 mr-2" />
            {loading ? "Criando Conta..." : "Criar Conta"}
          </Button>

          {/* Info Alert */}
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg mt-4">
            <p className="text-sm text-emerald-400 text-center">
              💡 Após criar sua conta, use seu CPF/CNPJ e senha para fazer login
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
