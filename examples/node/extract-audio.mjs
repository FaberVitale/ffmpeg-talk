// Extracts audio from a video
// run with "node examples/node/extract-audio.mjs --input  public/media/big_buck_bunny.mp4"
import { spawn } from "node:child_process";
import { z } from "zod";
import process from "node:process";
import parse from "yargs-parser";

function extractAudio(params) {
  const parsedArgs = z.object({ input: z.string().min(3) }).parse(params);
  const childProcess = spawn(
    "ffmpeg",
    ["-y", "-i", parsedArgs.input, `${parsedArgs.input}-node.mp3`],
    { stdio: "inherit", shell: true }
  );

  childProcess.on("error", (err) => { console.log(err); process.exitCode = 1; });
  childProcess.on("close", (code) => {
    if (code) {
      console.error(`ffmpeg exit code=${code}`);
      process.exitCode = 1;
    }
  });
}

extractAudio(parse(process.argv.slice(2), { string: ["input"] }));
