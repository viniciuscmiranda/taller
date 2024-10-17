import { Button } from '@/components/generics/Button';
import { ErrorDescription, ErrorContainer } from './Error.styles';

export function ErrorMessage({ onRetry, description }: ErrorMessageProps) {
  return (
    <ErrorContainer>
      <ErrorDescription>{description}</ErrorDescription>
      <Button variant="secondary" onClick={onRetry}>
        Retry
      </Button>
    </ErrorContainer>
  );
}

type ErrorMessageProps = {
  description: string;
  onRetry?: () => void;
};
