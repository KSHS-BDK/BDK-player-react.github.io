<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
	    <a href="#usage">Usage</a>
		<ul>
	        <li><a href="#checkout-update-music-branch">Checkout branch</a></li>
	        <li><a href="#maintaining-music-library">Maintaining music library</a></li>
	        <li><a href="#testing-and-deploy">Testing and deploy</a></li>
	      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This is a Spotify mimic music player for closed intranet and personal use only. 
**DO NOT use this project for any commercial purpose.**


### Built With

* [React](https://zh-hant.reactjs.org/)
* [Bootstrap](https://getbootstrap.com/)
* [APlayer](https://aplayer.js.org/#/)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```
  or use nvm
  ```sh
  nvm install --lts
  nvm use --lts
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/KSHS-BDK/bdk-player-react.github.io.git
   ```
2. Install NPM packages
   ```sh
   cd bdk-player-react.github.io
   git checkout update-music
   npm install
   ```



<!-- USAGE EXAMPLES -->
## Usage

**For any updates of music related, we recommend to make changes on ``update-music`` branch.**
>Only admin users can update music to this github page

**Sample usage viceo**
[Video](https://youtu.be/qEgvOWpKsHI)

### Checkout ``update-music`` branch
```sh
git fetch --all
git checkout update-music
```

### Maintaining music library
> **note: DO NOT update too many songs in one commit. It will fail when push your update commit**
- Paste music files under ``public/music/``
- Paste cover image files under ``public/pic/`` (optional)
- Edit ``src/data/musiclist.json``
	- Format in ``musiclist.json``
	```
	{
        "name": "THE NAME TO DISPLAY",
        "artist": "ARTIST NAME",
        "url": "URL TO MUSIC FILE, BASE AT public/",
        "cover": "URL TO COVER PICTURE FILE, BASE AT public/",
        "album":"ALBUM NAME",
        "tags": ["CUSTOM SEARCH TAGS1", "CUSTOM SEARCH TAGS1"]
	}
	```
	- ``"name"``: Music title. This will be displayed as title in music list and player.
	- ``"artist"``: Artist of this music. This will be displayed as artist in music list and player. Music data with same artist will be automatically classified as a category.
	- ``"url"``: Url to the music file. This relative path should be based at the position of ``index.html``, which is ``public/``
	- ``"cover"``: Url to the image file. This relative path should be based at the position of ``index.html``, which is ``public/``
	- ``"album"``: Album of this music. This will be displayed as artist in music list and player. Music data with same album will be automatically classified as a category.
	- ``"tags"`` An array of string. Custom tags of this music. Tags will help user to classify music files.  Music data with same tag will be automatically classified as a category.

	**Example 1**
	```
	{
        "name": "夜に駆ける",
        "artist": "YOASOBI",
        "url": "music/夜に駆ける.mp3",
        "cover": "pic/the book.jpeg",
        "album":"THE BOOK",
        "tags": []
	}
	```
	**Example 2**
	```
	{
        "name": "ダダダダ天使 covered by aqua",
        "artist": "湊あくあ",
        "url": "music/ダダダダ天使 covered by aqua.mp3",
        "cover": "",
        "album":"",
        "tags": ["hololive", "cover"]
	}
	```
### Testing and deploy
- Testing on local environment
	```sh
	npm start
	```
	and go to ``localhost:3000`` on browser to see if the new list works fine.
- Update repo
	```sh
	// on update-music branch
	git add .
	git commit -m "commit message like 'Update music library...'"
  git fetch
  git rebase
	git push
	```
- Deploy to github page
	```sh
	npm run deploy
	```
> It might take a few time until github page is updated.

<!-- ROADMAP -->
## Roadmap

TODOS:
- Import and export play lists.


<!-- CONTACT -->
## Contact

Wei Wang 
- [twitter@LozengGG](https://twitter.com/LozengGG) 
- email lozeng0128@gmail.com

Project Link: [https://github.com/KSHS-BDK/bdk-player-react.github.io](https://github.com/KSHS-BDK/bdk-player-react.github.io)