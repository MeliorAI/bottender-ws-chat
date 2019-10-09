import { h, render } from "preact";
import Widget from "./components/chatbox";

const defaults = {
  containerId: 'bottender-chat-mount',
  serverUrl: 'http://localhost:3000',
  path: "/socket.io"
}

function renderWidget (opts) {
  render((
    <Widget serverUrl={opts.serverUrl} path={opts.path} />
  ), document.getElementById(opts.containerId));
}

var BottenderWsChat = {
  init(opts) {
    const options = Object.assign(defaults, opts)

    renderWidget(options)
  }
}

window.BottenderWsChat = BottenderWsChat

export default BottenderWsChat