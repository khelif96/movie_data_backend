exports.getInfo = (req,res) => {
  console.log(req.query.searchTerm)
  let searchTerm = req.query.searchTerm
  const spawn = require("child_process").spawn;
  const pythonProcess = spawn('python',["../Movie_Data_Analysis/api.py", 'search', searchTerm]);
  console.log("Attempting Request");
  pythonProcess.stdout.on('data', function(data) {
      console.log(data.toString())
        console.log();
        res.send({movieData: Object.values(JSON.parse(data.toString()))[0]});
        res.end('end');
    });
    // pythonProcess.stderr.on("data", function(err){
    //   res.json({error: 'Error spawning child process',err: err.toString()})
    // })

};
