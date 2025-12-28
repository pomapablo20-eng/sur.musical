import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { 
  Disc3, Phone, Mail, MapPin, Star, Heart, Sparkles, 
  Briefcase, PartyPopper, GraduationCap, Users, Menu, X,
  Instagram, Facebook, MessageCircle
  } from 'lucide-react';
import { mockServices, mockGallery, mockTestimonials } from '../mock';

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    message: ''
  });

  const iconMap = {
    heart: Heart,
    sparkles: Sparkles,
    briefcase: Briefcase,
    'party-popper': PartyPopper,
    'graduation-cap': GraduationCap,
    users: Users
  };

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'bodas', label: 'Bodas' },
    { id: 'xv-años', label: 'XV Años' },
    { id: 'corporativo', label: 'Corporativo' },
    { id: 'general', label: 'General' }
  ];

  const filteredGallery = selectedCategory === 'todos' 
    ? mockGallery 
    : mockGallery.filter(item => item.category === selectedCategory);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      date: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/50">
                <Disc3 className="w-7 h-7 text-white animate-spin-slow" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  SUR MUSICAL
                </h1>
                <p className="text-xs text-slate-600">Disco Móvil Profesional</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('inicio')} className="text-slate-700 hover:text-orange-600 transition-colors font-medium">Inicio</button>
              <button onClick={() => scrollToSection('nosotros')} className="text-slate-700 hover:text-orange-600 transition-colors font-medium">Nosotros</button>
              <button onClick={() => scrollToSection('servicios')} className="text-slate-700 hover:text-orange-600 transition-colors font-medium">Servicios</button>
              <button onClick={() => scrollToSection('galeria')} className="text-slate-700 hover:text-orange-600 transition-colors font-medium">Galería</button>
              <button onClick={() => scrollToSection('testimonios')} className="text-slate-700 hover:text-orange-600 transition-colors font-medium">Testimonios</button>
              <Button onClick={() => scrollToSection('contacto')} className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg">
                Contacto
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-orange-600 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection('inicio')} className="text-left text-slate-700 hover:text-orange-600 transition-colors font-medium">Inicio</button>
              <button onClick={() => scrollToSection('nosotros')} className="text-left text-slate-700 hover:text-orange-600 transition-colors font-medium">Nosotros</button>
              <button onClick={() => scrollToSection('servicios')} className="text-left text-slate-700 hover:text-orange-600 transition-colors font-medium">Servicios</button>
              <button onClick={() => scrollToSection('galeria')} className="text-left text-slate-700 hover:text-orange-600 transition-colors font-medium">Galería</button>
              <button onClick={() => scrollToSection('testimonios')} className="text-left text-slate-700 hover:text-orange-600 transition-colors font-medium">Testimonios</button>
              <Button onClick={() => scrollToSection('contacto')} className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white w-full">
                Contacto
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 px-4 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-orange-100 text-orange-700 hover:bg-orange-200 px-4 py-2 text-sm font-semibold">
              Profesionales en Entretenimiento Musical
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              La <span className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent">Música Perfecta</span> para tu Evento
            </h2>
            <p className="text-xl md:text-2xl text-slate-700 mb-12 leading-relaxed">
              Transformamos cada celebración en una experiencia inolvidable con sonido profesional, iluminación espectacular y la mejor música.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('contacto')} 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all"
              >
                Cotiza tu Evento
              </Button>
