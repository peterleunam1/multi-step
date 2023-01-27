export interface MainComponentProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  back_path: string;
  back_off?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  justify?: string;
  visilityButoons?: boolean;
  text_regular?: string
}
