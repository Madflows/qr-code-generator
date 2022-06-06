import React from "react";

const Output = ({ qr }) => {
  return (
    <>
      {qr && (
        <div className="flex flex-col gap-2 items-center justify-center">
          <img src={qr} className="w-30 h-30" alt="qr code" title="Here's your qr code" />
          <a
            href={qr}
            className="px-4 py-3 transition bg-slate-500 hover:bg-slate-600 rounded-md"
            download="qrcode.png"
          >
            Download QR
          </a>
        </div>
      )}
    </>
  );
};

export default Output;
