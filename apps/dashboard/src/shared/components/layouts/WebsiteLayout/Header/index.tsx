import { Box, Button, Text, Logo } from '../../../elements'

interface Props {
  desktopText?: string
  linkTo?: string
  desktopLinkText?: string
  mobileLinkText?: string
}

export const WebsiteLayoutHeader = ({
  desktopText,
  linkTo,
  desktopLinkText,
  mobileLinkText
}: Props) => {
  return (
    <Box className="fixed flex top-0 left-0 w-full h-20 lg:h-28 backdrop-blur-lg z-20">
      <Box className="w-full max-w-6xl mx-auto flex items-center p-5 justify-between">
        <Logo color="white" />
        <Box className="w-32 md:hidden">
          <Button
            text={mobileLinkText}
            size="large"
            color="primary"
            as="link"
            href={linkTo}
          />
        </Box>
        <Text className="text-white hidden md:block">
          {desktopText}{' '}
          <a
            href={linkTo}
            className="text-primary hover:text-primary-dark transition-all"
          >
            {desktopLinkText}
          </a>
        </Text>
      </Box>
      <Box className="fixed bg-custom-gray-500 w-full h-20 lg:h-28 top-0 left-0 -z-10" />
    </Box>
  )
}
