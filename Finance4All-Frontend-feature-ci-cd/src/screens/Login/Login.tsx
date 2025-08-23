import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { NavBar } from "../../lib/sections/navbar";

export const Login = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de connexion à implémenter
    console.log("Login attempt with:", { email, password, rememberMe });
  };

  return (
    <div className="flex min-h-screen">
      <NavBar />
      {/* Partie gauche avec image de fond */}
      <div className="hidden md:flex md:w-1/2 lg:w-1/2 bg-[#003B5C] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#003B5C] to-[#006B8F] opacity-80"></div>
        <img
          src="/businessman.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
        />
        <div className="relative z-10 p-12 flex flex-col justify-center text-white max-w-lg">
          <h1 className="text-4xl md:text-5xl font-normal mb-6 [font-family:'Source_Serif_Pro',Helvetica] leading-tight">
          Prenez le contrôle de vos finances.
          </h1>
          <p className="text-base md:text-lg opacity-90">
          Finance forAll est une plateforme de gestion financière qui vous permet de suivre et de contrôler vos dépenses, de gagner de l'argent et de planifier votre avenir.
          </p>
        </div>
      </div>

      {/* Partie droite avec formulaire */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-center mb-2">Connexion</h2>
            <p className="text-sm text-gray-500 text-center">Accédez à votre espace personnel pour gérer vos formations et comparaisons financièrest</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Champ phone */}
            <div className="space-y-2">
              <label 
                htmlFor="phone" 
                className="block text-sm font-bold"
              >
                Téléphone*
              </label>
              <Input
                id="phone"
                type="tel"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre Téléphone"
                className="w-full px-4 py-2 border border-[#e8eef7] rounded-lg focus:ring-2 focus:ring-[#6cb9c6] focus:border-transparent"
                required
              />
            </div>

            {/* Champ mot de passe */}
            <div className="space-y-2">
              <label 
                htmlFor="password" 
                className="block text-sm font-bold "
              >
                Mot de passe*
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mot de passe"
                  className="w-full px-4 py-2 border border-[#e8eef7] rounded-lg focus:ring-2 focus:ring-[#6cb9c6] focus:border-transparent pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-black hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Options supplémentaires */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-[#6cb9c6] focus:ring-[#6cb9c6]"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-500">
                  Se souvenir de moi
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="text-sm text-[#6cb9c6] hover:text-[#4d9da8] focus:outline-none focus:underline transition-colors"
              >
                Mot de passe oublié ?
              </Link>
            </div>

            {/* Bouton de connexion */}
            <Button
              type="submit"
              className="w-full bg-[#6cb9c6] hover:bg-[#4d9da8] text-white py-3 rounded-lg text-base font-medium transition-colors"
            >
              Se connecter
            </Button>

            {/* Option de création de compte */}
            <div className="mt-6 text-start">
              <p className="text-sm text-gray-500">
                Pas encore de compte ?{' '}
                <Link
                  to="/register"
                  className="font-medium text-[#6cb9c6] hover:text-[#4d9da8]"
                >
                  Créer un compte
                </Link>
              </p>
            </div>

            {/* Séparateur */}
            {/* <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-[#5b6780]">Ou connectez-vous avec</span>
            </div> */}

            {/* Boutons de connexion sociale */}
            {/* <div className="grid grid-cols-2 gap-4">
              <Button
                type="button"
                variant="outline"
                className="flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <img src="/icons/google.svg" alt="Google" className="w-5 h-5" />
                Google
              </Button>
              <Button
                type="button"
                variant="outline"
                className="flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <img src="/icons/facebook.svg" alt="Facebook" className="w-5 h-5" />
                Facebook
              </Button>
            </div>
             */}
          </form>
        </div>
      </div>
    </div>
    
  );
};
