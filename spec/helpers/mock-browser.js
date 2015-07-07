var MockBrowser = require('mock-browser').mocks.MockBrowser;
var mock        = new MockBrowser();

// Expose global mock browser items that react will need for testing
global.window    = MockBrowser.createWindow();
global.document  = mock.getDocument();
global.navigator = mock.getNavigator();
