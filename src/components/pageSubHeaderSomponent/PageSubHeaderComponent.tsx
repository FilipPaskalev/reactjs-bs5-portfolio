type Props = {
  label: string;
  className?: string;
};

const PageSubHeaderComponent = ({ label, className = "mb-5" }: Props) => {
  return <h3 className={className}>{label}</h3>;
};

export default PageSubHeaderComponent;
