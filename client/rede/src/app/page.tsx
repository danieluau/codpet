"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirecionar para /main após a montagem do componente
    router.push('/main');
  }, []); // O array vazio significa que o efeito será executado apenas uma vez, após a montagem.

  return <></>;
}


// "use client"

// import { useRouter } from 'next/navigation'

// export default function Home() {

//   const router = useRouter()
//   router.push('/main')

//   return (
//     <>
//     </>
//   )
// }
