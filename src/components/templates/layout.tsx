import { LayoutProps } from "../../interfaces";
import { Layout } from "../../styled-components";

const LayoutForm = ({ children }: LayoutProps) => {
  return (
    <Layout>
      <section>{children}</section>
    </Layout>
  );
};
export default LayoutForm;
