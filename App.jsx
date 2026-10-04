import React, { useState } from 'react';
import { 
  Play, 
  CheckCircle, 
  Sparkles, 
  Send, 
  ExternalLink, 
  Download, 
  Bot, 
  Target, 
  BookOpen, 
  Briefcase, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Video,
  MessageCircle,
  FileText,
  ShieldCheck,
  Compass,
  Award,
  Globe
} from 'lucide-react';

export default function App() {
  const [selectedLeadMagnet, setSelectedLeadMagnet] = useState('Guía gratuita de cómo usar ChatGPT de forma profesional');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState('#');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mapeo exacto de recursos gratuitos a sus URLs reales en Google Drive
  const leadMagnetUrls = {
    'Guía gratuita de cómo usar Claude IA': 'https://drive.google.com/file/d/1GKDNT96Wtmqf-hQ0DpNnGbgjpk8OHXs8/view?usp=sharing',
    'Guía gratuita de cómo usar ChatGPT de forma profesional': 'https://drive.google.com/file/d/1Pjye2yHhOoVUFYLu_4pG-eOhRp1sZ-kX/view?usp=sharing',
    'Guía gratuita de cómo usar Amazon': 'https://drive.google.com/file/d/1rCFOOS-X6c7rKM11hQNkh_5veM4l-06u/view?usp=sharing',
    'Guía gratuita de cómo usar Hotmart': 'https://drive.google.com/file/d/1uD78IUwEkQHVjTMQXLriOqEGuEvEw4LO/view?usp=sharing',
    'Guía Gerencial: 5 Procesos Clave que Toda Empresa Debe Automatizar con IA': 'https://drive.google.com/file/d/1bM5hWb9JQ-Oq7-Y0vdAd46VYAF_PF8Ie/view?usp=sharing'
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const targetUrl = leadMagnetUrls[selectedLeadMagnet] || '#';
    setDownloadUrl(targetUrl);

    // Integración con el endpoint del API de Forms de HubSpot (Portal ID: 51905190)
    try {
      const hubspotEndpoint = 'https://api.hsforms.com/submissions/v3/integration/submit/51905190/masterclass-aden';
      await fetch(hubspotEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: [
            { name: 'firstname', value: formData.name },
            { name: 'email', value: formData.email },
            { name: 'mobilephone', value: formData.phone },
            { name: 'recurso_solicitado', value: selectedLeadMagnet }
          ],
          context: {
            pageUri: window.location.href,
            pageName: 'Academia ADEN - Portal Oficial'
          }
        }),
      });
    } catch (error) {
      console.log('Envío procesado.');
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 relative">
      
      {/* BOTÓN FLOTANTE DE WHATSAPP */}
      <a 
        href="https://wa.me/573215467418?text=Hola%20Academia%20ADEN,%20quisiera%20recibir%20informaci%C3%B3n" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-400 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center border border-emerald-400/40"
        title="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>

      {/* 1. HEADER INSTITUCIONAL */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-2 rounded-xl shadow-lg shadow-cyan-500/20">
              <span className="font-extrabold text-2xl tracking-wider text-white">ADEN</span>
            </div>
            <div>
              <h1 className="text-sm font-bold tracking-wide uppercase text-slate-200">Academia ADEN</h1>
              <p className="text-xs text-cyan-400 font-medium">Estrategia Digital con Visión Empresarial</p>
            </div>
          </div>
          
          <nav className="hidden lg:flex space-x-7 text-sm font-medium text-slate-300">
            <a href="#agencia" className="hover:text-cyan-400 transition">Agencia B2B</a>
            <a href="#programas" className="hover:text-cyan-400 transition">Marketing Digital</a>
            <a href="#formula-ia" className="hover:text-cyan-400 transition">Fórmula IA</a>
            <a href="#ebook-hotmart" className="hover:text-cyan-400 transition">Ebook Hotmart</a>
            <a href="#institucional" className="hover:text-cyan-400 transition">Identidad Institucional</a>
            <a href="#recursos" className="hover:text-cyan-400 transition">Recursos Gratuitos</a>
          </nav>

          <a 
            href="https://wa.me/573215467418?text=Hola%20Academia%20ADEN,%20quisiera%20recibir%20informaci%C3%B3n" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-5 py-2.5 rounded-xl font-bold text-sm transition shadow-lg shadow-emerald-500/20 inline-flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-current" /> WhatsApp
          </a>
        </div>
      </header>

      {/* 2. HERO + VIDEO INSTITUCIONAL DEL DIRECTOR */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Innovación y Estrategia Digital
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Estrategia Digital con <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Visión Empresarial</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            Formación profesional acreditada y soluciones avanzadas de automatización con Inteligencia Artificial para escalar negocios y profesionales en la economía digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#programas" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-center font-bold px-7 py-4 rounded-xl transition shadow-lg shadow-cyan-500/25">
              Explorar Programas
            </a>
            <a href="#agencia" className="border border-slate-700 hover:border-slate-500 text-slate-200 text-center font-semibold px-7 py-4 rounded-xl transition bg-slate-900/50">
              Agencia B2B
            </a>
          </div>
        </div>

        {/* Video Institucional */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
          <div className="relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl aspect-video flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 bg-cyan-500/20 border border-cyan-400/40 text-cyan-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>
            <h3 className="text-white font-bold text-lg mb-1">Presentación Oficial del Director</h3>
            <p className="text-slate-400 text-sm">Estrategia Digital, Visión de Negocio y Certificaciones</p>
          </div>
        </div>
      </section>

      {/* 3. SHOWROOM Y DEMOS DE LA AGENCIA B2B */}
      <section id="agencia" className="py-16 bg-slate-900/50 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-cyan-400 text-xs font-extrabold uppercase tracking-widest">Soluciones de Agencia B2B</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">Demos e Infraestructura por Sector</h2>
            <p className="text-slate-300 mt-4 text-base sm:text-lg leading-relaxed">
              Diseñamos e implementamos sitios web de alto rendimiento, sistemas de captación de clientes y flujos comerciales automatizados con Inteligencia Artificial adaptados a la dinámica operativa de cada sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition shadow-lg">
              <div>
                <div className="w-12 h-12 bg-pink-500/10 text-pink-400 rounded-xl flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Productos de Belleza & Cosmética</h3>
                <p className="text-slate-400 text-sm mb-6">Plataforma e-commerce y vitrina digital optimizada para marcas de belleza, cuidado personal y cosmética.</p>
              </div>
              <a 
                href="https://aura-skin-blush.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full bg-slate-800 hover:bg-slate-700 text-cyan-400 font-semibold px-4 py-3 rounded-xl transition text-sm"
              >
                Ver Demo Interactivo <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition shadow-lg">
              <div>
                <div className="w-12 h-12 bg-cyan-500/10 text-cyan-400 rounded-xl flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Clínicas y Consultorios Odontológicos</h3>
                <p className="text-slate-400 text-sm mb-6">Sistema de captación de pacientes, valoración digital y agendamiento directo a WhatsApp.</p>
              </div>
              <a 
                href="https://demo-cl-nica-sonrisas-est-tica.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full bg-slate-800 hover:bg-slate-700 text-cyan-400 font-semibold px-4 py-3 rounded-xl transition text-sm"
              >
                Ver Demo Interactivo <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition shadow-lg">
              <div>
                <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Centros de Estética y Bienestar</h3>
                <p className="text-slate-400 text-sm mb-6">Sitio web especializado en servicios estéticos, catálogo de procedimientos y embudo de conversión.</p>
              </div>
              <a 
                href="https://demo-estetica-aden.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full bg-slate-800 hover:bg-slate-700 text-cyan-400 font-semibold px-4 py-3 rounded-xl transition text-sm"
              >
                Ver Demo Interactivo <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROGRAMAS DE ACADEMIA ADEN */}
      <section id="programas" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-cyan-400 text-xs font-extrabold uppercase tracking-widest">Oferta Académica Acreditada</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">Formación Profesional Certificada</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 relative flex flex-col justify-between">
            <div className="absolute -top-3 right-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 text-xs font-black px-4 py-1 rounded-full uppercase">
              Programa Especializado
            </div>
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold px-3 py-1 rounded-full">
                  120 Horas | 12 Módulos
                </span>
                <span className="text-slate-400 text-xs font-medium">Marketing Digital</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-4">
                Programa Profesional en Marketing Digital, Ventas y Negocios Online
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Capacitación integral diseñada para estructurar estrategias comerciales, dominar la pauta publicitaria en Meta/Google Ads y automatizar funnels de conversión.
              </p>
              <ul className="space-y-2.5 text-sm text-slate-300 mb-8">
                <li className="flex items-center gap-2.5"><CheckCircle className="w-4 h-4 text-cyan-400" /> Modelos de Negocio y Estrategia Digital</li>
                <li className="flex items-center gap-2.5"><CheckCircle className="w-4 h-4 text-cyan-400" /> Tráfico Pago con Meta Ads & Google Ads</li>
                <li className="flex items-center gap-2.5"><CheckCircle className="w-4 h-4 text-cyan-400" /> Funnels de Alta Conversión y Copywriting</li>
                <li className="flex items-center gap-2.5"><CheckCircle className="w-4 h-4 text-cyan-400" /> Certificación Profesional Final</li>
              </ul>
            </div>
            <a 
              href="https://go.hotmart.com/V104737410L" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-4 rounded-xl transition text-center shadow-lg shadow-cyan-500/20 inline-flex items-center justify-center gap-2"
            >
              Conocer Malla Curricular y Módulos <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div id="formula-ia" className="bg-slate-900 border border-cyan-500/30 rounded-3xl p-8 relative flex flex-col justify-between shadow-xl shadow-cyan-950/40">
            <div className="absolute -top-3 right-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 text-xs font-black px-4 py-1 rounded-full uppercase">
              Programa Especializado
            </div>
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                  <Bot className="w-3.5 h-3.5" /> 120 Horas | 12 Módulos
                </span>
                <span className="text-slate-400 text-xs font-medium">Inteligencia Artificial</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-4">
                Programa Profesional en Inteligencia Artificial y Automatización de Negocios - Fórmula IA
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Domina la vanguardia tecnológica: aprende a crear avatares hiperrealistas, clonación de voz profesional y automatización integral de procesos con Make y Zapier.
              </p>
              <ul className="space-y-2.5 text-sm text-slate-300 mb-8">
                <li className="flex items-center gap-2.5"><CheckCircle className="w-4 h-4 text-cyan-400" /> Creación de Avatares Hiperrealistas con IA</li>
                <li className="flex items-center gap-2.5"><CheckCircle className="w-4 h-4 text-cyan-400" /> Clonación de Voz e Identidad Vocal con IA</li>
                <li className="flex items-center gap-2.5"><CheckCircle className="w-4 h-4 text-cyan-400" /> Automatización de Negocios con Make y Zapier</li>
                <li className="flex items-center gap-2.5"><CheckCircle className="w-4 h-4 text-cyan-400" /> Chatbots e Ingeniería de Prompts Avanzada</li>
              </ul>
            </div>
            <a 
              href="https://formula-ia-aden.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 rounded-xl transition text-center shadow-lg shadow-cyan-500/20 inline-flex items-center justify-center gap-2"
            >
              Conocer Malla Curricular y Módulos <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      {/* 5. SECCIÓN DESTACADA: EBOOK HOTMART */}
      <section id="ebook-hotmart" className="py-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-cyan-500/30 rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center shadow-2xl">
            <div className="lg:col-span-2">
              <span className="bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                Publicación Oficial
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-4">
                Ebook: Gana Dinero con Hotmart Desde Cero
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                Descubre el paso a paso exacto para construir un negocio altamente rentable de productos digitales en Hotmart. Un método estructurado para dominar las ventas, elegir nichos ganadores y escalar tus ingresos sin cometer los errores habituales.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-300">
                <span className="bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">✓ Estrategia paso a paso</span>
                <span className="bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">✓ Para principiantes y avanzados</span>
                <span className="bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">✓ Acceso Inmediato</span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center bg-slate-950/80 border border-slate-800 rounded-2xl p-6 text-center">
              <BookOpen className="w-12 h-12 text-cyan-400 mb-3" />
              <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-2">Acceso a la Página Oficial</p>
              <a 
                href="https://go.hotmart.com/O103090107L?dp=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black py-3.5 px-6 rounded-xl transition shadow-lg shadow-amber-500/20 inline-flex items-center justify-center gap-2 text-sm"
              >
                Ver Detalles y Adquirir <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MARCO INSTITUCIONAL: MISIÓN, VISIÓN Y DOCUMENTOS ADEN */}
      <section id="institucional" className="py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-400 text-xs font-extrabold uppercase tracking-widest">Identidad Institucional</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">Fundamentos y Documentación Oficial</h2>
            <p className="text-slate-400 text-sm mt-3">Conoce nuestro Proyecto Educativo Institucional (PEI) y la documentación oficial de Academia ADEN.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 relative hover:border-cyan-500/40 transition">
              <div className="w-12 h-12 bg-cyan-500/10 text-cyan-400 rounded-2xl flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-4">Nuestra Misión</h3>
              <p className="text-slate-300 text-base leading-relaxed italic">
                "Formar emprendedores digitales altamente competentes, brindándoles herramientas prácticas, estrategias actualizadas y acompañamiento estructurado que les permita generar ingresos en el entorno digital de manera ética y sostenible."
              </p>
              <span className="block mt-4 text-xs font-bold uppercase tracking-wider text-cyan-400">— PEI Institucional ADEN 2026</span>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 relative hover:border-cyan-500/40 transition">
              <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-4">Nuestra Visión</h3>
              <p className="text-slate-300 text-base leading-relaxed italic">
                "Ser una academia referente en educación digital en habla hispana, reconocida por su enfoque práctico, sus resultados comprobables y su compromiso con la formación integral del emprendedor moderno."
              </p>
              <span className="block mt-4 text-xs font-bold uppercase tracking-wider text-cyan-400">— PEI Institucional ADEN 2026</span>
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5 text-cyan-400" /> Dossier y Documentos Normativos Institucionales
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              
              <a href="https://drive.google.com/file/d/1Rnq1AJiepIXsNSefRqYu5fTIjUi4xkOJ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-slate-900 border border-slate-800 hover:border-cyan-500/50 p-4 rounded-xl flex items-center justify-between text-slate-200 text-sm font-semibold transition group">
                <span className="flex items-center gap-2.5"><Award className="w-4 h-4 text-cyan-400" /> Dossier Institucional ADEN</span>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition" />
              </a>

              <a href="https://drive.google.com/file/d/15FF8S1RNOArJF6jiLcErrtn0luh9z7Yc/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-slate-900 border border-slate-800 hover:border-cyan-500/50 p-4 rounded-xl flex items-center justify-between text-slate-200 text-sm font-semibold transition group">
                <span className="flex items-center gap-2.5"><FileText className="w-4 h-4 text-cyan-400" /> Presentación Institucional</span>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition" />
              </a>

              <a href="https://drive.google.com/file/d/15DYWnaRg3aM1RTqx5OW7DGFJPmwiC1fE/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-slate-900 border border-slate-800 hover:border-cyan-500/50 p-4 rounded-xl flex items-center justify-between text-slate-200 text-sm font-semibold transition group">
                <span className="flex items-center gap-2.5"><ShieldCheck className="w-4 h-4 text-cyan-400" /> PEI Institucional 2026</span>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition" />
              </a>

              <a href="https://drive.google.com/file/d/1AMLwR-rdx3zpYEvEspMeR6fHC_FZ9Rp8/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-slate-900 border border-slate-800 hover:border-cyan-500/50 p-4 rounded-xl flex items-center justify-between text-slate-200 text-sm font-semibold transition group">
                <span className="flex items-center gap-2.5"><CheckCircle className="w-4 h-4 text-cyan-400" /> Política de Certificación</span>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition" />
              </a>

              <a href="https://drive.google.com/file/d/1_ivtPqNOajqD7nO7CVJI6v8ixII9jRi-/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-slate-900 border border-slate-800 hover:border-cyan-500/50 p-4 rounded-xl flex items-center justify-between text-slate-200 text-sm font-semibold transition group">
                <span className="flex items-center gap-2.5"><BookOpen className="w-4 h-4 text-cyan-400" /> Reglamento Académico</span>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition" />
              </a>

              <a href="https://drive.google.com/file/d/16fD6hzocU1FDDs-Q7VvIL7NUf9Cd3X0V/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-slate-900 border border-slate-800 hover:border-cyan-500/50 p-4 rounded-xl flex items-center justify-between text-slate-200 text-sm font-semibold transition group">
                <span className="flex items-center gap-2.5"><FileText className="w-4 h-4 text-cyan-400" /> Términos de Servicio</span>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition" />
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* 7. FORMULARIO HUBSPOT - GUÍAS GRATUITAS Y DESCARGA DIRECTA */}
      <section id="recursos" className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold px-3.5 py-1.5 rounded-full">
              Zona de Recursos Gratuitos
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4">Descarga tu Guía Gratuita Seleccionada</h2>
            <p className="text-slate-400 text-sm mt-2">
              Ingresa tus datos para habilitar la descarga inmediata de tu material de estudio exclusivo. Si deseas más de una guía, completa el registro individual para cada una.
            </p>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">¡Tu Recurso está Listo!</h3>
                <p className="text-slate-300 text-sm mb-6">
                  Hemos procesado tu registro para <span className="text-cyan-400 font-semibold">"{selectedLeadMagnet}"</span>. Haz clic en el siguiente botón para acceder al documento en Google Drive:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href={downloadUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-8 py-4 rounded-xl transition shadow-lg shadow-cyan-500/25 inline-flex items-center justify-center gap-2 text-sm"
                  >
                    <Download className="w-4 h-4" /> Abrir y Descargar Recurso <ExternalLink className="w-4 h-4" />
                  </a>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-semibold px-6 py-4 rounded-xl transition"
                  >
                    Descargar otra guía gratuita
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-slate-300 font-semibold text-sm mb-2">
                    1. Selecciona la Guía Gratuita que deseas descargar:
                  </label>
                  <select 
                    value={selectedLeadMagnet}
                    onChange={(e) => setSelectedLeadMagnet(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-cyan-500 text-sm"
                  >
                    <option value="Guía gratuita de cómo usar Claude IA">Guía gratuita de cómo usar Claude IA</option>
                    <option value="Guía gratuita de cómo usar ChatGPT de forma profesional">Guía gratuita de cómo usar ChatGPT de forma profesional</option>
                    <option value="Guía gratuita de cómo usar Amazon">Guía gratuita de cómo usar Amazon</option>
                    <option value="Guía gratuita de cómo usar Hotmart">Guía gratuita de cómo usar Hotmart</option>
                    <option value="Guía Gerencial: 5 Procesos Clave que Toda Empresa Debe Automatizar con IA">GUÍA GERENCIAL: Los 5 Procesos Clave que Toda Empresa Debe Automatizar con IA este Año</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-300 font-semibold text-sm mb-2">Nombre Completo</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-cyan-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-semibold text-sm mb-2">Correo Electrónico</label>
                    <input 
                      type="email" 
                      required
                      placeholder="correo@ejemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-cyan-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold text-sm mb-2">Número de WhatsApp</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+57 300 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-cyan-500 text-sm"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" /> {isSubmitting ? 'Procesando registro...' : 'Solicitar Descarga de la Guía'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 8. PIE DE PÁGINA CON REDES OFICIALES DE ADEN */}
      <footer className="border-t border-slate-800 bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-extrabold text-xl text-cyan-400">ADEN</span>
              <span className="text-slate-400 text-sm">| Academia de Estrategia Digital y Negocios</span>
            </div>
            <p className="text-slate-500 text-xs">© {new Date().getFullYear()} Academia ADEN. Todos los derechos reservados.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 pr-0 md:pr-24">
            <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Síguenos en nuestras redes:</span>
            <div className="flex items-center space-x-5">
              <a 
                href="https://www.instagram.com/aden_academia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition"
                title="Instagram Oficial ADEN"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/share/1GiFomgXHG/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition"
                title="Facebook Oficial ADEN"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@adenacademia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition"
                title="TikTok Oficial ADEN"
              >
                <Video className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/henrry-david-arroyo-lopez-97a874411" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition"
                title="LinkedIn Henrry Arroyo"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
