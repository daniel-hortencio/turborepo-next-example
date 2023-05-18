import { ReactNode } from "react";
import { Box, BoxElementType } from "../Box";

interface Props {
  id?: string;
  children: ReactNode;
  as?: BoxElementType;
  className?: string;
  noLimitWidth?: boolean;
  noPaddingY?: boolean;
}

const Wrapper = ({
  id,
  className,
  children,
  as,
  noLimitWidth,
  noPaddingY,
}: Props) => {
  const getContainerClassName = () => {
    let class_name = "w-full px-5 mx-auto";
    class_name += !noLimitWidth ? " max-w-6xl" : "";
    class_name += !noPaddingY ? " py-5" : "";

    return class_name;
  };

  return (
    <Box id={id} as={as} className={className}>
      <Box className={getContainerClassName()}>{children}</Box>
    </Box>
  );
};

export default Wrapper;
