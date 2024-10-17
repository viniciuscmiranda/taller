import { ErrorMessage, RetryButton, ErrorContainer } from './Error.styles';

export function Error({ onRetry, description }: ErrorProps) {
  return (
    <ErrorContainer>
      <ErrorMessage>{description}</ErrorMessage>
      <RetryButton onClick={onRetry}>Retry</RetryButton>
    </ErrorContainer>
  );
}

type ErrorProps = {
  description: string;
  onRetry?: () => void;
};
