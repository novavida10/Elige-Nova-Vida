// Enviar formulario a WhatsApp
document.addEventListener("DOMContentLoaded", function () {
  const submitBtn = document.querySelector(".btn-submit");
  if (submitBtn) {
    submitBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const nombre = document.querySelector('input[type="text"]').value;
      const email = document.querySelector('input[type="email"]').value;
      const mensaje = document.querySelector("textarea").value;
      const select = document.querySelector(".program-select");
      let programa = "";
      if (select) {
        programa = select.value;
      }
      if (nombre && mensaje) {
        const textoFinal = `Hola, mi nombre es ${nombre} \nMi correo es: ${email} \nPrograma de interés: ${programa && programa !== "" ? programa : "No seleccionado"}\nConsulta: ${mensaje}`;
        window.open(wa(textoFinal), "_blank");
        this.textContent = "✓ Abriendo WhatsApp...";
        this.style.background = "#25D366";
      } else {
        alert("Por favor, completa nombre y mensaje.");
      }
    });
  }
});

const WHATSAPP_NUMBER = "573018231808";
const WHATSAPP_MSG = "Hola, vengo de ELIGE NOVA VIDA.";

function wa(msg) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

document.addEventListener("DOMContentLoaded", function () {
  // WhatsApp floating button
  const waFloat = document.getElementById("waFloat");
  if (waFloat) {
    waFloat.addEventListener("click", function (e) {
      e.preventDefault();
      window.open(wa(WHATSAPP_MSG), "_blank");
    });
    waFloat.setAttribute("href", wa(WHATSAPP_MSG));
  }

  // Blog section click redirection
  const blogSection = document.querySelector("section.blog");
  if (blogSection) {
    blogSection.style.cursor = "pointer";
    blogSection.addEventListener("click", function (e) {
      // Evita conflicto si se hace clic en un enlace dentro del blog
      if (e.target.tagName.toLowerCase() !== "a") {
        window.location.href = "articulos.html";
      }
    });
  }

  // Tab buttons (si existen en la página)
  document.querySelectorAll(".tabbtn").forEach((btn) => {
    btn.onclick = () => {
      document
        .querySelectorAll(".tabbtn")
        .forEach((b) => b.setAttribute("aria-selected", "false"));
      document
        .querySelectorAll(".tabpanel")
        .forEach((p) => p.classList.remove("active"));
      btn.setAttribute("aria-selected", "true");
      document
        .getElementById(btn.getAttribute("aria-controls"))
        .classList.add("active");
    };
  });
});

// ── DATA ARTÍCULOS ──────────────────────────────────────
const articulos = [
  {
    num: "01",
    cat: "Psicoterapia · Sentido de Vida",
    titulo: "La Logoterapia",
    sub: "Sentido, libertad y responsabilidad en la experiencia humana",
    resumen:
      "Desarrollada por Viktor Frankl —sobreviviente del Holocausto— la logoterapia sostiene que la motivación primaria del ser humano no es el placer ni el poder, sino la búsqueda de sentido. Cuando ese sentido se frustra, emerge el «vacío existencial»: apatía, desesperanza o conductas compulsivas que encubren una crisis de significado.",
    resumen2:
      "Sus técnicas principales incluyen la intención paradójica (enfrentar el miedo con humor para romper la ansiedad anticipatoria), la derreflexión (desplazar la atención hacia el mundo exterior) y el diálogo socrático (preguntas que ayudan al paciente a descubrir su propio significado). Estas herramientas no imponen un sentido prefabricado, sino que facilitan que cada persona lo descubra por sí misma.",
    claveTitulo: "Concepto central: voluntad de sentido",
    claveTexto:
      "Frankl identificó tres vías para encontrar sentido: valores de creación (lo que aportamos), valores de experiencia (lo que recibimos, como el amor o la belleza) y valores de actitud (la manera en que enfrentamos el sufrimiento inevitable). Este tercer camino es el más revolucionario: incluso en el dolor, el ser humano puede elegir su respuesta.",
    flechaLabel: "Aplicación práctica",
    flechaTexto:
      "La logoterapia es hoy referencia en acompañamiento de enfermedades crónicas, duelo, crisis vocacionales y rehabilitación de adicciones. Más que eliminar síntomas, busca que la persona encuentre un «para qué» que sostenga su vida.",
  },
  {
    num: "02",
    cat: "Psicología · Desarrollo Personal",
    titulo: "Inteligencia Emocional",
    sub: "Un camino hacia la madurez personal y relacional",
    resumen:
      "Las emociones no son obstáculos para la razón; son señales que contienen información valiosa sobre necesidades, valores y límites. Desarrollar inteligencia emocional comienza por cambiar nuestra actitud: en lugar de juzgar las emociones como buenas o malas, aprendemos a leerlas como datos internos que requieren interpretación.",
    resumen2:
      "La inteligencia emocional no es un rasgo fijo; es una competencia que se desarrolla durante toda la vida. Desde la infancia, padres y educadores pueden modelar conductas emocionales saludables. En adultos, la práctica de atención plena y la escritura reflexiva ayudan a detectar patrones emocionales recurrentes.",
    claveTitulo: "Las cinco dimensiones clave",
    claveTexto:
      "Autoconciencia: reconocer las propias emociones en el momento en que ocurren. Autorregulación: canalizar emociones adecuadamente sin reprimirlas. Motivación interna: orientar las emociones hacia metas significativas. Empatía: captar la perspectiva emocional del otro. Habilidades sociales: comunicarse con claridad y resolver conflictos de forma constructiva.",
    flechaLabel: "Impacto comprobado",
    flechaTexto:
      "Personas con mayor inteligencia emocional presentan mejor salud mental, relaciones más satisfactorias y mayor rendimiento profesional. No elimina los problemas, pero proporciona herramientas para afrontarlos con equilibrio.",
  },
  {
    num: "03",
    cat: "Salud Mental · Comprensión Clínica",
    titulo: "Trastorno Límite de la Personalidad",
    sub: "Comprensión clínica, causas y caminos de recuperación",
    resumen:
      "El TLP se caracteriza por inestabilidad emocional intensa, impulsividad, identidad difusa y relaciones interpersonales polarizadas. Las personas que lo padecen experimentan emociones de forma más rápida, más intensa y durante más tiempo que la mayoría. Esta hipersensibilidad no es manipulación, sino una experiencia real que desborda los mecanismos internos de regulación.",
    resumen2:
      "El tratamiento más reconocido es la Terapia Dialéctico-Conductual (DBT) de Marsha Linehan, que combina aceptación y cambio, enseñando habilidades concretas de regulación emocional, tolerancia al malestar y efectividad interpersonal. Con acompañamiento sostenido, muchas personas experimentan una disminución significativa de síntomas.",
    claveTitulo: "Lo que está detrás de los síntomas",
    claveTexto:
      "El TLP suele originarse en entornos invalidantes: contextos donde las emociones del niño fueron minimizadas, ridiculizadas o castigadas. Esto impide el aprendizaje de estrategias efectivas de regulación emocional. No existe una única causa; interactúan factores genéticos, neurobiológicos y experiencias tempranas adversas.",
    flechaLabel: "Mensaje clave",
    flechaTexto:
      "El TLP no es una sentencia. Detrás de la impulsividad hay, frecuentemente, una historia de sufrimiento no resuelto. Una mirada compasiva, libre de estigmas, es el primer paso hacia la recuperación.",
  },
  {
    num: "04",
    cat: "Salud Mental · Psiquiatría",
    titulo: "Trastorno Bipolar",
    sub: "Comprensión clínica, tipos y abordaje integral",
    resumen:
      "El trastorno bipolar implica oscilaciones significativas entre episodios de exaltación (manía o hipomanía) y episodios de depresión profunda. No son simples cambios de humor, sino alteraciones profundas que afectan el pensamiento, la energía, la conducta y la funcionalidad. Muchas personas buscan ayuda solo durante la fase depresiva, sin haber identificado antes los episodios de elevación.",
    resumen2:
      "El tratamiento combina estabilizadores del ánimo (litio, anticonvulsivantes, antipsicóticos atípicos) con psicoterapia enfocada en psicoeducación, reconocimiento temprano de síntomas y hábitos estables como regularidad del sueño y abstinencia de sustancias. El diagnóstico temprano mejora significativamente el pronóstico.",
    claveTitulo: "Los cuatro tipos principales",
    claveTexto:
      "Tipo I: al menos un episodio maníaco completo, con mayor disrupción funcional. Tipo II: episodios hipomaníacos y depresivos, sin manía plena; frecuentemente subdiagnosticado. Ciclotimia: cambios crónicos de menor intensidad que persisten por al menos dos años. Formas no especificadas: presentaciones que requieren evaluación detallada.",
    flechaLabel: "Romper el mito",
    flechaTexto:
      "La bipolaridad no equivale a inestabilidad peligrosa. Con tratamiento adecuado, muchas personas llevan vidas productivas y satisfactorias. La creatividad, la sensibilidad y el liderazgo son cualidades frecuentes en personas con este diagnóstico bien gestionado.",
  },
  {
    num: "05",
    cat: "Vínculos · Autonomía Afectiva",
    titulo: "Dependencia Emocional",
    sub: "Comprender el apego patológico y recuperar la autonomía afectiva",
    resumen:
      "La dependencia emocional es un patrón persistente de necesidades afectivas insatisfechas que se intentan cubrir de manera desproporcionada a través de otra persona. Se caracteriza por miedo intenso al abandono, idealización de la pareja, necesidad constante de aprobación y tolerancia a situaciones desequilibradas o incluso abusivas por temor a la ruptura.",
    resumen2:
      "Sus raíces suelen encontrarse en estilos de apego ansioso desarrollados en la infancia, experiencias de abandono o entornos afectivos inconsistentes. La psicoterapia es la herramienta central: permite identificar creencias irracionales, reconstruir la autoestima y aprender a sostener la soledad sin vivirla como abandono.",
    claveTitulo: "Diferencia entre amor y dependencia",
    claveTexto:
      "El amor sano implica deseo de compartir, cuidado recíproco y respeto a la individualidad de cada uno. La dependencia, en cambio, convierte la relación en el centro exclusivo de la vida, desplazando amistades, proyectos e identidad propia. El amor auténtico permite que el otro sea libre; la dependencia busca retenerlo a cualquier costo.",
    flechaLabel: "El camino de recuperación",
    flechaTexto:
      "Superar la dependencia emocional no significa volverse frío o distante, sino aprender a elegir vínculos desde la libertad y no desde la carencia. Retomar intereses propios, establecer límites claros y practicar el autocuidado son pasos concretos hacia la autonomía afectiva.",
  },
  {
    num: "06",
    cat: "Salud Mental · Psiquiatría",
    titulo: "Esquizofrenia",
    sub: "Evolución del concepto y comprensión clínica actual",
    resumen:
      "La esquizofrenia es un trastorno mental grave que afecta la percepción, el pensamiento, el lenguaje y la afectividad. Históricamente se describieron cinco subtipos —paranoide, desorganizada, catatónica, indiferenciada y residual—, pero la psiquiatría actual adopta un enfoque dimensional más flexible que reconoce la variabilidad de síntomas en cada persona.",
    resumen2:
      "El tratamiento incluye antipsicóticos para los síntomas positivos e intervención psicosocial: terapia cognitivo-conductual para psicosis, rehabilitación cognitiva, entrenamiento en habilidades sociales y apoyo familiar. La detección temprana tras el primer episodio psicótico mejora significativamente las probabilidades de recuperación funcional.",
    claveTitulo: "Tres dimensiones sintomáticas clave",
    claveTexto:
      "Síntomas positivos: delirios, alucinaciones y pensamiento desorganizado. Síntomas negativos: pérdida de motivación, reducción del habla, anhedonia y aplanamiento afectivo. Síntomas cognitivos: alteraciones de memoria, atención y funciones ejecutivas que pueden persistir aún cuando los síntomas psicóticos están controlados.",
    flechaLabel: "Desmitificar es clave",
    flechaTexto:
      "La esquizofrenia no implica doble personalidad ni predispone a la violencia. El estigma puede ser más incapacitante que los propios síntomas, dificultando la integración social. Con acompañamiento adecuado, es posible mejorar la calidad de vida de forma sostenida.",
  },
  {
    num: "07",
    cat: "Bienestar · Autorregulación",
    titulo: "Técnicas de Relajación",
    sub: "Fundamentos, métodos y beneficios para la salud integral",
    resumen:
      "El estrés crónico activa de forma permanente la respuesta de lucha o huida: ritmo cardíaco acelerado, músculos tensos, liberación de cortisol y adrenalina. Las técnicas de relajación buscan interrumpir ese ciclo enviando al cerebro señales de seguridad y calma, activando el sistema nervioso parasimpático responsable del descanso y la recuperación.",
    resumen2:
      "La práctica constante produce beneficios reales: disminución de la presión arterial, reducción de tensión muscular, mejor sueño, mayor claridad mental y mayor resiliencia emocional. Se utilizan en tratamiento de ansiedad, depresión leve, insomnio, dolor crónico y rehabilitación de adicciones.",
    claveTitulo: "Cinco técnicas principales",
    claveTexto:
      "1. Respiración diafragmática: inhalar lento por la nariz, exhalar pausado. 2. Relajación muscular progresiva (Jacobson): tensar y soltar grupos musculares. 3. Visualización guiada: imaginar escenas tranquilas con detalle sensorial. 4. Meditación y mindfulness: conciencia del momento presente sin juicio. 5. Entrenamiento autógeno: autosugestión con frases enfocadas en sensaciones corporales.",
    flechaLabel: "Recomendación práctica",
    flechaTexto:
      "Empezar con 5-10 minutos diarios de respiración diafragmática es suficiente para notar cambios. La regularidad es más importante que la duración. Es normal que al inicio la mente divague; la clave es retomar la atención con amabilidad, sin exigencia.",
  },
  {
    num: "08",
    cat: "Desarrollo Personal · Propósito",
    titulo: "Cómo Hacer un Proyecto de Vida",
    sub: "Guía integral para construir propósito y dirección",
    resumen:
      "Un proyecto de vida es una planificación consciente de aquello que una persona desea ser, hacer y alcanzar. No es una lista de metas aisladas, sino la integración de valores, talentos, sueños y responsabilidades en una visión coherente del futuro. Sin dirección clara, muchas personas viven reaccionando a circunstancias más que eligiendo caminos.",
    resumen2:
      "El punto de partida es el autoconocimiento: identificar valores, fortalezas, limitaciones e intereses. Las metas deben ser específicas, medibles, alcanzables, realistas y con plazo definido. Dividirlas en corto (1 año), mediano (3-5 años) y largo plazo (10+ años) facilita el seguimiento y los ajustes necesarios.",
    claveTitulo: "Las cinco dimensiones del proyecto integral",
    claveTexto:
      "Personal: salud física, mental y espiritual. Académica/profesional: carrera y formación alineados con talentos. Familiar y social: vínculos afectivos y redes de apoyo. Económica: planificación de ingresos, ahorro e inversión. Ética/espiritual: principios que orientan las decisiones y mantienen coherencia de vida.",
    flechaLabel: "Clave de sostenibilidad",
    flechaTexto:
      "El proyecto de vida no es un documento que se archiva; es un proceso dinámico que evoluciona con la experiencia. Revisarlo anualmente, celebrar los avances y ajustar el rumbo sin perder la esencia es la práctica de quienes viven con propósito real.",
  },
  {
    num: "09",
    cat: "Recuperación · Prevención de Recaídas",
    titulo: "Fases de la Recaída Emocional",
    sub: "Comprender el proceso para prevenir la recaída conductual",
    resumen:
      "La recaída no ocurre de forma repentina. Es un proceso progresivo que comienza mucho antes de que la persona vuelva al consumo. La recaída emocional es la primera y más silenciosa de sus tres fases —emocional, mental y conductual— y paradójicamente ocurre cuando la persona cree que está bien, porque no tiene deseos explícitos de consumo.",
    resumen2:
      "La recaída emocional es peligrosa porque es silenciosa: no genera alarma inmediata. Si no se interviene, desemboca en la recaída mental, donde aparecen pensamientos como «una vez no pasa nada». La prevención consiste en expresar emociones regularmente, mantener rutinas de autocuidado y pedir ayuda antes de sentirse desbordado.",
    claveTitulo: "Las 7 señales progresivas",
    claveTexto:
      "1. Negación emocional. 2. Supresión de emociones: irritabilidad, funcionar en automático. 3. Abandono del autocuidado: sueño, alimentación, terapia. 4. Aislamiento emocional y social. 5. Resentimiento y victimismo. 6. Agotamiento crónico: ansiedad persistente, vacío. 7. Búsqueda inconsciente de alivio: pantallas, comida compulsiva, compras impulsivas.",
    flechaLabel: "Responsabilidad emocional",
    flechaTexto:
      "La recaída emocional no es un fracaso moral. Es una señal de que algo interno necesita atención. La sobriedad duradera no se sostiene solo con fuerza de voluntad, sino con conciencia, honestidad emocional y compromiso cotidiano con el propio bienestar.",
  },
  {
    num: "10",
    cat: "Espiritualidad Terapéutica · Recuperación",
    titulo: "El Poder Superior",
    sub: "Dimensión espiritual y transformación interior en los procesos de recuperación",
    resumen:
      "El concepto de Poder Superior, difundido por el movimiento de Alcohólicos Anónimos desde 1935, no se impone como figura religiosa específica. Se define de forma abierta: puede ser Dios, la fuerza del grupo, el amor, la naturaleza o el propio potencial más elevado. Lo esencial no es su definición teológica, sino la experiencia de confiar en algo mayor que el ego individual.",
    resumen2:
      "Desde una perspectiva psicológica, el Poder Superior reduce la ansiedad existencial, activa la esperanza, favorece la responsabilidad consciente e integra sentido al sufrimiento. No elimina la necesidad de acción; la complementa. La espiritualidad auténtica produce frutos visibles: mayor serenidad, capacidad de perdonar y confianza en procesos a largo plazo.",
    claveTitulo: "¿Por qué el ego solo no es suficiente?",
    claveTexto:
      "Muchas recaídas no ocurren por falta de intención, sino por depender exclusivamente del autocontrol. El Poder Superior introduce una variable diferente: la rendición consciente. No es pasividad, sino apertura a recibir ayuda. Cuando el ego deja de absolutizarse, surge un espacio interior donde el cambio real se vuelve posible.",
    flechaLabel: "Espiritualidad sin dogmas",
    flechaTexto:
      "Una persona puede concebir su Poder Superior desde cualquier tradición —o desde ninguna. Lo relevante no es la doctrina, sino la transformación interior que produce. Allí donde el ser humano deja de luchar solo y se abre a algo más grande, comienza un camino auténtico de renovación interior.",
  },
];

// ── MODAL ───────────────────────────────────────────────
const modalIcons = [
  '<svg viewBox="0 0 100 100" class="modal-icon icon-light"><circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="2"/><path d="M50 20 L50 80 M30 50 L70 50" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="50" cy="50" r="8" fill="currentColor"/></svg>',
  '<svg viewBox="0 0 100 100" class="modal-icon icon-heart"><path d="M50 85 C30 70, 15 55, 15 40 C15 28, 23 20, 32 20 C40 20, 47 28, 50 35 C53 28, 60 20, 68 20 C77 20, 85 28, 85 40 C85 55, 70 70, 50 85 Z" fill="currentColor"/></svg>',
  '<svg viewBox="0 0 100 100" class="modal-icon icon-mind"><path d="M50 15 C40 15, 32 22, 32 32 C32 42, 40 48, 50 50 C60 48, 68 42, 68 32 C68 22, 60 15, 50 15" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="40" cy="32" r="3" fill="currentColor"/><circle cx="60" cy="32" r="3" fill="currentColor"/><path d="M45 70 L45 85 M55 70 L55 85" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="M40 85 L60 85" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>',
  '<svg viewBox="0 0 100 100" class="modal-icon icon-wave"><path d="M15 50 Q25 25, 35 50 T55 50 T75 50 T95 50" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="50" cy="50" r="3" fill="currentColor"/></svg>',
  '<svg viewBox="0 0 100 100" class="modal-icon icon-chain"><circle cx="30" cy="35" r="8" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="70" cy="65" r="8" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M35 40 L65 60" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><circle cx="38" cy="43" r="3" fill="currentColor"/><circle cx="62" cy="57" r="3" fill="currentColor"/></svg>',
  '<svg viewBox="0 0 100 100" class="modal-icon icon-fragments"><circle cx="35" cy="35" r="12" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="65" cy="35" r="12" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="50" cy="60" r="12" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="35" cy="35" r="3" fill="currentColor"/><circle cx="65" cy="35" r="3" fill="currentColor"/><circle cx="50" cy="60" r="3" fill="currentColor"/></svg>',
  '<svg viewBox="0 0 100 100" class="modal-icon icon-leaf"><path d="M50 20 Q45 35, 50 50 Q55 35, 50 20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="M35 45 Q40 55, 50 65" fill="none" stroke="currentColor" stroke-width="2"/><path d="M65 45 Q60 55, 50 65" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="50" cy="70" r="3" fill="currentColor"/></svg>',
  '<svg viewBox="0 0 100 100" class="modal-icon icon-compass"><circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M50 15 L58 50 L50 75 L42 50 Z" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/><circle cx="50" cy="50" r="6" fill="currentColor"/></svg>',
  '<svg viewBox="0 0 100 100" class="modal-icon icon-pulse"><path d="M20 50 L35 50 L42 35 L50 60 L58 40 L70 50 L80 50" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="50" cy="50" r="2" fill="currentColor"/></svg>',
  '<svg viewBox="0 0 100 100" class="modal-icon icon-star"><path d="M50 15 L60 40 L85 40 L65 55 L75 80 L50 65 L25 80 L35 55 L15 40 L40 40 Z" fill="currentColor"/></svg>',
];

function abrirModal(idx) {
  const a = articulos[idx];
  const modalHeader = document.getElementById("modalHeader");

  modalHeader.innerHTML = `
    <div class="modal-header-content">
      <div class="modal-num" id="modalNum">${a.num}</div>
      <div class="modal-cat" id="modalCat">${a.cat}</div>
      <h2 id="modalTitulo">${a.titulo}</h2>
      <p class="modal-sub" id="modalSub">${a.sub}</p>
    </div>
    ${modalIcons[idx]}
    <button class="modal-close" onclick="cerrarModal()">✕</button>
  `;

  document.getElementById("modalBody").innerHTML = `
    <div class="modal-section">
      <p>${a.resumen}</p>
      <div class="modal-clave">
        <div class="modal-clave-titulo">${a.claveTitulo}</div>
        <p>${a.claveTexto}</p>
      </div>
      <p>${a.resumen2}</p>
    </div>
    <div class="modal-flecha">
      <div class="modal-flecha-icon">→</div>
      <div class="modal-flecha-content">
        <h4>${a.flechaLabel}</h4>
        <p>${a.flechaTexto}</p>
      </div>
    </div>
  `;
  document.getElementById("modalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}
function cerrarModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
}
function cerrarModalFondo(e) {
  if (e.target === document.getElementById("modalOverlay")) cerrarModal();
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") cerrarModal();
});

// ── FILTROS ─────────────────────────────────────────────
function filtrar(cat, btn) {
  document
    .querySelectorAll(".filtro-btn")
    .forEach((b) => b.classList.remove("activo"));
  btn.classList.add("activo");

  const grid = document.getElementById("grid");
  const cards = document.querySelectorAll(".card");

  // Primero aplicar visibilidad y resetear opacidad
  cards.forEach((card) => {
    const visible = cat === "todos" || card.dataset.cat === cat;
    if (visible) {
      card.style.display = "";
      card.style.opacity = "0";
    } else {
      card.style.display = "none";
      card.style.gridColumn = "";
    }
  });

  // Calcular cuántas cartas quedan visibles
  const visibles = [...cards].filter((c) => c.style.display !== "none");

  // Ajustar columnas del grid y span de la featured según cantidad visible
  if (visibles.length === 1) {
    grid.style.gridTemplateColumns = "1fr";
    visibles[0].style.gridColumn = "";
  } else if (visibles.length === 2) {
    grid.style.gridTemplateColumns = "repeat(2, 1fr)";
    visibles.forEach((c) => {
      c.style.gridColumn = c.classList.contains("featured") ? "span 2" : "";
    });
  } else {
    // 3 o más: grid original de 3 columnas
    grid.style.gridTemplateColumns = "";
    visibles.forEach((c) => {
      c.style.gridColumn = c.classList.contains("featured") ? "span 2" : "";
    });
  }

  // Fade in
  visibles.forEach((card) => {
    setTimeout(() => {
      card.style.opacity = "1";
    }, 10);
  });
}

// ── SCROLL REVEAL ────────────────────────────────────────
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 80);
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 },
);
document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".tab-nav a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + entry.target.id) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  { rootMargin: "-30% 0px -60% 0px" },
);

sections.forEach((section) => observer.observe(section));

// Update active styles on click
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

const btn = document.getElementById("hamburgerBtn");
const menu = document.getElementById("mobileNav");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  menu.classList.toggle("open");
});

menu.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    btn.classList.remove("open");
    menu.classList.remove("open");
  });
});
