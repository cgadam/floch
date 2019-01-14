import * as headerImages from '../media/header';
import * as church from '../media/church';
import * as salon from '../media/salon';
import * as icons from '../media/icons';

import moment from 'moment';

export default {
  icons: icons.default,
  novios: {
    novio: 'Christian Adam',
    novia: 'Florencia Mihaich',
  },
  header: {
    images: headerImages.default.carousel,
    marquesina: headerImages.default.marquesina,
    text: 'Nos casamos!',
  },
  church: {
    name: 'La Merced',
    location: 'https://www.google.com/maps/dir//Parroquia+Nuestra+Señora+de+la+Merced,+Alta+Gracia,+Provincia+de+Córdoba/',
    time: moment('23/02/2019 18:30:00', 'DD/MM/YYYY hh:mm:ss'),
    photo: church.default.church,
    rings: church.default.rings,
    poem: {
      text: `Incapaz de percibir tu forma,
te encuentro a mi alrededor.
Tu presencia llena mis ojos con tu amor,
Doblega mi corazón,
porque estás en todas partes.`,
      author: 'Anónimo',
    }
  },
  salon: {
    name: 'Estancia La Cautiva',
    location: 'https://www.google.com/maps/dir//Estancia+La+Cautiva,+Camino+a+La+Paisanita,+Estancia+La+Cautiva,+3.6+km+camino+a+La+Paisanita,+Córdoba/',
    time: moment('23/02/2019 19:30:00', 'DD/MM/YYYY hh:mm:ss'),
    photo: salon.default.cautiva,
  },
  gifts: {
    message: 'Nos podes ayudar de varias formas!',
    account: {
      tipo: 'Caja de Ahorro en Pesos',
      banco: 'BBVA Frances',
      alias: 'CHRISTIAN.FLOR.BODA',
      cbu: '0170290540000033757597',
    },
    lists: [
      {
        name: 'Falabella',
        link: 'https://www.falabellanovios.com.ar/novios-ar/public/resultadoBusquedaNovios.do?radTipoBusqueda=1&txtBusqueda=mihaich',
      }
    ]
  },
  confirmation: {
    message: 'Por favor confirmar asistemcia antes del:',
    date: moment('01/02/2019 00:00:00', 'DD/MM/YYYY hh:mm:ss'),
    button: {
      text: 'Confirmar Aqui',
      link: 'https://goo.gl/forms/zdDlAxDgr7Rekepi1',
    }
  }
}