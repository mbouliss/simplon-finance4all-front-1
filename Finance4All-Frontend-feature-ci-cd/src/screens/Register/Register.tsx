import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { NavBar } from "../../lib/sections/navbar";

export const Register = (): JSX.Element => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    showPassword: false,
    showConfirmPassword: false,
  });

  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'inscription à implémenter
    console.log("Registration attempt with:", { ...formData, rememberMe });
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
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8 bg-white mt-32">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-center mb-2">Créer un compte</h2>
            <p className="text-sm text-gray-500 text-center">Commencez votre parcours financier aujourd'hui</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Champ prénom */}
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm font-bold">
                Prénom*
              </label>
              <Input
                id="firstName"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Votre prénom"
                className="w-full px-4 py-2 border border-[#e8eef7] rounded-lg focus:ring-2 focus:ring-[#6cb9c6] focus:border-transparent"
                required
              />
            </div>

            {/* Champ nom */}
            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-sm font-bold">
                Nom*
              </label>
              <Input
                id="lastName"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Votre nom"
                className="w-full px-4 py-2 border border-[#e8eef7] rounded-lg focus:ring-2 focus:ring-[#6cb9c6] focus:border-transparent"
                required
              />
            </div>

            {/* Champ téléphone */}
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-bold">
                Téléphone*
              </label>
              <Input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Votre téléphone"
                className="w-full px-4 py-2 border border-[#e8eef7] rounded-lg focus:ring-2 focus:ring-[#6cb9c6] focus:border-transparent"
                required
              />
            </div>

            {/* Champ email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-bold">
                Email (optionel)
              </label>
              <Input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Votre email"
                className="w-full px-4 py-2 border border-[#e8eef7] rounded-lg focus:ring-2 focus:ring-[#6cb9c6] focus:border-transparent"
                required
              />
            </div>

            {/* Champ mot de passe */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-bold">
                Mot de passe*
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={formData.showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Mot de passe"
                  className="w-full px-4 py-2 border border-[#e8eef7] rounded-lg focus:ring-2 focus:ring-[#6cb9c6] focus:border-transparent pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, showPassword: !prev.showPassword }))}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-black hover:text-gray-600"
                >
                  {formData.showPassword ? (
                    <EyeOffIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Champ confirmation mot de passe */}
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="block text-sm font-bold">
                Confirmer le mot de passe*
              </label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={formData.showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirmer le mot de passe"
                  className="w-full px-4 py-2 border border-[#e8eef7] rounded-lg focus:ring-2 focus:ring-[#6cb9c6] focus:border-transparent pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, showConfirmPassword: !prev.showConfirmPassword }))}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-black hover:text-gray-600"
                >
                  {formData.showConfirmPassword ? (
                    <EyeOffIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Champ sexe */}
            <div className="space-y-2">
              <label htmlFor="gender" className="block text-sm font-bold">
                Sexe*
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[#e8eef7] rounded-lg focus:ring-2 focus:ring-[#6cb9c6] focus:border-transparent"
                required
              >
                <option value="">Sélectionnez votre sexe</option>
                <option value="homme">Homme</option>
                <option value="femme">Femme</option>
                <option value="autre">Autre</option>
              </select>
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
                  Accepter les conditions d'utilisation
                </label>
              </div>
            </div>

            {/* Bouton d'inscription */}
            <Button
              type="submit"
              className="w-full bg-[#6cb9c6] hover:bg-[#4d9da8] text-white py-3 rounded-lg text-base font-medium transition-colors"
            >
              Créer un compte
            </Button>

            {/* Option de connexion */}
            <div className="mt-6 text-start">
              <p className="text-sm text-gray-500">
                Déjà un compte ?{' '}
                <Link
                  to="/login"
                  className="font-medium text-[#6cb9c6] hover:text-[#4d9da8]"
                >
                  Se connecter
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
