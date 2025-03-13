// helpers.js

function superbowlWin(record) {
    // Find the first record with a win ("W")
    const win = record.find(season => season.result === "W");
    
    // If a win is found, return the year; otherwise, return undefined
    return win ? win.year : undefined;
  }
  
  module.exports = superbowlWin;
  