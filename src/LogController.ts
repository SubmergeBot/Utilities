export default class LogController {
  constructor(dir: string) {
    // Open file with current date time.
    // Periodically update and write to different file names.
    // IMPORTANT: BUFFER lines!!!!! whilst transition is happening
    // write line on successful transition and how many lines buffered
    // previous files need to be compressed, .tar.gz?
  }

  write(content: string) {
    // Write line to current file.
  }
}
