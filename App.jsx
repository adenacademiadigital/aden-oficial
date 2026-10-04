import React, { useState } from 'react'; 
import { Play, CheckCircle, ExternalLink, MessageCircle, ArrowRight, BookOpen, Building2, Download, ShieldCheck } from 'lucide-react';

export default function AdenWebsite() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      
      {/* 1. NAVEGACIÓN PRINCIPAL */}
      <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 text-white font-bold p-2 rounded-lg text-xl tracking-wider">
              ADEN
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-white leading-tight">Academia ADEN</span>
              <span className="text-xs text-slate-400">Estrategia Digital con Visión Empresarial</span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#institucional" className="text-slate-300 hover:text-blue-400 transition-colors">Institucional</a>
            <a href="#agencia" className="text-slate-300 hover:text-blue-400 transition-colors">Agencia & Prototipos</a>
            <a href="#academia" className="text-slate-300 hover:text-blue-400 transition-colors">Academia & Certificación</a>
            <a href="#recursos" className="text-slate-300 hover:text-blue-400 transition-colors">Recursos Gratuitos</a>
          </div>

          <a 
            href="#recursos" 
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-blue-600/20 text-sm flex items-center gap-2"
          >
            Acceso a Recursos <ArrowRight size={16} />
          </a>
        </div>
      </nav>

      {/* 2. HERO SECTION + PRESENTACIÓN DEL DIRECTOR */}
      <section id="institucional" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6">
              <ShieldCheck size={14} /> Formación Profesional & Consultoría B2B
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              Estrategia Digital, Ventas y Negocios Online con <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Rigor Académico</span>
            </h1>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Elevamos el estándar de la educación digital y el desarrollo técnico. En ADEN integramos programas de formación avanzada con soluciones digitales reales para empresas que buscan escala y rentabilidad.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#academia" className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3.5 rounded-xl transition-all flex items-center gap-2">
                Programas Académicos <BookOpen size={18} />
              </a>
              <a href="#agencia" className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium px-6 py-3.5 rounded-xl border border-slate-700 transition-all flex items-center gap-2">
                Ver Prototipos B2B <Building2 size={18} />
              </a>
            </div>
          </div>

          {/* CONTENEDOR PARA EL VIDEO DEL DIRECTOR */}
          <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl p-2">
            <div className="aspect-video bg-slate-800 rounded-xl relative flex flex-col items-center justify-center p-6 text-center group border border-slate-700/50">
              {/* Placeholder listo para incrustar el video cuando esté grabado */}
              <div className="w-16 h-16 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center mb-4 border border-blue-500/30 group-hover:scale-110 transition-transform">
                <Play size={32} className="ml-1" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Mensaje del Director</h3>
              <p className="text-sm text-slate-400 max-w-sm">
                Henrry Arroyo — Director de la Academia de Estrategia Digital y Negocios (ADEN)
              </p>
              <span className="mt-4 text-xs bg-slate-900/80 text-blue-400 px-3 py-1 rounded-full border border-slate-700">
                [Espacio reservado para Video Institucional]
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN AGENCIA & PROTOTIPOS (SHOWROOM B2B) */}
      <section id="agencia" className="py-20 bg-slate-900/50 border-y border-slate-800 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">ADEN Agencia: Prototipos & Soluciones B2B</h2>
            <p className="text-slate-400">
              Desarrollamos ecosistemas digitales a medida para sectores específicos. Explora nuestras demos interactivas creadas para optimizar la conversión de clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* TARJETA PROTOTIPO 1: SECCIÓN SALUD / ODONTOLOGÍA */}
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
              <div>
                <div className="w-full h-48 bg-slate-800 rounded-xl mb-6 flex items-center justify-center border border-slate-700/50 relative overflow-hidden">
                  <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full absolute top-3 left-3">
                    Sector Salud
                  </span>
                  <p className="text-slate-400 font-medium text-sm text-center px-4">Demo Clínica Odontológica</p>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Ecosistema Digital para Clínicas Dentales</h3>
                <p className="text-slate-400 text-sm mb-6">
                  Plataforma optimizada para tratamientos de alto valor con agendamiento directo a WhatsApp sin pérdidas por mensajes en redes.
                </p>
              </div>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-slate-800 hover:bg-slate-700 text-blue-400 font-semibold py-3 rounded-xl border border-slate-700 transition-all flex items-center justify-center gap-2 text-sm"
              >
                Explorar Prototipo en Vivo <ExternalLink size={16} />
              </a>
            </div>

            {/* TARJETA PROTOTIPO 2: SECCIÓN MOBILIARIO / FÁBRICAS */}
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
              <div>
                <div className="w-full h-48 bg-slate-800 rounded-xl mb-6 flex items-center justify-center border border-slate-700/50 relative overflow-hidden">
                  <span className="text-xs bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full absolute top-3 left-3">
                    Sector Mobiliario
                  </span>
                  <p className="text-slate-400 font-medium text-sm text-center px-4">Demo Fábrica de Muebles</p>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Catálogo Activo & Cotizador sobre Medida</h3>
                <p className="text-slate-400 text-sm mb-6">
                  Estructura interactiva para salas, comedores y acabados personalizados con solicitud de cotización inmediata por WhatsApp.
                </p>
              </div>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-slate-800 hover:bg-slate-700 text-blue-400 font-semibold py-3 rounded-xl border border-slate-700 transition-all flex items-center justify-center gap-2 text-sm"
              >
                Explorar Prototipo en Vivo <ExternalLink size={16} />
              </a>
            </div>

            {/* TARJETA PROTOTIPO 3: SECCIÓN ACADÉMICA / INFOPRODUCTOS */}
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
              <div>
                <div className="w-full h-48 bg-slate-800 rounded-xl mb-6 flex items-center justify-center border border-slate-700/50 relative overflow-hidden">
                  <span className="text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full absolute top-3 left-3">
                    Educación & E-learning
                  </span>
                  <p className="text-slate-400 font-medium text-sm text-center px-4">Plataforma Académica ADEN</p>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Embudos de Educación & Hotmart Club</h3>
                <p className="text-slate-400 text-sm mb-6">
                  Estructura completa de venta de cursos, certificación y captura de prospectos calificados para programas profesionales.
                </p>
              </div>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-slate-800 hover:bg-slate-700 text-blue-400 font-semibold py-3 rounded-xl border border-slate-700 transition-all flex items-center justify-center gap-2 text-sm"
              >
                Explorar Prototipo en Vivo <ExternalLink size={16} />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SECCIÓN ACADEMIA & RIGOR ACADÉMICO */}
      <section id="academia" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Programas de Formación Profesional</h2>
          <p className="text-slate-400">
            Diseñados para capacitarte con el nivel técnico que exigen las vacantes de trabajo remoto y las empresas globales.
          </p>
        </div>

        <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-3xl p-8 lg:p-12 border border-slate-800 shadow-xl">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <span className="text-xs font-bold text-blue-400 tracking-wider uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                Certificación Profesional · 120 Horas
              </span>
              <h3 className="text-2xl lg:text-3xl font-extrabold text-white mt-4 mb-4">
                Programa Profesional en Marketing Digital, Ventas y Negocios Online
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Un programa de 12 módulos paso a paso estructurado con rigor académico para dominar la captación de clientes, analítica de datos, embudos de conversión y automatización comercial.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle size={18} className="text-emerald-400" /> Metodología 100% Práctica
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle size={18} className="text-emerald-400" /> Acceso a Plataforma Hotmart Club
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle size={18} className="text-emerald-400" /> Preparación para Empleo Remoto
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle size={18} className="text-emerald-400" /> Proyecto Final con Caso Real
                </div>
              </div>
            </div>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center">
              <span className="text-slate-400 text-sm">Apertura de Cohorte</span>
              <div className="text-3xl font-extrabold text-white my-2">Admitiendo Postulaciones</div>
              <p className="text-xs text-slate-400 mb-6">Revisa el temario detallado antes de reservar tu cupo.</p>
              <a href="#recursos" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-all block text-sm">
                Solicitar Malla Curricular
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ZONA DE CAPTACIÓN DE LEADS (HUBSPOT INTEGRATION) */}
      <section id="recursos" className="py-20 bg-blue-950/20 border-t border-slate-800 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6">
            <Download size={14} /> Recursos Gratuitos ADEN
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Descarga el Kit Digital de Estrategia & Ventas</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Accede a nuestras guías prácticas y plantillas de trabajo para empezar a estructurar el modelo comercial de tu negocio hoy mismo.
          </p>

          {/* CONTENEDOR DONDE SE INCRUSTARÁ EL FORMULARIO DE HUBSPOT */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl text-left max-w-lg mx-auto">
            <h3 className="text-lg font-bold text-white mb-2 text-center">Ingresa tus datos para la descarga instantánea</h3>
            <p className="text-xs text-slate-400 mb-6 text-center">Te enviaremos los accesos directamente a tu correo y WhatsApp.</p>
            
            {/* Espacio reservado para el código incrustado de HubSpot */}
            <div id="hubspot-form-container" className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Nombre Completo</label>
                <input type="text" placeholder="Tu nombre" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-slate-200 text-sm focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Correo Electrónico</label>
                <input type="email" placeholder="ejemplo@correo.com" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-slate-200 text-sm focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Número de WhatsApp</label>
                <input type="tel" placeholder="+57 300 000 0000" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-slate-200 text-sm focus:outline-none focus:border-blue-500" />
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-blue-600/20 text-sm mt-2">
                Descargar Recursos Ahora
              </button>
            </div>
            
          </div>
        </div>
      </section>

      {/* 6. PIE DE PÁGINA (FOOTER ACTUALIZADO) */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12 px-6 text-sm text-slate-400">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-12">
          
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-600 text-white font-bold p-1.5 rounded text-lg">ADEN</div>
              <span className="font-bold text-white text-base">Academia ADEN</span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm mb-4 leading-relaxed">
              Academia de Estrategia Digital y Negocios. Formación profesional con rigor académico y desarrollo de soluciones digitales para empresas.
            </p>
            <p className="text-xs text-slate-500">© 2026 Academia ADEN. Todos los derechos reservados.</p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Navegación</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#institucional" className="hover:text-white transition-colors">Marco Institucional</a></li>
              <li><a href="#agencia" className="hover:text-white transition-colors">Agencia & Prototipos</a></li>
              <li><a href="#academia" className="hover:text-white transition-colors">Programas Profesionales</a></li>
              <li><a href="#recursos" className="hover:text-white transition-colors">Recursos Gratuitos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Canales Oficiales</h4>
            <div className="flex flex-col space-y-3 text-xs">
              <a 
                href="https://wa.me/573215467418" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-emerald-400 hover:underline"
              >
                <MessageCircle size={16} /> WhatsApp Directo
              </a>
              <a 
                href="https://www.tiktok.com/@Henrry.arroyo7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                TikTok Oficial (@Henrry.arroyo7)
              </a>
              <a 
                href="https://aden-oficial.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                Sitio Web Oficial
              </a>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-6 border-t border-slate-900 text-xs text-slate-600 flex flex-wrap justify-between items-center gap-4">
          <p>Estrategia Digital con Visión Empresarial</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400">Políticas de Privacidad</a>
            <a href="#" className="hover:text-slate-400">Términos del Servicio</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
