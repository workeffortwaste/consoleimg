(function () {
    // file drag hover
  function FileDragHover (e) {
    e.stopPropagation()
    e.preventDefault()
    e.target.className = (e.type === 'dragover' ? 'hover' : '')
  }

  // File selection
  function FileSelectHandler (e) {
    // Cancel event and hover styling
    FileDragHover(e)
    // Fetch FileList object
    let files = e.target.files || e.dataTransfer.files
    // Parse the first file only
      try {
          ParseFile(files[0],document.getElementById('colour').value,document.getElementById('size').value)
      } catch (e) {
          console.warn(e.message)
      }
  }

  // output file information
  function ParseFile (file,colour,size) {
    if (file.type.indexOf('image') === 0) {
        if (file.size > 8192 && navigator.userAgent.indexOf('Firefox') > 0) {
            throw new Error('Image size too big to be displayed in Firefox.')
        }
      const reader = new FileReader()
      reader.addEventListener('load', function () {
          /* Format the CSS string for console.log */
          const o = 'background: url(\'' + reader.result + '\') left top no-repeat; font-size: '+ size+ 'px; background-size: contain; background-color:'+ colour;
          /* Output to the console. */
          console.log('%c     ', o)
      }, false)
      reader.readAsDataURL(file)
    } else {
        throw new Error('Valid image not found.')
    }

  }

  // initialize
  function Init () {
    const fileselect = document.getElementById('fileselect')
  const filedrag = document.getElementById('filedrag')
  const submitbutton = document.getElementById('submitbutton')

    // file select
    fileselect.addEventListener('change', FileSelectHandler, false)

    // is XHR2 available?
    const xhr = new XMLHttpRequest()
    if (xhr.upload) {
      // file drop
      filedrag.addEventListener('dragover', FileDragHover, false)
      filedrag.addEventListener('dragleave', FileDragHover, false)
      filedrag.addEventListener('drop', FileSelectHandler, false)
      filedrag.style.display = 'block'

      // remove submit button
      submitbutton.style.display = 'none'
    }
  }

  // call initialization file
  if (window.File && window.FileList && window.FileReader) {
    Init()
  }
})()
