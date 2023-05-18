import { Environments } from 'shared/constants/environments'
import { Box, Icon, LinkExternal } from 'ui'

export const WhatsappLink = () => (
  <Box>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
    />
    <LinkExternal
      href={Environments.LINK_TO_WHATSAPP}
      className={`fixed bottom-4 right-4 z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary fill-white text-white shadow-lg transition-all hover:bg-primary-dark lg:bottom-10 lg:right-10`}
    >
      <Icon name="WhatsappLogo" size={32} />
    </LinkExternal>
  </Box>
)
