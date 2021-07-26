import Subdivisao from './Subdivisao';
import styles from '../styles/Linha.module.css';
export default function Linha(props) {
  return (
    //passando propriedade
    <div className={styles.linha}>
      <Subdivisao preta={props.preta}></Subdivisao>
      <Subdivisao preta={!props.preta}></Subdivisao>
      <Subdivisao preta={props.preta}></Subdivisao>
      <Subdivisao preta={!props.preta}></Subdivisao>
      <Subdivisao preta={props.preta}></Subdivisao>
      <Subdivisao preta={!props.preta}></Subdivisao>
      <Subdivisao preta={props.preta}></Subdivisao>
      <Subdivisao preta={!props.preta}></Subdivisao>
    </div>
  );
}
