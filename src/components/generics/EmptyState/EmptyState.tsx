export function EmptyState({ description }: EmptyStateProps) {
  return (
    <section>
      <p>{description}</p>
    </section>
  );
}

type EmptyStateProps = {
  description: string;
};
