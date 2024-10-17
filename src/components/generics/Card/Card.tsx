import { CardContainer } from './Card.styles';

export function Card({ children, className }: CardProps) {
  return <CardContainer className={className}>{children}</CardContainer>;
}

type CardProps = React.PropsWithChildren<{
  className?: string;
}>;
