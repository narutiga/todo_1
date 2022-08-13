import Head from "next/head";
import { useTodos } from "src/component/State/Todos";

export default function Index() {
  const {
    state,
    handleChange,
    handleAdd,
    handlDelete,
    handlComplete,
    handlReverse,
  } = useTodos();
  return (
    <div>
      <Head>
        <title>next</title>
      </Head>
      <h1>test</h1>
      <input type="text" value={state.todo} onChange={(e) => handleChange(e)} />
      <button onClick={() => handleAdd(state.todo)}>登録</button>

      <ul>
        {state.incompleteTodos.map((item, index) => {
          return (
            <div key={index}>
              <li>{item}</li>
              <button onClick={() => handlComplete(index)}>完了</button>
              <button onClick={() => handlDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>

      <ul>
        {state.completeTodos.map((item, index) => {
          return (
            <div key={index}>
              <li>{item}</li>
              <button onClick={() => handlReverse(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
