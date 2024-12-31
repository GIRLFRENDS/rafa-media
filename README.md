## Example 
```code
const aryan = require('aryan-videos-downloader');

aryan.alldown('url')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error downloading:', error);
  });
```
