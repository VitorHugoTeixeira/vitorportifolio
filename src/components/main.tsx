import Perfil from "./perfil";

const Main = () => {
    return (
        <div className="grid grid-cols-2 gap-10 h-screen w-screen bg-[#1E0342] text-white p-20">
            <div className="flex justify-start items-center gap-6">
                <Perfil />
                <div>
                    <h1 className="text-4xl">Hi, i’m Vitor Hugo!</h1>
                    <h3 className="text-xl text-gray-400">Software Developer</h3>
                </div>
            </div>
            <div className="flex justify-center items-start gap-2 flex-col">
                <h3 className="text-2xl">Languages</h3>
                <div>
                    <span></span>
                    <h4 className="text-xl text-gray-400">EN - A2</h4>
                    <span></span>
                    <h4 className="text-xl text-gray-400">PT-BR Native Speaker</h4>
                </div>
            </div>
            <div className="flex justify-start items-start flex-col">
                <h3 className="text-2xl">Experience</h3>
                <h4 className="text-xl text-gray-400">1 year working as Software Devoloper, in
                    a company Ask Systems.</h4>
            </div>
            <div className="flex justify-start items-center">
                <h3>College</h3>
                <h4>
                    Graduate in Systems for
                    Internet - FATEC São
                    Roque
                </h4>
            </div>
            <div className="flex justify-start items-center"></div>
            <div className="flex justify-start items-center">
                <button>Contact me</button>
            </div>
        </div>
    )
};

export default Main;