// Multi-language support for Dr. Daniela Verdin website
const translations = {
    es: {
        // Navigation
        "nav.home": "Inicio",
        "nav.services": "Servicios",
        "nav.about": "Sobre mí",
        "nav.testimonials": "Testimonios",
        "nav.cases": "Casos",
        "nav.contact": "Contacto",
        "nav.appointment": "Agendar Cita",
        
        // Top Bar
        "topbar.phone": "322 116 7592",
        "topbar.email": "contacto@doctoradanielverdin.com",
        "topbar.hours": "Lun - Vie: 9:00 - 20:00",
        
        // Common elements
        "btn.appointment": "Agendar Cita",
        "btn.contact": "Contactar",
        "btn.whatsapp": "WhatsApp",
        "btn.send": "Enviar",
        "btn.readmore": "Leer más",
        "btn.services": "Ver Servicios",
        
        // Home Page
        "home.hero.title": "Tu <span class=\"highlight\">Sonrisa Perfecta</span><br>Comienza Aquí",
        "home.hero.subtitle": "Especialista en Ortodoncia y Estética Dental",
        "home.hero.description": "Transformamos sonrisas con tecnología de vanguardia y atención personalizada. Más de 10 años especializándose en ortodoncia y estética dental en Puerto Vallarta.",
        
        // Home Services Section
        "home.services.title": "Nuestros Servicios",
        "home.services.subtitle": "Tratamientos Especializados",
        "home.services.description": "Ofrecemos una amplia gama de servicios dentales con la más alta calidad y tecnología moderna",
        "home.services.orthodontics.title": "Ortodoncia",
        "home.services.orthodontics.description": "Brackets tradicionales, estéticos y alineadores transparentes para todas las edades.",
        "home.services.orthodontics.features.1": "Brackets metálicos y estéticos",
        "home.services.orthodontics.features.2": "Invisalign",
        "home.services.orthodontics.features.3": "Ortodoncia para niños y adultos",
        "home.services.orthodontics.features.4": "Tratamientos personalizados",
        "home.services.orthodontics.link": "Más información",
        "home.services.aesthetic.title": "Estética Dental",
        "home.services.aesthetic.description": "Blanqueamiento, carillas y diseño de sonrisa para una apariencia natural.",
        "home.services.aesthetic.features.1": "Blanqueamiento profesional",
        "home.services.aesthetic.features.2": "Carillas de porcelana",
        "home.services.aesthetic.features.3": "Diseño de sonrisa",
        "home.services.aesthetic.features.4": "Resinas estéticas",
        "home.services.aesthetic.link": "Más información",
        "home.services.implants.title": "Implantes Dentales",
        "home.services.implants.description": "Soluciones permanentes para reemplazar dientes perdidos con tecnología avanzada.",
        "home.services.implants.features.1": "Implantes de titanio",
        "home.services.implants.features.2": "Cirugía guiada",
        "home.services.implants.features.3": "Coronas de porcelana",
        "home.services.implants.features.4": "Rehabilitación completa",
        "home.services.implants.link": "Más información",
        
        // Home About Section
        "home.about.subtitle": "Conoce a tu doctora",
        "home.about.title": "Dra. Daniela Verdín",
        "home.about.description.1": "Especialista en Ortodoncia y Ortopedia Dentofacial con más de 10 años de experiencia transformando sonrisas. Mi pasión es ayudarte a recuperar tu confianza y autoestima a través de una sonrisa sana, funcional y estética.",
        "home.about.description.2": "Trabajo con tecnología digital de vanguardia, brindando atención cercana y personalizada, con tratamientos diseñados específicamente para cada paciente.",
        "home.about.features.1": "Especialista Certificada en Ortodoncia",
        "home.about.features.2": "Miembro de la Asociación Dental Mexicana",
        "home.about.features.3": "Certificación en Invisalign",
        "home.about.features.4": "Más de 1000 casos exitosos",
        "home.about.features.5": "Formación continua en nuevas tecnologías",
        "home.about.link": "Conoce más sobre mí",
        
        // Home Testimonials Section
        "home.testimonials.subtitle": "Testimonios",
        "home.testimonials.title": "Lo Que Dicen Nuestros Pacientes",
        "home.testimonials.description": "La satisfacción de nuestros pacientes es nuestra mayor recompensa",
        
        // Payment Plans Section
        "home.payment.title": "Planes de Pago",
        "home.payment.description": "Opciones de financiamiento flexibles para que puedas acceder al tratamiento que necesitas sin preocupaciones.",
        
        // Features
        "features.subtitle": "¿Por qué elegirnos?",
        "features.title": "Excelencia en Cada Sonrisa",
        "features.description": "Combinamos experiencia profesional con tecnología avanzada para brindarte los mejores resultados",
        "features.technology.title": "Tecnología Avanzada",
        "features.technology.description": "Utilizamos equipos de última generación incluyendo escáneres 3D, planificación digital y sistemas de ortodoncia modernos para resultados precisos.",
        "features.experience.title": "10+ Años de Experiencia",
        "features.experience.description": "Especialista certificada con más de una década transformando sonrisas y mejorando la calidad de vida de nuestros pacientes.",
        "features.personalized.title": "Atención Personalizada",
        "features.personalized.description": "Cada paciente recibe un plan de tratamiento único diseñado específicamente para sus necesidades y objetivos estéticos.",
        "features.results.title": "Resultados Garantizados",
        "features.results.description": "Nos comprometemos con la excelencia y la satisfacción completa de nuestros pacientes con seguimiento post-tratamiento incluido.",
        
        // Services
        "services.title": "Nuestros Servicios",
        "services.subtitle": "Tratamientos especializados",
        "services.description": "Ofrecemos una amplia gama de servicios dentales especializados",
        
        // About
        "about.title": "Conoce a tu Doctora",
        "about.subtitle": "Especialista en Ortodoncia con pasión por transformar sonrisas",
        
        // Contact
        "contact.title": "Contáctanos",
        "contact.subtitle": "Estamos aquí para ayudarte a lograr la sonrisa de tus sueños. ¡Agenda tu consulta hoy!",
        "contact.info.subtitle": "Información de contacto",
        "contact.info.title": "¡Estamos aquí para ti!",
        "contact.info.description": "Contáctanos por cualquiera de estos medios y agenda tu consulta hoy mismo",
        "contact.location.title": "Nuestra Ubicación",
        "contact.location.address": "C. Miramar 859, Centro<br>48300 Puerto Vallarta, Jalisco<br><small>Fácil acceso y estacionamiento disponible</small>",
        "contact.phone.title": "Llámanos Ahora",
        "contact.phone.description": "Atención inmediata de lunes a sábado",
        "contact.email.title": "Envíanos un Email",
        "contact.email.description": "Respuesta en menos de 24 horas",
        "contact.hours.title": "Horarios de Atención",
        "contact.hours.schedule": "<strong>Lunes - Viernes:</strong> 9:00 - 20:00<br><strong>Sábados:</strong> 9:00 - 14:00<br><small>Citas de emergencia disponibles</small>",
        
        // Footer
        "footer.description": "Especialista en Ortodoncia y Estética Dental con más de 10 años de experiencia transformando sonrisas en Puerto Vallarta.",
        "footer.services": "Servicios",
        "footer.service.orthodontics": "Ortodoncia",
        "footer.service.aesthetic": "Estética Dental",
        "footer.service.implants": "Implantes",
        "footer.service.whitening": "Blanqueamiento",
        "footer.service.pediatric": "Odontopediatría",
        "footer.service.invisalign": "Invisalign",
        "footer.service.smile.design": "Diseño de Sonrisa",
        "footer.quicklinks": "Enlaces Rápidos",
        "footer.link.home": "Inicio",
        "footer.link.about": "Sobre mí",
        "footer.link.testimonials": "Testimonios",
        "footer.link.cases": "Casos",
        "footer.link.contact": "Contacto",
        "footer.contact": "Contacto",
        "footer.address": "C. Miramar 859, Centro<br>Puerto Vallarta, Jalisco",
        "footer.phone": "322 116 7592",
        "footer.email": "contacto@doctoradanielverdin.com",
        "footer.hours": "Lun - Vie: 9:00 - 20:00",
        "footer.copyright": "© 2024 Dra. Daniela Verdín. Todos los derechos reservados.",
        
        // About Page
        "about.hero.title": "Conoce a tu Doctora",
        "about.hero.subtitle": "Especialista en Ortodoncia con pasión por transformar sonrisas",
        
        // About Main Section
        "about.main.subtitle": "Conoce a tu especialista",
        "about.main.title": "Dra. Daniela Verdín",
        "about.main.specialty": "Especialista en Ortodoncia y Ortopedia Dentofacial",
        "about.main.intro": "Mi nombre es Daniela Verdín y soy especialista en Ortodoncia y Ortopedia Dentofacial con más de 10 años de experiencia transformando sonrisas en Puerto Vallarta. Mi vocación es ayudarte a recuperar tu confianza y autoestima a través de una sonrisa sana, funcional y estética.",
        "about.main.description": "Trabajo con tecnología digital de vanguardia, brindando atención cercana y personalizada, con tratamientos diseñados específicamente para cada paciente. Creo firmemente que cada sonrisa es única y merece una atención especializada que combine la ciencia más avanzada con el arte de la odontología.",
        "about.main.badge": "10+ Años de Experiencia",
        
        // Certifications Gallery
        "about.certifications.subtitle": "Credenciales y Certificaciones",
        "about.certifications.title": "Formación Profesional",
        "about.certifications.description": "Respaldada por certificaciones oficiales y formación continua en las mejores instituciones",
        "about.certifications.cepo.title": "CEPO",
        "about.certifications.cepo.description": "Colegio de Especialistas en Ortodoncia - Miembro Activo",
        "about.certifications.university.title": "Universidad Autónoma de Guadalajara",
        "about.certifications.university.description": "Especialidad en Ortodoncia y Ortopedia Dentofacial",
        "about.certifications.invisalign.title": "Invisalign Certified",
        "about.certifications.invisalign.description": "Especialista Certificada en Alineadores Transparentes",
        "about.certifications.continuing.title": "Formación Continua",
        "about.certifications.continuing.description": "Actualización Constante en Técnicas Avanzadas",
        
        // Education and Experience Timeline
        "about.education.subtitle": "Mi trayectoria profesional",
        "about.education.title": "Formación y Experiencia",
        "about.education.description": "Una sólida formación académica respaldada por años de práctica especializada",
        "about.timeline.2024.title": "Certificación Avanzada en Invisalign",
        "about.timeline.2024.description": "Especialización en alineadores transparentes y planificación digital 3D para casos complejos.",
        "about.timeline.2020.title": "Apertura de Consultorio Propio",
        "about.timeline.2020.description": "Establecimiento de clínica dental moderna en Puerto Vallarta con tecnología de vanguardia.",
        "about.timeline.2016.title": "Especialidad en Ortodoncia",
        "about.timeline.2016.description": "Universidad Autónoma de Guadalajara - Ortodoncia y Ortopedia Dentofacial con mención honorífica.",
        "about.timeline.2014.title": "Residencia en Ortodoncia",
        "about.timeline.2014.description": "Inicio de residencia especializada en ortodoncia con enfoque en casos complejos y multidisciplinarios.",
        "about.timeline.2013.title": "Licenciatura en Odontología",
        "about.timeline.2013.description": "Universidad de Guadalajara - Título con Mención Honorífica en Odontología General.",
        
        // Professional Certifications
        "about.professional.subtitle": "Certificaciones profesionales",
        "about.professional.title": "Acreditaciones y Especialidades",
        "about.professional.description": "Formación continua para ofrecer siempre los mejores tratamientos",
        "about.cert1.title": "Especialista Certificada en Ortodoncia",
        "about.cert1.institution": "Universidad Autónoma de Guadalajara",
        "about.cert1.year": "2016",
        "about.cert2.title": "Invisalign Certified Provider",
        "about.cert2.description": "Certificación oficial para tratamientos con alineadores transparentes",
        "about.cert2.year": "2020",
        "about.cert3.title": "Ortodoncia Digital 3D",
        "about.cert3.description": "Planificación y diagnóstico con tecnología digital avanzada",
        "about.cert3.year": "2021",
        "about.cert4.title": "Microtornillos de Anclaje",
        "about.cert4.description": "Técnicas avanzadas para casos complejos de ortodoncia",
        "about.cert4.year": "2019",
        "about.cert5.title": "Estética Dental Avanzada",
        "about.cert5.description": "Diseño de sonrisa y procedimientos estéticos",
        "about.cert5.year": "2022",
        "about.cert6.title": "Miembro ADM",
        "about.cert6.description": "Asociación Dental Mexicana",
        "about.cert6.year": "2014",
        
        // Philosophy Section
        "about.philosophy.title": "Compromiso con la Excelencia",
        "about.philosophy.intro": "Mi enfoque se centra en combinar la ciencia más avanzada con un trato humano y personalizado. Cada paciente recibe atención individualizada porque entiendo que cada sonrisa cuenta una historia única.",
        "about.philosophy.point1.title": "Atención Personalizada",
        "about.philosophy.point1.description": "Dedico el tiempo necesario para entender las necesidades únicas de cada paciente y crear un plan de tratamiento personalizado.",
        "about.philosophy.point2.title": "Tecnología de Vanguardia",
        "about.philosophy.point2.description": "Utilizo la tecnología más moderna para diagnósticos precisos, planificación digital y tratamientos más eficientes y cómodos.",
        "about.philosophy.point3.title": "Compromiso Total",
        "about.philosophy.point3.description": "Mi compromiso es acompañarte durante todo el proceso hasta lograr la sonrisa de tus sueños, con seguimiento a largo plazo.",
        "about.philosophy.point4.title": "Formación Continua",
        "about.philosophy.point4.description": "Me mantengo actualizada con las últimas técnicas y tecnologías para ofrecer siempre los mejores tratamientos disponibles.",
        
        // Advantages Section
        "about.advantages.subtitle": "¿Por qué elegir mi consulta?",
        "about.advantages.title": "Ventajas de Nuestro Enfoque",
        "about.advantages.description": "Características que nos distinguen y nos hacen la mejor opción para tu tratamiento ortodóncico",
        "about.advantage1.title": "Horarios Flexibles",
        "about.advantage1.description": "Citas disponibles de lunes a sábado, incluyendo horarios vespertinos para adaptarnos a tu rutina diaria y laboral.",
        "about.advantage2.title": "Ubicación Céntrica",
        "about.advantage2.description": "Consultorio ubicado en el centro de Puerto Vallarta con fácil acceso en transporte público y estacionamiento disponible.",
        "about.advantage3.title": "Planes de Pago Flexibles",
        "about.advantage3.description": "Múltiples opciones de financiamiento para que puedas acceder al tratamiento que necesitas sin comprometer tu presupuesto.",
        "about.advantage4.title": "Protocolos de Bioseguridad",
        "about.advantage4.description": "Cumplimos con los más altos estándares de seguridad e higiene para garantizar tu salud y tranquilidad en cada visita.",
        "about.advantage5.title": "Atención Personalizada",
        "about.advantage5.description": "Seguimiento continuo y atención directa de la especialista durante todo el tratamiento, sin intermediarios.",
        "about.advantage6.title": "Garantía de Resultados",
        "about.advantage6.description": "Compromiso con la excelencia y satisfacción del paciente, con seguimiento post-tratamiento incluido.",
        
        // About Page CTA
        "about.cta.title": "¿Lista para Transformar tu Sonrisa?",
        "about.cta.description": "Agenda una consulta conmigo y descubre cómo podemos trabajar juntas para lograr la sonrisa que siempre has soñado. La primera consulta incluye evaluación completa y plan de tratamiento personalizado.",
        "about.cta.feature1": "Evaluación completa sin costo",
        "about.cta.feature2": "Plan de tratamiento personalizado",
        "about.cta.feature3": "Presupuesto detallado y opciones de pago",
        "about.cta.btn.consultation": "Agendar Consulta",
        "about.cta.btn.whatsapp": "WhatsApp",
        
        // Services Page
        "services.page.title": "Nuestros Servicios",
        "services.page.subtitle": "Tratamientos especializados con tecnología de vanguardia para transformar tu sonrisa",
        "services.orthodontics.subtitle": "Servicios principales",
        "services.orthodontics.title": "Tratamientos de Ortodoncia",
        "services.orthodontics.description": "Especialización en diferentes tipos de ortodoncia para todas las edades y necesidades",
        
        // Traditional Orthodontics
        "services.traditional.category": "Ortodoncia",
        "services.traditional.title": "Brackets Tradicionales",
        "services.traditional.description": "Los brackets metálicos son la opción más efectiva y económica para corregir problemas de alineación dental. Utilizamos sistemas de autoligado que reducen el tiempo de tratamiento y aumentan la comodidad.",
        "services.traditional.includes": "Incluye:",
        "services.traditional.feature1": "Brackets de autoligado",
        "services.traditional.feature2": "Consultas mensuales de ajuste",
        "services.traditional.feature3": "Radiografías de seguimiento",
        "services.traditional.feature4": "Kit de higiene especializado",
        "services.traditional.feature5": "Retenedores post-tratamiento",
        "services.traditional.duration": "Duración: 18-30 meses",
        "services.traditional.appointments": "Citas: Cada 4-6 semanas",
        "services.traditional.age": "Edad: 12+ años",
        "services.traditional.consultation": "Consulta Gratuita",
        "services.traditional.info": "Más Información",
        "services.traditional.badge": "Más Popular",
        
        // Aesthetic Orthodontics
        "services.aesthetic.category": "Ortodoncia Estética",
        "services.aesthetic.title": "Brackets Transparentes",
        "services.aesthetic.description": "Brackets de cerámica o zafiro prácticamente invisibles que se adaptan al color de tus dientes. Perfectos para profesionales que buscan discreción sin comprometer la efectividad del tratamiento.",
        "services.aesthetic.feature1": "Brackets de cerámica/zafiro",
        "services.aesthetic.feature2": "Arcos estéticos blancos",
        "services.aesthetic.feature3": "Consultas especializadas",
        "services.aesthetic.feature4": "Seguimiento fotográfico",
        "services.aesthetic.feature5": "Retenedores transparentes",
        "services.aesthetic.duration": "Duración: 18-30 meses",
        "services.aesthetic.appointments": "Citas: Cada 4-6 semanas",
        "services.aesthetic.invisibility": "Discretos: 95% invisibles",
        "services.aesthetic.badge": "Premium",
        
        // Invisalign
        "services.invisalign.category": "Ortodoncia Invisible",
        "services.invisalign.title": "Invisalign",
        "services.invisalign.description": "Sistema de alineadores transparentes removibles fabricados a medida. La tecnología más avanzada en ortodoncia que permite comer de todo y mantener una higiene oral perfecta durante el tratamiento.",
        "services.invisalign.feature1": "Escaneo 3D digital",
        "services.invisalign.feature2": "Simulación del resultado",
        "services.invisalign.feature3": "Alineadores personalizados",
        "services.invisalign.feature4": "App de seguimiento",
        "services.invisalign.feature5": "Refinamientos incluidos",
        "services.invisalign.duration": "Duración: 12-18 meses",
        "services.invisalign.appointments": "Citas: Cada 6-8 semanas",
        "services.invisalign.eating": "Come de todo: Sin restricciones",
        "services.invisalign.badge": "Innovador",
        
        // Additional Services
        "services.additional.subtitle": "Servicios complementarios",
        "services.additional.title": "Estética y Tratamientos Adicionales",
        "services.additional.description": "Servicios complementarios para completar tu transformación dental",
        
        // Whitening
        "services.whitening.title": "Blanqueamiento Profesional",
        "services.whitening.description": "Tratamiento láser que aclara hasta 8 tonos en una sola sesión. Resultados inmediatos y duraderos.",
        "services.whitening.price": "Desde $3,500",
        "services.whitening.feature1": "Evaluación dental completa",
        "services.whitening.feature2": "Tratamiento láser profesional",
        "services.whitening.feature3": "Kit para casa incluido",
        "services.whitening.feature4": "Seguimiento por 6 meses",
        "services.whitening.duration": "90 minutos",
        "services.whitening.book": "Agendar",
        
        // Veneers
        "services.veneers.title": "Carillas de Porcelana",
        "services.veneers.description": "Láminas ultrafinas que transforman completamente tu sonrisa. Resultados naturales y permanentes.",
        "services.veneers.price": "Desde $8,500",
        "services.veneers.feature1": "Diseño digital de sonrisa",
        "services.veneers.feature2": "Carillas de porcelana premium",
        "services.veneers.feature3": "Colocación en 2-3 sesiones",
        "services.veneers.feature4": "Garantía de 10 años",
        "services.veneers.duration": "2-3 citas",
        
        // Implants
        "services.implants.title": "Implantes Dentales",
        "services.implants.description": "Reemplazo permanente de dientes perdidos con implantes de titanio y coronas de porcelana.",
        "services.implants.price": "Desde $25,000",
        "services.implants.feature1": "Implante de titanio premium",
        "services.implants.feature2": "Corona de porcelana",
        "services.implants.feature3": "Cirugía guiada por computadora",
        "services.implants.feature4": "Garantía de por vida",
        "services.implants.duration": "3-6 meses",
        
        // Pediatric
        "services.pediatric.title": "Odontopediatría",
        "services.pediatric.description": "Atención especializada para niños con técnicas adaptadas para crear una experiencia positiva.",
        "services.pediatric.price": "Desde $800",
        "services.pediatric.feature1": "Consulta adaptada a niños",
        "services.pediatric.feature2": "Técnicas de relajación",
        "services.pediatric.feature3": "Prevención temprana",
        "services.pediatric.feature4": "Educación dental divertida",
        "services.pediatric.duration": "45 minutos",
        
        // Cleaning
        "services.cleaning.title": "Limpieza Profunda",
        "services.cleaning.description": "Profilaxis profesional con ultrasonido y técnicas avanzadas para mantener tu salud bucal.",
        "services.cleaning.price": "Desde $1,500",
        "services.cleaning.feature1": "Limpieza con ultrasonido",
        "services.cleaning.feature2": "Pulido y fluorización",
        "services.cleaning.feature3": "Evaluación periodontal",
        "services.cleaning.feature4": "Plan de mantenimiento",
        "services.cleaning.duration": "60 minutos",
        
        // Bichectomy
        "services.bichectomy.title": "Bichectomía",
        "services.bichectomy.description": "Procedimiento mínimamente invasivo para reducir el volumen de las mejillas y mejorar el contorno facial.",
        "services.bichectomy.price": "Desde $15,000",
        "services.bichectomy.feature1": "Evaluación facial completa",
        "services.bichectomy.feature2": "Procedimiento ambulatorio",
        "services.bichectomy.feature3": "Recuperación rápida",
        "services.bichectomy.feature4": "Seguimiento post-operatorio",
        "services.bichectomy.duration": "45 minutos",
        
        // Process Section
        "services.process.subtitle": "Nuestro proceso",
        "services.process.title": "¿Cómo Trabajamos?",
        "services.process.description": "Un proceso estructurado para garantizar los mejores resultados en tu tratamiento",
        "services.process.step1.title": "Consulta Inicial",
        "services.process.step1.description": "Evaluación completa, radiografías digitales y análisis de tu caso específico. Discutimos tus objetivos y expectativas.",
        "services.process.step2.title": "Plan de Tratamiento",
        "services.process.step2.description": "Diseñamos un plan personalizado con opciones de tratamiento, cronograma detallado y presupuesto transparente.",
        "services.process.step3.title": "Inicio del Tratamiento",
        "services.process.step3.description": "Comenzamos el tratamiento con las técnicas más avanzadas y tecnología digital para tu comodidad.",
        "services.process.step4.title": "Seguimiento",
        "services.process.step4.description": "Monitoreo continuo del progreso con citas regulares y ajustes necesarios para optimizar resultados.",
        "services.process.step5.title": "Finalización y Retención",
        "services.process.step5.description": "Completamos el tratamiento con retenedores personalizados y plan de mantenimiento a largo plazo.",
        
        // FAQ Section
        "services.faq.subtitle": "Preguntas frecuentes",
        "services.faq.title": "¿Tienes Dudas?",
        "services.faq.description": "Respuestas a las preguntas más comunes sobre nuestros tratamientos",
        "services.faq.q1": "¿Cuánto tiempo dura un tratamiento de ortodoncia?",
        "services.faq.a1": "La duración varía según el caso, pero generalmente oscila entre 18-30 meses para brackets tradicionales, 12-18 meses para Invisalign. Durante la consulta inicial evaluamos tu caso específico y te damos un tiempo estimado más preciso.",
        "services.faq.q2": "¿Los tratamientos son dolorosos?",
        "services.faq.a2": "Los tratamientos modernos son mucho más cómodos que antes. Puedes experimentar molestias leves los primeros días después de cada ajuste, pero utilizamos técnicas y tecnologías que minimizan las molestias significativamente.",
        "services.faq.q3": "¿Ofrecen planes de pago?",
        "services.faq.a3": "Sí, ofrecemos múltiples opciones de financiamiento sin intereses y planes de pago flexibles. También aceptamos seguros dentales y podemos ayudarte a maximizar tus beneficios.",
        "services.faq.q4": "¿Qué edad es adecuada para ortodoncia?",
        "services.faq.a4": "La ortodoncia puede realizarse a cualquier edad. Para niños, recomendamos la primera evaluación a los 7 años. Los adultos también pueden beneficiarse enormemente de los tratamientos ortodóncicos modernos.",
        "services.faq.q5": "¿Qué incluye la consulta inicial?",
        "services.faq.a5": "La consulta inicial incluye examen clínico completo, radiografías digitales, fotografías, análisis del caso, explicación de opciones de tratamiento y presupuesto detallado. Todo esto sin costo adicional.",
        
        // CTA Section
        "services.cta.title": "¿Listo para Comenzar tu Transformación?",
        "services.cta.description": "Agenda tu consulta gratuita y descubre cómo podemos transformar tu sonrisa con los tratamientos más avanzados y personalizados.",
        "services.cta.feature1": "Consulta inicial sin costo",
        "services.cta.feature2": "Plan de tratamiento personalizado",
        "services.cta.feature3": "Opciones de financiamiento flexibles",
        "services.cta.btn.consultation": "Agendar Consulta Gratuita",
        "services.cta.btn.whatsapp": "WhatsApp",
        
        // Testimonials Page
        "testimonials.page.title": "Experiencias Reales",
        "testimonials.page.subtitle": "Conoce las historias de transformación de nuestros pacientes y su experiencia con nosotros",
        "testimonials.featured.subtitle": "Historias de éxito",
        "testimonials.featured.title": "Testimonios Destacados",
        "testimonials.featured.description": "Conoce las experiencias más inspiradoras de nuestros pacientes",
        
        // Featured Testimonials
        "testimonials.patient1.name": "Mairin Claudio",
        "testimonials.patient1.treatment": "Ortodoncia Tradicional",
        "testimonials.patient1.testimonial": "\"La Dra. Daniela es muy profesional y amable. Mi tratamiento de ortodoncia fue un éxito total y ahora sonrío con confianza. El consultorio siempre está impecable y la atención es de primera calidad. ¡Gracias por transformar mi sonrisa!\"",
        "testimonials.patient1.treatment.type": "Brackets Tradicionales",
        "testimonials.patient1.duration": "18 meses",
        
        "testimonials.patient2.name": "Roberto M.",
        "testimonials.patient2.treatment": "Invisalign",
        "testimonials.patient2.testimonial": "\"El tratamiento con Invisalign cambió mi vida. Poder comer de todo y mantener mi higiene dental fue increíble. La Dra. Verdín siempre estuvo disponible para resolver mis dudas y el seguimiento fue excepcional.\"",
        "testimonials.patient2.treatment.type": "Invisalign",
        "testimonials.patient2.duration": "14 meses",
        
        "testimonials.patient3.name": "Ana Sofía R.",
        "testimonials.patient3.treatment": "Carillas Dentales",
        "testimonials.patient3.testimonial": "\"Después de años sin sonreír por vergüenza, finalmente encontré la solución perfecta. Las carillas dentales quedaron perfectas, muy naturales. Mi autoestima cambió completamente.\"",
        "testimonials.patient3.treatment.type": "Carillas de Porcelana",
        "testimonials.patient3.duration": "3 sesiones",
        
        // Google Reviews Section
        "testimonials.google.subtitle": "Reseñas verificadas",
        "testimonials.google.title": "Lo Que Dicen en Google",
        "testimonials.google.description": "Testimonios auténticos de pacientes verificados en Google My Business",
        "testimonials.google.viewall": "Ver todas las reseñas en Google",
        
        // Video Testimonials Section
        "testimonials.video.subtitle": "Testimonios en video",
        "testimonials.video.title": "Escucha Directamente de Nuestros Pacientes",
        "testimonials.video.description": "Historias reales contadas por quienes vivieron la experiencia",
        "testimonials.video1.title": "Historia de Transformación",
        "testimonials.video1.treatment": "Ortodoncia Invisalign - 15 meses",
        "testimonials.video1.duration": "2:30 min",
        "testimonials.video2.title": "Experiencia Familiar",
        "testimonials.video2.treatment": "Tratamiento para niños",
        "testimonials.video2.duration": "1:45 min",
        "testimonials.video3.title": "Sonrisa Perfecta",
        "testimonials.video3.treatment": "Brackets Estéticos",
        "testimonials.video3.duration": "3:15 min",
        
        // Treatment Categories
        "testimonials.bytreatment.subtitle": "Por tipo de tratamiento",
        "testimonials.bytreatment.title": "Historias de Éxito por Especialidad",
        "testimonials.bytreatment.description": "Conoce resultados específicos para cada tipo de tratamiento",
        "testimonials.categories.orthodontics": "Ortodoncia",
        "testimonials.categories.aesthetics": "Estética",
        "testimonials.categories.implants": "Implantes",
        "testimonials.categories.pediatric": "Infantil",
        
        // Orthodontics Testimonials
        "testimonials.orthodontics.patient1.quote": "\"Los brackets estéticos fueron perfectos para mi trabajo. Prácticamente invisibles y muy cómodos. El proceso fue más rápido de lo que esperaba.\"",
        "testimonials.orthodontics.patient1.name": "María Carmen G.",
        "testimonials.orthodontics.patient1.treatment": "Brackets Estéticos - 20 meses",
        "testimonials.orthodontics.stat1.number": "20",
        "testimonials.orthodontics.stat1.label": "meses",
        "testimonials.orthodontics.stat2.number": "95%",
        "testimonials.orthodontics.stat2.label": "invisible",
        
        // Aesthetics Testimonials
        "testimonials.aesthetics.patient1.quote": "\"El diseño de mi sonrisa fue increíble, superó completamente mis expectativas. La tecnología 3D me permitió ver el resultado antes del tratamiento.\"",
        "testimonials.aesthetics.patient1.name": "Jane M.",
        "testimonials.aesthetics.patient1.treatment": "Carillas de Porcelana",
        "testimonials.aesthetics.stat1.number": "3",
        "testimonials.aesthetics.stat1.label": "sesiones",
        "testimonials.aesthetics.stat2.number": "10",
        "testimonials.aesthetics.stat2.label": "años garantía",
        
        // Implants Testimonials
        "testimonials.implants.patient1.quote": "\"Los implantes cambiaron mi vida. Ahora puedo comer de todo sin preocupaciones. Se sienten como dientes naturales.\"",
        "testimonials.implants.patient1.name": "Luis H.",
        "testimonials.implants.patient1.treatment": "Implantes Dentales",
        "testimonials.implants.stat1.number": "4",
        "testimonials.implants.stat1.label": "meses",
        "testimonials.implants.stat2.number": "100%",
        "testimonials.implants.stat2.label": "funcional",
        
        // Pediatric Testimonials
        "testimonials.pediatric.patient1.quote": "\"Mi hijo perdió completamente el miedo al dentista. La Dra. Daniela es muy paciente con los niños y tiene un don especial para hacerlos sentir seguros.\"",
        "testimonials.pediatric.patient1.name": "Madhu (mamá de Arjun)",
        "testimonials.pediatric.patient1.treatment": "Tratamiento Preventivo Infantil",
        "testimonials.pediatric.stat1.number": "0",
        "testimonials.pediatric.stat1.label": "miedo",
        "testimonials.pediatric.stat2.number": "100%",
        "testimonials.pediatric.stat2.label": "sonrisas",
        
        // Testimonials CTA
        "testimonials.cta.title": "¿Quieres Ser el Próximo Testimonio de Éxito?",
        "testimonials.cta.description": "Únete a las más de 1000 personas que ya han transformado su sonrisa con nosotros. Tu historia de éxito podría ser la próxima en aparecer aquí.",
        "testimonials.cta.feature1": "Consulta inicial gratuita",
        "testimonials.cta.feature2": "Plan de tratamiento personalizado",
        "testimonials.cta.feature3": "Seguimiento durante todo el proceso",
        "testimonials.cta.btn.start": "Iniciar Mi Transformación",
        "testimonials.cta.btn.whatsapp": "WhatsApp",
        
        // Before After Page
        "cases.page.title": "Transformaciones Reales",
        "cases.page.subtitle": "Descubre los resultados extraordinarios que hemos logrado con nuestros pacientes. Cada sonrisa cuenta una historia de éxito única.",
        "cases.breadcrumb.current": "Casos Antes y Después",
        
        // Gallery Section
        "cases.gallery.subtitle": "Resultados Reales",
        "cases.gallery.title": "Galería de Transformaciones",
        "cases.gallery.description": "Cada sonrisa que transformamos es única y especial. Aquí puedes ver algunos de los resultados extraordinarios que hemos logrado con nuestros pacientes, utilizando diferentes técnicas y tratamientos personalizados para cada caso específico.",
        
        // Before/After Images
        "cases.before": "Antes y despues",
        "cases.after": "Antes yDespués",
        "cases.case1.before": "Apiñamiento severo",
        "cases.case1.after": "Alineación perfecta - 18 meses",
        "cases.case2.before": "Decoloración dental",
        "cases.case2.after": "Blanqueamiento + carillas - 6 semanas",
        "cases.case3.before": "Separación dental",
        "cases.case3.after": "Invisalign - 14 meses",
        "cases.case4.before": "Dientes fracturados",
        "cases.case4.after": "Carillas de porcelana - 3 semanas",
        "cases.case5.before": "Malposición dental - 14 años",
        "cases.case5.after": "Brackets estéticos - 24 meses",
        "cases.case6.before": "Sonrisa gingival",
        
        // Treatment Types Section
        "cases.treatments.title": "Tipos de Tratamientos",
        "cases.treatments.description": "Conoce las diferentes especialidades que ofrecemos y los tiempos promedio de cada tratamiento.",
        "cases.treatment1.title": "Ortodoncia Tradicional",
        "cases.treatment1.description": "Brackets metálicos o estéticos para casos de apiñamiento, separación o malposición dental.",
        "cases.treatment1.duration": "Tiempo promedio:",
        "cases.treatment1.time": "18-30 meses",
        "cases.treatment2.title": "Invisalign",
        "cases.treatment2.description": "Alineadores transparentes removibles, ideales para profesionales y adultos.",
        "cases.treatment2.duration": "Tiempo promedio:",
        "cases.treatment2.time": "12-18 meses",
        "cases.treatment3.title": "Estética Dental",
        "cases.treatment3.description": "Blanqueamiento, carillas y diseño de sonrisa para resultados inmediatos.",
        "cases.treatment3.duration": "Tiempo promedio:",
        "cases.treatment3.time": "2-6 semanas",
        
        // Features Highlight Section
        "cases.features.title": "¿Qué hace que nuestros resultados sean únicos?",
        "cases.feature1.title": "Tecnología 3D",
        "cases.feature1.description": "Utilizamos escáneres intraorales y planificación digital para resultados precisos y predecibles.",
        "cases.feature2.title": "Experiencia",
        "cases.feature2.description": "Más de 10 años especializándose exclusivamente en ortodoncia y estética dental.",
        "cases.feature3.title": "Atención Personalizada",
        "cases.feature3.description": "Cada caso es único. Desarrollamos un plan de tratamiento específico para cada paciente.",
        
        // Process Steps Section
        "cases.process.title": "Proceso de Tratamiento",
        "cases.process.description": "Te acompañamos en cada paso de tu transformación con un proceso estructurado y personalizado.",
        "cases.step1.title": "Consulta Inicial",
        "cases.step1.description": "Evaluación completa, diagnóstico y plan de tratamiento personalizado.",
        "cases.step2.title": "Inicio del Tratamiento",
        "cases.step2.description": "Colocación de brackets o entrega de alineadores con instrucciones detalladas.",
        "cases.step3.title": "Seguimiento",
        "cases.step3.description": "Citas regulares para monitorear el progreso y hacer ajustes necesarios.",
        "cases.step4.title": "Retención",
        "cases.step4.description": "Retenedores personalizados para mantener los resultados obtenidos.",
        
        // Final CTA Section
        "cases.cta.title": "¿Lista para tu transformación?",
        "cases.cta.description": "Cada sonrisa es una historia de éxito. Agenda tu consulta y descubre cómo podemos crear la transformación perfecta para ti. Tu antes y después puede ser el próximo en inspirar a otros.",
        "cases.cta.button": "Comienza tu transformación",
        
        // Contact Page
        "contact.title": "Contáctanos",
        "contact.subtitle": "Estamos aquí para ayudarte a lograr la sonrisa de tus sueños. ¡Agenda tu consulta hoy!",
        "contact.breadcrumb.current": "Contacto",
        
        // Contact Information Section
        "contact.info.subtitle": "Información de contacto",
        "contact.info.title": "¡Estamos aquí para ti!",
        "contact.info.description": "Contáctanos por cualquiera de estos medios y agenda tu consulta hoy mismo",
        "contact.location.title": "Nuestra Ubicación",
        "contact.location.address": "C. Miramar 859, Centro<br>48300 Puerto Vallarta, Jalisco<br><small>Fácil acceso y estacionamiento disponible</small>",
        "contact.phone.title": "Llámanos Ahora",
        "contact.phone.description": "Atención inmediata de lunes a sábado",
        "contact.email.title": "Envíanos un Email",
        "contact.email.description": "Respuesta en menos de 24 horas",
        "contact.hours.title": "Horarios de Atención",
        "contact.hours.schedule": "<strong>Lunes - Viernes:</strong> 9:00 - 20:00<br><strong>Sábados:</strong> 9:00 - 14:00<br><small>Citas de emergencia disponibles</small>",
        
        // Contact Form Section
        "contact.form.subtitle": "Agenda tu cita",
        "contact.form.title": "Solicita tu Consulta",
        "contact.form.description": "Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas",
        "contact.form.name.label": "Nombre completo *",
        "contact.form.name.placeholder": "Ingresa tu nombre completo",
        "contact.form.phone.label": "Teléfono *",
        "contact.form.phone.placeholder": "322 123 4567",
        "contact.form.email.label": "Correo electrónico *",
        "contact.form.email.placeholder": "tu@email.com",
        "contact.form.age.label": "Edad",
        "contact.form.age.placeholder": "Opcional",
        "contact.form.service.label": "Servicio de interés",
        "contact.form.service.placeholder": "Selecciona un servicio",
        "contact.form.service.general": "Consulta General",
        "contact.form.service.traditional": "Ortodoncia Tradicional",
        "contact.form.service.aesthetic": "Ortodoncia Estética",
        "contact.form.service.invisalign": "Invisalign",
        "contact.form.service.smile": "Diseño de Sonrisa",
        "contact.form.service.whitening": "Blanqueamiento Dental",
        "contact.form.service.veneers": "Carillas Dentales",
        "contact.form.service.pediatric": "Odontopediatría",
        "contact.form.service.cleaning": "Limpieza y Prevención",
        "contact.form.service.implants": "Implantes y Coronas",
        "contact.form.service.bichectomy": "Bichectomía",
        "contact.form.schedule.label": "Horario preferido",
        "contact.form.schedule.placeholder": "Selecciona un horario",
        "contact.form.schedule.morning": "Mañana (9:00 - 12:00)",
        "contact.form.schedule.afternoon": "Tarde (14:00 - 17:00)",
        "contact.form.schedule.evening": "Noche (17:00 - 20:00)",
        "contact.form.schedule.saturday": "Sábado",
        "contact.form.message.label": "Mensaje *",
        "contact.form.message.placeholder": "Cuéntanos sobre tu caso o cualquier pregunta que tengas...",
        "contact.form.privacy": "Acepto el manejo de mis datos personales según la política de privacidad",
        "contact.form.submit": "Enviar Solicitud",
        
        // Contact Sidebar
        "contact.sidebar.details.title": "Información Detallada",
        "contact.sidebar.address.title": "Dirección",
        "contact.sidebar.address.content": "C. Miramar 859, Centro<br>48300 Puerto Vallarta, Jalisco<br>México",
        "contact.sidebar.phone.title": "Teléfono",
        "contact.sidebar.email.title": "Email",
        "contact.sidebar.whatsapp.title": "WhatsApp",
        "contact.sidebar.schedule.title": "Horarios de Atención",
        "contact.sidebar.schedule.weekdays": "Lunes - Viernes",
        "contact.sidebar.schedule.weekdays.time": "9:00 - 20:00",
        "contact.sidebar.schedule.saturday": "Sábados",
        "contact.sidebar.schedule.saturday.time": "9:00 - 14:00",
        "contact.sidebar.schedule.sunday": "Domingos",
        "contact.sidebar.schedule.sunday.time": "Cerrado",
        "contact.sidebar.schedule.note": "Horarios especiales disponibles para casos de emergencia",
        "contact.sidebar.emergency.title": "Emergencias",
        "contact.sidebar.emergency.description": "¿Tienes dolor o una situación urgente?",
        "contact.sidebar.emergency.button": "Contactar Ahora",
        
        // Location Section
        "contact.location.subtitle": "Nuestra ubicación",
        "contact.location.section.title": "Fácil Acceso en el Centro de Puerto Vallarta",
        "contact.location.section.description": "Ubicados estratégicamente en el centro de la ciudad con fácil acceso y estacionamiento disponible",
        "contact.location.parking.title": "Estacionamiento",
        "contact.location.parking.description": "Estacionamiento gratuito disponible para pacientes",
        "contact.location.transport.title": "Transporte Público",
        "contact.location.transport.description": "Fácil acceso en autobús y transporte público",
        "contact.location.accessibility.title": "Accesibilidad",
        "contact.location.accessibility.description": "Instalaciones completamente accesibles",
        "contact.location.wifi.title": "WiFi Gratis",
        "contact.location.wifi.description": "Internet gratuito para nuestros pacientes",
        
        // Contact FAQ Section
        "contact.faq.subtitle": "Preguntas frecuentes",
        "contact.faq.title": "¿Tienes Dudas sobre el Proceso?",
        "contact.faq.description": "Respuestas a las preguntas más comunes sobre cómo agendar y qué esperar en tu primera visita",
        "contact.faq.appointment.title": "¿Cómo agendar una cita?",
        "contact.faq.appointment.answer": "Puedes llenar el formulario de contacto, llamarnos al 322 116 7592 o escribirnos por WhatsApp. Responderemos en menos de 24 horas para confirmar tu cita.",
        "contact.faq.consultation.title": "¿Qué incluye la primera consulta?",
        "contact.faq.consultation.answer": "Evaluación completa, diagnóstico con radiografías digitales si es necesario, plan de tratamiento personalizado y presupuesto detallado sin costo adicional.",
        "contact.faq.payment.title": "¿Manejan planes de pago?",
        "contact.faq.payment.answer": "Sí, ofrecemos diferentes opciones de financiamiento flexible para que puedas acceder al tratamiento que necesitas sin comprometer tu presupuesto.",
        "contact.faq.emergency.title": "¿Atienden emergencias?",
        "contact.faq.emergency.answer": "Sí, contamos con horarios especiales para emergencias dentales. Contacta por WhatsApp o teléfono para casos urgentes fuera del horario normal.",
        "contact.faq.safety.title": "¿Qué protocolos de seguridad manejan?",
        "contact.faq.safety.answer": "Cumplimos con todos los protocolos de bioseguridad establecidos, incluyendo esterilización completa, equipo desechable y medidas preventivas.",
        "contact.faq.children.title": "¿Atienden niños?",
        "contact.faq.children.answer": "Sí, ofrecemos servicios especializados de odontopediatría con técnicas adaptadas para crear una experiencia positiva en los más pequeños.",
        
        // Contact Methods Section
        "contact.methods.subtitle": "Múltiples formas de contacto",
        "contact.methods.title": "Elige la Forma que Prefieras",
        "contact.methods.description": "Estamos disponibles a través de diferentes canales para tu comodidad",
        "contact.methods.phone.title": "Llamada Telefónica",
        "contact.methods.phone.description": "Habla directamente con nosotros",
        "contact.methods.phone.button": "322 116 7592",
        "contact.methods.whatsapp.title": "WhatsApp",
        "contact.methods.whatsapp.description": "Respuesta rápida y conveniente",
        "contact.methods.whatsapp.button": "Enviar Mensaje",
        "contact.methods.email.title": "Correo Electrónico",
        "contact.methods.email.description": "Para consultas detalladas",
        "contact.methods.email.button": "Enviar Email"
    },
    
    en: {
        // Navigation
        "nav.home": "Home",
        "nav.services": "Services",
        "nav.about": "About Me",
        "nav.testimonials": "Testimonials",
        "nav.cases": "Cases",
        "nav.contact": "Contact",
        "nav.appointment": "Book Appointment",
        
        // Top Bar
        "topbar.phone": "322 116 7592",
        "topbar.email": "contacto@doctoradanielverdin.com",
        "topbar.hours": "Mon - Fri: 9:00 - 20:00",
        
        // Common elements
        "btn.appointment": "Book Appointment",
        "btn.contact": "Contact",
        "btn.whatsapp": "WhatsApp",
        "btn.send": "Send",
        "btn.readmore": "Read more",
        "btn.services": "View Services",
        
        // Home Page
        "home.hero.title": "Your <span class=\"highlight\">Perfect Smile</span><br>Starts Here",
        "home.hero.subtitle": "Orthodontics and Dental Aesthetics Specialist",
        "home.hero.description": "We transform smiles with cutting-edge technology and personalized care. Over 10 years specializing in orthodontics and dental aesthetics in Puerto Vallarta.",
        
        // Home Services Section
        "home.services.title": "Our Services",
        "home.services.subtitle": "Specialized Treatments",
        "home.services.description": "We offer a wide range of dental services with the highest quality and modern technology",
        "home.services.orthodontics.title": "Orthodontics",
        "home.services.orthodontics.description": "Traditional, aesthetic brackets and clear aligners for all ages.",
        "home.services.orthodontics.features.1": "Metal and aesthetic brackets",
        "home.services.orthodontics.features.2": "Invisalign",
        "home.services.orthodontics.features.3": "Orthodontics for children and adults",
        "home.services.orthodontics.features.4": "Personalized treatments",
        "home.services.orthodontics.link": "More information",
        "home.services.aesthetic.title": "Dental Aesthetics",
        "home.services.aesthetic.description": "Whitening, veneers and smile design for a natural appearance.",
        "home.services.aesthetic.features.1": "Professional whitening",
        "home.services.aesthetic.features.2": "Porcelain veneers",
        "home.services.aesthetic.features.3": "Smile design",
        "home.services.aesthetic.features.4": "Aesthetic resins",
        "home.services.aesthetic.link": "More information",
        "home.services.implants.title": "Dental Implants",
        "home.services.implants.description": "Permanent solutions to replace missing teeth with advanced technology.",
        "home.services.implants.features.1": "Titanium implants",
        "home.services.implants.features.2": "Guided surgery",
        "home.services.implants.features.3": "Porcelain crowns",
        "home.services.implants.features.4": "Complete rehabilitation",
        "home.services.implants.link": "More information",
        
        // Home About Section
        "home.about.subtitle": "Meet your doctor",
        "home.about.title": "Dr. Daniela Verdín",
        "home.about.description.1": "Orthodontics and Dentofacial Orthopedics Specialist with over 10 years of experience transforming smiles. My passion is helping you regain your confidence and self-esteem through a healthy, functional and aesthetic smile.",
        "home.about.description.2": "I work with cutting-edge digital technology, providing close and personalized care, with treatments designed specifically for each patient.",
        "home.about.features.1": "Certified Orthodontics Specialist",
        "home.about.features.2": "Member of the Mexican Dental Association",
        "home.about.features.3": "Invisalign Certification",
        "home.about.features.4": "More than 1000 successful cases",
        "home.about.features.5": "Continuous training in new technologies",
        "home.about.link": "Learn more about me",
        
        // Home Testimonials Section
        "home.testimonials.subtitle": "Testimonials",
        "home.testimonials.title": "What Our Patients Say",
        "home.testimonials.description": "Our patients' satisfaction is our greatest reward",
        
        // Payment Plans Section
        "home.payment.title": "Payment Plans",
        "home.payment.description": "Flexible financing options so you can access the treatment you need without worries.",
        
        // Features
        "features.subtitle": "Why choose us?",
        "features.title": "Excellence in Every Smile",
        "features.description": "We combine professional experience with advanced technology to provide you with the best results",
        "features.technology.title": "Advanced Technology",
        "features.technology.description": "We use state-of-the-art equipment including 3D scanners, digital planning and modern orthodontic systems for precise results.",
        "features.experience.title": "10+ Years of Experience",
        "features.experience.description": "Certified specialist with over a decade transforming smiles and improving the quality of life of our patients.",
        "features.personalized.title": "Personalized Care",
        "features.personalized.description": "Each patient receives a unique treatment plan designed specifically for their needs and aesthetic goals.",
        "features.results.title": "Guaranteed Results",
        "features.results.description": "We are committed to excellence and complete patient satisfaction with post-treatment follow-up included.",
        
        // Services
        "services.title": "Our Services",
        "services.subtitle": "Specialized treatments",
        "services.description": "We offer a wide range of specialized dental services",
        
        // About
        "about.title": "Meet Your Doctor",
        "about.subtitle": "Orthodontics Specialist with a passion for transforming smiles",
        
        // Contact
        "contact.title": "Contact Us",
        "contact.subtitle": "We're here to help you achieve the smile of your dreams. Schedule your consultation today!",
        "contact.info.title": "We're here for you!",
        "contact.info.description": "Contact us through any of these means and schedule your consultation today",
        "contact.location.title": "Our Location",
        "contact.location.address": "C. Miramar 859, Centro<br>48300 Puerto Vallarta, Jalisco<br><small>Easy access and parking available</small>",
        "contact.phone.title": "Call Us Now",
        "contact.phone.description": "<small>Immediate attention Monday to Saturday</small>",
        "contact.email.title": "Send Us an Email",
        "contact.email.description": "<small>Response within 24 hours</small>",
        "contact.hours.title": "Office Hours",
        "contact.hours.schedule": "<strong>Monday - Friday:</strong> 9:00 - 20:00<br><strong>Saturdays:</strong> 9:00 - 14:00<br><small>Emergency appointments available</small>",
        
        // Footer
        "footer.description": "Orthodontics and Dental Aesthetics Specialist with over 10 years of experience transforming smiles in Puerto Vallarta.",
        "footer.services": "Services",
        "footer.service.orthodontics": "Orthodontics",
        "footer.service.aesthetic": "Dental Aesthetics",
        "footer.service.implants": "Implants",
        "footer.service.whitening": "Whitening",
        "footer.service.pediatric": "Pediatric Dentistry",
        "footer.service.invisalign": "Invisalign",
        "footer.service.smile.design": "Smile Design",
        "footer.quicklinks": "Quick Links",
        "footer.link.home": "Home",
        "footer.link.about": "About Me",
        "footer.link.testimonials": "Testimonials",
        "footer.link.cases": "Cases",
        "footer.link.contact": "Contact",
        "footer.contact": "Contact",
        "footer.address": "C. Miramar 859, Centro<br>Puerto Vallarta, Jalisco",
        "footer.phone": "322 116 7592",
        "footer.email": "contacto@doctoradanielverdin.com",
        "footer.hours": "Mon - Fri: 9:00 - 20:00",
        "footer.copyright": "© 2024 Dr. Daniela Verdín. All rights reserved.",
        
        // About Page
        "about.hero.title": "Meet Your Doctor",
        "about.hero.subtitle": "Orthodontics Specialist with a passion for transforming smiles",
        
        // About Main Section
        "about.main.subtitle": "Meet your specialist",
        "about.main.title": "Dr. Daniela Verdín",
        "about.main.specialty": "Orthodontics and Dentofacial Orthopedics Specialist",
        "about.main.intro": "My name is Daniela Verdín and I am an Orthodontics and Dentofacial Orthopedics specialist with over 10 years of experience transforming smiles in Puerto Vallarta. My vocation is to help you regain your confidence and self-esteem through a healthy, functional and aesthetic smile.",
        "about.main.description": "I work with cutting-edge digital technology, providing close and personalized care, with treatments designed specifically for each patient. I firmly believe that each smile is unique and deserves specialized attention that combines the most advanced science with the art of dentistry.",
        "about.main.badge": "10+ Years of Experience",
        
        // Certifications Gallery
        "about.certifications.subtitle": "Credentials and Certifications",
        "about.certifications.title": "Professional Training",
        "about.certifications.description": "Backed by official certifications and continuous training at the best institutions",
        "about.certifications.cepo.title": "CEPO",
        "about.certifications.cepo.description": "College of Orthodontics Specialists - Active Member",
        "about.certifications.university.title": "Autonomous University of Guadalajara",
        "about.certifications.university.description": "Specialty in Orthodontics and Dentofacial Orthopedics",
        "about.certifications.invisalign.title": "Invisalign Certified",
        "about.certifications.invisalign.description": "Certified Specialist in Clear Aligners",
        "about.certifications.continuing.title": "Continuing Education",
        "about.certifications.continuing.description": "Constant Updates in Advanced Techniques",
        
        // Education and Experience Timeline
        "about.education.subtitle": "My professional journey",
        "about.education.title": "Education and Experience",
        "about.education.description": "Solid academic background supported by years of specialized practice",
        "about.timeline.2024.title": "Advanced Invisalign Certification",
        "about.timeline.2024.description": "Specialization in clear aligners and digital 3D planning for complex cases.",
        "about.timeline.2020.title": "Opening of Private Practice",
        "about.timeline.2020.description": "Establishment of modern dental clinic in Puerto Vallarta with cutting-edge technology.",
        "about.timeline.2016.title": "Orthodontics Specialty",
        "about.timeline.2016.description": "Autonomous University of Guadalajara - Orthodontics and Dentofacial Orthopedics with honors.",
        "about.timeline.2014.title": "Orthodontics Residency",
        "about.timeline.2014.description": "Beginning of specialized orthodontics residency with focus on complex and multidisciplinary cases.",
        "about.timeline.2013.title": "Bachelor's Degree in Dentistry",
        "about.timeline.2013.description": "University of Guadalajara - Degree with Honors in General Dentistry.",
        
        // Professional Certifications
        "about.professional.subtitle": "Professional certifications",
        "about.professional.title": "Accreditations and Specialties",
        "about.professional.description": "Continuous training to always offer the best treatments",
        "about.cert1.title": "Certified Orthodontics Specialist",
        "about.cert1.institution": "Autonomous University of Guadalajara",
        "about.cert1.year": "2016",
        "about.cert2.title": "Invisalign Certified Provider",
        "about.cert2.description": "Official certification for clear aligner treatments",
        "about.cert2.year": "2020",
        "about.cert3.title": "Digital 3D Orthodontics",
        "about.cert3.description": "Planning and diagnosis with advanced digital technology",
        "about.cert3.year": "2021",
        "about.cert4.title": "Anchoring Microscrews",
        "about.cert4.description": "Advanced techniques for complex orthodontic cases",
        "about.cert4.year": "2019",
        "about.cert5.title": "Advanced Dental Aesthetics",
        "about.cert5.description": "Smile design and aesthetic procedures",
        "about.cert5.year": "2022",
        "about.cert6.title": "ADM Member",
        "about.cert6.description": "Mexican Dental Association",
        "about.cert6.year": "2014",
        
        // Philosophy Section
        "about.philosophy.title": "Commitment to Excellence",
        "about.philosophy.intro": "My approach focuses on combining the most advanced science with humane and personalized treatment. Each patient receives individualized attention because I understand that each smile tells a unique story.",
        "about.philosophy.point1.title": "Personalized Care",
        "about.philosophy.point1.description": "I dedicate the necessary time to understand each patient's unique needs and create a personalized treatment plan.",
        "about.philosophy.point2.title": "Cutting-Edge Technology",
        "about.philosophy.point2.description": "I use the most modern technology for precise diagnoses, digital planning and more efficient and comfortable treatments.",
        "about.philosophy.point3.title": "Total Commitment",
        "about.philosophy.point3.description": "My commitment is to accompany you throughout the entire process until achieving the smile of your dreams, with long-term follow-up.",
        "about.philosophy.point4.title": "Continuous Training",
        "about.philosophy.point4.description": "I stay updated with the latest techniques and technologies to always offer the best available treatments.",
        
        // Advantages Section
        "about.advantages.subtitle": "Why choose my practice?",
        "about.advantages.title": "Advantages of Our Approach",
        "about.advantages.description": "Features that distinguish us and make us the best option for your orthodontic treatment",
        "about.advantage1.title": "Flexible Schedules",
        "about.advantage1.description": "Appointments available Monday through Saturday, including evening hours to adapt to your daily and work routine.",
        "about.advantage2.title": "Central Location",
        "about.advantage2.description": "Office located in downtown Puerto Vallarta with easy access by public transportation and available parking.",
        "about.advantage3.title": "Flexible Payment Plans",
        "about.advantage3.description": "Multiple financing options so you can access the treatment you need without compromising your budget.",
        "about.advantage4.title": "Biosafety Protocols",
        "about.advantage4.description": "We comply with the highest safety and hygiene standards to guarantee your health and peace of mind on every visit.",
        "about.advantage5.title": "Personalized Care",
        "about.advantage5.description": "Continuous follow-up and direct attention from the specialist throughout the treatment, without intermediaries.",
        "about.advantage6.title": "Results Guarantee",
        "about.advantage6.description": "Commitment to excellence and patient satisfaction, with post-treatment follow-up included.",
        
        // About Page CTA
        "about.cta.title": "Ready to Transform Your Smile?",
        "about.cta.description": "Schedule a consultation with me and discover how we can work together to achieve the smile you have always dreamed of. The first consultation includes complete evaluation and personalized treatment plan.",
        "about.cta.feature1": "Complete evaluation at no cost",
        "about.cta.feature2": "Personalized treatment plan",
        "about.cta.feature3": "Detailed budget and payment options",
        "about.cta.btn.consultation": "Schedule Consultation",
        "about.cta.btn.whatsapp": "WhatsApp",
        
        // Services Page
        "services.page.title": "Our Services",
        "services.page.subtitle": "Specialized treatments with cutting-edge technology to transform your smile",
        "services.orthodontics.subtitle": "Main services",
        "services.orthodontics.title": "Orthodontic Treatments",
        "services.orthodontics.description": "Specialization in different types of orthodontics for all ages and needs",
        
        // Traditional Orthodontics
        "services.traditional.category": "Orthodontics",
        "services.traditional.title": "Traditional Brackets",
        "services.traditional.description": "Metal brackets are the most effective and economical option to correct dental alignment problems. We use self-ligating systems that reduce treatment time and increase comfort.",
        "services.traditional.includes": "Includes:",
        "services.traditional.feature1": "Self-ligating brackets",
        "services.traditional.feature2": "Monthly adjustment appointments",
        "services.traditional.feature3": "Follow-up X-rays",
        "services.traditional.feature4": "Specialized hygiene kit",
        "services.traditional.feature5": "Post-treatment retainers",
        "services.traditional.duration": "Duration: 18-30 months",
        "services.traditional.appointments": "Appointments: Every 4-6 weeks",
        "services.traditional.age": "Age: 12+ years",
        "services.traditional.consultation": "Free Consultation",
        "services.traditional.info": "More Information",
        "services.traditional.badge": "Most Popular",
        
        // Aesthetic Orthodontics
        "services.aesthetic.category": "Aesthetic Orthodontics",
        "services.aesthetic.title": "Clear Brackets",
        "services.aesthetic.description": "Ceramic or sapphire brackets practically invisible that adapt to the color of your teeth. Perfect for professionals seeking discretion without compromising treatment effectiveness.",
        "services.aesthetic.feature1": "Ceramic/sapphire brackets",
        "services.aesthetic.feature2": "White aesthetic wires",
        "services.aesthetic.feature3": "Specialized consultations",
        "services.aesthetic.feature4": "Photographic follow-up",
        "services.aesthetic.feature5": "Clear retainers",
        "services.aesthetic.duration": "Duration: 18-30 months",
        "services.aesthetic.appointments": "Appointments: Every 4-6 weeks",
        "services.aesthetic.invisibility": "Discreet: 95% invisible",
        "services.aesthetic.badge": "Premium",
        
        // Invisalign
        "services.invisalign.category": "Invisible Orthodontics",
        "services.invisalign.title": "Invisalign",
        "services.invisalign.description": "Custom-made removable clear aligner system. The most advanced technology in orthodontics that allows you to eat everything and maintain perfect oral hygiene during treatment.",
        "services.invisalign.feature1": "Digital 3D scanning",
        "services.invisalign.feature2": "Result simulation",
        "services.invisalign.feature3": "Personalized aligners",
        "services.invisalign.feature4": "Tracking app",
        "services.invisalign.feature5": "Refinements included",
        "services.invisalign.duration": "Duration: 12-18 months",
        "services.invisalign.appointments": "Appointments: Every 6-8 weeks",
        "services.invisalign.eating": "Eat everything: No restrictions",
        "services.invisalign.badge": "Innovative",
        
        // Additional Services
        "services.additional.subtitle": "Complementary services",
        "services.additional.title": "Aesthetics and Additional Treatments",
        "services.additional.description": "Complementary services to complete your dental transformation",
        
        // Whitening
        "services.whitening.title": "Professional Whitening",
        "services.whitening.description": "Laser treatment that lightens up to 8 shades in a single session. Immediate and lasting results.",
        "services.whitening.price": "From $3,500",
        "services.whitening.feature1": "Complete dental evaluation",
        "services.whitening.feature2": "Professional laser treatment",
        "services.whitening.feature3": "Home kit included",
        "services.whitening.feature4": "6-month follow-up",
        "services.whitening.duration": "90 minutes",
        "services.whitening.book": "Book",
        
        // Veneers
        "services.veneers.title": "Porcelain Veneers",
        "services.veneers.description": "Ultra-thin sheets that completely transform your smile. Natural and permanent results.",
        "services.veneers.price": "From $8,500",
        "services.veneers.feature1": "Digital smile design",
        "services.veneers.feature2": "Premium porcelain veneers",
        "services.veneers.feature3": "Placement in 2-3 sessions",
        "services.veneers.feature4": "10-year warranty",
        "services.veneers.duration": "2-3 appointments",
        
        // Implants
        "services.implants.title": "Dental Implants",
        "services.implants.description": "Permanent replacement of missing teeth with titanium implants and porcelain crowns.",
        "services.implants.price": "From $25,000",
        "services.implants.feature1": "Premium titanium implant",
        "services.implants.feature2": "Porcelain crown",
        "services.implants.feature3": "Computer-guided surgery",
        "services.implants.feature4": "Lifetime warranty",
        "services.implants.duration": "3-6 months",
        
        // Pediatric
        "services.pediatric.title": "Pediatric Dentistry",
        "services.pediatric.description": "Specialized care for children with techniques adapted to create a positive experience.",
        "services.pediatric.price": "From $800",
        "services.pediatric.feature1": "Child-adapted consultation",
        "services.pediatric.feature2": "Relaxation techniques",
        "services.pediatric.feature3": "Early prevention",
        "services.pediatric.feature4": "Fun dental education",
        "services.pediatric.duration": "45 minutes",
        
        // Cleaning
        "services.cleaning.title": "Deep Cleaning",
        "services.cleaning.description": "Professional prophylaxis with ultrasound and advanced techniques to maintain your oral health.",
        "services.cleaning.price": "From $1,500",
        "services.cleaning.feature1": "Ultrasonic cleaning",
        "services.cleaning.feature2": "Polishing and fluoridation",
        "services.cleaning.feature3": "Periodontal evaluation",
        "services.cleaning.feature4": "Maintenance plan",
        "services.cleaning.duration": "60 minutes",
        
        // Bichectomy
        "services.bichectomy.title": "Bichectomy",
        "services.bichectomy.description": "Minimally invasive procedure to reduce cheek volume and improve facial contour.",
        "services.bichectomy.price": "From $15,000",
        "services.bichectomy.feature1": "Complete facial evaluation",
        "services.bichectomy.feature2": "Outpatient procedure",
        "services.bichectomy.feature3": "Quick recovery",
        "services.bichectomy.feature4": "Post-operative follow-up",
        "services.bichectomy.duration": "45 minutes",
        
        // Process Section
        "services.process.subtitle": "Our process",
        "services.process.title": "How We Work?",
        "services.process.description": "A structured process to guarantee the best results in your treatment",
        "services.process.step1.title": "Initial Consultation",
        "services.process.step1.description": "Complete evaluation, digital X-rays and analysis of your specific case. We discuss your goals and expectations.",
        "services.process.step2.title": "Treatment Plan",
        "services.process.step2.description": "We design a personalized plan with treatment options, detailed schedule and transparent budget.",
        "services.process.step3.title": "Treatment Start",
        "services.process.step3.description": "We begin treatment with the most advanced techniques and digital technology for your comfort.",
        "services.process.step4.title": "Follow-up",
        "services.process.step4.description": "Continuous progress monitoring with regular appointments and necessary adjustments to optimize results.",
        "services.process.step5.title": "Completion and Retention",
        "services.process.step5.description": "We complete treatment with personalized retainers and long-term maintenance plan.",
        
        // FAQ Section
        "services.faq.subtitle": "Frequently asked questions",
        "services.faq.title": "Have Questions?",
        "services.faq.description": "Answers to the most common questions about our treatments",
        "services.faq.q1": "How long does an orthodontic treatment last?",
        "services.faq.a1": "Duration varies by case, but generally ranges from 18-30 months for traditional brackets, 12-18 months for Invisalign. During the initial consultation we evaluate your specific case and give you a more precise estimated time.",
        "services.faq.q2": "Are treatments painful?",
        "services.faq.a2": "Modern treatments are much more comfortable than before. You may experience mild discomfort the first few days after each adjustment, but we use techniques and technologies that significantly minimize discomfort.",
        "services.faq.q3": "Do you offer payment plans?",
        "services.faq.a3": "Yes, we offer multiple interest-free financing options and flexible payment plans. We also accept dental insurance and can help you maximize your benefits.",
        "services.faq.q4": "What age is appropriate for orthodontics?",
        "services.faq.a4": "Orthodontics can be performed at any age. For children, we recommend the first evaluation at age 7. Adults can also greatly benefit from modern orthodontic treatments.",
        "services.faq.q5": "What does the initial consultation include?",
        "services.faq.a5": "The initial consultation includes complete clinical examination, digital X-rays, photographs, case analysis, explanation of treatment options and detailed budget. All this at no additional cost.",
        
        // CTA Section
        "services.cta.title": "Ready to Start Your Transformation?",
        "services.cta.description": "Schedule your free consultation and discover how we can transform your smile with the most advanced and personalized treatments.",
        "services.cta.feature1": "Initial consultation at no cost",
        "services.cta.feature2": "Personalized treatment plan",
        "services.cta.feature3": "Flexible financing options",
        "services.cta.btn.consultation": "Schedule Free Consultation",
        "services.cta.btn.whatsapp": "WhatsApp",
        
        // Testimonials Page
        "testimonials.page.title": "Real Experiences",
        "testimonials.page.subtitle": "Learn about our patients' transformation stories and their experience with us",
        "testimonials.featured.subtitle": "Success stories",
        "testimonials.featured.title": "Featured Testimonials",
        "testimonials.featured.description": "Learn about the most inspiring experiences of our patients",
        
        // Featured Testimonials
        "testimonials.patient1.name": "Mairin Claudio",
        "testimonials.patient1.treatment": "Traditional Orthodontics",
        "testimonials.patient1.testimonial": "Dr. Daniela is very professional and kind. My orthodontic treatment was a complete success and now I smile with confidence. The office is always impeccable and the care is first class. Thank you for transforming my smile!",
        "testimonials.patient1.treatment.type": "Traditional Brackets",
        "testimonials.patient1.duration": "18 months",
        
        "testimonials.patient2.name": "Roberto M.",
        "testimonials.patient2.treatment": "Invisalign",
        "testimonials.patient2.testimonial": "The Invisalign treatment changed my life. Being able to eat everything and maintain my dental hygiene was incredible. Dr. Verdín was always available to answer my questions and the follow-up was exceptional.",
        "testimonials.patient2.treatment.type": "Invisalign",
        "testimonials.patient2.duration": "14 months",
        
        "testimonials.patient3.name": "Ana Sofía R.",
        "testimonials.patient3.treatment": "Dental Veneers",
        "testimonials.patient3.testimonial": "After years of not smiling due to embarrassment, I finally found the perfect solution. The dental veneers turned out perfect, very natural. My self-esteem changed completely.",
        "testimonials.patient3.treatment.type": "Porcelain Veneers",
        "testimonials.patient3.duration": "3 sessions",
        
        // Google Reviews Section
        "testimonials.google.subtitle": "Verified reviews",
        "testimonials.google.title": "What They Say on Google",
        "testimonials.google.description": "Authentic testimonials from verified patients on Google My Business",
        "testimonials.google.viewall": "View all reviews on Google",
        
        // Video Testimonials Section
        "testimonials.video.subtitle": "Video testimonials",
        "testimonials.video.title": "Hear Directly from Our Patients",
        "testimonials.video.description": "Real stories told by those who lived the experience",
        "testimonials.video1.title": "Transformation Story",
        "testimonials.video1.treatment": "Invisalign Orthodontics - 15 months",
        "testimonials.video1.duration": "2:30 min",
        "testimonials.video2.title": "Family Experience",
        "testimonials.video2.treatment": "Children's Treatment",
        "testimonials.video2.duration": "1:45 min",
        "testimonials.video3.title": "Perfect Smile",
        "testimonials.video3.treatment": "Aesthetic Brackets",
        "testimonials.video3.duration": "3:15 min",
        
        // Treatment Categories
        "testimonials.bytreatment.subtitle": "By treatment type",
        "testimonials.bytreatment.title": "Success Stories by Specialty",
        "testimonials.bytreatment.description": "Learn about specific results for each type of treatment",
        "testimonials.categories.orthodontics": "Orthodontics",
        "testimonials.categories.aesthetics": "Aesthetics",
        "testimonials.categories.implants": "Implants",
        "testimonials.categories.pediatric": "Pediatric",
        
        // Orthodontics Testimonials
        "testimonials.orthodontics.patient1.quote": "The aesthetic brackets were perfect for my work. Practically invisible and very comfortable. The process was faster than I expected.",
        "testimonials.orthodontics.patient1.name": "María Carmen G.",
        "testimonials.orthodontics.patient1.treatment": "Aesthetic Brackets - 20 months",
        "testimonials.orthodontics.stat1.number": "20",
        "testimonials.orthodontics.stat1.label": "months",
        "testimonials.orthodontics.stat2.number": "95%",
        "testimonials.orthodontics.stat2.label": "invisible",
        
        // Aesthetics Testimonials
        "testimonials.aesthetics.patient1.quote": "My smile design was incredible, it completely exceeded my expectations. The 3D technology allowed me to see the result before treatment.",
        "testimonials.aesthetics.patient1.name": "Jane M.",
        "testimonials.aesthetics.patient1.treatment": "Porcelain Veneers",
        "testimonials.aesthetics.stat1.number": "3",
        "testimonials.aesthetics.stat1.label": "sessions",
        "testimonials.aesthetics.stat2.number": "10",
        "testimonials.aesthetics.stat2.label": "years warranty",
        
        // Implants Testimonials
        "testimonials.implants.patient1.quote": "The implants changed my life. Now I can eat everything without worries. They feel like natural teeth.",
        "testimonials.implants.patient1.name": "Luis H.",
        "testimonials.implants.patient1.treatment": "Dental Implants",
        "testimonials.implants.stat1.number": "4",
        "testimonials.implants.stat1.label": "months",
        "testimonials.implants.stat2.number": "100%",
        "testimonials.implants.stat2.label": "functional",
        
        // Pediatric Testimonials
        "testimonials.pediatric.patient1.quote": "My son completely lost his fear of the dentist. Dr. Daniela is very patient with children and has a special gift for making them feel safe.",
        "testimonials.pediatric.patient1.name": "Madhu (Arjun's mom)",
        "testimonials.pediatric.patient1.treatment": "Preventive Pediatric Treatment",
        "testimonials.pediatric.stat1.number": "0",
        "testimonials.pediatric.stat1.label": "fear",
        "testimonials.pediatric.stat2.number": "100%",
        "testimonials.pediatric.stat2.label": "smiles",
        
        // Testimonials CTA
        "testimonials.cta.title": "Want to Be the Next Success Story?",
        "testimonials.cta.description": "Join the more than 1000 people who have already transformed their smile with us. Your success story could be the next one to appear here.",
        "testimonials.cta.feature1": "Free initial consultation",
        "testimonials.cta.feature2": "Personalized treatment plan",
        "testimonials.cta.feature3": "Follow-up throughout the entire process",
        "testimonials.cta.btn.start": "Start My Transformation",
        "testimonials.cta.btn.whatsapp": "WhatsApp",
        
        // Before After Page
        "cases.page.title": "Real Transformations",
        "cases.page.subtitle": "Discover the extraordinary results we have achieved with our patients. Each smile tells a unique success story.",
        "cases.breadcrumb.current": "Before and After Cases",
        
        // Gallery Section
        "cases.gallery.subtitle": "Real Results",
        "cases.gallery.title": "Transformation Gallery",
        "cases.gallery.description": "Each smile we transform is unique and special. Here you can see some of the extraordinary results we have achieved with our patients, using different techniques and personalized treatments for each specific case.",
        
        // Before/After Images
        "cases.before": "Before and After",
        "cases.after": "Before and After",
        "cases.case1.before": "Severe crowding",
        "cases.case1.after": "Perfect alignment - 18 months",
        "cases.case2.before": "Tooth discoloration",
        "cases.case2.after": "Whitening + veneers - 6 weeks",
        "cases.case3.before": "Tooth separation",
        "cases.case3.after": "Invisalign - 14 months",
        "cases.case4.before": "Fractured teeth",
        "cases.case4.after": "Porcelain veneers - 3 weeks",
        "cases.case5.before": "Dental malposition - 14 years old",
        "cases.case5.after": "Aesthetic brackets - 24 months",
        "cases.case6.before": "Gummy smile",
        
        // Treatment Types Section
        "cases.treatments.title": "Types of Treatments",
        "cases.treatments.description": "Learn about the different specialties we offer and the average time for each treatment.",
        "cases.treatment1.title": "Traditional Orthodontics",
        "cases.treatment1.description": "Metal or aesthetic brackets for cases of crowding, separation or dental malposition.",
        "cases.treatment1.duration": "Average time:",
        "cases.treatment1.time": "18-30 months",
        "cases.treatment2.title": "Invisalign",
        "cases.treatment2.description": "Removable clear aligners, ideal for professionals and adults.",
        "cases.treatment2.duration": "Average time:",
        "cases.treatment2.time": "12-18 months",
        "cases.treatment3.title": "Dental Aesthetics",
        "cases.treatment3.description": "Whitening, veneers and smile design for immediate results.",
        "cases.treatment3.duration": "Average time:",
        "cases.treatment3.time": "2-6 weeks",
        
        // Features Highlight Section
        "cases.features.title": "What makes our results unique?",
        "cases.feature1.title": "3D Technology",
        "cases.feature1.description": "We use intraoral scanners and digital planning for precise and predictable results.",
        "cases.feature2.title": "Experience",
        "cases.feature2.description": "Over 10 years specializing exclusively in orthodontics and dental aesthetics.",
        "cases.feature3.title": "Personalized Care",
        "cases.feature3.description": "Each case is unique. We develop a specific treatment plan for each patient.",
        
        // Process Steps Section
        "cases.process.title": "Treatment Process",
        "cases.process.description": "We accompany you in every step of your transformation with a structured and personalized process.",
        "cases.step1.title": "Initial Consultation",
        "cases.step1.description": "Complete evaluation, diagnosis and personalized treatment plan.",
        "cases.step2.title": "Treatment Start",
        "cases.step2.description": "Bracket placement or aligner delivery with detailed instructions.",
        "cases.step3.title": "Follow-up",
        "cases.step3.description": "Regular appointments to monitor progress and make necessary adjustments.",
        "cases.step4.title": "Retention",
        "cases.step4.description": "Personalized retainers to maintain the results obtained.",
        
        // Final CTA Section
        "cases.cta.title": "Ready for your transformation?",
        "cases.cta.description": "Every smile is a success story. Schedule your consultation and discover how we can create the perfect transformation for you. Your before and after could be the next to inspire others.",
        "cases.cta.button": "Start your transformation",
        
        // Contact Page
        "contact.title": "Contact Us",
        "contact.subtitle": "We're here to help you achieve the smile of your dreams. Schedule your consultation today!",
        "contact.breadcrumb.current": "Contact",
        
        // Contact Information Section
        "contact.info.subtitle": "Contact information",
        "contact.info.title": "We're here for you!",
        "contact.info.description": "Contact us through any of these means and schedule your consultation today",
        "contact.location.title": "Our Location",
        "contact.location.address": "C. Miramar 859, Centro<br>48300 Puerto Vallarta, Jalisco<br><small>Easy access and parking available</small>",
        "contact.phone.title": "Call Us Now",
        "contact.phone.description": "Immediate attention Monday to Saturday",
        "contact.email.title": "Send Us an Email",
        "contact.email.description": "Response within 24 hours",
        "contact.hours.title": "Office Hours",
        "contact.hours.schedule": "<strong>Monday - Friday:</strong> 9:00 - 20:00<br><strong>Saturdays:</strong> 9:00 - 14:00<br><small>Emergency appointments available</small>",
        
        // Contact Form Section
        "contact.form.subtitle": "Schedule your appointment",
        "contact.form.title": "Request Your Consultation",
        "contact.form.description": "Fill out the form and we'll contact you within 24 hours",
        "contact.form.name.label": "Full name *",
        "contact.form.name.placeholder": "Enter your full name",
        "contact.form.phone.label": "Phone *",
        "contact.form.phone.placeholder": "322 123 4567",
        "contact.form.email.label": "Email *",
        "contact.form.email.placeholder": "your@email.com",
        "contact.form.age.label": "Age",
        "contact.form.age.placeholder": "Optional",
        "contact.form.service.label": "Service of interest",
        "contact.form.service.placeholder": "Select a service",
        "contact.form.service.general": "General Consultation",
        "contact.form.service.traditional": "Traditional Orthodontics",
        "contact.form.service.aesthetic": "Aesthetic Orthodontics",
        "contact.form.service.invisalign": "Invisalign",
        "contact.form.service.smile": "Smile Design",
        "contact.form.service.whitening": "Dental Whitening",
        "contact.form.service.veneers": "Dental Veneers",
        "contact.form.service.pediatric": "Pediatric Dentistry",
        "contact.form.service.cleaning": "Cleaning and Prevention",
        "contact.form.service.implants": "Implants and Crowns",
        "contact.form.service.bichectomy": "Bichectomy",
        "contact.form.schedule.label": "Preferred schedule",
        "contact.form.schedule.placeholder": "Select a schedule",
        "contact.form.schedule.morning": "Morning (9:00 - 12:00)",
        "contact.form.schedule.afternoon": "Afternoon (14:00 - 17:00)",
        "contact.form.schedule.evening": "Evening (17:00 - 20:00)",
        "contact.form.schedule.saturday": "Saturday",
        "contact.form.message.label": "Message *",
        "contact.form.message.placeholder": "Tell us about your case or any questions you have...",
        "contact.form.privacy": "I accept the handling of my personal data according to the privacy policy",
        "contact.form.submit": "Send Request",
        
        // Contact Sidebar
        "contact.sidebar.details.title": "Detailed Information",
        "contact.sidebar.address.title": "Address",
        "contact.sidebar.address.content": "C. Miramar 859, Centro<br>48300 Puerto Vallarta, Jalisco<br>Mexico",
        "contact.sidebar.phone.title": "Phone",
        "contact.sidebar.email.title": "Email",
        "contact.sidebar.whatsapp.title": "WhatsApp",
        "contact.sidebar.schedule.title": "Office Hours",
        "contact.sidebar.schedule.weekdays": "Monday - Friday",
        "contact.sidebar.schedule.weekdays.time": "9:00 - 20:00",
        "contact.sidebar.schedule.saturday": "Saturdays",
        "contact.sidebar.schedule.saturday.time": "9:00 - 14:00",
        "contact.sidebar.schedule.sunday": "Sundays",
        "contact.sidebar.schedule.sunday.time": "Closed",
        "contact.sidebar.schedule.note": "Special hours available for emergency cases",
        "contact.sidebar.emergency.title": "Emergencies",
        "contact.sidebar.emergency.description": "Do you have pain or an urgent situation?",
        "contact.sidebar.emergency.button": "Contact Now",
        
        // Location Section
        "contact.location.subtitle": "Our location",
        "contact.location.section.title": "Easy Access in Puerto Vallarta Downtown",
        "contact.location.section.description": "Strategically located in the city center with easy access and parking",
        "contact.location.parking.title": "Parking",
        "contact.location.parking.description": "Free parking for patients",
        "contact.location.transport.title": "Public Transport",
        "contact.location.transport.description": "Easy bus and transit access",
        "contact.location.accessibility.title": "Accessibility",
        "contact.location.accessibility.description": "Fully accessible facilities",
        "contact.location.wifi.title": "Free WiFi",
        "contact.location.wifi.description": "Free internet for patients",
        
        // Contact FAQ Section
        "contact.faq.subtitle": "Frequently asked questions",
        "contact.faq.title": "Have Questions About the Process?",
        "contact.faq.description": "Answers to the most common questions about how to schedule and what to expect on your first visit",
        "contact.faq.appointment.title": "How to schedule an appointment?",
        "contact.faq.appointment.answer": "You can fill out the contact form, call us at 322 116 7592 or write to us on WhatsApp. We will respond within 24 hours to confirm your appointment.",
        "contact.faq.consultation.title": "What does the first consultation include?",
        "contact.faq.consultation.answer": "Complete evaluation, diagnosis with digital X-rays if necessary, personalized treatment plan and detailed budget at no additional cost.",
        "contact.faq.payment.title": "Do you offer payment plans?",
        "contact.faq.payment.answer": "Yes, we offer different flexible financing options so you can access the treatment you need without compromising your budget.",
        "contact.faq.emergency.title": "Do you handle emergencies?",
        "contact.faq.emergency.answer": "Yes, we have special hours for dental emergencies. Contact by WhatsApp or phone for urgent cases outside normal hours.",
        "contact.faq.safety.title": "What safety protocols do you follow?",
        "contact.faq.safety.answer": "We comply with all established biosafety protocols, including complete sterilization, disposable equipment and preventive measures.",
        "contact.faq.children.title": "Do you treat children?",
        "contact.faq.children.answer": "Yes, we offer specialized pediatric dentistry services with techniques adapted to create a positive experience for the little ones.",
        
        // Contact Methods Section
        "contact.methods.subtitle": "Multiple contact options",
        "contact.methods.title": "Choose Your Preferred Way",
        "contact.methods.description": "We are available through different channels for your convenience",
        "contact.methods.phone.title": "Phone Call",
        "contact.methods.phone.description": "Speak directly with us",
        "contact.methods.phone.button": "322 116 7592",
        "contact.methods.whatsapp.title": "WhatsApp",
        "contact.methods.whatsapp.description": "Quick and convenient response",
        "contact.methods.whatsapp.button": "Send Message",
        "contact.methods.email.title": "Email",
        "contact.methods.email.description": "For detailed inquiries",
        "contact.methods.email.button": "Send Email"
    }
};

// Language management
class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('selectedLanguage') || 'es';
        this.init();
    }
    
    init() {
        this.updateLanguage(this.currentLanguage);
        this.setupLanguageToggle();
    }
    
    setupLanguageToggle() {
        const langToggle = document.getElementById('languageToggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => {
                this.toggleLanguage();
            });
        }
    }
    
    toggleLanguage() {
        this.currentLanguage = this.currentLanguage === 'es' ? 'en' : 'es';
        this.updateLanguage(this.currentLanguage);
        localStorage.setItem('selectedLanguage', this.currentLanguage);
    }
    
    updateLanguage(lang) {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });
        
        // Update language button
        const langBtn = document.getElementById('languageToggle');
        if (langBtn) {
            const langText = langBtn.querySelector('.lang-text');
            
            if (lang === 'es') {
                langText.textContent = 'ES';
            } else {
                langText.textContent = 'EN';
            }
        }
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
    }
    
    getCurrentLanguage() {
        return this.currentLanguage;
    }
}

// Initialize language manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.languageManager = new LanguageManager();
});