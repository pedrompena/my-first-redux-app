import Chairs from "../../img/chairs.png";

const Home = () => {
    return (
        <div className="flex h-screen overflow-hidden">
            <div className="w-2/5">
                <img src={Chairs} alt="Emty chairs" className="w-full h-full object-cover"/>
            </div>
            <div className="w-3/5 flex justify-center items-center flex-col px-10">
                <h2 className="text-4xl font-bold font-lato">Busca tu pelicula...</h2>
                <input className="bg-red-50 font-lato w-full my-3 h-9 p-1"/>
                <div>
                    <button>
                        Buscar
                    </button>
                    <button>
                        Limpiar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;