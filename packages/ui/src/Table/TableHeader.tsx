import { Box } from "ui";

interface Props {
  titles: string[];
  className?: string;
}

export const TableHeader = ({ titles, className }: Props) => {
  return (
    <Box className={`p-1 md:pl-4 ${className}`}>
      {titles.map((title) => (
        <Box
          key={title}
          className="pb-4 text-sm uppercase tracking-widest text-custom-gray-300"
        >
          {title}
        </Box>
      ))}
    </Box>
  );
};
