import { Button, Input } from "@mantine/core";
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
        <Button
          color="cyan"
          radius="xl"
          onClick={() => props.handleAdd(props.state.todo)}
          className="ml-4"
        >
          登録
        </Button>
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
                  <Button
                    color="cyan"
                    radius="xl"
                    onClick={() => props.handlComplete(index)}
                    className="ml-4"
                  >
                    完了
                  </Button>
                  <Button
                    color="cyan"
                    radius="xl"
                    onClick={() => props.handlDelete(index)}
                    className="ml-4"
                  >
                    削除
                  </Button>
                </div>
              </div>
            );
          })}
        </ul>
      }
    />
  );
};
