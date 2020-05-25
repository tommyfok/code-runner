let counter = 0
let max = 10
let path = require('path')
let cp = require('child_process').fork(path.join(__dirname, './inter-process-bench-script.js'))
let start = 0

cp.on('message', () => {
    counter++
    if (counter >= max) {
        console.log('耗时：' + (Date.now() - start) + '毫秒')
        cp.kill()
        process.exit()
    }
})

setTimeout(() => {
    start = Date.now()
    for (let i = 0; i < max; i++) {
        let data = `killSignal <string> | <integer> The signal value to be used when the spawned process will be killed. Default: 'SIGTERM'.
maxBuffer <number> Largest amount of data in bytes allowed on stdout or stderr. If exceeded, the child process is terminated and any output is truncated. See caveat at maxBuffer and Unicode. Default: 1024 * 1024.
encoding <string> The encoding used for all stdio inputs and outputs. Default: 'buffer'.
shell <boolean> | <string> If true, runs command inside of a shell. Uses '/bin/sh' on UNIX, and process.env.ComSpec on Windows. A different shell can be specified as a string. See Shell Requirements and Default Windows Shell. Default: false (no shell).
windowsVerbatimArguments <boolean> No quoting or escaping of arguments is done on Windows. Ignored on Unix. This is set to true automatically when shell is specified and is CMD. Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
killSignal < string > | < integer > The signal value to be used when the spawned process will be killed.Default: 'SIGTERM'.
maxBuffer < number > Largest amount of data in bytes allowed on stdout or stderr.If exceeded, the child process is terminated and any output is truncated.See caveat at maxBuffer and Unicode.Default: 1024 * 1024.
encoding < string > The encoding used
for all stdio inputs and outputs.Default: 'buffer'.
shell < boolean > | < string > If true, runs command inside of a shell.Uses '/bin/sh'
on UNIX, and process.env.ComSpec on Windows.A different shell can be specified as a string.See Shell Requirements and Default Windows Shell.Default: false(no shell).
windowsVerbatimArguments < boolean > No quoting or escaping of arguments is done on Windows.Ignored on Unix.This is set to true automatically when shell is specified and is CMD.Default: false.
windowsHide < boolean > Hide the subprocess console window that would normally be created on Windows systems.Default: false.
`
        // console.log('发送消息给子进程')
        // cp.send('MASTER_MSG')
        // console.log(`message size: ${data.length}`)
        cp.send(data)
    }
}, 1000)
