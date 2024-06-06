import Image from "next/image";
const Perfil = () => {
    return (
        <Image src={"/Vitor.png"} width={300} height={300} alt="me" className="rounded-full"/>
    )
};

export default Perfil;