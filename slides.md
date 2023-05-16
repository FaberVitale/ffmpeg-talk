---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: Slides of a talk that explains how to use ffmpeg with js
drawings:
  persist: false
layout: intro
css: unocss
---

<style>
  .first-slide {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg.absolute.top-20 {
    display: none;
  }
</style>

<div class="first-slide">

# ffmpeg: an introduction

</div>

<div class="fixed left-16 bottom-4">
<SlidesQrCode />
</div>

<p class="fixed bottom-0 right-4 opacity-50">Speaker: Fabrizio A. Vitale</p>

---

# Who am I?

## Fabrizio A. Vitale

Frontend developer engineer & lead developer at **[Deltatre](https://www.deltatre.com/)**.

## Contacts

<div class="contacts">
<div>

<LinkedinQrCode />
<a href="https://it.linkedin.com/in/fabrizio-armando-vitale-659311247"><mdi-linkedin />Linkedin</a>

</div>

<div>

<GithubQrCode />
<a href="https://github.com/FaberVitale"><mdi-github />Github</a>

</div>
</div>

---
layout: image-right
image: /images/brian-erickson-mvtkfOmca8M-unsplash.webp
---

<h1>What's the talk about?</h1>

<div class="pt-8" />

<v-clicks>

- a gentle introduction to ffmpeg
- ffplay
- ffprobe
- ffmpeg (CLI app)
- a few practical examples
- how to use ffmpeg with JS

</v-clicks>

---
layout: fact
---

## Disclaimer


<p class="text-xxl">
  <strong>No birds were harmed in the making of this talk.</strong>
</p>

<div class="flex justify-center pt-8">
  <img src="https://media.giphy.com/media/EECy1Cp6nyV9e/giphy.gif" width="480" />
</div>

---

<style>
  .blockquote-wrapper {
    padding: 1.6rem 0;
  }
</style>

<h1>What's ffmpeg?</h1>

<v-click>

<div class="blockquote-wrapper">

> FFmpeg is the leading multimedia framework, able to decode, encode, transcode, mux, demux, stream, filter and play pretty
> <br/>  much anything that humans and machines have created. 
> <br /> [ffmpeg website](https://ffmpeg.org/about.html)

</div>

</v-click>

<v-click>

<div class="blockquote-wrapper">

> A powerful, quick and relatively intuitive suite of CLI tools
> <br/> to manipulate audio and videos.
> <br/> Me

</div>

</v-click>

---
layout: 'image-right'
image: /images/peter-stumpf-h-ySkoCRzhs-unsplash.webp
---

# A bit of history

<div class="py-4 leading-10">
The ffmpeg project started in 2000 by <a href="https://bellard.org/">Fabrice Bellard</a>.
</div>
<div class="py-4 leading-10">
It was led by <a href="https://www.linkedin.com/in/michaelniedermayer">Michael Niedermayer</a> from 2004 until 2015.
</div>
<div class="py-4 leading-10">
It's opensource and is published under the <a href="https://github.com/FFmpeg/FFmpeg/blob/master/LICENSE.md">LGPL-2.1-or-later or GPL-2.0-or-later</a>.
</div>

---
layout: 'image-left'
image: '/images/peter-stumpf-FhZEpxtTI_Y-unsplash.webp'
---

# ffmpeg today

<div class="py-6 leading-8">
ffmpeg is  widely used for basic and advanced video and audio editing.
</div>
<div class="py-6 leading-8">
It is used by software such as Videolan (VLC), Blender, Youtube and Google Chrome.
</div>

<div class="py-6 leading-8">
It's available for Mac, Windows and Linux.
</div>

---

# What does ffmpeg stand for?

The name of the project is a word play:

<v-clicks>

- "FF" for "fast forward".
- "MPEG" for Moving Picture Experts Group, a comittee dedicated to video standards.

</v-clicks>

<v-click>
<div class="flex justify-center mt-20 text-2xl">
<strong>So ffmpeg stands for "Fast Forward Moving Picture Experts Group".</strong>
</div>
</v-click>

---
layout: 'image-right'
image: '/images/peter-stumpf-i1_xsS9fBRc-unsplash.jpg'
---

<style>
.tools-list ul li {
  font-size: 2rem;
}
</style>

# ffmpeg is a suite of tools

<p class="text-xl py-8"><strong>After downloading ffmpeg, you'll have 3 executables installed on your machine.</strong></p>

<div class="tools-list">
<v-clicks>

- [ffplay](https://ffmpeg.org/ffplay.html)
- [ffprobe](https://ffmpeg.org/ffprobe.html)
- [ffmpeg](https://ffmpeg.org/ffmpeg.html)

</v-clicks>
</div>
---

# ffplay /1

a simple CLI media player.

<v-click>

## syntax

<div class="code-block-xl py-10">

```bash
ffplay [options] input_file
```

</div>
</v-click>

<v-click>

## example

<div class="code-block-xl py-10">


```bash
ffplay -ss 24   public/media/big_buck_bunny.mp4
```

</div>
</v-click>

---

# ffplay /2

<div class="flex justify-center">
  <SlidevVideo autoPlay="resume" muted autoPause="click" autoReset="slide" controls width="640">
    <source src="/media/ffplay_demo.mp4" type="video/mp4">
  </SlidevVideo>
</div>

---

# ffprobe /1

Simple multimedia streams analyzer.

<div class="code-block-xl py-10">

```bash
ffprobe -hide_banner public/media/big_buck_bunny.mp4
```

</div>

<div class="p-4">

- ` -hide_banner` Hides verbose banner.
- `public/media/big_buck_bunny.mp3 ` file to analyze.

</div>

---

# ffprobe /2


<div class="flex justify-center">
  <SlidevVideo autoPlay="resume" muted autoPause="click" autoReset="slide" controls width="640">
    <source src="/media/ffprobe_demo.mp4" type="video/mp4">
  </SlidevVideo>
</div>

---


# ffmpeg /1

Hyper fast Audio and Video encoder.

<div class="code-block-xl py-10">

```bash
ffmpeg [options] [[infile options] -i infile]... {[outfile options] outfile}...
```

</div>

<div class="code-block-xl py-10">

```bash {1|2|3|4}
ffmpeg
[options]
[[infile options] -i infile]
{[outfile options] outfile}
```

</div>

---

# ffmpeg /2

<div class="flex justify-center">
  <SlidevVideo autoPlay="resume" muted autoPause="click" autoReset="slide" controls width="640">
    <source src="/media/ffmpeg_demo.mp4" type="video/mp4">
  </SlidevVideo>
</div>

---
layout: fact
---

<h1>What can you do with ffmpeg?</h1>

---
layout: fact
---

<h1>Let's take a look at some examples.</h1>

---

# How to change video format? /1

## mp4 (3.8MB) -> web (2.2MB)

<div class="code-block-xl py-10">

```bash
ffmpeg -y -i public/media/big_buck_bunny.mp4 \
-vcodec libvpx -acodec libvorbis public/media/big_buck_bunny.webm
```

</div>

<div class="p-4">

- `-y` overwrite output files.
- `-i public/media/big_buck_bunny.mp4` input file.
- `-vcodec libvpx` set video codec.
- `-acodec libvorbis` set audio codec.
- `public/media/big_buck_bunny.webm ` output file.

</div>

---

# How to change video format? /2

<div class="flex justify-between">

<v-click>
<section class="media-section">
<h2>Input (.mp4)</h2>
<SeekMedia to="24">
  <SlidevVideo autoPlay="resume" muted autoPause="click" autoReset="click" controls width="400">
    <source src="/media/big_buck_bunny.mp4" type="video/mp4">
  </SlidevVideo>
</SeekMedia>
</section>

<section class="media-section">
<h2>Output (.webm)</h2>
<SeekMedia to="24">
  <SlidevVideo autoPlay="resume" muted autoPause="click" autoReset="click" controls width="400">
    <source src="/media/big_buck_bunny.webm" type="video/mp4">
  </SlidevVideo>
</SeekMedia>
</section>
</v-click>

</div>

---

# How to extract the audio from a video? / 1

<div class="code-block-xl py-10">

```bash
ffmpeg -y -i public/media/big_buck_bunny.mp4 public/media/big_buck_bunny.mp3 
```

</div>

<div class="p-4">

- `-y` overwrite output files.
- `-i public/media/big_buck_bunny.mp4` input file.
- `public/media/big_buck_bunny.mp3 ` output file.

</div>

---

# How to extract the audio from a video? / 2

<div class="flex justify-between pt-4">

<v-click>
<section class="media-section">
<h2>Input (.mp4)</h2>
<SeekMedia to="24">
  <SlidevVideo autoPause="click" autoReset="slide" controls width="320">
    <source src="/media/big_buck_bunny.mp4" type="video/mp4">
  </SlidevVideo>
</SeekMedia>
</section>
</v-click>

<v-click>
<section class="media-section">
<h2>Output (.mp3)</h2>
<SeekMedia to="24">
  <audio controls src="/media/big_buck_bunny.mp3" width="320" />
</SeekMedia>
</section>
</v-click>

</div>

---

# How to create a gif from a video? /1

<div class="code-block-xl py-8">

```bash
ffmpeg -y -ss 24 -t 3 \
-i public/media/big_buck_bunny.mp4 public/media/big_buck_bunny.gif
# or
ffmpeg -y -ss 24 -to 27 \
-i public/media/big_buck_bunny.mp4 public/media/big_buck_bunny.gif
```

</div>

- `-y` overwrite output files.
- `-ss 24` | `-ss 00:00:24` seek to 24th second.
- `-t 3` set duration to 3 seconds.
- `-to 27` | `-ss 00:00:27` end video at the 27th second.

---

# How to create a gif from a video? /2

<div class="flex justify-between">
<section class="media-section">
<h2>Input</h2>
<SeekMedia to="24">
<SlidevVideo autoPlay="resume" muted autoPause="click" autoReset="click" controls width="400">
  <source src="/media/big_buck_bunny.mp4" type="video/mp4">
</SlidevVideo>
</SeekMedia>
</section>
<section class="media-section">
<h2>Output</h2>
<img controls src="/media/big_buck_bunny.gif" width="400" />
</section>
</div>

---

# Issues

<h2 class="my-10">The output gif is quite big and the framerate is off.</h2>

<div class="code-block-xl py-10">

```bash
ls -lh public/media/big_buck_bunny.gif  | awk -F " " {'print $5'}
1.4M
```

</div>

<h2 class="w-full text-center my-10">Can we do better?</h2>

---

# Let's lower the frame rate and scale the gif /1

<div class="code-block-xl py-4">

```bash
ffmpeg -y \
-ss 24 -t 3 -i public/media/big_buck_bunny.mp4 \
-vf "fps=12,scale=320:-1" \
public/media/big_buck_bunny_fps_scale.gif
```

</div>

<div class="p-4">

- `-y` overwrite output files.
- `-vf 'fps=12'` Sets output framerate to 12fps.
- `-vf "scale=320:-1"` Scales width to 320px while preserving the aspect ratio.

</div>
---

# Let's lower the frame rate and scale the gif /2

<div class="code-block-xl py-2">

```bash
ls -lh public/media/big_buck_bunny.gif  | awk -F " " {'print $5'}
1.4M # before

ls -lh public/media/big_buck_bunny_fps_scale.gif  | awk -F " " {'print $5'}
184K # after
```

</div>

<div class="flex justify-between mt-2">
<section class="media-section">
<h2>Before</h2>
<img controls src="/media/big_buck_bunny.gif" width="400" />
</section>
<section class="media-section">
<h2>After</h2>
<img controls src="/media/big_buck_bunny_fps_scale.gif" width="400" />
</section>
</div>

---

# Take a screenshot of a video /1

<div class="code-block-xl py-4">

```bash
ffmpeg -y \
-ss 00:00:24.82 \
-i public/media/big_buck_bunny.mp4 \
-frames:v 1 \
public/media/big_buck_bunny_pic.jpg
```

</div>

<div class="py-4">

- `-y` overwrite output files.
- `-ss 00:00:24.82` seek input file to 24th second.
- `-frames:v 1` set the number of frames to output 1.

</div>

---

# Take a screenshot of a video /2

<div class="flex justify-between">
<section class="media-section">
<h2>Input</h2>
<SeekMedia to="24">
  <SlidevVideo autoPlay="resume" muted autoPause="click" autoReset="slide" width="400">
    <source src="/media/big_buck_bunny.mp4" type="video/mp4">
  </SlidevVideo>
</SeekMedia>
</section>
<section class="media-section">
<h2>Output</h2>
<img src="/media/big_buck_bunny_pic.jpg" width="400" />
</section>
</div>

---
layout: fact
---

# Is it possible to run ffmpeg with JS? 

---
layout: fact
---

# Of course!

<div class="flex justify-center">
<img src="https://media.giphy.com/media/w77O4Mf1juHPq/giphy.gif" width="240"/>
</div>
---

<h1 class="small-heading">Node</h1>
<audio src="/media/big_buck_bunny.mp4-node.mp3" controls width="320" class="fixed top-6 right-13" />

```ts
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
```

---

<h1 class="small-heading">Deno</h1>
<audio src="/media/big_buck_bunny.mp4-deno.mp3" controls width="320" class="fixed top-6 right-13" />

```ts
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
```

---
layout: fact
---

Conclusions /1

<div class="text-3xl py-5">What we've shown in this talk is just the tip of the iceberg.</div>

<div class="text-3xl">ffmpeg is a tool with seemingly endless possibilities.</div>

---
layout: fact
---

Conclusions /2

<div class="text-3xl py-5">So... are you ready to go down the rabbit hole?</div>
<div class="flex justify-center pt-8">
  <img src="https://media.giphy.com/media/T1GWTCSrTr2tnsvq4k/giphy.gif" width="480" />
</div>

---
layout: two-cols
---

# Thank you!

## Slides

- https://ffmpeg-talk-js.netlify.app/1
- <a href="https://github.com/FaberVitale/ffmpeg-talk"><mdi-github /> source</a>

## Speaker

Fabrizio A. Vitale

<LinkedinQrCode size="160"/>

::right::

<div class="flex justify-center items-center w-full h-full">
<SlidesQrCode size="300" />
</div>