import Link from 'next/link';
import link from 'next/link';

function Home(){
    return (
        <div>
            <h1>Página Inicial</h1>
           
            <Link href="/sobre">
                <a>Acessar página sobre</a>
            </Link>
        </div>
    )
}


export default Home