exports.getSuggestions = (req,res) => {
  console.log(req.query.searchTerm)
  let searchTerm = req.query.searchTerm
  const spawn = require("child_process").spawn;
  const pythonProcess = spawn('python',["-W", "ignore","../Movie_Data_Analysis/api.py", 'match', searchTerm]);

  pythonProcess.stdout.on('data', function(data) {
      console.log(data.toString())
        console.log();
        String.prototype.replaceAll = function(search, replacement) {
            var target = this;
            return target.replace(new RegExp(search, 'g'), replacement);
          };
        // let resp = data.toString().split('\\').join("")
        console.log("Response");
        console.log({movieData: JSON.parse(data.toString())})
        res.json({movieData: JSON.parse(data.toString())});
        res.end('end');
    });
    pythonProcess.stderr.on("data", function(err){
      res.json({error: 'Error spawning child process',err: err.toString()})
    })

};
