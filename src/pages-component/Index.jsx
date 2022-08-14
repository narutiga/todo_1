import { Input } from "@mantine/core";
import { ButtonGreen } from "src/component/ButtonGreen";
import { IconAt } from "@tabler/icons";
import { Layout } from "src/component/Layout";

export const Index = (props) => {
  return (
    <Layout
      input={
        <Input
          icon={<IconAt />}
          placeholder="TODOを入力してください"
          type="text"
          value={props.state.todo}
          onChange={(e) => props.handleChange(e)}
          className="mb-4"
        />
      }
      button={
        <ButtonGreen onClick={() => props.handleAdd(props.state.todo)}>
          登録
        </ButtonGreen>
      }
      h2={
        <h2 className="mt-8 text-lg text-gray-500 text-center">未完了のTODO</h2>
      }
      ul={
        <ul>
          {props.state.incompleteTodos.map((item, index) => {
            return (
              <div key={index} className="flex justify-between mb-4">
                <li>{item}</li>
                <div>
                  <ButtonGreen onClick={() => props.handlComplete(index)}>
                    完了
                  </ButtonGreen>

                  <ButtonGreen onClick={() => props.handlDelete(index)}>
                    削除
                  </ButtonGreen>
                </div>
              </div>
            );
          })}
        </ul>
      }
    />
  );
};
