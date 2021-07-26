import Linha from './Linha';
//fix the bug
export default function Tabuleiro() {
  return (
    <div>
      <Linha></Linha>
      <Linha preta></Linha>
      <Linha></Linha>
      <Linha preta></Linha>
      <Linha></Linha>
      <Linha preta></Linha>
      <Linha></Linha>
      <Linha preta></Linha>
    </div>
  );
}
