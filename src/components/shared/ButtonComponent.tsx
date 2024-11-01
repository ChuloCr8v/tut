import { Button } from "antd";
import { ButtonType } from "antd/es/button";
import { ReactNode } from "react";

type Props = {
  title: ReactNode;
  type?: ButtonType;
  onclick: () => void;
  className?: string;
};

const ButtonComponent = (props: Props) => {
  return (
    <Button
      onClick={props.onclick}
      type={props.type}
      className={props.className}
    >
      {props.title}
    </Button>
  );
};

export default ButtonComponent;
