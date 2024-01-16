import "./homeCardAtom.module.css"
import cardColoredStyles from '../../../styles/cardColored.module.css'
//Estilos compartidos por varios componentes
import styles from './homeCardAtom.module.css'
//Estilos propios del componente

export function HomeCardAtom({ idIcon, icon, titleIcon }) {
  return (
    <div className={cardColoredStyles['card--colored']}>
      {/*Se pone el nombre del archivo que he importado y luego, normalmente con puntos (si hay guiones se usan corchetes), se añade la clase*/}
        <div className={styles['card--padding']} id={`${idIcon}--background`}>
            <i className={icon}/>
        </div>
        <h4>{titleIcon}</h4>
    </div>
  );
}