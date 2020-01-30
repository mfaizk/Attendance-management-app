import {createAppContainer} from 'react-navigation'
import {createStackNavigator } from 'react-navigation-stack'
import Home from './Screens/Home'
import AddDetail from './Screens/AddDetail'

const MainNavigator = createStackNavigator(
  {
  Home:{screen:Home},
  AddDetail:{screen:AddDetail}


  },{
  defaultNavigationOption:{
    headerTintColor:'#fff',
    headerStyle:{ 
      backgroundColor:'#b83227'

    },
     headerTitleStyle:{
       color:'#fff'
     }
  }
}
)
  
const App = createAppContainer(MainNavigator)
export default App