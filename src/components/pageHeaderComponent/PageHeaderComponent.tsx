type Props = {
  label: string;
  className?: string;
};

const PageHeaderComponent = ({ label, className = "mb-5" }: Props) => {
  return <h2 className={className}>{label}</h2>;
};

export default PageHeaderComponent;
