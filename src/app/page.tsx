"use client";
import { useEffect, useState } from "react";
import { socket } from "../socket";
import Link from "next/link";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send'
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

export default function RootPage() {
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }

    function onConnect() {
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);

      socket.io.engine.on("upgrade", (transport) => {
        setTransport(transport.name);
      });
    }

    function onDisconnect() {
      setIsConnected(false);
      setTransport("N/A");
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    socket.on('chat message', (msg) => {
      console.log('received confirmed', msg);
    });

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };


  }, []);

  const handleTyping = (e) => {
      setMessage(e.target.value)
  }

  const sendMessage = () => {
    if (message) {
      console.log('message sent', message);
      socket.emit('chat message', message);
      setMessage('')
    }
    else console.log('no message found', message);
  }

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{ backgroundColor: 'lightslategray' }}>
        <div>
          <p>Status: {isConnected ? "connected" : "disconnected"}</p>
          <p>Transport: {transport}</p>
        </div>

        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Message</InputLabel>
          <OutlinedInput
            id="outlined-adornment-message"
            type='text'
            multiline
            fullWidth
            value={message}
            onChange={handleTyping}
            placeholder="Type here..."
            sx={{ minWidth: '40rem' }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="send-message"
                  onClick={sendMessage}
                  edge="end"
                >
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            }
            label="Message"
          />
        </FormControl>


        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <Link
            className="mb-2 flex items-end justify-start rounded-md bg-blue-600 p-4 "
            href="/dashboard"
          >
            <div className="w-32 text-white md:w-40">
              Let's visit the Dashboard&nbsp;
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}
