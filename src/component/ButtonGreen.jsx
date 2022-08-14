import { Button } from "@mantine/core";

export const ButtonGreen = (props) => {
    return (
      <Button
      color="cyan"
      radius="xl"
      onClick={props.onClick}
      className="ml-4"
    >
      {props.children}
    </Button>

    )
};

     
    