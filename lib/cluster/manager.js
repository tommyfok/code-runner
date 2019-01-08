const hash = require('../common/hash')
const CP = require('./child-process')
const defaultListeners = require('../listener/default')

module.exports =  class PM {
    constructor({
            count,
            maxFreeSeconds = 60,
            maxFrozenSeconds = 10
        }) {
        this.processMap = {}
        this.workingProcesses = []
        this.freeProcesses = []
        process.on('exit', this.cleanCps)
        for (let i = 0; i < count; i++) {
            this.freeProcesses.push(new CP())
        }
        // 每秒钟检查进程
        // 发现进程上次活跃时间大于1分钟，就放入空闲进程
        setInterval(() => {
            let now = Date.now()
            this.workingProcesses.forEach(p => {
                let pIndex = this.workingProcesses.indexOf(p)
                if (now - p.lastActiveTimestamp > (maxFreeSeconds * 1000)) {
                    this.freeProcesses.push(p)
                    this.workingProcesses.splice(pIndex, 1)
                    let codeKey = p.codeKey
                    delete this.processMap[codeKey]
                    delete p.codeKey
                }
                if (now - p.lastHeartBeatTime > maxFrozenSeconds * 1000) {
                    console.log('process is dead:', p.codeKey)
                    console.log('create new process for this key')
                    delete this.processMap[p.codeKey]
                    this.workingProcesses.splice(pIndex, 1)
                    p.child_process.kill('SIGINT')
                    this.freeProcesses.push(new CP())
                }
            })
        }, 1000)
    }

    async run ({code, context, listeners}) {
        let con = this.getContainer(code)
        await con.runCode({
            code,
            context,
            listeners: {
                ...listeners,
                ...defaultListeners(this)
            }
        })
    }

    getContainer (code) {
        let codeKey = hash(code)
        if (codeKey in this.processMap) {
            return this.processMap[codeKey]
        } else {
            let fp = this.freeProcesses
            if (fp.length === 0) {
                throw 'ERR_NO_AVAILABLE_PROCESS'
            } else {
                let p = this.freeProcesses.pop()
                p.code = code
                this.workingProcesses.push(p)
                this.processMap[codeKey] = p
                return p
            }
        }
    }

    cleanCps(code) {
        this.workingProcesses.forEach(p => {
            p.child_process.kill(code)
        })
        this.freeProcesses.forEach(p => {
            p.child_process.kill(code)
        })
    }
}
