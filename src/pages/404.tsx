import Link from "next/link"
import Head from "next/head"

export default function NotFound() {
    return (
        <>
        <Head><title>404 error</title></Head>
        <div>
            <h1>404</h1>
            <div>
                <p>Oops , não conseguimos encontra essa página</p>
                <span>Clique no botão abaixo para ser redirecionado à Página Inicial</span>
            </div>
            <Link href="/">
                Ir para Página Inicial
            </Link>
        </div>
        </>
    )
}