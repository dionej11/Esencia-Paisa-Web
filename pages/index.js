import Head from 'next/head'
import { Inter, Roboto, Julius_Sans_One } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Header } from '@/components/header'
import Link from 'next/link';
import { IoLocationSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaCircleArrowUp } from "react-icons/fa6";
import CustomGallery from '@/components/gallery';
import AudioPlayer from '@/components/sound';

const julius = Julius_Sans_One({ 
  weight: '400',
  subsets: ['latin'],
});
const roboto = Roboto({ 
  weight: '300',
  subsets: ['latin'],
});

export default function Home() {
  const images = Array.from({ length: 34 }, (_, index) => `/img_gallery/${index + 1}.jpg`);
  return (
    <>
      <Head>
        <title>Esencia paisa, pues</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-1.ico" />
      </Head>
      <div className={styles.top}>
        <Link href="#home">
          <FaCircleArrowUp />
        </Link>
      </div>
      <div className={styles.container}>
        <section className={`${styles.home} ${julius.className}`} id='home'>
          <Header/>
          <div className={styles.welcome}>
            <h1>ESENCIA PAISA, PUES</h1>
            <AudioPlayer id_sound="LqoVJPFAbf4"/>
            <p>
              "Medellín es un caleidoscopio de colores y sonidos, 
              cada calle espera ser explorada y contada"
            </p>
            <section>
              <Link href="#gallery">GALERIA</Link>
            </section>
          </div>
        </section>

        <section className={styles.about} id='about'>
          <h1 className={julius.className}>SOBRE EL PROYECTO</h1>
          <p className={roboto.className} >
            El proyecto "Esencia Paisa, Pues" surge como una iniciativa de un grupo de estudiantes del Politécnico Jaime Isaza Cadavid con el propósito de capturar y resaltar la estética única de la venta y comercio del centro de Medellín. La elección de este tema se fundamenta en el deseo de explorar y mostrar la riqueza cultural y la vida cotidiana que define a esta emblemática zona de la ciudad.
            <br/><br/>
            Medellín, como epicentro cultural y comercial, alberga una gran variedad de puestos y locales que reflejan la identidad paisa. A través de este proyecto, buscamos celebrar y preservar este patrimonio cultural, al tiempo que mostramos la esencia y el carácter vibrante de la ciudad.
            <br/><br/>
            La intención es inmortalizar a través de la fotografía la atmósfera única del comercio en Medellín, capturando la autenticidad, la historia y la diversidad que los define. A través de esta exploración visual, aspiramos a sensibilizar a la comunidad sobre la importancia de estos espacios en la configuración de la identidad local, y fomentar un mayor aprecio por el entorno urbano que nos rodea.
          </p>
        </section>

        <section className={styles.locations} id='locations'>
          <h1 className={julius.className}>UBICACIONES</h1>
          <AudioPlayer id_sound="yMlaFAsr9DM"/>
          <section className={roboto.className}>
            <div>
              <IoLocationSharp />
              <Link target='_blank' href="https://maps.app.goo.gl/xwSFaCxyhqSoV9Mh9">Centro comercial El Palacio</Link>
            </div>
            <div>
              <IoLocationSharp />
              <Link target='_blank' href="https://maps.app.goo.gl/KcjXxtNyNv93Xasj8">El hueco</Link>
            </div>
            <div>
              <IoLocationSharp />
              <Link target='_blank' href="https://maps.app.goo.gl/ikiAg8iz6B6mymVH6">Estación San Antonio</Link>
            </div>
          </section>
        </section>

        <section className={styles.contact} id='contact'>
          <h1 className={julius.className}>CONTACTO</h1>
          <section className={roboto.className}>
            <div>
              <FaUser />
              <p>Angie Melisa Acevedo Carrillo</p>
            </div>
            <div>
              <FaUser />
              <p>Silvana Gómez Gómez</p>
            </div>
            <div>
              <FaUser />
              <p>Isabella Jurado Blandón</p>
            </div>
            <div>
              <FaUser />
              <p>David Molina Jiménez</p>
            </div>
            <div>
              <FaUser />
              <p>Andres Felipe Pantoja Arias</p>
            </div>
          </section>
        </section>

        <section className={styles.gallery} id='gallery'>
          <h1 className={julius.className}>GALERIA</h1>
          <p className={roboto.className} >
            En el corazón del centro de Medellín, donde las calles bulliciosas y los colores vibrantes convergen, se encuentra un universo de tesoros que capturan la esencia paisa. 
            <br/><br/>
            El proyecto fotográfico "Esencia paisa, pues" nos invita a un viaje visual a través de los mercados locales, donde la vida cotidiana se expresa a través de objetos cuidadosamente seleccionados y presentados.
            <br/><br/>
            La riqueza de la esencia paisa se despliega en cada rincón del mercado. Collares artesanales, tejidos a mano y tesoros tradicionales se exhiben con orgullo. Cada pieza cuenta una historia de habilidad y dedicación, revelando la conexión intrínseca entre el arte local y la identidad paisa. Esta fotografía invita a explorar la herencia cultural a través de los objetos cotidianos que encierran el espíritu vibrante de Medellín.
            <br/><br/>
            A través de estas fotografías, "Esencia paisa, pues" nos invita a apreciar la autenticidad, creatividad y diversidad que se entrelazan en el tejido cultural de Medellín. Cada imagen es más que un simple retrato; es un testimonio visual de cómo la esencia paisa se manifiesta en la vida diaria y en los objetos que dan forma a la identidad de esta ciudad colombiana.
          </p>
          <FaArrowDown />
        </section>
      </div>
      <CustomGallery images={images}/>
    </>
  )
}
