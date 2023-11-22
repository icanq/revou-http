// kalau kita mau pakai module http builtin dari nodejs, kita perlu import terlebih dahulu
// import dotenv agar file ini bisa membaca variabel yang disembunyikan oleh .env
require("dotenv").config();
const http = require("http");
// KALAU di dotenv ada variabel yang namanya PORT, dia bakal pake variabel yang dari dotenv, kalo gak ada dia bakal pake defaultnya yang di define dibawah ini yaitu 3000
const PORT = process.env.PORT || 3000;

const data_dummy = [
	{
		nama: "udin chaniago",
		asal: "padang",
		hobi: "mancing",
	},
	{
		nama: "abdul somat",
		asal: "kepo bgt lu",
		hobi: "main motor trek",
	},
];

const server = http.createServer(function (request, response) {
	// console.log(request);
	if (request.url === "/") {
		response.write("ini dari anto");
		response.end();
	}
	if (request.url === "/hello") {
		response.write("hello world");
		response.end();
	}
	if (request.url === "/data") {
		response.writeHead(200, { "Content-Type": "application/json" });
		response.write(JSON.stringify(data_dummy));
		response.end();
	}
});

server.listen(PORT, () => {
	console.log(
		`server sedang berjalan pada url dan port http://localhost:${PORT}`
	);
});

// kalau misal kita cuma mau pake beberapa module aja yang ada dari http kita bisa pake
// const { } -> destructuring object
// const { createServer } = require('http')

// const server2 = createServer()
