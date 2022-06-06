import QRCode from "qrcode";
import { useState } from "react";
import Output from "./components/Output";

import toast from "react-hot-toast";

function App() {
  const [url, setUrl] = useState(null);
  const [qr, setQr] = useState("");
  const generateQR = () => {
    QRCode.toDataURL(url, {
			width: 300,
			margin: 2,
			color: {
				dark: '#335383FF',
				light: '#EEEEEEFF'
			}
		}, (err, url) => {
			if (err) {
        toast.error("Unable to generate!")
        return console.error(err)
      }

			console.log(url)
      toast.success("Here's your QR!");
			setQr(url)
		})
  };
  return (
    <div className="h-screen bg-slate-800 text-slate-200">
      <h2 className="text-2xl md:text-3xl text-white text-center py-4">
        Qr Code Generator
      </h2>
      <div className="flex gap-2 py-3 px-4 w-full max-w-sm mx-auto 
      flex-col items-center justify-center">
        <input
          type="url"
          value={url}
          required
          placeholder="e.g. https://qr-code.dev"
          onChange={(e) => setUrl(e.currentTarget.value)}
          className="px-2 py-2 text-slate-900 
          outline-none w-full rounded-sm invalid:text-red-500"
        />
        <button
          disabled={!url}
          onClick={generateQR}
          className="bg-slate-100 hover:bg-slate-200 transition focus:ring-4 ring-sky-700 text-slate-900 px-6 py-3 rounded-full"
        >
          Generate
        </button>
      </div>
      <Output qr={qr} />
    </div>
  );
}

export default App;
