import { Brasil, UnitedStates } from "./icons";
import Perfil from "./perfil";

const Main = () => {
    return (
        <div className="grid grid-cols-4 h-screen w-screen bg-[#1E0342] text-white">
            <div className="flex justify-center items-center col-span-2">
                <Perfil gap="mr-[28px]" border="border-2 border-solid border-white"/>
                <div className="">
                    <h1 className="text-[36px] font-bold">Hi, i’m Vitor Hugo!</h1>
                    <h3 className="text-[24px] text-gray-400 font-bold">Software Developer</h3>
                </div>
            </div>
            <div className="flex justify-center items-center flex-col col-span-2">
                <h3 className="self-center text-[24px] font-bold mb-[8px]">Languages</h3>
                <div>

                    <div className="flex justify-start items-center">
                        <UnitedStates />
                        <h4 className="ml-[10px] text-[18px] text-gray-400 ">EN - A2</h4>
                    </div>
                    <div className="flex justify-center items-center">
                        <Brasil />
                        <h4 className="ml-[10px] text-[18px] text-gray-400">PT-BR Native Speaker</h4>
                    </div>
                </div>
            </div>
            <div className=" flex-col col-span-2 flex justify-center items-center mb-[8px]">
                <h3 className="text-[24px]">Experience</h3>
                <h4 className="text-[18px] text-gray-400">I worked for a year at Ask Systems as a Junior Developer.</h4>
            </div>
            <div className="flex justify-center items-center flex-col  col-span-2 ">
                <h3 className="text-[24px] font-bold">Education</h3>
                <h4 className="text-[18px] text-gray-400">
                    Graduate in Systems for Internet - FATEC São Roque
                </h4>
            </div>
            <div className="col-span-2 flex justify-center items-center ">
                
            </div>
            <div className="col-span-2 flex justify-center items-center">
                <a href="" className="shadow border-1 border-white p-3 bg-[#1c456d] w-[50%] flex justify-center items-center rounded-full text-[20px] font-bold">Contact me</a>
            </div>
        </div>
    )
};

export default Main;