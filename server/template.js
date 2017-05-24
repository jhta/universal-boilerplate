module.exports = (body) => `<!doctype html>
  <html>
  	<header>
  		<title>My Universal App</title>
  		<link rel='stylesheet' href='bundle.css'>
  	</header>
  	<body>
  		<div id='app'>${body}</div>
  		<script src='bundle.js'></script>
  	</body>
  </html>`;
