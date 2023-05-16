// Extracts audio from a video
// run with "deno run -A examples/deno/extract-audio.ts --input  public/media/big_buck_bunny.mp4"
import { parse } from "https://deno.land/std@0.187.0/flags/mod.ts";
import { z } from "https://deno.land/x/zod@v3.21.4/mod.ts";

async function extractAudio(params: unknown) {
  const parsedArgs = z.object({ input: z.string().min(3) }).parse(params);
  const command = new Deno.Command("ffmpeg", {
    args: [
      "-y",
      "-i",
      parsedArgs.input,
      `${parsedArgs.input}-deno.mp3`,
    ],
  });
  const { code } = await command.spawn().output()

  if (code) {
    throw new Error(`ffmpeg exit-code=${code}`);
  }
}

await extractAudio(parse(Deno.args, { string: ["input"] }));
