async function run() {
  const urls = ['https://ibb.co/WpKp5QyC', 'https://ibb.co/tPscbFVY', 'https://ibb.co/MyrcdYkJ'];
  for (const url of urls) {
    const res = await fetch(url);
    const text = await res.text();
    const match = text.match(/<meta property="og:image" content="([^"]+)"/);
    console.log(url, match ? match[1] : 'not found');
  }
}
run();
