import Twit from 'twit'

import config from '../../config.json'

export const T = new Twit(config.twit)
