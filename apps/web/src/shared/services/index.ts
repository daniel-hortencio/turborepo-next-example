import { Environments } from "shared/constants/environments";
import { ICourt, IGetCourtsCoverageApiResponse, IGetCourtsCoverageData, IGetCourtsCoverageDataByCourts } from "./types/CourtsCoverage";
import { getCourtByType } from "./helpers/getCourtsByType";

class ApiFetch {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async get(endpoint: string): Promise<any> {
    const url = `${this.baseUrl}${endpoint}`;

    return await fetch(url, {
      method: 'GET'
    }).then(res => res.json())
      .then(({ data }) => data)
  }

  async getCourtCoverage(): Promise<IGetCourtsCoverageDataByCourts> {
    return await this.get('/sources').then((data: IGetCourtsCoverageApiResponse[]) => {

      const initStates = () => [
        { state: 'AC', crawlers: [] },
        { state: 'AL', crawlers: [] },
        { state: 'AP', crawlers: [] },
        { state: 'AM', crawlers: [] },
        { state: 'BA', crawlers: [] },
        { state: 'CE', crawlers: [] },
        { state: 'DF', crawlers: [] },
        { state: 'ES', crawlers: [] },
        { state: 'GO', crawlers: [] },
        { state: 'MA', crawlers: [] },
        { state: 'MT', crawlers: [] },
        { state: 'MS', crawlers: [] },
        { state: 'MG', crawlers: [] },
        { state: 'PA', crawlers: [] },
        { state: 'PB', crawlers: [] },
        { state: 'PR', crawlers: [] },
        { state: 'PE', crawlers: [] },
        { state: 'PI', crawlers: [] },
        { state: 'RJ', crawlers: [] },
        { state: 'RN', crawlers: [] },
        { state: 'RS', crawlers: [] },
        { state: 'RO', crawlers: [] },
        { state: 'RR', crawlers: [] },
        { state: 'SC', crawlers: [] },
        { state: 'SP', crawlers: [] },
        { state: 'SE', crawlers: [] },
        { state: 'TO', crawlers: [] }
      ]

      let TJM: ICourt = {
        name: 'Tribunais de Justiça Militar',
        label: 'TJM',
        data: initStates()
      }

      let TJ: ICourt = {
        name: 'Tribunais de Justiça',
        label: 'TJ',
        data: initStates()
      }

      let TRF: ICourt = {
        name: 'Tribunais Regionais Federais',
        label: 'TRF',
        data: initStates()
      }

      let TRE: ICourt = {
        name: 'Tribunais Regionais Eleitorais',
        label: 'TRE',
        data: initStates()
      }

      let TRT: ICourt = {
        name: 'Tribunais Regionais do Trabalho',
        label: 'TRT',
        data: initStates()
      }

      let STF: ICourt = {
        name: 'Supremo Tribunal Federal',
        label: 'STF',
        data: initStates()
      }
      let CJF: ICourt = {
        name: 'Conselho da Justiça Federal',
        label: 'CJF',
        data: initStates()
      }
      let STM: ICourt = {
        name: 'Superior Tribunal Militar',
        label: 'STM',
        data: initStates()
      }
      let TST: ICourt = {
        name: 'Tribunal Superior do Trabalho',
        label: 'TST',
        data: initStates()
      }
      let CSJT: ICourt = {
        name: 'Conselho Superior da Justiça do Trabalho',
        label: 'CSJT',
        data: initStates()
      }
      let TSE: ICourt = {
        name: 'Tribunal Superior Eleitoral',
        label: 'TSE',
        data: initStates()
      }
      let CNJ: ICourt = {
        name: 'Conselho Nacional de Justiça',
        label: 'CNJ',
        data: initStates()
      }

      data.forEach(current => {
        const court_type = current.name.split(' - ')[1]

        if (court_type.startsWith('TJM')) {
          getCourtByType(current, TJM.data)
        } else {
          if (court_type.startsWith('TJ')) {
            getCourtByType(current, TJ.data)
          }
        }

        if (court_type.startsWith('TRF')) {
          getCourtByType(current, TRF.data)
        }

        if (court_type.startsWith('TRE')) {
          getCourtByType(current, TRE.data)
        }

        if (court_type.startsWith('TRT')) {
          getCourtByType(current, TRT.data)
        }

        if (court_type.startsWith('STF')) {
          getCourtByType(current, STF.data)
        }
        if (court_type.startsWith('CJF')) {
          getCourtByType(current, CJF.data)
        }
        if (court_type.startsWith('STM')) {
          getCourtByType(current, STM.data)
        }
        if (court_type.startsWith('TST')) {
          getCourtByType(current, TST.data)
        }
        if (court_type.startsWith('CSJT')) {
          getCourtByType(current, CSJT.data)
        }
        if (court_type.startsWith('TSE')) {
          getCourtByType(current, TSE.data)
        }
        if (court_type.startsWith('CNJ')) {
          getCourtByType(current, CNJ.data)
        }
      })

      return [
        TJ,
        TJM,
        TRF,
        TRE,
        TRT,
        STF,
        CJF,
        STM,
        TST,
        CSJT,
        TSE,
        CNJ,
      ]
    })
  }
}

export const apiFetch = new ApiFetch(Environments.API_URL)
