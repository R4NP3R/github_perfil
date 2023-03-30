import { useEffect, useState } from "react"

const Formulario = () => {
    const [MateriaA, setMateriaA] = useState(0);
    const [MateriaB, setMateriaB] = useState(0);
    const [MateriaC, setMateriaC] = useState(0);

    useEffect(() => {
        console.log("o estado mudou")
    }, [MateriaA]);
    
    const renderizaResultado = () => {
        const soma = MateriaA + MateriaB + MateriaC;
        const media = soma / 3;

        if (media >= 7) {
            return(
                <p>Você foi Aprovado!</p>
            )
        } else {
            return(
                <p>Você foi Reprovado!</p>
            )
        }
    }

    return (
    <form>
        <ul>
            {[1,2,3,4,5].map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
        <input type="number" placeholder="Nota da matéria A" onChange={evento => setMateriaA(parseInt(evento.target.value))}/>
        <input type="number" placeholder="Nota da matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
        <input type="number" placeholder="Nota da matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
        {renderizaResultado()}
    </form>
)
}

export default Formulario