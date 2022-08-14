import { Button } from "@mantine/core";
import { Layout } from "src/component/Layout";

export const Completed = (props) => {
  return (
    <Layout
      h2={<h2 className="text-lg text-gray-500 text-center">完了済のTODO</h2>}
      ul={
        <ul>
          {props.state.completeTodos.map((item, index) => {
            return (
              <div key={index} className="flex justify-between mb-4">
                <li>{item}</li>
                <Button
                  color="cyan"
                  radius="xl"
                  onClick={() => props.handlReverse(index)}
                  className="ml-4"
                >
                  戻す
                </Button>
              </div>
            );
          })}
        </ul>
      }
    />
  );
};
