import { ButtonElement } from './Button.styles';
import { ButtonVariants } from './Button.variants';

export const Button = ({
  variant,
  onClick,
  children,
  disabled,
}: ButtonProps) => (
  <ButtonElement disabled={disabled} onClick={onClick} $variant={variant}>
    {children}
  </ButtonElement>
);

type ButtonProps = React.PropsWithChildren<{
  onClick?: () => void;
  disabled?: boolean;
  variant?: ButtonVariants;
}>;
