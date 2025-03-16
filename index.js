module.exports.alldown = (url) => 
  new Promise(async (resolve, reject) => {
    const { alldown } = require("imon-videos-downloader");

    try {
      const { data, msg } = await alldown(url);

      resolve({
        status: true,
        dev: "ARYAN AHMED RUDRO",
        devfb: "https://www.facebook.com/profile.php?id=61572658681308",
        devwp: "wa.me/+8801894253289",
        github: "https://github.com/ARYAN-BOT-404",
        data: data || msg,
      });
    } catch (error) {
      reject({ 
        status: false, 
        error: error.message || "An unexpected error occurred" 
      });
    }
  });
