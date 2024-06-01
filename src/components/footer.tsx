import IMAGE from "next/image";
const Footer = () => {
  return (
    <footer
      className="flex justify-center items-center"
      style={{
        backgroundImage:
          "url('https://fcjyp.umss.edu.bo/wp-content/uploads/2021/11/5650360.png')",
        backgroundSize: "cover",
        backgroundColor: "#72243a",
        width: "100%",
        backgroundBlendMode: "multiply",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "50px",
      }}
    >
      <div
        className="container flex justify-between items-center"
        style={{ paddingTop: "10px" }}
      >
        <div
          className="text-white flex items-center"
          style={{ height: "100%", fontFamily: "Montserrat, Helvetica, Arial, sans-serif", fontSize: "60%" }}
        >
          <IMAGE
            src="/images/logo_umss.png"
            alt="UMSSBOLOFICIAL"
            width={30}
            height={30}
          />
          <p className="ml-2 font-bold ">
            DERECHOS RESERVADOS © 2024 {" "}
            <a
              href="https://www.umss.edu.bo/"
              target="_blank"
              style={{ color: "white", textDecoration: "underline", fontWeight: "bold" }}
            >
              {" "}
               UNIVERSIDAD MAYOR DE SAN SIMON
            </a>{" "}
          </p>
         
        </div>
        <div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
