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

# Video Editing with ffmpeg & JS

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

[Linkedin](https://it.linkedin.com/in/fabrizio-armando-vitale-659311247)

</div>

<div>

<GithubQrCode />

[Github](https://github.com/FaberVitale)

</div>
</div>

---
layout: image-right
image: '/images/rianne-zuur-PoxFTU7_QKo-unsplash.jpg'
---

<h1>What's the talk about?</h1>

<v-clicks>

- [ffmpeg (native)](https://ffmpeg.org/)
- [ffmpeg.wasm](https://ffmpegwasm.netlify.app/)
- Video editing on the browser.
- Video editing on the server.

</v-clicks>

---
layout: fact
---

## Disclaimer /1

<p class="text-xxl">
  <strong>This is talk is an introduction to ffmpeg, it's by no means exhaustive.</strong>
</p>
<p class="text-xxl">
  <strong>It introduces the topic without going down the rabbit hole.</strong>
</p>

<div class="flex justify-center pt-8">
  <img src="https://media.giphy.com/media/T1GWTCSrTr2tnsvq4k/giphy.gif" width="480" />
</div>

---
layout: fact
---

## Disclaimer /2


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

> A complete, cross-platform solution to record,
> <br/> convert and stream audio and video.
> <br />[ffmpeg website](https://ffmpeg.org/)

</div>

</v-click>

<v-click>

<div class="blockquote-wrapper">

> A powerful, quick and relatively intuitive CLI tool
> <br/> to manipulate audio and videos.
> <br/> Me

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

<p class="text-xl py-8"><strong>When you download ffmpeg you will have 3 executables installed on your machine.</strong></p>

<div class="tools-list">
<v-clicks>

- ffplay
- ffprobe
- ffmpeg

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


```bash
ffprobe -hide_banner -pretty public/media/big_buck_bunny.mp4
```

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


# ffmpeg syntax

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

# How to change video format? /1

mp4 -> webm

<div class="code-block-xl py-10">

```bash
ffmpeg -y -i public/media/big_buck_bunny.mp4 public/media/big_buck_bunny.webm
```

</div>

<div class="p-4">

- `-y` overwrite output files.
- `-i public/media/big_buck_bunny.mp4` input file
- `public/media/big_buck_bunny.webm ` output file

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
- `-i public/media/big_buck_bunny.mp4` input file
- `public/media/big_buck_bunny.mp3 ` output file

</div>

---

# How to extract the audio from a video? / 2

<div class="flex justify-between">

<v-click>
<section class="media-section">
<h2>Input</h2>
<SeekMedia to="24">
  <SlidevVideo autoPause="click" autoReset="slide" controls width="320">
    <source src="/media/big_buck_bunny.mp4" type="video/mp4">
  </SlidevVideo>
</SeekMedia>
</section>
</v-click>

<v-click>
<section class="media-section">
<h2>Output</h2>
<SeekMedia to="24">
  <audio controls src="/media/big_buck_bunny.mp3" width="320" />
</SeekMedia>
</section>
</v-click>

</div>

---

# How to create a gif from a video? /1

<div class="code-block-xl py-2">

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

## The output gif is quite big 

<div class="code-block-xl py-10">

```bash
ls -lh public/media/big_buck_bunny.gif  | awk -F " " {'print $5'}
1.4M
```

</div>

**Can we do better?**

---

# Let's lower the frame rate and scale the gif /1

<div class="code-block-xl">

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

<div class="code-block-xl">

```bash
ls -lh public/media/big_buck_bunny.gif  | awk -F " " {'print $5'}
1.4M # before

ls -lh public/media/big_buck_bunny_fps_scale.gif  | awk -F " " {'print $5'}
184K # after
```

</div>

<div class="flex justify-between my-8">
<section class="media-section">
<h2>Before</h2>
<img controls src="/media/big_buck_bunny.gif" width="320" />
</section>
<section class="media-section">
<h2>After</h2>
<img controls src="/media/big_buck_bunny_fps_scale.gif" width="320" />
</section>
</div>

---

# Take a screenshot of a video /1

```bash
ffmpeg -y \
-ss 00:00:24.82 \
-i public/media/big_buck_bunny.mp4 \
-frames:v 1 \
public/media/big_buck_bunny_pic.jpg
```

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
