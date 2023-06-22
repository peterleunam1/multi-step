import { useContext, useState } from "react";
import { UserProps } from "@/interfaces";
import { LayoutForm, Sidebar, MainComponent, Input } from "@/components";
import { FormS } from "@/styled-components";
import { useNextRoute } from "@/hooks";
import { ContextUser } from "@/context";

export const Home = () => {
  const [user, setuser] = useState({});
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const { onPushRoute } = useNextRoute("/select-plan");
  const { setUser } = useContext(ContextUser);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setuser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const { name, email, phone } = user as UserProps;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && email && phone) {
      setUser({
        name,
        email,
        phone,
      });
      onPushRoute();
    } else {
      setIsEmpty(true);
    }
  };

  const handleNext = (e: any) => {
    handleSubmit(e);
  };

  return (
    <LayoutForm>
      <Sidebar number_page={1} />
      <MainComponent
        back_path=""
        title="Personal Info"
        subtitle="Please provide your name, email address, and phone number"
        back_off={false}
        onClick={handleNext}
      >
        <FormS onSubmit={handleSubmit}>
          <Input
            name="name"
            type="text"
            label="Name"
            placeholder="e.g Sthephen King"
            onChange={handleChange}
            isEmpty={isEmpty}
          />
          <Input
            name="email"
            type="text"
            label="Email Address"
            placeholder="e.g sthephenking@lorem.com"
            onChange={handleChange}
            isEmpty={isEmpty}
          />
          <Input
            name="phone"
            type="text"
            label="Phone Number"
            placeholder="e.g +1 234 567 890"
            onChange={handleChange}
            isEmpty={isEmpty}
          />
          <button />
        </FormS>
      </MainComponent>
    </LayoutForm>
  );
};
