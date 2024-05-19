type Props = {
  label: string;
  className?: string;
};

const PageHeader = ({ label, className = "mb-5" }: Props) => {
  return <h2 className={className}>{label}</h2>;
};

export default PageHeader;
