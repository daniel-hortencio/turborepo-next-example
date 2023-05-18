import { IGetCourtsCoverageAuth } from 'shared/services/types/CourtsCoverage'
import { Box, Icon } from 'ui'

export const getCourtStatus = (auth?: IGetCourtsCoverageAuth) => {
  if (
    auth?.noauth.enabled ||
    auth?.http.enabled ||
    auth?.captcha.enabled ||
    auth?.token.enabled
  ) {
    return (
      <Box className="flex items-center fill-primary">
        <Icon name="CheckCircle" />

        <p className="ml-2">Em funcionamento</p>
      </Box>
    )
  } else {
    return (
      <Box className="flex items-center fill-danger">
        <Icon name="Prohibit" />
        <p className="ml-2">Sem cobertura</p>
      </Box>
    )
  }
}
