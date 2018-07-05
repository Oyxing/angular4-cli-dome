var i = 0
export class CallBack {
    sayHello(): string {
        var callback = "callback=callback=__ng_jsonp__.__req"+i+".finished"
            i++
            return callback
    }
}