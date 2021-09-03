import { useState } from "react";
import Cliente from "../core/Cliente";
import Button from "./Button";
import Input from "./Input";


interface FormProps {
  cliente: Cliente;
  cancel?: () => void;
  changeClient?: (cliente: Cliente) => void;
}


export default function Form(props: FormProps) {
  const id = props.cliente?.id
  const [nome, setNome] = useState(props.cliente?.nome ?? '')
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
  return (
    <div>
      {id ? (
        <Input
          readOnly
          text='Código'
          value={id}
          className='mb-5'
        />
      ) : false}
      <Input
        text='Nome'
        value={nome}
        onChange={setNome}
        className='mb-5'
      />
      <Input
        text='Idade'
        type='number'
        value={idade}
        onChange={setIdade}
      />

      <div className='flex justify-end mt-7'>
        <Button cor="blue" className="mr-2"
          onClick={() => props.changeClient?.(new Cliente(nome, +idade, id))}
        >
          {id ? 'Alterar' : 'Salvar'}
        </Button>
        <Button onClick={props.cancel}>
          Cancelar
        </Button>
      </div>
    </div>
  )
}