const presets = [
		[
			"@babel/preset-react",
			{
				targets: {
					edge: "89",
					firefox: "87",
					chrome: "89",
					safari: "14"
				},
			},
		],
];

module.exports = { presets };
