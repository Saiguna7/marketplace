import { cn } from "@/lib/utils";
type Props = {
  classStyles: string;
  btnName: string;
  handleClick?: () => void;
};
const Button = ({ handleClick, classStyles, btnName }: Props) => {
  return (
    <button
      type="button"
      className={cn(
        `nft-gradient text-sm minlg:text-lg py-2 px-6 minlg:px-8 font-poppins text-white ${classStyles}`
      )}
      onClick={handleClick}
    >
      {btnName}
    </button>
  );
};

export default Button;
