import InputText from '@/components/template/InputText';
import { useState } from 'react';
import Image from 'next/image';
import { WarningIcon } from '@/components/icons';
export default function Login() {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  function validarCampos(tempo = 5000) {
    if (!email?.trim()) {
      setError('Preencha o campo email');
      setTimeout(() => setError(''), tempo);
    } else if (!senha?.trim()) {
      setError('Preencha o campo senha');
      setTimeout(() => setError(''), tempo);
    }
  }

  function submit(e: any) {
    e.preventDefault();
    validarCampos();
    if (mode === 'login') {
      console.log('Fazendo login com email:', email, 'e senha:', senha);
    } else {
      console.log('Cadastrando com email:', email, 'e senha:', senha);
    }
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <div className="h-screen w-full object-cover">
          <img
            src="/banner2.webp"
            alt="Banner de e-commerce"
            className="h-screen w-full object-cover"
          />
        </div>
      </div>

      <form className="m-10 w-full md:w-1/2 lg:w-1/3 ">
        {error ? (
          <div className="flex items-center bg-red-100 p-4 rounded-lg text-red-700 mb-5">
            {WarningIcon} <span className="ml-3">{error}</span>
          </div>
        ) : null}
        <h1 className="text-3xl font-bold mb-5">
          {mode === 'login' ? 'Login' : 'Cadastre-se na Plataforma'}{' '}
        </h1>
        {mode === 'login' ? (
          <>
            <InputText
              label="Email"
              value={email}
              onChange={setEmail}
              required={true}
            />
            <InputText
              label="Senha"
              type="password"
              value={senha}
              onChange={setSenha}
            />
          </>
        ) : (
          <>registrar</>
        )}

        <button
          onClick={submit}
          className={`
            w-full bg-indigo-500 hover:bg-indigo-400
            text-white rounded-lg px-4 py-2 mt-6
          `}
        >
          {mode === 'login' ? 'Entrar' : 'Cadastrar'}
        </button>
      </form>

      <hr />
    </div>
  );
}
