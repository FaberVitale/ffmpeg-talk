// Extracts audio from a video
// run with "node examples/node/extract-audio-wasm.mjs --input public/media/big_buck_bunny.mp4"
import { z } from "zod";
import process from "node:process";
import parse from "yargs-parser";
import path from "node:path";
import fs from 'node:fs';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

const ffmpeg = createFFmpeg({ log: true });

async function extractAudio(params) {
  const parsedArgs = z.object({ input: z.string().min(3) }).parse(params);
  const inputBasename = path.basename(parsedArgs.input)
  const outputFilepath = `${parsedArgs.input}-node-wasm.mp3`
  const outputBasename = path.basename(outputFilepath)

  await ffmpeg.load();
  ffmpeg.FS('writeFile', inputBasename, await fetchFile(parsedArgs.input));
  await ffmpeg.run('-i', inputBasename, outputBasename);
  await fs.promises.writeFile(outputFilepath, ffmpeg.FS('readFile', outputBasename));
}


await extractAudio(parse(process.argv.slice(2), { string: ["input"] }));
process.exit(0); // You have to force the exit with ffmpeg.wasm