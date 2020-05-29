# consoleimg
## Display images in your developer console!
https://defaced.dev/tools/consoleimg/
### Usage
Use the following code before the closing `</body>` tag.
```
    <script src="consoleimg.min.js"></script>
    <script>
        consoleimg.load('image.jpg', {size: 320, color: '#FFFFFF'})
    </script>
```
#### Optional arguments
`size`

Maximum height for the image to be displayed at. The default is 320.

`color`

CSS background-color to be used for the image. The default is transparent.
### Compatibility
#### Browsers
* Chrome - No known issues
* Safari - Issue with images repeating
* Edge (Chromium) - No known issues
* Firefox - Restricted to images below 8KB
#### Image Formats
All image formats that are supported by CSS background-image should work without issue, including SVGs with animation.

Yes, that does include animated .gifs.

### Demo
See http://defaced.dev/web/the-buggiest-site-on-the-web/ for a working example.

### Frequently Asked Questions
#### Why on earth would you make this?
Sorry :-(

#### Will it slow down my website?
The image request uses the fetch API asynchronously, unless you're loading large images there shouldn't be a significant impact.

#### What happens on mobile?
By default the images will still be downloaded. It's up to you to decide if you want to detect for a mobile device and not push the image to the console.

#### Who made this?
I did, you can find me on Twitter for more nonsense like this.

@defaced
