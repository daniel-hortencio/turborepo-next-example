import { IGetCourtsCoverageApiResponse, IGetCourtsCoverageData } from "../types/CourtsCoverage"

export const getCourtByType = (current_court: IGetCourtsCoverageApiResponse, COURT_ARRAY: IGetCourtsCoverageData[]) => {

  const index = COURT_ARRAY.findIndex(item => item.state === current_court.state)

  if (index > -1) {
    const crawler_index = COURT_ARRAY[index].crawlers.findIndex((c) => c.name === current_court.crawler)
    if (crawler_index > -1) {
      COURT_ARRAY[index].crawlers[crawler_index].data.push({ instance: current_court.instance, auth: current_court.auth })
    } else {
      COURT_ARRAY[index].crawlers.push({ name: current_court.crawler, data: [{ instance: current_court.instance, auth: current_court.auth }] })
    }
  } else {
    COURT_ARRAY.push({ state: current_court.state, crawlers: [{ name: current_court.crawler, data: [{ instance: current_court.instance, auth: current_court.auth }] }] });
  }
}
