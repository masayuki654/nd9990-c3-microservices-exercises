const favoriteSport = process.env.SPORT;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`${favoriteSport}`);
    console.log("Microservices rock!");
    await sleep(5000);
  }
}

main();
