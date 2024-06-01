import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center flex-col w-full top-0">
      <div
        className="flex justify-center items-center  h-[500px] flex-col "
        style={{
          backgroundImage:
            "url(https://fcjyp.umss.edu.bo/wp-content/uploads/2023/01/pexels-sora-shimazaki-5668772.jpg)",
          backgroundSize: "cover",
          width: "100%",
          backgroundBlendMode: "multiply",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "rgba(181, 143, 149, 0.69)",
        }}
      >
        <div
          className="flex items-center color-white"
          style={{
            fontFamily: "Merriweather,Georgia,Times New Roman,serif",
            fontSize: "55px",
            color: "white",
            letterSpacing: "5px",
            lineHeight: "1.4em",
            textShadow: "0.08em 0.08em 0.08em rgba(0, 0, 0, 0.4)",
          }}
        >
          <h2>Cronologías Jurídicas y Políticas </h2>
        </div>
        <Link href="/cronologias" className="hover:transform hover:translateY(-5px) hover:translateX(-5px)">
          <div
            className="flex items-center justify-center color-white flex-col mt-5  cronologia"

            style={{
              borderRadius: "20px 20px 20px 20px",
              overflow: "hidden",
              boxShadow: "inset 0px 2px 18px 0px rgba(255, 255, 255, 0.63)",
              transition: "transform 300ms ease 0ms",
              width: "100px",
              height: "150px",
            }}
          >
            <div
              className="flex items-center justify-center color-white"
              style={{
                height: "65px",
                width: "65px",
                backgroundColor: "#b45f72",
                borderRadius: "100%",
                boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0.2)",
              }}
            >
              <span
                className="material-symbols-outlined text-white"
                style={{
                  fontSize: "30px",
                }}
              >
                schedule
              </span>
            </div>
            <span
              className="text-white px-auto"
              style={{
                fontFamily: "Merriweather,Georgia,Times New Roman,serif",
                fontSize: "18px",
                textAlign: "center",
                width: "100%",

                paddingTop: "10px",
              }}
            >
              Cronologías
            </span>
          </div>
        </Link>
      </div>
      <div
        className="w-[50%] mx-auto flex justify-center  flex-col "
        style={{}}
      >
        <h2
          className="mt-10"
          style={{
            fontFamily: "Merriweather,Georgia,Times New Roman,serif",
            fontSize: "36px",
            fontWeight: "700",
            color: "#333",
          }}
        >
          Antecendentes
        </h2>

        <p
          className="my-5"
          style={{
            color: "#666",
            fontSize: "18px",
            fontFamily: "Helvetica, Arial, Lucida, sans-serif",
            fontWeight: "300",
            textShadow: "none",
          }}
        >
          El objetivo del sistema es proporcionar una plataforma robusta y
          eficiente que facilite la gestión de información, desde la captura
          automatizada de datos hasta la generación de cronologías y resúmenes
          informativos, utilizando técnicas avanzadas de procesamiento de datos
          y aprendizaje automático. Con este sistema, el IIJP podrá mejorar
          significativamente su capacidad de respuesta y análisis frente a los
          acontecimientos jurídicos y políticos actuales, potenciando su papel
          como un centro académico líder en la generación y difusión de
          conocimiento relevante. A través de este esfuerzo, el IIJP no sólo
          optimizará sus procesos internos, sino que también contribuirá de
          manera más efectiva al debate y la comprensión pública de temas
          jurídicos y políticos críticos.
        </p>
      </div>
    </main>
  );
}
