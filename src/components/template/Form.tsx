import { useState } from 'react';
import Button from './Button';
import InputText from './InputText';

interface ProductFormProps {
  onSubmit: (data: any) => void;
}

export default function ProductForm(props: ProductFormProps) {
  const [data, setData] = useState({
    name: '',
    price: 0,
    description: '',
    image: '',
  });

  function handleFieldChange(field: string, value: any) {
    setData({
      ...data,
      [field]: value,
    });
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log('Enviando', data);
    props.onSubmit(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputText
        label="Nome"
        onChange={(v) => handleFieldChange('name', v)}
        value={data.name}
      />

      <Button type="submit" className="bg-blue-800 hover:bg-blue-700 mt-2">
        Enviar
      </Button>
    </form>
  );
}
