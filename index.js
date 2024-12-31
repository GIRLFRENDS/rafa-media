module.exports.alldown = (url) => 
  new Promise(async (resolve, reject) => {
    const { alldown } = require("imon-videos-downloader");

    try {
      const { data, msg } = await alldown(url);

      resolve({
        status: true,
        dev: "ARYAN AHMED RUDRO",
        devfb: "https://www.facebook.com/aryan.x.404",
        devwp: "wa.me/+8801894253289", 
        data: data || msg,
      });
    } catch (error) {
      reject({ 
        status: false, 
        error: error.message || "An unexpected error occurred" 
      });
    }
  });
