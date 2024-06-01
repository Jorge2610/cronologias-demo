import Link from "next/link";
import IMAGE from "next/image";

const Header = () => {
  return (
    <header
      className="flex justify-center items-center "
      style={{
        backgroundImage: `url('https://fcjyp.umss.edu.bo/wp-content/uploads/2021/11/5650360.png'), linear-gradient(198deg, #561427 66%, #d67e90 100%)`,
        backgroundSize: "cover",
        width: "100%",
        backgroundBlendMode: "multiply",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "85px",
      }}
    >
      <nav className="" style={{ width: "60%" }}>
        <div className="container  flex  justify-between items-center ">
          <div className="text-white" style={{}}>
            <div
              className="bg-white p-2 rounded h-20"
              style={{
                padding: "5px",
                borderRadius: "10px",
                width: "180px",
                boxShadow:
                  "0 4px 0px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)",
                paddingLeft: "10px",
                paddingTop: "1px",
                paddingBottom: "1px",
                height: "70px",
              }}
            >
              <IMAGE
                src={"/images/image.png"}
                alt={"Logo"}
                width={200}
                height={75}
                priority
              />
            </div>
          </div>
          <div
            className="flex  space-x-10  "
            style={{
              fontFamily: "Montserrat, Helvetica, Arial, sans-serif",
              fontWeight: "600",
              color: "white",
              fontSize: "80%",
              height: "100%"
            }}
          >
            <Link href="/" className="grow text-white  link hover:text-gray-400 " >
              Inicio
            </Link>
            <Link href="/about" className="text-white link hover:text-gray-400">
              Archivo
            </Link>
            <Link href="/about" className="text-white link hover:text-gray-400">
              Cronologias
            </Link>

            <Link href="/about" className="text-white link hover:text-gray-400">
              Samed
            </Link>
            <Link href="/contact" className="text-white link hover:text-gray-400">
              IIJP
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
