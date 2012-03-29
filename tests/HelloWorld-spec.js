require(["HelloWorld"], function (HelloWorld) {
	
	TestCase("HelloWorldTest", {
		"test should return hello world!": function () {
			assertEquals("hello world!", HelloWorld());
		}
	});
	
});