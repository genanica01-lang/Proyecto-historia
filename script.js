const src = (title, url) => ({ title, url });

const eventsData = [
  {
    id: 1,
    date: "1502",
    title: "Llegada de Cristóbal Colón a las costas de Nicaragua",
    category: "nicaragua",
    context: "A finales del siglo XV la Corona española impulsó expediciones marítimas en busca de nuevas rutas y territorios. Cristóbal Colón realizó su cuarto y último viaje entre 1502 y 1504, explorando las costas de Centroamérica.",
    details: "El 12 de septiembre de 1502, según las fuentes, Colón se refugió de una tormenta en la desembocadura del río Coco, en la actual frontera entre Nicaragua y Honduras. Fue el primer contacto documentado con este territorio: el propio Colón lo relató en su Carta de Jamaica a los Reyes. No fundó ciudades ni conquistó la zona.",
    consequences: "Los españoles obtuvieron las primeras noticias de estas tierras y, dos décadas después, comenzaron las expediciones de conquista que transformaron la vida de los pueblos originarios.",
    protagonists: ["Cristóbal Colón", "Pueblos indígenas del Caribe centroamericano"],
    sources: [
      src("Poli bueno y poli malo en la conquista de Nicaragua (El Salto)", "https://www.elsaltodiario.com/contigo-empezo-todo/poli-bueno-y-poli-malo-en-la-conquista-de-nicaragua"),
      src("Crónicas de viajeros: Nicaragua, Vol. I (Jaime Incer, Fundación Enrique Bolaños)", "https://www.enriquebolanos.org/media/publicacion/LL_CronicasviajerosNicaraguaVolIJaimeIncer.pdf"),
      src("Granada de Nicaragua (Cabrero y González, Congreso de Granada 1992)", "https://www.americanistas.es/wp-content/uploads/2024/07/05-078-Cabrero-Fernandez-Leoncio-y-Laura-Gonzalez-Pujana-Granada-de-Nicaragua.-Congreso-de-Granada-1992.pdf")
    ]
  },
  {
    id: 2,
    date: "1522–1523",
    title: "Exploración de Gil González Dávila",
    category: "nicaragua",
    context: "Veinte años después del viaje de Colón, los gobernadores españoles de Panamá buscaban reconocer y controlar las tierras del istmo hacia el norte.",
    details: "Entre enero de 1522 y abril de 1523, Gil González Dávila recorrió parte de Costa Rica y el sur de Nicaragua partiendo desde Panamá. Se reunió con el cacique Nicarao (cuyo nombre se asocia al origen del nombre del país), quien según las crónicas aceptó bautizarse junto a su gente, y llegó hasta las orillas del gran lago. Después chocó con el cacique Diriangén y tuvo que retirarse.",
    consequences: "La expedición dejó información sobre el territorio, sus pueblos y sus recursos, y preparó la conquista que lideraría Francisco Hernández de Córdoba a partir de 1524.",
    protagonists: ["Gil González Dávila", "Cacique Nicarao", "Cacique Diriangén"],
    sources: [
      src("Serie Cronistas: Expedición de Gil González (Fundación Enrique Bolaños)", "https://www.enriquebolanos.org/media/archivo/CCBA%20-%20SERIE%20CRONISTAS%20-%2006%20-%2003.pdf"),
      src("Poli bueno y poli malo en la conquista de Nicaragua (El Salto)", "https://www.elsaltodiario.com/contigo-empezo-todo/poli-bueno-y-poli-malo-en-la-conquista-de-nicaragua"),
      src("Le Nicaragua (Académie Belgium, en francés)", "https://www.academiebelgium.be/wp-content/uploads/2020/12/Nicaragua.pdf"),
      src("Granada de Nicaragua (Cabrero y González, Congreso de Granada 1992)", "https://www.americanistas.es/wp-content/uploads/2024/07/05-078-Cabrero-Fernandez-Leoncio-y-Laura-Gonzalez-Pujana-Granada-de-Nicaragua.-Congreso-de-Granada-1992.pdf")
    ]
  },
  {
    id: 3,
    date: "1523",
    title: "Resistencia indígena de Diriangén",
    category: "nicaragua",
    context: "La llegada de los españoles amenazaba la autonomía política y territorial de los pueblos originarios.",
    details: "Diriangén pidió tres días para responder a las preguntas del capitán español y después salió a su encuentro: según los cronistas, cortó el paso a la expedición y obligó a Gil González Dávila a retirarse hacia la costa.",
    consequences: "Se le recuerda como una de las primeras muestras de resistencia indígena a la conquista, que demostró que ésta no fue un proceso pacífico.",
    protagonists: ["Diriangén", "Gil González Dávila", "Pueblos indígenas de Nicaragua"],
    sources: [
      src("Poli bueno y poli malo en la conquista de Nicaragua (El Salto)", "https://www.elsaltodiario.com/contigo-empezo-todo/poli-bueno-y-poli-malo-en-la-conquista-de-nicaragua"),
      src("Serie Cronistas: Expedición de Gil González (Fundación Enrique Bolaños)", "https://www.enriquebolanos.org/media/archivo/CCBA%20-%20SERIE%20CRONISTAS%20-%2006%20-%2003.pdf"),
      src("Le Nicaragua (Académie Belgium, en francés)", "https://www.academiebelgium.be/wp-content/uploads/2020/12/Nicaragua.pdf")
    ]
  },
  {
    id: 4,
    date: "1524",
    title: "Fundación de León Viejo",
    category: "nicaragua",
    context: "Los españoles necesitaban asentamientos permanentes para afirmar su dominio. Pedrarias Dávila envió desde Panamá a Francisco Hernández de Córdoba con esa misión.",
    details: "El 15 de junio de 1524 Hernández de Córdoba fundó León, hoy llamada León Viejo, en la orilla suroccidental del lago Xolotlán (Managua), al pie del volcán Momotombo. Fue uno de los asentamientos coloniales españoles más antiguos de América. Hernández de Córdoba fue decapitado en la plaza mayor en 1526 por orden de Pedrarias.",
    consequences: "León Viejo fue centro político y administrativo de la colonia. Fue abandonada tras las erupciones y el terremoto de 1610, y sus ruinas fueron declaradas Patrimonio Mundial por la UNESCO en el año 2000.",
    protagonists: ["Francisco Hernández de Córdoba", "Pedrarias Dávila", "Poblaciones indígenas locales", "Colonos españoles"],
    sources: [
      src("Ruinas de León Viejo (UNESCO, Patrimonio Mundial)", "https://whc.unesco.org/en/list/613"),
      src("León Viejo, expediente de nominación (UNESCO)", "https://whc.unesco.org/document/153880"),
      src("León Viejo (Wikipedia, en inglés)", "https://en.wikipedia.org/wiki/Le%C3%B3n_Viejo")
    ]
  },
  {
    id: 5,
    date: "1524",
    title: "Fundación de Granada",
    category: "nicaragua",
    context: "Los españoles buscaron fundar núcleos urbanos en lugares estratégicos para el comercio y las comunicaciones.",
    details: "Francisco Hernández de Córdoba fundó Granada en 1524 a orillas del gran lago de Nicaragua (Cocibolca), cerca de un poblado indígena. Su ubicación le dio acceso a las rutas comerciales del lago y a su salida hacia el Atlántico. Algunos autores discuten el mes exacto de la fundación.",
    consequences: "Granada se consolidó como centro comercial y, tras la independencia, como sede del grupo conservador frente a los liberales de León.",
    protagonists: ["Francisco Hernández de Córdoba", "Poblaciones indígenas de la zona", "Colonos españoles"],
    sources: [
      src("Granada de Nicaragua (Cabrero y González, Congreso de Granada 1992)", "https://www.americanistas.es/wp-content/uploads/2024/07/05-078-Cabrero-Fernandez-Leoncio-y-Laura-Gonzalez-Pujana-Granada-de-Nicaragua.-Congreso-de-Granada-1992.pdf"),
      src("Nicaragua (EcuRed)", "https://www.ecured.cu/Nicarag%C3%BCenses"),
      src("La historia después del 15 de septiembre (La Prensa)", "https://www.laprensani.com/2017/09/22/opinion/2301085-la-historia-despues-del-15-de-septiembre")
    ]
  },
  {
    id: 6,
    date: "Siglo XVI",
    title: "Consolidación del dominio colonial español",
    category: "nicaragua",
    context: "Tras la conquista inicial, los españoles organizaron una administración provincial estable.",
    details: "Nicaragua funcionó como provincia dentro de la Capitanía General de Guatemala, con León como capital. Pedrarias Dávila se estableció en León y fue el primer gobernador; en 1532 asumió el primer obispo, Diego Álvarez Osorio. León alcanzó su mayor desarrollo hacia 1545, durante la gobernación de Rodrigo de Contreras.",
    consequences: "Hubo un gran descenso de la población indígena: las estimaciones hablan de entre 500 mil y 800 mil indígenas al llegar los españoles, mientras que el censo de 1581 registró apenas 15,694. Se extendió el mestizaje y el cristianismo, y la sociedad y la economía se reorganizaron bajo el dominio español.",
    protagonists: ["Pueblos originarios", "Pedrarias Dávila y autoridades coloniales", "Órdenes religiosas", "Población africana y afrodescendiente"],
    sources: [
      src("Le Nicaragua (Académie Belgium, en francés)", "https://www.academiebelgium.be/wp-content/uploads/2020/12/Nicaragua.pdf"),
      src("Colonización de Nicaragua por potencias rivales / Río Coco (Dialnet)", "https://dialnet.unirioja.es/descarga/articulo/5196183.pdf"),
      src("León Viejo, expediente de nominación (UNESCO)", "https://whc.unesco.org/document/153880"),
      src("Las capitulaciones para descubrir el secreto del volcán Masaya (UVa)", "https://uvadoc.uva.es/bitstream/handle/10324/45498/TFG_F_2020_4.pdf?sequence=1")
    ]
  },
  {
    id: 7,
    date: "1578",
    title: "Erupción del volcán Momotombo",
    category: "nicaragua",
    context: "León Viejo estaba construida al pie del volcán Momotombo, en una zona de intensa actividad volcánica y sísmica.",
    details: "Según la UNESCO, la erupción del Momotombo de 1578 destruyó parcialmente la ciudad y marcó el inicio de su deterioro.",
    consequences: "Junto con el terremoto de 1610 llevó al abandono de León Viejo. Hoy sus ruinas son un sitio arqueológico y Patrimonio Mundial (2000).",
    protagonists: ["Habitantes de León Viejo", "Autoridades coloniales", "Volcán Momotombo"],
    sources: [
      src("Ruinas de León Viejo (UNESCO, Patrimonio Mundial)", "https://whc.unesco.org/en/list/613"),
      src("León Viejo, expediente de nominación (UNESCO)", "https://whc.unesco.org/document/153880"),
      src("León Viejo (Wikipedia, en inglés)", "https://en.wikipedia.org/wiki/Le%C3%B3n_Viejo")
    ]
  },
  {
    id: 8,
    date: "1610",
    title: "Terremoto y traslado de León",
    category: "nicaragua",
    context: "León Viejo ya estaba debilitada por la actividad volcánica y sísmica acumulada durante décadas.",
    details: "El 11 de enero de 1610 un fuerte terremoto dio el golpe final a lo que quedaba en pie de la ciudad. Sus habitantes y autoridades la trasladaron a un nuevo sitio cerca del antiguo asentamiento indígena de Sutiaba, donde se desarrolló la actual ciudad de León.",
    consequences: "Las cenizas volcánicas y los sedimentos del lago fueron enterrando las ruinas, lo que ayudó a conservarlas para la arqueología. Algunas fuentes atribuyen el abandono sobre todo a las erupciones del Momotombo y no solo al terremoto.",
    protagonists: ["Habitantes de León Viejo", "Autoridades coloniales"],
    sources: [
      src("León Viejo, expediente de nominación (UNESCO)", "https://whc.unesco.org/document/153880"),
      src("Ruinas de León Viejo (UNESCO, Patrimonio Mundial)", "https://whc.unesco.org/en/list/613"),
      src("León, una de las ciudades históricas de Nicaragua (Billiken)", "https://billiken.lat/el-mundo/leon-una-de-las-ciudades-historicas-de-nicaragua-mas-importantes-de-centroamerica/"),
      src("León Viejo (Wikipedia, en inglés)", "https://en.wikipedia.org/wiki/Le%C3%B3n_Viejo")
    ]
  },
  {
    id: 9,
    date: "Siglo XVIII",
    title: "Influencia británica en la Costa Caribe",
    category: "nicaragua",
    context: "Mientras el Pacífico estaba bajo administración española, la Costa Caribe (la Mosquitia) quedó fuera del control efectivo de España y se convirtió en zona de contacto con piratas, comerciantes y potencias rivales.",
    details: "En 1740 el rey misquito y la Corona británica sellaron un tratado de amistad y alianza, y en 1749 se nombró un superintendente británico residente. Hubo expediciones británicas contra Nicaragua, como las de 1762 y 1780. Gran Bretaña se retiró de la Mosquitia a finales de junio de 1787, tras reconocer la soberanía española.",
    consequences: "Dejó una diferencia cultural e histórica duradera entre el Pacífico y la Costa Caribe. El protectorado británico volvió a plantearse en el siglo XIX y terminó con el Tratado de Managua de 1860.",
    protagonists: ["Autoridades británicas y españolas", "Pueblo y reino misquito"],
    sources: [
      src("Costa de Mosquitos (Hispanopedia)", "https://es.hispanopedia.com/wiki/Costa_de_Mosquitos"),
      src("El fabuloso reino mosco (Fundación Enrique Bolaños)", "https://sajurin.enriquebolanos.org/docs/ABG-T3-%20C%202%20-%20El%20fabuloso%20Reino%20Mosco.pdf"),
      src("Colonización de Nicaragua por potencias rivales / Río Coco (Dialnet)", "https://dialnet.unirioja.es/descarga/articulo/5196183.pdf")
    ]
  },
  {
    id: 10,
    date: "1811",
    title: "Movimientos independentistas de León y Granada",
    category: "nicaragua",
    context: "La invasión francesa a España debilitó el control colonial y creció el resentimiento de los criollos hacia los españoles peninsulares.",
    details: "En 1811 la provincia de San Salvador se sublevó contra las autoridades coloniales. Aunque oficialmente la provincia de Nicaragua no se unió, estallaron movimientos y levantamientos populares contra las autoridades coloniales en León y Granada.",
    consequences: "Fueron los primeros antecedentes del proceso que llevó a la independencia de 1821.",
    protagonists: ["Sectores criollos", "Autoridades coloniales locales", "Población de León y Granada"],
    sources: [
      src("Nicaragua, capítulo de historia (Country Studies, en inglés)", "https://countrystudies.us/nicaragua/7.htm"),
      src("Le Nicaragua (Académie Belgium, en francés)", "https://www.academiebelgium.be/wp-content/uploads/2020/12/Nicaragua.pdf"),
      src("La situación jurídico-internacional de Nicaragua (tesis UNAM)", "https://ru.dgb.unam.mx/bitstream/20.500.14330/TES01000090016/3/0090016.pdf")
    ]
  },
  {
    id: 11,
    date: "1821",
    title: "Independencia de Centroamérica",
    category: "nicaragua",
    context: "El control colonial español se había debilitado definitivamente en la región.",
    details: "El 15 de septiembre de 1821 se declaró en Guatemala la independencia del Reino de Guatemala, del que Nicaragua formaba parte. La noticia llegó a León y Granada pocos días después. El 11 de octubre de 1821, la Diputación Provincial reunida en León proclamó la independencia absoluta de España y la unión al Imperio mexicano de Iturbide, mientras Granada se opuso y formó su propia junta de gobierno.",
    consequences: "Terminó el periodo colonial e inició la vida republicana, marcada desde el principio por la rivalidad entre León (liberal) y Granada (conservadora).",
    protagonists: ["Miguel González Saravia (gobernador de Nicaragua en 1821)", "Autoridades de León y Granada", "Sectores criollos centroamericanos"],
    sources: [
      src("La historia después del 15 de septiembre (La Prensa)", "https://www.laprensani.com/2017/09/22/opinion/2301085-la-historia-despues-del-15-de-septiembre"),
      src("Nicaragua (EcuRed)", "https://www.ecured.cu/Nicarag%C3%BCenses"),
      src("Cronología de gobernantes de Nicaragua (Rulers.org, en inglés)", "https://www.rulers.org/ruln2.html"),
      src("Nicaragua, capítulo de historia (Country Studies, en inglés)", "https://countrystudies.us/nicaragua/7.htm")
    ]
  },
  {
    id: 12,
    date: "1823–1838",
    title: "Federación Centroamericana",
    category: "nicaragua",
    context: "Tras la caída del Imperio mexicano, las provincias centroamericanas intentaron mantenerse unidas.",
    details: "En julio de 1823 las provincias, incluida Nicaragua, declararon su independencia de México y formaron las Provincias Unidas, que luego fueron la República Federal de Centroamérica. Nicaragua se organizó como Estado dentro de la Federación en 1824–1825. Fue una etapa de fuertes conflictos entre liberales y conservadores.",
    consequences: "La debilidad del gobierno federal y las luchas locales por el poder llevaron a la anarquía y a la disolución de la Federación.",
    protagonists: ["Francisco Morazán", "Facciones liberales y conservadoras", "Élites de León y Granada"],
    sources: [
      src("Nicaragua, capítulo de historia (Country Studies, en inglés)", "https://countrystudies.us/nicaragua/7.htm"),
      src("Cronología de gobernantes de Nicaragua (Rulers.org, en inglés)", "https://www.rulers.org/ruln2.html"),
      src("La historia después del 15 de septiembre (La Prensa)", "https://www.laprensani.com/2017/09/22/opinion/2301085-la-historia-despues-del-15-de-septiembre"),
      src("La situación jurídico-internacional de Nicaragua (tesis UNAM)", "https://ru.dgb.unam.mx/bitstream/20.500.14330/TES01000090016/3/0090016.pdf")
    ]
  },
  {
    id: 13,
    date: "1838",
    title: "Nicaragua se separa de la Federación y proclama su soberanía",
    category: "nicaragua",
    context: "La Federación Centroamericana se encontraba en plena crisis y desintegración.",
    details: "El 30 de abril de 1838 la Asamblea Constituyente declaró que Nicaragua era un Estado libre, soberano e independiente de todo otro poder. Fue el primer país en abandonar la Federación, seguido ese mismo año por Costa Rica y Honduras. Algunas cronologías sitúan la adopción formal del nombre «República de Nicaragua» en 1854.",
    consequences: "Inició la construcción del Estado nacional, marcada por la rivalidad entre León (liberal) y Granada (conservadora).",
    protagonists: ["Asamblea Constituyente de 1838", "Líderes de León y Granada"],
    sources: [
      src("La historia después del 15 de septiembre (La Prensa)", "https://www.laprensani.com/2017/09/22/opinion/2301085-la-historia-despues-del-15-de-septiembre"),
      src("Nicaragua, capítulo de historia (Country Studies, en inglés)", "https://countrystudies.us/nicaragua/7.htm"),
      src("Cronología de gobernantes de Nicaragua (Rulers.org, en inglés)", "https://www.rulers.org/ruln2.html"),
      src("Nicaragua (World Statesmen, en inglés)", "https://worldstatesmen.org/Nicaragua.htm")
    ]
  },
  {
    id: 14,
    date: "1855",
    title: "Llegada de William Walker",
    category: "nicaragua",
    context: "Desde 1854 Nicaragua vivía una guerra civil entre liberales (León) y legitimistas o conservadores (Granada).",
    details: "Los liberales Francisco Castellón y Máximo Jerez contrataron al mercenario Byron Cole, quien cedió su contrato al filibustero estadounidense William Walker. Walker llegó en junio de 1855 con unos 58 hombres, tomó Granada en octubre y estableció un gobierno con Patricio Rivas como presidente, aunque el poder real era suyo. En julio de 1856 se hizo proclamar presidente.",
    consequences: "Amenazó la soberanía de Nicaragua y de toda Centroamérica, y dio inicio a la Guerra Nacional (1856–1857), en la que se unieron los ejércitos centroamericanos.",
    protagonists: ["William Walker", "Patricio Rivas", "Francisco Castellón", "Máximo Jerez"],
    sources: [
      src("Filibuster War (Wikipedia, en inglés)", "https://en.wikipedia.org/wiki/Filibuster_War"),
      src("Resumen de la guerra nacional de 1856–1857 (MINED)", "https://www.mined.gob.ni/biblioteca/wp-content/uploads/2024/09/No-13-Resumen-de-la-guerra-nacional.pdf"),
      src("Nicaragua (EcuRed)", "https://www.ecured.cu/Nicarag%C3%BCenses"),
      src("Patricio Rivas (Wikipedia, en inglés)", "https://en.wikipedia.org/wiki/Patricio_Rivas")
    ]
  },
  {
    id: 15,
    date: "1856",
    title: "Batalla de San Jacinto",
    category: "nicaragua",
    context: "El ejército nicaragüense, junto con aliados centroamericanos, resistía la ocupación filibustera.",
    details: "El 14 de septiembre de 1856, una fuerza nicaragüense de entre 100 y 160 hombres (las cifras varían según la fuente), al mando del coronel José Dolores Estrada, derrotó a unos 200 filibusteros en la hacienda San Jacinto. Se recuerda al sargento Andrés Castro, quien al quedarse sin municiones derribó a un filibustero con una piedra. También participaron unos sesenta flechadores indígenas matagalpas, declarados héroes de la batalla por la Asamblea Nacional.",
    consequences: "Es símbolo de la defensa de la soberanía nacional, se conmemora cada 14 de septiembre y animó a los ejércitos aliados en la lucha contra Walker.",
    protagonists: ["José Dolores Estrada", "Andrés Castro", "Flechadores indígenas matagalpas", "Fuerzas filibusteras"],
    sources: [
      src("150 aniversario de la Batalla de San Jacinto (Fundación Enrique Bolaños)", "https://sajurin.enriquebolanos.org/docs/Aniversario%20150%20-%20Batalla%20San%20Jacinto%20-%20Hacienda%20SJ%208%20sep%2006.pdf"),
      src("Los dos combates de San Jacinto (MINED)", "https://www.mined.gob.ni/biblioteca/wp-content/uploads/2025/09/LOS-DOS-COMBATES-DE-SAN-JACINTO.pdf"),
      src("Los indios flecheros matagalpas, héroes de San Jacinto (MINED)", "https://www.mined.gob.ni/biblioteca/wp-content/uploads/2024/09/No-8-Los-Indios-Flecheros-Matagalpas.pdf"),
      src("Una teoría alternativa de la Batalla de San Jacinto (Revista Diálogos, UCR)", "https://archivo.revistas.ucr.ac.cr/index.php/dialogos/article/download/31427/31099/91683"),
      src("William Walker, el predestinado (Fundación Enrique Bolaños)", "https://www.enriquebolanos.org/media/archivo/WW%20-%20El%20predestinado%20-%20Parte%204%20de%206.pdf")
    ]
  },
  {
    id: 16,
    date: "1857",
    title: "Derrota y salida de William Walker",
    category: "nicaragua",
    context: "Los ejércitos de Nicaragua, Costa Rica, El Salvador, Guatemala y Honduras se unieron contra las fuerzas filibusteras.",
    details: "En noviembre de 1856 Walker ordenó destruir Granada y se fortificó en Rivas, donde quedó sitiado. El 1 de mayo de 1857 capituló ante el comandante de la marina estadounidense Charles Henry Davis y salió de Nicaragua con sus oficiales.",
    consequences: "Terminó la Guerra Nacional y se preservó la soberanía de Centroamérica. Walker intentó regresar en 1857 y 1860; en 1860 fue entregado a las autoridades hondureñas y ejecutado.",
    protagonists: ["William Walker", "Charles Henry Davis", "Tomás Martínez", "Máximo Jerez", "Juan Rafael Mora (Costa Rica)"],
    sources: [
      src("Filibuster War (Wikipedia, en inglés)", "https://en.wikipedia.org/wiki/Filibuster_War"),
      src("Battle of San Juan del Sur (Wikipedia, en inglés)", "https://en.wikipedia.org/wiki/Battle_of_San_Juan_del_Sur"),
      src("La capitulación, Rivas 1 de mayo de 1857 (Fundación Enrique Bolaños)", "https://sajurin.enriquebolanos.org/docs/ABG-T4-%20Anexo%20H.pdf"),
      src("Batalla de Rivas (Museo Histórico Cultural Juan Santamaría, Costa Rica)", "https://museojuansantamaria.go.cr/wp-content/uploads/materiales/brochure_batalla_de_rivas.pdf")
    ]
  },
  {
    id: 17,
    date: "1893",
    title: "Revolución Liberal",
    category: "nicaragua",
    context: "Terminaban unas tres décadas de gobiernos conservadores y el Partido Liberal volvía a disputar el poder.",
    details: "El 11 de julio de 1893 estalló en León la Revolución Liberal. Tras varios combates, las fuerzas liberales derrotaron al ejército conservador y entraron a Managua el 25 de julio. José Santos Zelaya fue nombrado presidente provisional el 15 de septiembre de 1893 y electo presidente constitucional el 1 de febrero de 1894.",
    consequences: "Se promulgó una nueva constitución (diciembre de 1893) y comenzaron reformas institucionales, como la Ley Orgánica de Tribunales de 1894. Zelaya gobernó hasta 1909.",
    protagonists: ["José Santos Zelaya", "Anastasio Ortiz", "Francisco Baca", "Pedro Balladares", "Sectores liberales"],
    sources: [
      src("Un visionario (La Prensa)", "https://www.laprensani.com/2000/07/16/editorial/738304-un-visionario"),
      src("José Santos Zelaya (EcuRed)", "https://www.ecured.cu/Jos%C3%A9_Santos_Zelaya"),
      src("Lo que dice y no dice la Nota Knox (CLACSO)", "https://biblioteca-repositorio.clacso.edu.ar/bitstream/CLACSO/6657/1/esgueva1.pdf")
    ]
  },
  {
    id: 18,
    date: "1894",
    title: "Incorporación de la Mosquitia",
    category: "nicaragua",
    context: "Desde el siglo XVIII la Costa Caribe estuvo bajo fuerte influencia británica; en 1860 Gran Bretaña reconoció la soberanía de Nicaragua, con autonomía para los misquitos (la Reserva Mosquitia).",
    details: "A comienzos de 1894 el gobierno de Zelaya envió tropas al mando del general Rigoberto Cabezas y decretó la reincorporación de la Reserva Mosquitia al Estado nicaragüense, mediante una acción militar y diplomática.",
    consequences: "Se integró territorialmente la Costa Caribe. Algunos estudios señalan que la medida no tomó en cuenta los derechos de los habitantes de la costa y dejó tensiones culturales y políticas.",
    protagonists: ["José Santos Zelaya", "Rigoberto Cabezas", "Pueblos de la Costa Caribe", "Representantes británicos"],
    sources: [
      src("Un visionario (La Prensa)", "https://www.laprensani.com/2000/07/16/editorial/738304-un-visionario"),
      src("La unificación nacional que dejó una nación dividida (Revista Historia, UNA)", "https://www.revistas.una.ac.cr/index.php/historia/article/view/3460"),
      src("La reincorporación de la Mosquitia (Revista Wani)", "https://revistasnicaragua.cnu.edu.ni/index.php/wani/article/download/8840/11738/32739"),
      src("Nicaragua, Inglaterra, Estados Unidos y la reincorporación de la Mosquitia (Revista Senderos)", "https://revistasnicaragua.cnu.edu.ni/index.php/senderosu/article/download/2769/2702/4429"),
      src("Costa de Mosquitos (Hispanopedia)", "https://es.hispanopedia.com/wiki/Costa_de_Mosquitos")
    ]
  },
  {
    id: 19,
    date: "1909",
    title: "Caída de José Santos Zelaya",
    category: "nicaragua",
    context: "Había tensiones con Estados Unidos y con sectores conservadores internos, mientras Zelaya enfrentaba conflictos con otros países de la región.",
    details: "Una revuelta conservadora encabezada por Juan José Estrada se alzó contra el gobierno. Zelaya ejecutó a dos mercenarios estadounidenses, Cannon y Groce, y Estados Unidos lo consideró una provocación: el 1 de diciembre de 1909 el secretario de Estado Philander Knox entregó la llamada Nota Knox. Zelaya renunció y se exilió.",
    consequences: "Aumentó la intervención de Estados Unidos en la política nacional. Zelaya se exilió primero en España y luego en Nueva York.",
    protagonists: ["José Santos Zelaya", "Juan José Estrada", "Philander C. Knox", "Gobierno de Estados Unidos"],
    sources: [
      src("Lo que dice y no dice la Nota Knox (CLACSO)", "https://biblioteca-repositorio.clacso.edu.ar/bitstream/CLACSO/6657/1/esgueva1.pdf"),
      src("Un visionario (La Prensa)", "https://www.laprensani.com/2000/07/16/editorial/738304-un-visionario"),
      src("José Santos Zelaya (EcuRed)", "https://www.ecured.cu/Jos%C3%A9_Santos_Zelaya"),
      src("Posición de México ante el conflicto Estados Unidos-Nicaragua 1907–1911 (tesis UNAM)", "https://ru.dgb.unam.mx/bitstream/20.500.14330/TES01000004261/3/0004261.pdf")
    ]
  },
  {
    id: 20,
    date: "1912",
    title: "Intervención estadounidense y resistencia de Benjamín Zeledón",
    category: "nicaragua",
    context: "La inestabilidad política y la crisis del gobierno de Adolfo Díaz llevaron a que se pidiera ayuda militar a Estados Unidos.",
    details: "En agosto de 1912 desembarcaron marines estadounidenses. Tras la rendición de Luis Mena el 23 de septiembre, el general liberal Benjamín Zeledón asumió la jefatura de la rebelión. El 3 y 4 de octubre se libró la batalla de El Coyotepe y La Barranca, en Masaya, y Zeledón murió el 4 de octubre. Las versiones difieren: unos dicen que cayó en combate cuando se retiraba hacia Jinotepe, otros que lo mataron sus propios hombres o que fue ejecutado tras ser capturado.",
    consequences: "Zeledón es Héroe Nacional de Nicaragua. La imagen de su cuerpo trasladado por los marines marcó a Augusto C. Sandino e inspiró a movimientos nacionalistas posteriores.",
    protagonists: ["Benjamín Zeledón", "Smedley Butler", "Joseph H. Pendleton", "Marines estadounidenses", "Adolfo Díaz", "Luis Mena"],
    sources: [
      src("Battle of Coyotepe Hill (Wikipedia, en inglés)", "https://en.wikipedia.org/wiki/Battle_of_Coyotepe_Hill"),
      src("La epopeya del 4 de octubre de 1912 (La Prensa)", "https://www.laprensani.com/2003/10/04/editorial/894913-la-epopeya-del-4-de-octubre-de-1912"),
      src("U.S. Intervention in Nicaragua (EBSCO, en inglés)", "https://www.ebsco.com/research-starters/history/us-intervention-nicaragua"),
      src("Battle of Coyotepe (History of the Marine Corps, en inglés)", "https://bloodline.historyofthemarinecorps.com/battle/battle-of-coyotepe/"),
      src("Benjamín Zeledón (Military Wiki, en inglés)", "https://military-history.fandom.com/wiki/Benjam%C3%ADn_Zeled%C3%B3n"),
      src("The Assault on Coyotepe (RallyPoint, en inglés)", "https://www.rallypoint.com/shared-links/coyotepe")
    ]
  },
  {
    id: 21,
    date: "1927–1933",
    title: "La lucha de Augusto C. Sandino",
    category: "sandino",
    context: "Nicaragua estaba ocupada militarmente por Estados Unidos y el 4 de mayo de 1927 se firmó el Pacto del Espino Negro para poner fin a la guerra civil.",
    details: "El general José María Moncada pactó con el representante estadounidense Henry Stimson. Sandino rechazó el acuerdo, se fue a las montañas de Las Segovias y el 2 de septiembre de 1927 organizó el Ejército Defensor de la Soberanía Nacional (EDSN), que combatió a los marines y luego a la Guardia Nacional. Tras el retiro de las tropas estadounidenses el 1 de enero de 1933, firmó la paz con el presidente Sacasa.",
    consequences: "Salida de los marines en 1933 y consolidación de Sandino como símbolo antiimperialista de América Latina. Fue declarado Héroe Nacional de Nicaragua.",
    protagonists: ["Augusto C. Sandino", "Ejército Defensor de la Soberanía Nacional (EDSN)", "Marines de EE. UU.", "Juan Bautista Sacasa"],
    sources: [
      src("El General de Hombres Libres (La Prensa)", "https://www.laprensani.com/2003/09/12/editorial/889728-el-general-de-hombres-libres"),
      src("Augusto César Sandino (EcuRed)", "https://www.ecured.cu/Augusto_Cesar_Sandino"),
      src("Colección Sandino Vive: Historia de la permanencia viva de Sandino (UNAN)", "https://cenida.una.edu.ni/relectronicos/REN972.850G948.pdf")
    ]
  },
  {
    id: 22,
    date: "1934",
    title: "Asesinato de Augusto C. Sandino",
    category: "sandino",
    context: "Tras el retiro de los marines y el acuerdo de paz con Sacasa, la Guardia Nacional, dirigida por Anastasio Somoza García, veía a Sandino como un rival peligroso.",
    details: "El 21 de febrero de 1934 Sandino asistió a una cena con el presidente Sacasa en Managua. Al salir fue capturado por miembros de la Guardia Nacional y asesinado junto a los generales Francisco Estrada y Juan Pablo Umanzor. La versión oficial es que Somoza planeó el crimen. La figura de Sandino sigue generando debate entre los nicaragüenses.",
    consequences: "El 23 de agosto de 1934 el Congreso decretó una amnistía para los crímenes de la Guardia Nacional, y dos años después Somoza tomó el poder, abriendo el camino a la dinastía somocista.",
    protagonists: ["Augusto C. Sandino", "Anastasio Somoza García", "Juan Bautista Sacasa", "Guardia Nacional"],
    sources: [
      src("Augusto César Sandino (EcuRed)", "https://www.ecured.cu/Augusto_Cesar_Sandino"),
      src("La traición que acabó con la vida de Sandino (BBC Mundo, vía La Prensa)", "https://www.laprensani.com/2024/02/20/politica/3282299-la-traicion-que-acabo-con-la-vida-de-sandino-el-guerrillero-nicaraguense-que-puso-en-jaque-al-ejercito-de-estados-unidos"),
      src("El General de Hombres Libres (La Prensa)", "https://www.laprensani.com/2003/09/12/editorial/889728-el-general-de-hombres-libres"),
      src("Colección Sandino Vive: Historia de la permanencia viva de Sandino (UNAN)", "https://cenida.una.edu.ni/relectronicos/REN972.850G948.pdf")
    ]
  },
  {
    id: 23,
    date: "1936",
    title: "Inicio de la dictadura de Somoza",
    category: "nicaragua",
    context: "La Guardia Nacional, creada con apoyo de Estados Unidos antes de su retiro, se había convertido en la principal estructura de poder del país.",
    details: "Anastasio Somoza García, jefe de la Guardia Nacional, tomó el control del poder en 1936, fue elegido presidente ese mismo año y asumió el cargo el 1 de enero de 1937. Gobernó directamente o desde la jefatura de la Guardia Nacional hasta su muerte.",
    consequences: "Comenzaron más de cuatro décadas (1936–1979) de dominio de la familia Somoza sobre Nicaragua, sostenido por la Guardia Nacional.",
    protagonists: ["Anastasio Somoza García", "Guardia Nacional"],
    sources: [
      src("Anastasio Somoza García (Wikipedia, en inglés)", "https://en.wikipedia.org/wiki/Anastasio_Somoza_Garc%C3%ADa"),
      src("Ejército de Nicaragua: historia (Conferencia de Fuerzas Armadas Centroamericanas)", "https://www.conferenciafac.org/ejercito-de-nicaragua"),
      src("La traición que acabó con la vida de Sandino (BBC Mundo, vía La Prensa)", "https://www.laprensani.com/2024/02/20/politica/3282299-la-traicion-que-acabo-con-la-vida-de-sandino-el-guerrillero-nicaraguense-que-puso-en-jaque-al-ejercito-de-estados-unidos")
    ]
  },
  {
    id: 24,
    date: "1956",
    title: "Muerte de Anastasio Somoza García",
    category: "nicaragua",
    context: "Somoza García buscaba una nueva reelección y la Convención Liberal lo proclamaba candidato en León.",
    details: "El 21 de septiembre de 1956 el poeta Rigoberto López Pérez disparó contra Somoza García en un acto en la Casa del Obrero de León y fue muerto en el lugar por la escolta. Somoza fue trasladado a la Zona del Canal de Panamá y murió el 29 de septiembre.",
    consequences: "El poder pasó a sus hijos: Luis Somoza Debayle asumió la presidencia y Anastasio Somoza Debayle la jefatura de la Guardia Nacional, y el régimen se mantuvo con una fuerte persecución a la oposición. En 1981 el gobierno sandinista declaró a López Pérez Héroe Nacional.",
    protagonists: ["Anastasio Somoza García", "Rigoberto López Pérez", "Luis Somoza Debayle", "Anastasio Somoza Debayle"],
    sources: [
      src("Editorial Note 102 (Foreign Relations of the United States, en inglés)", "https://history.state.gov/historicaldocuments/frus1955-57v07/d102"),
      src("Rigoberto López Pérez (Wikipedia, en inglés)", "https://en.wikipedia.org/wiki/Rigoberto_L%C3%B3pez_P%C3%A9rez"),
      src("La política de México frente al asilo nicaragüense 1956–1964 (UNAM)", "https://rilzea.cialc.unam.mx/jspui/bitstream/CIALC-UNAM/CL277/1/IE_AL_C_XX_3.pdf"),
      src("Las últimas portadas de Anastasio Somoza García (La Prensa)", "https://www.laprensani.com/2017/09/21/imagenes/2301099-fotogaleria-las-ultimas-portadas-de-anastasio-somoza-garcia")
    ]
  },
  {
    id: 25,
    date: "1961",
    title: "Fundación del Frente Sandinista de Liberación Nacional (FSLN)",
    category: "fsln",
    context: "Surgieron movimientos revolucionarios inspirados en el pensamiento de Sandino y en la Revolución Cubana.",
    details: "La fecha oficial de fundación es el 23 de julio de 1961, atribuida a una reunión en Tegucigalpa de Carlos Fonseca, Tomás Borge, Silvio Mayorga y otros. Algunos historiadores señalan que la fundación fue un proceso más que un solo evento, y que al principio el grupo se llamó Frente de Liberación Nacional.",
    consequences: "El FSLN canalizó la lucha armada y política contra la dictadura somocista hasta el triunfo de 1979.",
    protagonists: ["Carlos Fonseca Amador", "Tomás Borge", "Silvio Mayorga", "Santos López", "Germán Pomares"],
    sources: [
      src("Tomás Borge (Wikipedia, en inglés)", "https://en.wikipedia.org/wiki/Tom%C3%A1s_Borge"),
      src("Fraguando al FSLN: los primeros combates (Mónica Baltodano, Memorias de la lucha sandinista)", "https://memoriasdelaluchasandinista.org/media/books/10.stories.pdf"),
      src("Frente Sandinista de Liberación Nacional, 1961–1979 (Dialnet)", "https://dialnet.unirioja.es/descarga/articulo/4532580.pdf"),
      src("Frente Sandinista de Liberación Nacional (EcuRed)", "https://www.ecured.cu/Frente_Sandinista_de_Liberaci%C3%B3n_Nacional")
    ]
  },
  {
    id: 26,
    date: "1967",
    title: "Gesta guerrillera de Pancasán",
    category: "fsln",
    context: "El FSLN buscaba abrir un frente guerrillero rural en las montañas del norte del país.",
    details: "En 1967 el FSLN instaló una guerrilla en la zona de Pancasán, departamento de Matagalpa. Tras varios enfrentamientos con la Guardia Nacional cayeron en combate numerosos guerrilleros y el resto tuvo que dispersarse y replegarse en la montaña.",
    consequences: "La derrota militar llevó al FSLN a cambiar de estrategia: entre 1967 y 1974 priorizó la acumulación de fuerzas en silencio y el trabajo político con las masas.",
    protagonists: ["Tomás Borge", "Silvio Mayorga", "Carlos Fonseca Amador", "Guardia Nacional"],
    sources: [
      src("Frente Sandinista de Liberación Nacional (EcuRed)", "https://www.ecured.cu/Frente_Sandinista_de_Liberaci%C3%B3n_Nacional"),
      src("Frente Sandinista de Liberación Nacional, 1961–1979 (Dialnet)", "https://dialnet.unirioja.es/descarga/articulo/4532580.pdf"),
      src("Tomás Borge (Wikipedia, en inglés)", "https://en.wikipedia.org/wiki/Tom%C3%A1s_Borge"),
      src("Tomás Borge: historias (Memorias de la lucha sandinista)", "https://memoriasdelaluchasandinista.org/media/books/9.stories.pdf")
    ]
  },
  {
    id: 27,
    date: "1972",
    title: "Terremoto de Managua",
    category: "nicaragua",
    context: "Managua está atravesada por fallas sísmicas locales y su centro tenía una alta concentración de comercio, industria y viviendas.",
    details: "Pasada la medianoche del 23 de diciembre de 1972, un sismo de magnitud 6.2 y unos 30 segundos de duración destruyó el centro de Managua, y los incendios posteriores agravaron los daños. Las cifras de víctimas varían según la fuente, desde unos 5,000 hasta unos 20,000 fallecidos (muchas citan más de 10,000), y entre 250,000 y 300,000 personas quedaron sin hogar.",
    consequences: "El centro de la capital quedó en ruinas durante décadas y Managua se volvió una ciudad «sin centro». El desastre expuso fallas urbanas y políticas del país, y siete años después caía la dictadura.",
    protagonists: ["Población de Managua", "Anastasio Somoza Debayle"],
    sources: [
      src("1972: terremoto destruye capital de Nicaragua (Prensa Libre)", "https://www.prensalibre.com/?p=295935"),
      src("Nicaragua: The Aftermath of the 1972 Earthquake (Global Voices, en inglés)", "https://globalvoices.org/2009/12/29/nicaragua-the-aftermath-of-the-1972-earthquake/"),
      src("La noche en que Managua se vino abajo (Excélsior)", "https://www.excelsior.com.mx/internacional/terremoto-managua-1972"),
      src("El terremoto de 1972 en Managua (FLACSO)", "https://www.flacso.edu.ec/flax15/_upload/solcha2020/url_documentacion/PONENCIAMESA505814404Losdesast93111639.pdf")
    ]
  },
  {
    id: 28,
    date: "1978",
    title: "Asesinato de Pedro Joaquín Chamorro",
    category: "nicaragua",
    context: "Crecían el descontento social y la oposición de diversos sectores a la dictadura de Somoza Debayle.",
    details: "El 10 de enero de 1978 fue asesinado en Managua, cuando se dirigía a su trabajo, el director de La Prensa y líder opositor Pedro Joaquín Chamorro, por presuntos sicarios ligados al régimen. Su muerte provocó indignación popular, huelgas y, en febrero, la insurrección de Monimbó, en Masaya.",
    consequences: "Aceleró el proceso insurreccional contra el régimen, que culminó en 1979. En 2012 la Asamblea Nacional lo declaró Héroe Nacional.",
    protagonists: ["Pedro Joaquín Chamorro Cardenal", "Sectores opositores", "Pueblo de Managua y Masaya"],
    sources: [
      src("Pedro Joaquín Chamorro (EcuRed)", "https://www.ecured.cu/Pedro_Joaqu%C3%ADn_Chamorro"),
      src("La república pendiente (La Prensa)", "https://www.laprensani.com/2018/01/11/opinion/2358901-la-republica-pendiente"),
      src("Reclaman libertad durante homenaje a periodista (AP, Diario Libre)", "https://diariolibre.com/actualidad/internacional/reclaman-libertad-en-nicaragua-durante-homenaje-a-periodista-IB16358808"),
      src("La primera piedra (La Prensa)", "https://www.laprensani.com/2016/12/30/opinion/2157618-la-primera-piedra-3")
    ]
  },
  {
    id: 29,
    date: "1979",
    title: "Triunfo de la Revolución Popular Sandinista",
    category: "fsln",
    context: "La insurrección popular se generalizó en 1978–1979 y la dictadura perdió apoyo interno e internacional.",
    details: "El 17 de julio de 1979 Somoza Debayle salió del país y la Guardia Nacional se desbandó. El 19 de julio las fuerzas del FSLN entraron a Managua. Se instaló la Junta de Gobierno de Reconstrucción Nacional, de cinco miembros: Sergio Ramírez, Daniel Ortega, Violeta Barrios de Chamorro, Alfonso Robelo y Moisés Hassan.",
    consequences: "Terminó la dictadura de la familia Somoza (1936–1979), se disolvió la Guardia Nacional y se derogaron la constitución y las leyes anteriores mediante el Estatuto Fundamental. El periodo de 1979 a 1990 se conoce oficialmente como Revolución Popular Sandinista.",
    protagonists: ["Frente Sandinista de Liberación Nacional (FSLN)", "Junta de Gobierno de Reconstrucción Nacional", "Pueblo nicaragüense"],
    sources: [
      src("Revolución sandinista: 4 claves para entender la última revolución armada de América Latina (BBC Mundo)", "https://www.teletica.com/bbc-news-mundo/revolucion-sandinista-4-claves-para-entender-la-ultima-revolucion-armada-de-america-latina_231280"),
      src("Ejército de Nicaragua: historia (Conferencia de Fuerzas Armadas Centroamericanas)", "https://www.conferenciafac.org/ejercito-de-nicaragua")
    ]
  },
  {
    id: 30,
    date: "1980",
    title: "Cruzada Nacional de Alfabetización",
    category: "nicaragua",
    context: "Un censo previo mostró que más de la mitad de la población mayor de 10 años (50.35 %) no sabía leer ni escribir.",
    details: "La Cruzada se desarrolló entre marzo y agosto de 1980 (del 23 de marzo al 23 de agosto). Más de 100,000 jóvenes brigadistas se movilizaron a zonas rurales y urbanas para enseñar a leer y escribir. El método se basó en las ideas de Paulo Freire, adaptado a la realidad nicaragüense. Fernando Cardenal fue su coordinador nacional.",
    consequences: "El analfabetismo se redujo del 50.35 % al 12.96 %. En septiembre de 1980 la UNESCO otorgó a Nicaragua el premio Nadezhda K. Krupskaya.",
    protagonists: ["Brigadistas de alfabetización", "Fernando Cardenal", "Población alfabetizada", "Ministerio de Educación"],
    sources: [
      src("La Cruzada Nacional de Alfabetización: un antes y un después (UNAN-Managua)", "https://www.unan.edu.ni/wp-content/uploads/unan-managua-cedmeb-semanario-no-105.pdf"),
      src("Alfabetización y educación de adultos en Nicaragua (revista Educar)", "https://doaj.org/article/8c0c818e9ca04fc2aaba1ff77ee1787a"),
      src("Nicaragua literacy crusade (UNESCO, en inglés)", "https://media.unesco.org/sites/default/files/webform/mow001/nicaragua_literacy.pdf"),
      src("Brigadista de alfabetización: testimonio (Aquelarre, Univ. de Washington)", "https://journals.lib.washington.edu/index.php/aquelarre/article/view/13221/11588"),
      src("Gran Cruzada Nacional de Alfabetización (Revista Índice, CNU)", "https://revistaindice.cnu.edu.ni/index.php/indice/article/download/182/129/265")
    ]
  },
  {
    id: 31,
    date: "1990",
    title: "Elecciones de 1990 y transición democrática",
    category: "nicaragua",
    details: "El 25 de febrero de 1990 Violeta Barrios de Chamorro, candidata de la Unión Nacional Opositora (UNO), una coalición de 14 partidos, ganó las elecciones con cerca del 55 % de los votos frente al 41 % de Daniel Ortega, quien buscaba la reelección. Las encuestas daban como favorito a Ortega. El 27 de marzo se firmó un protocolo de transición y el 25 de abril de 1990 el FSLN entregó el gobierno. Los contras completaron su desmovilización el 26 de junio de 1990.",
    consequences: "Comenzó la transición de la guerra a la paz. Chamorro gobernó hasta 1997 y fue la primera mujer elegida presidenta en América. Humberto Ortega siguió al frente del Ejército hasta 1995, con atribuciones reducidas.",
    protagonists: ["Violeta Barrios de Chamorro", "Daniel Ortega", "Humberto Ortega", "Unión Nacional Opositora (UNO)"],
    sources: [
      src("Violeta Barrios de Chamorro (CIDOB)", "https://www.cidob.org/lider-politico/violeta-barrios-chamorro"),
      src("Nicaragua: capítulo sobre las elecciones de 1990 (Country Studies, en inglés)", "https://countrystudies.us/nicaragua/19.htm"),
      src("Muere Violeta Chamorro, la primera presidenta elegida de América (BBC Mundo, vía El Mostrador)", "https://www.elmostrador.cl/noticias/2025/06/14/muere-violeta-chamorro-la-primera-presidenta-elegida-de-america-y-que-derroto-a-ortega-en-nicaragua/"),
      src("Violeta Chamorro, el «ama de casa» que pacificó a Nicaragua (AFP, vía CRHoy)", "https://crhoy.com/mundo/violeta-chamorro-el-ama-de-casa-que-pacifico-a-nicaragua/")
    ]
  },
  {
    id: 32,
    date: "1997–2003",
    title: "Corrupción en la era de Arnoldo Alemán",
    category: "nicaragua",
    details: "Arnoldo Alemán gobernó de 1997 a 2002, tras vencer a Daniel Ortega en las elecciones de 1996. En 2000 firmó con Ortega un pacto político que se plasmó en reformas constitucionales. Su sucesor, Enrique Bolaños, lo acusó de corrupción, y en 2004 Transparencia Internacional lo incluyó entre los diez exgobernantes con mayores fondos presuntamente malversados: unos 100 millones de dólares. El 7 de diciembre de 2003 la jueza Juana Méndez lo condenó a 20 años de prisión por lavado de dinero, fraude, malversación de fondos públicos y otros delitos. Su defensa calificó la sentencia de absurda.",
    consequences: "Alemán pasó algunos meses en la cárcel y cumplió casi toda la pena bajo arresto domiciliario. El 17 de enero de 2009 la Corte Suprema anuló la condena por 4 votos contra 2, con el argumento de que no había pruebas; medios internacionales interpretaron la decisión como parte de la disputa y los acuerdos políticos entre los liberales y el gobierno sandinista. En Panamá, la Fiscalía Anticorrupción lo acusó de lavar más de 58 millones de dólares del Tesoro nicaragüense, aunque las cifras varían según la fuente (58, 70 y 74 millones).",
    protagonists: ["Arnoldo Alemán", "Enrique Bolaños", "Daniel Ortega", "Juana Méndez (jueza)"],
    sources: [
      src("Informe Global de la Corrupción 2004 (Transparencia Internacional)", "https://www.transparency.org/en/press/comunicado-de-prensa-lanzamiento-de-la-edicion-en-espanol"),
      src("Sentencia en contra de Arnoldo Alemán Lacayo, 7 de diciembre de 2003 (Monitoreo Especial, vía Fundación Enrique Bolaños)", "https://sajurin.enriquebolanos.org/docs/ME_071203_1.pdf"),
      src("Justicia de Nicaragua absuelve a Arnoldo Alemán (Reuters, vía La Nación)", "https://www.nacion.com/el-mundo/justicia-de-nicaragua-absuelve-a-arnoldo-aleman/VHZX6SLJDFHENJUWDWLUNBI6FE/story/"),
      src("Nicaragua high court overturns corruption conviction of ex-president (JURIST, en inglés)", "https://www.jurist.org/news/2009/01/nicaragua-high-court-overturns/"),
      src("Ordenan en Panamá arresto de ex presidente nicaragüense (Rebelión)", "https://rebelion.org/ordenan-en-panama-arresto-de-ex-presidente-nicaraguense/"),
      src("Panamá pide que se notifique a Alemán (La Prensa, 2009)", "https://www.laprensani.com/2009/12/04/nacionales/9481-panama-pide-que-se-notifique-a-aleman"),
      src("Arnoldo Aleman: Daniel Ortega's False Opponent (Confidencial, vía Havana Times, en inglés)", "https://confidencial.digital/english/arnoldo-aleman-daniel-ortegas-false-opponent/")
    ]
  },
  {
    id: 33,
    date: "2007",
    title: "Daniel Ortega regresa a la presidencia",
    category: "fsln",
    details: "Ortega había perdido las elecciones de 1996 y 2001. El 5 de noviembre de 2006 obtuvo alrededor del 38 % de los votos, frente a entre 28 y 29 % de Eduardo Montealegre. Evitó una segunda vuelta porque la ley exigía al menos 35 % de los votos y una ventaja de más de cinco puntos sobre el segundo lugar. Asumió la presidencia, por un período de cinco años, el 10 de enero de 2007, dieciséis años después de dejar el poder.",
    consequences: "Comenzó el actual período de gobierno del FSLN. La Constitución prohibía la reelección consecutiva, pero en 2011 Ortega pudo postularse tras una sentencia que lo permitió. Después la Constitución se reformó varias veces, incluida una reforma que permite la reelección indefinida.",
    protagonists: ["Daniel Ortega", "Eduardo Montealegre", "Frente Sandinista de Liberación Nacional (FSLN)"],
    sources: [
      src("Daniel Ortega (Biografías y Vidas)", "https://www.biografiasyvidas.com/biografia/o/ortega_daniel.htm"),
      src("Nicaragua: The Election of Daniel Ortega and Issues in U.S. Relations (Servicio de Investigación del Congreso de EE. UU., en inglés)", "https://policyarchive.org/handle/10207/3237"),
      src("Nicaragua's Ortega Wins Presidential Election (Voz de América, en inglés)", "https://www.globalsecurity.org/military/library/news/2006/11/mil-061108-voa04.htm"),
      src("Ortega asume la presidencia de Nicaragua (Página/12)", "https://www.pagina12.com.ar/imprimir/diario/elmundo/4-78889-2007-01-10.html"),
      src("Cómo Daniel Ortega pasó de ser un revolucionario de bajo perfil a ser el hombre fuerte del país (BBC Mundo, vía Prensa Libre)", "https://www.prensalibre.com/?p=10408569"),
      src("Entra en vigor reforma constitucional en Nicaragua (EFE, vía Infobae)", "https://www.infobae.com/america/agencias/2025/02/19/entra-en-vigor-reforma-constitucional-que-da-poder-total-a-ortega-y-murillo-en-nicaragua/")
    ]
  },
  {
    id: 34,
    date: "2018",
    title: "Protestas de abril y crisis sociopolítica",
    category: "nicaragua",
    details: "El 16 de abril de 2018 el gobierno anunció cambios al Instituto Nicaragüense de Seguridad Social (INSS) que reducían las pensiones. El 18 de abril comenzaron las protestas, encabezadas al inicio por estudiantes y jubilados, que fueron reprimidas y se extendieron por el país. El 22 de abril el gobierno derogó la reforma, pero las protestas continuaron y pasaron a pedir la salida de Daniel Ortega y Rosario Murillo. La cifra de muertos es disputada: la CIDH verificó al menos 264 muertes y 1,800 heridos hasta el 11 de julio de 2018; a fines de ese año las autoridades hablaban de 198 muertos y grupos humanitarios de unos 320.",
    consequences: "La CIDH, el grupo de expertos independientes (GIEI) y la ONU documentaron violaciones de derechos humanos, y el gobierno rechazó el informe de la CIDH. Se instaló una Mesa de Diálogo Nacional. En diciembre de 2018 el gobierno expulsó a las misiones de la CIDH y del GIEI, acusándolas de injerencia.",
    protagonists: ["Estudiantes y jubilados", "Daniel Ortega", "Rosario Murillo", "Comisión Interamericana de Derechos Humanos (CIDH)"],
    sources: [
      src("Nicaragua: cronología de una crisis, agosto de 2018 (Directorio Legislativo)", "https://archivo.directoriolegislativo.org/wp-content/uploads/new/2018/09/NIC.-Cronolog%C3%ADa-de-la-crisis.-Agosto-2018.pdf"),
      src("Ficha sobre paz y conflictos: Nicaragua (Institut Català Internacional per la Pau)", "https://www.icip.cat/en/?p=11352"),
      src("CIDH verifica 264 muertes en Nicaragua (Voz de América)", "https://www.vozdeamerica.com/a/oea-analiza-situaci%C3%B3n-de-ddhh-en-nicaragua/4478130.html"),
      src("Nicaragua CIDH (Acento)", "https://acento.com.do/e/Nicaragua-CIDH/"),
      src("Expertos de la CIDH denuncian crímenes de lesa humanidad en Nicaragua (AFP, vía La Patilla)", "https://www.lapatilla.com/2018/12/21/expertos-de-la-cidh-denuncian-crimenes-de-lesa-humanidad-en-nicaragua/"),
      src("Violaciones de derechos humanos y abusos en el contexto de las protestas en Nicaragua, 18 de abril–18 de agosto de 2018 (ONU, Derechos Humanos)", "https://webarchive.archive.unhcr.org/20221001112210if_/https://www.refworld.org.es/pdfid/5b9fe9e84.pdf")
    ]
  },
  {
    id: 35,
    date: "2025",
    title: "Reforma constitucional y copresidencia",
    category: "fsln",
    details: "A finales de enero de 2025 la Asamblea Nacional, de mayoría oficialista, aprobó en segunda legislatura una reforma constitucional, que entró en vigor el 19 de febrero de 2025. La reforma creó la figura de copresidente y copresidenta, cargos que ocupan Daniel Ortega y Rosario Murillo, amplió el período presidencial de cinco a seis años y estableció que la Presidencia coordina a los demás órganos del Estado, que dejan de llamarse poderes. El paquete fue presentado por Ortega y Murillo con el nombre de Ley de protección de los nicaragüenses ante sanciones y agresiones externas.",
    consequences: "La reforma fue criticada por la ONU, la OEA, Estados Unidos, el Parlamento Europeo y sectores de oposición. En 2026 la Asamblea aprobó en primera votación otra reforma que ampliaría el mandato a siete años y excluiría de las elecciones a opositores considerados «traidores a la patria»; su ratificación está prevista para el 18 de enero de 2027. Como la reforma de 2025 amplió el período presidencial a seis años, las elecciones generales, antes previstas para noviembre de 2026, estarían ahora previstas para noviembre de 2027.",
    protagonists: ["Daniel Ortega", "Rosario Murillo", "Asamblea Nacional"],
    sources: [
      src("Entra en vigor reforma constitucional en Nicaragua (EFE, vía Infobae)", "https://www.infobae.com/america/agencias/2025/02/19/entra-en-vigor-reforma-constitucional-que-da-poder-total-a-ortega-y-murillo-en-nicaragua/"),
      src("El Parlamento de Nicaragua aprobó en 2025 la reforma que da poder total a Ortega y Murillo (Forbes Centroamérica)", "https://forbescentroamerica.com/2025/12/29/el-parlamento-de-nicaragua-aprobo-en-2025-la-reforma-que-da-poder-total-a-ortega-y-murillo"),
      src("Nicaragua 2025: la dictadura matrimonial de Ortega y Murillo (Diario Constitucional)", "https://www.diarioconstitucional.cl/2025/02/11/nicaragua-2025-la-dictadura-matrimonial-de-ortega-y-murillo-por-rafael-rodriguez/"),
      src("Nicaragua reforma su Constitución para blindar el poder de Ortega y Murillo (14ymedio)", "https://www.14ymedio.com/internacional/nicaragua-reforma-constitucion-blindar-ortega_1_1130444.html"),
      src("Nueva reforma constitucional acerca a Murillo a la sucesión de Ortega (Forbes Centroamérica, septiembre de 2026)", "https://forbescentroamerica.com/2026/09/17/nueva-reforma-constitucional-acerca-a-murillo-a-la-sucesion-de-ortega-en-nicaragua")
    ]
  }
];

const PHOTO_SOURCES = {
  "William Walker": ["en:William Walker (filibuster)", "es:William Walker"],
  "Charles Henry Davis": ["en:Charles Henry Davis", "es:Charles Henry Davis"],
  "Tomás Martínez": ["es:Tomás Martínez Guerrero"],
  "Máximo Jerez": ["es:Máximo Jerez", "en:Máximo Jerez"],
  "Juan Rafael Mora": ["es:Juan Rafael Mora Porras", "en:Juan Rafael Mora Porras"],
  "José Santos Zelaya": ["es:José Santos Zelaya", "en:José Santos Zelaya"],
  "Rigoberto Cabezas": ["es:Rigoberto Cabezas"],
  "Juan José Estrada": ["es:Juan José Estrada Morales", "en:Juan José Estrada"],
  "Philander C. Knox": ["en:Philander C. Knox", "es:Philander C. Knox"],
  "Benjamín Zeledón": ["es:Benjamín Zeledón", "en:Benjamín Zeledón"],
  "Smedley Butler": ["en:Smedley Butler", "es:Smedley Butler"],
  "Joseph H. Pendleton": ["en:Joseph H. Pendleton", "es:Joseph H. Pendleton"],
  "Adolfo Díaz": ["es:Adolfo Díaz Recinos", "en:Adolfo Díaz"],
  "Augusto C. Sandino": ["es:Augusto C. Sandino", "es:Augusto César Sandino", "en:Augusto César Sandino"],
  "Juan Bautista Sacasa": ["es:Juan Bautista Sacasa", "en:Juan Bautista Sacasa"],
  "Anastasio Somoza García": ["es:Anastasio Somoza García", "en:Anastasio Somoza García"],
  "Rigoberto López Pérez": ["es:Rigoberto López Pérez", "en:Rigoberto López Pérez"],
  "Luis Somoza Debayle": ["es:Luis Somoza Debayle", "en:Luis Somoza Debayle"],
  "Anastasio Somoza Debayle": ["es:Anastasio Somoza Debayle", "en:Anastasio Somoza Debayle"],
  "Carlos Fonseca Amador": ["es:Carlos Fonseca Amador", "en:Carlos Fonseca"],
  "Tomás Borge": ["es:Tomás Borge", "en:Tomás Borge"],
  "Silvio Mayorga": ["es:Silvio Mayorga", "en:Silvio Mayorga"],
  "Germán Pomares": ["es:Germán Pomares Ordóñez"],
  "Pedro Joaquín Chamorro Cardenal": ["es:Pedro Joaquín Chamorro Cardenal", "en:Pedro Joaquín Chamorro Cardenal"],
  "Fernando Cardenal": ["es:Fernando Cardenal", "en:Fernando Cardenal"],
  "Violeta Barrios de Chamorro": ["es:Violeta Barrios de Chamorro", "es:Violeta Chamorro", "en:Violeta Chamorro"],
  "Daniel Ortega": ["es:Daniel Ortega", "en:Daniel Ortega"],
  "Humberto Ortega": ["es:Humberto Ortega", "en:Humberto Ortega"],
  "Eduardo Montealegre": ["es:Eduardo Montealegre"],
  "Rosario Murillo": ["es:Rosario Murillo", "en:Rosario Murillo"],
  "Arnoldo Alemán": ["es:Arnoldo Alemán", "en:Arnoldo Alemán"],
  "Enrique Bolaños": ["es:Enrique Bolaños Geyer", "en:Enrique Bolaños"]
};

const photoCache = {};

function cleanName(name) {
  return name.replace(/\s*\(.*?\)\s*/g, '').trim();
}

function loadPhoto(name) {
  const candidates = PHOTO_SOURCES[name];
  if (!candidates) return Promise.resolve(null);
  if (photoCache[name]) return photoCache[name];

  photoCache[name] = (async () => {
    for (const candidate of candidates) {
      const sep = candidate.indexOf(':');
      const lang = candidate.slice(0, sep);
      const title = candidate.slice(sep + 1);
      try {
        const res = await fetch(`https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`);
        if (!res.ok) continue;
        const data = await res.json();
        if (data.type === 'standard' && data.thumbnail && data.thumbnail.source) {
          const page = (data.content_urls && data.content_urls.desktop && data.content_urls.desktop.page)
            || `https://${lang}.wikipedia.org/wiki/${encodeURIComponent(title)}`;
          return { src: data.thumbnail.source, page };
        }
      } catch (err) {
      }
    }
    return null;
  })();

  return photoCache[name];
}

const timelineContainer = document.getElementById('timeline');
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const modalBody = document.getElementById('modalBody');
const closeModalBtn = document.getElementById('closeModal');

function isRojinegro(event) {
  return event.category === 'sandino' || event.category === 'fsln';
}

function renderTimeline() {
  timelineContainer.innerHTML = '';

  eventsData.forEach((event) => {
    const themeClass = isRojinegro(event) ? 'theme-sandino' : 'theme-nicaragua';

    const itemElement = document.createElement('div');
    itemElement.classList.add('timeline-item');

    itemElement.innerHTML = `
      <div class="card ${themeClass}" onclick="openModal(${event.id})">
        <span class="event-date">${event.date}</span>
        <h3 class="event-title">${event.title}</h3>
        <span class="click-hint">Toca para ver más información ➔</span>
      </div>
    `;

    timelineContainer.appendChild(itemElement);
  });

  setupReveal();
  updateProgress();
}

function setupReveal() {
  const items = document.querySelectorAll('.timeline-item');

  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

  items.forEach(el => observer.observe(el));
}

function updateProgress() {
  const rect = timelineContainer.getBoundingClientRect();
  const reached = window.innerHeight * 0.6 - rect.top;
  const fraction = Math.max(0, Math.min(1, reached / rect.height));
  timelineContainer.style.setProperty('--progress', (fraction * 100).toFixed(2) + '%');
}

window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);

function openModal(id) {
  const event = eventsData.find(e => e.id === id);
  if (!event) return;

  const rojinegro = isRojinegro(event);
  const categoryLabel = {
    nicaragua: 'Historia de Nicaragua',
    sandino: 'Lucha de Sandino',
    fsln: 'Frente Sandinista (FSLN)'
  }[event.category] || 'Historia de Nicaragua';

  modalOverlay.classList.remove('flag-nic', 'flag-fsln');
  modalOverlay.classList.add(rojinegro ? 'flag-fsln' : 'flag-nic');

  const protagonistsList = event.protagonists
    .map(p => `<li class="proto" data-name="${cleanName(p)}"><span class="proto-name">${p}</span></li>`)
    .join('');

  const sourcesList = (event.sources || [])
    .map(s => `<li><a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.title}</a></li>`)
    .join('');

  const contextPanel = event.context
    ? `<section class="panel"><h4>Contexto histórico</h4><p>${event.context}</p></section>`
    : '';

  const prevId = id > 1 ? id - 1 : null;
  const nextId = id < eventsData.length ? id + 1 : null;

  modalBody.innerHTML = `
    <div class="modal-inner">
      <header class="modal-hero">
        <span class="modal-header-date">${event.date}</span>
        <h2 class="modal-header-title">${event.title}</h2>
        <span class="modal-tag">${categoryLabel}</span>
      </header>

      <div class="modal-grid">
        <div class="modal-col">
          ${contextPanel}

          <section class="panel">
            <h4>¿Cómo ocurrió?</h4>
            <p>${event.details}</p>
          </section>

          <section class="panel">
            <h4>Consecuencias</h4>
            <p>${event.consequences}</p>
          </section>
        </div>

        <aside class="modal-col">
          <section class="panel">
            <h4>Protagonistas principales</h4>
            <ul class="proto-list">${protagonistsList}</ul>
            <p class="photo-credit" hidden>Fotos: Wikipedia y Wikimedia Commons. Toca una foto para ver su ficha.</p>
          </section>

          <section class="panel modal-sources">
            <h4>Fuentes consultadas</h4>
            <ul>${sourcesList}</ul>
          </section>
        </aside>
      </div>

      <nav class="modal-nav">
        <button type="button" class="nav-btn" ${prevId ? `onclick="openModal(${prevId})"` : 'disabled'}>◀ Evento anterior</button>
        <button type="button" class="nav-btn" ${nextId ? `onclick="openModal(${nextId})"` : 'disabled'}>Evento siguiente ▶</button>
      </nav>
    </div>
  `;

  modalContent.scrollTop = 0;
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  attachPhotos(modalBody);
}

function attachPhotos(root) {
  const credit = root.querySelector('.photo-credit');

  root.querySelectorAll('.proto').forEach((li) => {
    loadPhoto(li.dataset.name).then((photo) => {
      if (!photo || !li.isConnected) return;

      const link = document.createElement('a');
      link.className = 'proto-img';
      link.href = photo.page;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';

      const img = document.createElement('img');
      img.alt = li.dataset.name;
      img.referrerPolicy = 'no-referrer';
      img.addEventListener('load', () => {
        li.classList.add('has-photo');
        if (credit) credit.hidden = false;
      });
      img.addEventListener('error', () => link.remove());
      img.src = photo.src;

      link.appendChild(img);
      li.prepend(link);
    });
  });
}

function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

closeModalBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
    closeModal();
  }
});

document.addEventListener('DOMContentLoaded', renderTimeline);
