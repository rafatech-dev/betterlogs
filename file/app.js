// Import.
const fs = require('fs');

/**
 * Log a message to a file.
 * @param {string} name Name of the log file.
 * @param {string} text Text to log.
 * @param {string} [delimiter] Delimiter. Default: `\n`.
 */
function logToFile(name, text, delimiter = '\n') {
  // Define File
  let file = name;
  
  // Define log text.
  // const logText = getDateAsText() + ' -> ' + text + delimiter;
  const logText = text

  // Save log to file.
  fs.appendFile(file, logText, 'utf8', function (error) {
    if (error) {
      // If error - show in console.
      // console.log(getDateAsText() + ' -> ' + error);
      console.log(error)
    }
  });
}

// Export.
module.exports = logToFile;
