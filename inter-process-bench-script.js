let data = `killSignal <string> | <integer> The signal value to be used when the spawned process will be killed. Default: 'SIGTERM'.
maxBuffer <number> Largest amount of data in bytes allowed on stdout or stderr. If exceeded, the child process is terminated and any output is truncated. See caveat at maxBuffer and Unicode. Default: 1024 * 1024.
encoding <string> The encoding used for all stdio inputs and outputs. Default: 'buffer'.
shell <boolean> | <string> If true, runs command inside of a shell. Uses '/bin/sh' on UNIX, and process.env.ComSpec on Windows. A different shell can be specified as a string. See Shell Requirements and Default Windows Shell. Default: false (no shell).
windowsVerbatimArguments <boolean> No quoting or escaping of arguments is done on Windows. Ignored on Unix. This is set to true automatically when shell is specified and is CMD. Default: false.
windowsHide <boolean> Hide the subprocess console window that would normally be created on Windows systems. Default: false.`

process.on('message', function () {
    // console.log('我收到消息了，给父进程返回一个')
    process.send(data)
})
