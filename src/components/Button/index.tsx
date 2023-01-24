import { ComponentPropsWithoutRef, FC } from "react";
import s from "./Button.module.css";

type Props = {} & ComponentPropsWithoutRef<"button">;

const Button: FC<Props> = ({ children, ...props }) => {
  return (
    <button className={s.button} {...props}>
      {children}
    </button>
  );
};
export default Button;
