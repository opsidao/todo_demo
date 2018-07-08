// Enzyme
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

// Mockstore()
import configureStore from 'redux-mock-store'
import saga from 'redux-saga'

global.mockStore = configureStore([saga])

