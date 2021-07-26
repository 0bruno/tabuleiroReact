//importando o CSS do componente.
import styles from '../styles/Subdivisao.module.css';
export default function Subdivisao(props) {
  return (
    //using fragment
    <>
      <div
        style={{
          backgroundColor: props.preta ? '#000' : '#fff',
        }}
        className={styles.subdivisao}
      ></div>
    </>
  );
}
