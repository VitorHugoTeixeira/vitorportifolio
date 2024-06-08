import Image from "next/image";

interface props {
    gap?: string,
    border?: string
}


const Perfil = (props: props) => {
    return (
        <Image src={"/Vitor.png"} width={221} height={221} alt="me" className={`rounded-full ${props.gap} ${props.border}`}/>
    )
};

export default Perfil;