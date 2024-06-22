export interface TarjetaProps {
    titulo: string,
    imagen: string,
    autor: string,
    fecha: Date,
    resumen: string,
    archivo: string,
    autor_a: string,
    fecha_a: string,
    id: number,
    db: string
};

export const dastosIniciales: TarjetaProps[] = [
    {
        titulo: "Intermezzo entre elecciones judiciales",
        imagen: "/images/Intermezzo.png",
        autor: "Neyer Zapata Vásquez",
        fecha: new Date('2024-02-04'),
        resumen: `Desde los juristas independientes hasta la autoprorróga, …
      … al enfrentamiento entre alas Arcista y Evista, …
      … a la alianza MAS-Evista-CC vs MAS-Arcista-TCP,…
      … a los bloqueos del MAS-Evista que fuerza la convocatoria a elecciones…
      … a los convites orureños que fuerzan levantar bloqueos, …
      … a la necesidad de aprobar préstamos que obligan a Arce ceder, …`,
        archivo: "",
        autor_a: "",
        fecha_a: "",
        id: 1,
        db: "intermezzo_base_de_datos"
    },
    {
        titulo: "Némesis de Morales, o acerca de Luis Fernando Camacho",
        imagen: "/images/Nemesis.png",
        autor: "Neyer Zapata Vázquez",
        fecha: new Date('2024-02-22'),
        resumen: `Biblia y carta en mano: elección presidencial y renuncia de Evo Morales. Camacho como Gobernador: censo, paro cívico y aprehensión. Santos inocentes... y directo a Chonchocoro. Santa Cruz en ausencia de su Gobernador: conflicto acerca de la suplencia`,
        archivo: "",
        autor_a: "",
        fecha_a: "",
        id: 2,
        db: "nemesis_base_de_datos"
    },
    {
        titulo: "EL TRIBUNAL CONSTITUCIONAL DE BOLIVIA Y SUS PRIMEROS MAGISTRADOS",
        imagen: "/images/Vol1.png",
        autor: "Neyer Zapata Vázquez",
        fecha: new Date('1998-12-1'),
        resumen: `Jorge Quiroga, Vicepresidente de Bolivia, lanza la convocatoria oficial para los interesados en integrar el Tribunal Constitucional.`,
        archivo: "Vol1_analisis",
        autor_a: "Neyer Zapata Vázquez",
        fecha_a: "01/01/2021",
        id: 3,
        db: ""
    },
    {
        titulo: "CONFLICTO TCB-MILITARES: JURISDICCIÓN ORDINARIA VS JURISDICCIÓN MILITAR",
        imagen: "/images/Vol4.png",
        autor: "Neyer Zapata Vázquez",
        fecha: new Date('2005-12-1'),
        resumen: `Totalmente errático es el tramo inaugural del juicio de responsabilidades por los sucesos de octubre. Tanto, que el Tribunal Constitucional tuvo que suspenderle jurisdicción y competencia al Fiscal General de la República.`,
        archivo: "Vol4_analisis",
        autor_a: "Anónimo",
        fecha_a: "Sin fecha",
        id: 4,
        db: ""
    },
    {
        titulo: "CONFLICTO POR EL CENSO: COMITÉ CÍVICO SANTA CRUZ VS GOBIERNO (2022)",
        imagen: "/images/Vol5.png",
        autor: "Neyer Zapata Vázquez",
        fecha: new Date('2022-12-1'),
        resumen: `Cabildo en Santa Cruz da plazo de 21 días al Gobierno para garantizar Censo 2023 y advierte con paro indefinido.`,
        archivo: "",
        autor_a: "",
        fecha_a: "",
        id: 5,
        db: ""
    },
    {
        titulo: "II Fondioc Desfalco Millonario",
        imagen: "/images/fondioc.png",
        autor: "IIJP, Franklin Aspety Zambrana",
        fecha: new Date('2024-4-25'),
        resumen: `Desde el mal manejo de los recursos del Fondo Indígena, ... … a obras fantasma que ocasionaron un gran daño al Estado, … … a dirigentes recibiendo dinero del Fondioc en sus cuentas particulares,… … al millonario escándalo de corrupción en Bolivia,… … a la justicia inhumana y podrida sumisa al MAS, … … a la muerte de Marco A. Aramayo, principal denunciante del desfalco.`,
        archivo: "",
        autor_a: "",
        fecha_a: "",
        id: 6,
        db: ""
    },
];