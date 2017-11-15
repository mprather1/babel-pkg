import logger from 'winston'
import chalk from 'chalk'

const hello = (msg, cb) => {
  cb(msg)
}

hello('hello babel!!!', (message) => {
  logger.info(chalk.magenta(message))
})
